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
          <h2 className="sm:text-4xl text-2xl font-semibold">Latest Blog Posts</h2>
          {limit && (
            <Link to="/blog" className="btn btn-outline btn-sm sm:btn-md rounded-full px-8">
              See all
            </Link>
          )}
        </div>

        {isLoading && <p className="text-gray-600">Loading blogs...</p>}

        {error && !isLoading && (
          <p className="text-red-500 font-medium">{error}</p>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleBlogs.map((blog) => (
              <article key={blog._id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2">
                    {formatDate(blog.publishedAt)}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 mb-5">
                    {blog.excerpt || blog.seo?.description || "Read full details in the article."}
                  </p>
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="btn btn-neutral rounded-full btn-sm px-6"
                  >
                    Read more
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
