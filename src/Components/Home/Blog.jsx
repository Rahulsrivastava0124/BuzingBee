import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Element } from "react-scroll";
import { fetchBlogs } from "../../api/blogApi";

const formatDate = (dateValue) => {
  if (!dateValue) return "";
  return new Date(dateValue).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function Blog({ limit = null }) {
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
          setError(err.message || "Unable to load blogs right now");
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

  const visibleBlogs = useMemo(() => {
    if (!limit) return blogs;
    return blogs.slice(0, limit);
  }, [blogs, limit]);

  return (
    <Element id="blog" name="blog">
      <section className="sm:mx-20 mx-6 sm:my-16 sm:py-10 my-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <h1 className="sm:text-5xl text-3xl font-bold text-gray-900 mb-2">
              Latest Blog Posts
            </h1>
            <p className="text-gray-600">
              Stay updated with our latest insights and articles
            </p>
          </div>
          {limit && (
            <Link
              href="/blog"
              className="btn btn-outline btn-neutral btn-sm sm:btn-md rounded-full px-8 hover:bg-gray-900 hover:text-white transition-all"
            >
              See all
            </Link>
          )}
        </div>

        {isLoading && (
          <div className="flex justify-center py-12">
            <div className="loading loading-spinner loading-lg text-gray-600"></div>
          </div>
        )}

        {error && !isLoading && (
          <div className="alert alert-error shadow-lg rounded-2xl">
            <span>{error}</span>
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleBlogs.map((blog, index) => (
              <article
                key={blog._id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <Link href={`/blog/${blog.slug}`} className="block">
                  <div className="relative overflow-hidden">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-56 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                        <svg
                          className="w-20 h-20 text-white opacity-50"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-warning badge-lg font-semibold shadow-md">
                        {blog.category || "Technology"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <time className="text-sm text-gray-500 font-medium">
                        {formatDate(blog.publishedAt)}
                      </time>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                      {blog.excerpt ||
                        blog.seo?.description ||
                        "Read full details in the article."}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-yellow-600 font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                        Read more
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex gap-1">
                          {blog.tags.slice(0, 2).map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {!isLoading && !error && visibleBlogs.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-gray-600 text-lg">No blog posts found.</p>
          </div>
        )}
      </section>
    </Element>
  );
}
