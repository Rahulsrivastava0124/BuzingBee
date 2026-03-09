import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
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
      <section className="sm:mx-20 mx-6 sm:my-16 my-10" data-aos="zoom-out-up">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h2 className="sm:text-4xl text-2xl font-semibold">
            Latest Blog Posts
          </h2>
          {limit && (
            <Link
              to="/blog"
              className="btn btn-outline btn-sm sm:btn-md rounded-full px-8"
            >
              See all
            </Link>
          )}
        </div>

        {isLoading && <p className="text-gray-600">Loading blogs...</p>}

        {error && !isLoading && (
          <p className="text-red-500 font-medium">{error}</p>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleBlogs.map((blog) => (
              <article
                key={blog._id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {blog.image && (
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-gray-700">
                        {formatDate(blog.publishedAt)}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  {blog.category && (
                    <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
                      {blog.category}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-4 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                    {blog.excerpt ||
                      blog.seo?.description ||
                      "Read full details in the article."}
                  </p>
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {!isLoading && !error && visibleBlogs.length === 0 && (
          <p className="text-gray-600">No blog posts found.</p>
        )}
      </section>
    </Element>
  );
}
