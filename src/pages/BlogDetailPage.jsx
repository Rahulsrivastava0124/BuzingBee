import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const rawSlug = router.query.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
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
      content: `${window.location.origin}/blog/${blog.slug}`,
    });
  }, [blog]);

  if (isLoading) {
    return (
      <main className="pt-28 px-4 sm:px-8 max-w-5xl mx-auto">
        <p className="text-gray-600">Loading blog details...</p>
      </main>
    );
  }

  if (!slug) {
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
        <Link href="/blog" className="btn btn-neutral rounded-full px-8">
          Back to blogs
        </Link>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="pt-28 px-4 sm:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
        <Link href="/blog" className="btn btn-neutral rounded-full px-8">
          Back to blogs
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
      <Link
        href="/blog"
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

        {/* Primary H1 for SEO - main page heading */}
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
          className="w-full h-[240px] sm:h-[360px] md:h-[500px] rounded-3xl mb-12 object-contain shadow-lg"
        />
      )}

      <article className="prose prose-lg max-w-none">
        <div
          className="text-gray-700 leading-8 break-words overflow-hidden word-break"
          style={{
            overflowWrap: "break-word",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
          dangerouslySetInnerHTML={{
            __html: formatContentAsHtml(blog.content),
          }}
        />
      </article>

      {/* Related Articles - Internal Links Section */}
      {blogs.length > 1 && (
        <div className="my-16 border-t border-b py-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs
              .filter(
                (item) => item.slug !== slug && item.category === blog.category,
              )
              .slice(0, 4)
              .map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blog/${relatedBlog.slug}`}
                  className="block rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all overflow-hidden"
                >
                  {relatedBlog.image ? (
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full object-cover"
                      style={{ height: "250px" }}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-full bg-gray-100 flex items-center justify-center"
                      style={{ height: "250px" }}
                    >
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="p-4 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-2 hover:text-yellow-600 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}

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
