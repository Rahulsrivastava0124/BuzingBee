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

const formatContentAsHtml = (content = "") => {
  if (!content) return "<p>No content available</p>";

  // Check if content is already HTML
  if (/<[^>]*>/.test(content)) {
    return content;
  }

  // Split by line breaks and process
  const lines = content.split(/\r?\n/).filter((line) => line.trim());
  let html = "";
  let inList = false;
  let buffer = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check if line starts with a number (for numbered lists)
    const numberedListMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numberedListMatch) {
      if (!inList) {
        if (buffer.length > 0) {
          html += `<p>${buffer.join(" ")}</p>`;
          buffer = [];
        }
        html += "<ol>";
        inList = true;
      }
      html += `<li>${numberedListMatch[2]}</li>`;
      continue;
    }

    // Check for bullet points
    const bulletMatch = line.match(/^[•\-*]\s+(.+)$/);
    if (bulletMatch) {
      if (inList && !html.endsWith("<ul>")) {
        html = html.replace(/<ol>/, "<ul>");
      }
      if (!inList) {
        if (buffer.length > 0) {
          html += `<p>${buffer.join(" ")}</p>`;
          buffer = [];
        }
        html += "<ul>";
        inList = true;
      }
      html += `<li>${bulletMatch[1]}</li>`;
      continue;
    }

    // If we were in a list and hit regular text, close the list
    if (inList) {
      html += html.endsWith("<ul>") ? "</ul>" : "</ol>";
      inList = false;
    }

    // Check if line looks like a heading (all caps or ends with colon)
    if (line.match(/^[A-Z\s]+$/) && line.length < 80) {
      if (buffer.length > 0) {
        html += `<p>${buffer.join(" ")}</p>`;
        buffer = [];
      }
      html += `<h3>${line}</h3>`;
    } else if (line.endsWith(":") && line.length < 80) {
      if (buffer.length > 0) {
        html += `<p>${buffer.join(" ")}</p>`;
        buffer = [];
      }
      html += `<h3>${line.slice(0, -1)}</h3>`;
    } else {
      // Regular paragraph text
      buffer.push(line);

      // Check if next line is empty or a special line (start new paragraph)
      if (
        i === lines.length - 1 ||
        !lines[i + 1]?.trim() ||
        lines[i + 1]?.match(/^(\d+)\.|^[•\-*]|^[A-Z\s]+$/)
      ) {
        if (buffer.length > 0) {
          html += `<p>${buffer.join(" ")}</p>`;
          buffer = [];
        }
      }
    }
  }

  // Close any open list
  if (inList) {
    html += html.endsWith("<ul>") ? "</ul>" : "</ol>";
  }

  // Add any remaining buffer
  if (buffer.length > 0) {
    html += `<p>${buffer.join(" ")}</p>`;
  }

  return html;
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

  const blog = useMemo(
    () => blogs.find((item) => item.slug === slug),
    [blogs, slug],
  );

  useEffect(() => {
    if (!blog) return;

    const title = blog.seo?.title || blog.title || "Blog";
    const description = blog.seo?.description || blog.excerpt || "";
    const keywords = Array.isArray(blog.seo?.keywords)
      ? blog.seo.keywords.join(", ")
      : blog.seo?.keywords || "";
    const ogImage = blog.seo?.ogImage || blog.image || "";
    const canonicalUrl =
      blog.seo?.canonicalUrl || `${window.location.origin}/blog/${blog.slug}`;

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

  return (
    <main className="pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black font-medium transition-colors mb-8"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to blog
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="badge badge-warning font-semibold text-sm">
            {blog.category || "Technology"}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-4">
          {blog.title}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">{blog.excerpt}</p>

        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-3xl mb-12 max-h-[500px] object-cover shadow-lg"
        />
      )}

      <article className="prose prose-lg max-w-none">
        <div
          className="text-gray-700 leading-8"
          dangerouslySetInnerHTML={{
            __html: formatContentAsHtml(blog.content),
          }}
        />
      </article>

      <hr className="my-16" />

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {blog.author || "Admin"}
        </h3>
        <p className="text-gray-600">
          The author of this article brings valuable insights to digital
          marketing and technology topics.
        </p>
      </div>
    </main>
  );
}
