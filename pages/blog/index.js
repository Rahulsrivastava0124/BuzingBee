import BlogPage from "../../src/pages/BlogPage";
import Seo from "../../src/Components/Seo";

export default function Page() {
  return (
    <>
      <Seo
        title="Digital Marketing & AI Services Blog"
        description="Read actionable guides from BuzingBee on digital marketing, AI services, automation, SEO, paid ads, and how to grow your business online."
        keywords="digital marketing blog, AI services blog, SEO tips, paid ads strategy, automation guides, business growth content"
        canonicalPath="/blog"
        type="article"
      />
      <BlogPage />
    </>
  );
}
