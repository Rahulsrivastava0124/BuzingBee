import BlogPage from "../../src/pages/BlogPage";
import Seo from "../../src/Components/Seo";

export default function Page() {
  return (
    <>
      <Seo
        title="Blog & Resources"
        description="Read BuzingBee blog articles on AI marketing automation, campaign optimization, lead generation, and digital growth strategies."
        keywords="AI marketing blog, marketing automation blog, digital marketing insights"
        canonicalPath="/blog"
        type="article"
      />
      <BlogPage />
    </>
  );
}
