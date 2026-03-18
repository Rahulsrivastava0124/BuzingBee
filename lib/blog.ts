export interface BlogApiItem {
  _id?: string;
  id?: string | number;
  title?: string;
  excerpt?: string;
  category?: string;
  image?: string;
  slug?: string;
  publishedAt?: string;
  createdAt?: string;
  status?: string;
  seo?: {
    description?: string;
    ogImage?: string;
  };
}

export interface BlogCardItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

const readBlogApiUrl = () => {
  const value =
    process.env.BLOG_API_URL || process.env.NEXT_PUBLIC_BLOG_API_URL || "";

  return typeof value === "string" ? value.trim() : "";
};

const readBlogApiOrigin = (blogApiUrl: string) => {
  try {
    return new URL(blogApiUrl).origin;
  } catch {
    return "";
  }
};

const normalizePayload = (payload: unknown): BlogApiItem[] => {
  if (Array.isArray(payload)) {
    return payload as BlogApiItem[];
  }

  if (
    payload &&
    typeof payload === "object" &&
    Array.isArray((payload as { data?: BlogApiItem[] }).data)
  ) {
    return (payload as { data: BlogApiItem[] }).data;
  }

  if (
    payload &&
    typeof payload === "object" &&
    Array.isArray((payload as { blogs?: BlogApiItem[] }).blogs)
  ) {
    return (payload as { blogs: BlogApiItem[] }).blogs;
  }

  if (
    payload &&
    typeof payload === "object" &&
    Array.isArray((payload as { posts?: BlogApiItem[] }).posts)
  ) {
    return (payload as { posts: BlogApiItem[] }).posts;
  }

  return [];
};

const toReadableDate = (value?: string) => {
  if (!value) return "Recent";

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Recent";

  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const toSlug = (title = "") =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const normalizeImageUrl = (value?: string, apiOrigin?: string) => {
  if (!value) return "";

  const trimmed = value.trim();
  if (!trimmed) return "";

  if (trimmed.startsWith("//")) {
    return `https:${trimmed}`;
  }

  if (trimmed.startsWith("http://")) {
    return trimmed.replace(/^http:\/\//, "https://");
  }

  if (trimmed.startsWith("https://")) {
    return trimmed;
  }

  if (trimmed.startsWith("/")) {
    return apiOrigin ? `${apiOrigin}${trimmed}` : trimmed;
  }

  return apiOrigin ? `${apiOrigin}/${trimmed.replace(/^\/+/, "")}` : trimmed;
};

export const fetchBlogBySlug = async (
  slug: string,
): Promise<BlogCardItem | null> => {
  try {
    const all = await fetchBlogCards();
    return all.find((b) => b.slug === slug) ?? null;
  } catch {
    return null;
  }
};

const FALLBACK_BLOG_API_URL = "https://api.buzingbee.com/api/blog?";

export const fetchBlogCards = async (): Promise<BlogCardItem[]> => {
  const blogApiUrl = readBlogApiUrl() || FALLBACK_BLOG_API_URL;

  const blogApiOrigin = readBlogApiOrigin(blogApiUrl);

  const response = await fetch(blogApiUrl, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to fetch blog posts");
  }

  const payload = await response.json();
  const blogs = normalizePayload(payload)
    .filter(
      (blog) =>
        !blog?.status || blog.status.trim().toLowerCase() === "published",
    )
    .filter((blog) => blog?.title);

  return blogs.map((blog, index) => ({
    id: String(blog._id || blog.id || index),
    title: blog.title || "Untitled Blog",
    excerpt:
      blog.excerpt ||
      blog.seo?.description ||
      "Read full details in the article.",
    category: blog.category || "Blog",
    date: toReadableDate(blog.publishedAt || blog.createdAt),
    image: normalizeImageUrl(blog.image || blog.seo?.ogImage, blogApiOrigin),
    slug: blog.slug || toSlug(blog.title || `blog-${index + 1}`),
  }));
};
