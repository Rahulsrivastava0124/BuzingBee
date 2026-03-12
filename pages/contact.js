import ContactPage from "../src/pages/ContactPage";
import Seo from "../src/Components/Seo";

export default function Page() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact BuzingBee to discuss AI-powered marketing automation, campaign strategy, and growth solutions for your business."
        keywords="contact BuzingBee, marketing consultation, AI marketing support"
        canonicalPath="/contact"
      />
      <ContactPage />
    </>
  );
}
