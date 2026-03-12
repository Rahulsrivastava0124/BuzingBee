import BlogDetailPage from "../../src/pages/BlogDetailPage";
import { useRouter } from "next/router";
import Seo from "../../src/Components/Seo";

const toTitleFromSlug = (slug = "") =>
  slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default function Page() {
  const router = useRouter();
  const rawSlug = router.query.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const readableTitle = slug ? toTitleFromSlug(slug) : "Blog Detail";

  return (
    <>
      <Seo
        title={`${readableTitle} - Blog`}
        description="Read this BuzingBee article for digital marketing and AI service insights to help your business grow with intelligent automation and better campaigns."
        keywords="digital marketing article, AI services insights, business growth tips, intelligent automation, campaign optimization"
        canonicalPath={slug ? `/blog/${slug}` : "/blog"}
        type="article"
      />
      <BlogDetailPage />
    </>
  );
}
