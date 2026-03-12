import ServicesPage from "../src/pages/ServicesPage";
import Seo from "../src/Components/Seo";

export default function Page() {
  return (
    <>
      <Seo
        title="Digital Marketing Services and AI Services"
        description="Explore BuzingBee digital marketing and AI services: AI agent development, SEO, Google Ads, Meta Ads, website automation, and email marketing automation."
        keywords="digital marketing services, AI services, AI agent development, SEO services, Google Ads management, Meta Ads management, email marketing automation"
        canonicalPath="/services"
      />
      <ServicesPage />
    </>
  );
}
