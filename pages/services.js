import ServicesPage from "../src/pages/ServicesPage";
import Seo from "../src/Components/Seo";

export default function Page() {
  return (
    <>
      <Seo
        title="Marketing Automation Services"
        description="Explore BuzingBee services including AI agents, Google and Meta ads, website automation, and email marketing workflows."
        keywords="marketing automation services, AI agents, Google ads management, Meta ads, email automation"
        canonicalPath="/services"
      />
      <ServicesPage />
    </>
  );
}
