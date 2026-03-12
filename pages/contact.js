import ContactPage from "../src/pages/ContactPage";
import Seo from "../src/Components/Seo";

export default function Page() {
  return (
    <>
      <Seo
        title="Contact BuzingBee - Grow Your Business"
        description="Contact BuzingBee for digital marketing services and AI services tailored to your business growth goals, lead generation, and campaign performance."
        keywords="contact digital marketing agency, AI services consultation, business growth strategy, marketing automation support"
        canonicalPath="/contact"
      />
      <ContactPage />
    </>
  );
}
