const DEFAULT_BLOG_API_URL = "https://api.buzingbee.com/api/blog?";

const readBlogApiUrl = () => {
  const value =
    process.env.NEXT_PUBLIC_BLOG_API_URL || process.env.BLOG_API_URL || "";

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
};

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
  const blogApiUrl = readBlogApiUrl() || DEFAULT_BLOG_API_URL;

  const response = await fetch(blogApiUrl);

  if (!response.ok) {
    throw new Error("Unable to fetch blog posts");
  }

  const payload = await response.json();
  const blogs = normalizeBlogPayload(payload);

  return blogs.filter((blog) => blog?.status === "published");
};
