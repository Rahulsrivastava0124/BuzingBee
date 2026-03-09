import React from "react";
import Blog from "../Components/Home/Blog.jsx";

export default function BlogPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="pt-24 px-4">
        <h1 className="text-5xl font-bold text-center mb-8">Blog & Resources</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Stay updated with the latest insights on AI marketing automation,
          digital marketing trends, and best practices for scaling your
          business.
        </p>
      </section>
      <Blog />
    </main>
  );
}
