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
        description="Read in-depth marketing and automation insights from BuzingBee blog resources."
        keywords="marketing blog, automation insights, digital marketing"
        canonicalPath={slug ? `/blog/${slug}` : "/blog"}
        type="article"
      />
      <BlogDetailPage />
    </>
  );
}
