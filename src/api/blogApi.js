const BLOG_API_URL = "https://api.buzingbee.com/api/blog?";

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
  const response = await fetch(BLOG_API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch blog posts");
  }

  const payload = await response.json();
  const blogs = normalizeBlogPayload(payload);

  return blogs.filter((blog) => blog?.status === "published");
};