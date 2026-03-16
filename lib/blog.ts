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

const DEFAULT_BLOG_API_URL = "https://api.buzingbee.com/api/blog?";
const DEFAULT_BLOG_IMAGE_BASE_URL = "https://api.buzingbee.com";

const readBlogApiUrl = () => {
  const value =
    process.env.BLOG_API_URL || process.env.NEXT_PUBLIC_BLOG_API_URL || "";

  return typeof value === "string" ? value.trim() : "";
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

const normalizeImageUrl = (value?: string) => {
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
    return `${DEFAULT_BLOG_IMAGE_BASE_URL}${trimmed}`;
  }

  return `${DEFAULT_BLOG_IMAGE_BASE_URL}/${trimmed.replace(/^\/+/, "")}`;
};

export const fetchBlogCards = async (): Promise<BlogCardItem[]> => {
  const blogApiUrl = readBlogApiUrl() || DEFAULT_BLOG_API_URL;

  const response = await fetch(blogApiUrl, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("Unable to fetch blog posts");
  }

  const payload = await response.json();
  const blogs = normalizePayload(payload)
    .filter((blog) => !blog?.status || blog.status === "published")
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
    image: normalizeImageUrl(blog.image),
    slug: blog.slug || toSlug(blog.title || `blog-${index + 1}`),
  }));
};
