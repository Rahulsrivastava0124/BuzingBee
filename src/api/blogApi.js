const readBlogApiUrl = () => {
  const value = process.env.NEXT_PUBLIC_BLOG_API_URL;

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
};

const BLOG_API_URL = readBlogApiUrl();

const normalizeBlogPayload = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  if (Array.isArray(payload?.blogs)) {
    return payload.blogs;
  }

  return [];
};

export const fetchBlogs = async () => {
  if (!BLOG_API_URL) {
    throw new Error(
      "Missing NEXT_PUBLIC_BLOG_API_URL in .env.local. Restart dev server after updating env.",
    );
  }

  const response = await fetch(BLOG_API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch blog posts");
  }

  const payload = await response.json();
  const blogs = normalizeBlogPayload(payload);

  return blogs.filter((blog) => blog?.status === "published");
};
