import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBlogs } from "../api/blogApi";

const createOrUpdateMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.keys(attributes)
      .filter((key) => key !== "content")
      .forEach((key) => element.setAttribute(key, attributes[key]));
    document.head.appendChild(element);
  }

  element.setAttribute("content", attributes.content || "");
};

const createOrUpdateCanonical = (url) => {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
};

const formatContentBlocks = (content = "") => {
  return content
    .split(/\r?\n\r?\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        if (isMounted) {
          setBlogs(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Unable to load blog post");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  const blog = useMemo(() => blogs.find((item) => item.slug === slug), [blogs, slug]);

  useEffect(() => {
    if (!blog) return;

    const title = blog.seo?.title || blog.title || "Blog";
    const description = blog.seo?.description || blog.excerpt || "";
    const keywords = Array.isArray(blog.seo?.keywords)
      ? blog.seo.keywords.join(", ")
      : blog.seo?.keywords || "";
    const ogImage = blog.seo?.ogImage || blog.image || "";
    const canonicalUrl = blog.seo?.canonicalUrl || `${window.location.origin}/blog/${blog.slug}`;

    document.title = title;
    createOrUpdateMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    createOrUpdateMeta('meta[name="keywords"]', {
      name: "keywords",
      content: keywords,
    });
    createOrUpdateMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    createOrUpdateMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    createOrUpdateMeta('meta[property="og:image"]', {
      property: "og:image",
      content: ogImage,
    });
    createOrUpdateMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    createOrUpdateCanonical(canonicalUrl);
  }, [blog]);

  if (isLoading) {
    return (
      <main className="pt-28 px-4 sm:px-8 max-w-5xl mx-auto">
        <p className="text-gray-600">Loading blog details...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="pt-28 px-4 sm:px-8 max-w-5xl mx-auto">
        <p className="text-red-500 font-medium mb-4">{error}</p>
        <Link to="/blog" className="btn btn-neutral rounded-full px-8">
          Back to blogs
        </Link>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="pt-28 px-4 sm:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
        <Link to="/blog" className="btn btn-neutral rounded-full px-8">
          Back to blogs
        </Link>
      </main>
    );
  }

  const blocks = formatContentBlocks(blog.content);

  return (
    <main className="pt-24 pb-16 px-4 sm:px-8 max-w-5xl mx-auto">
      <Link to="/blog" className="text-sm text-gray-600 hover:text-black font-medium">
        ← Back to blog
      </Link>

      <header className="mt-5 mb-8">
        <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">{blog.category}</p>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-gray-900">{blog.title}</h1>
        <p className="text-gray-600 mt-5 text-lg leading-relaxed">{blog.excerpt}</p>
      </header>

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-2xl mb-10 max-h-[480px] object-cover"
        />
      )}

      <article className="space-y-6 text-gray-700 leading-8 text-[17px]">
        {blocks.map((paragraph, index) => (
          <p key={`${blog._id}-${index}`}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
