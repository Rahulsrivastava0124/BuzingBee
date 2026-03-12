import AboutPage from "../src/pages/AboutPage";
import Seo from "../src/Components/Seo";

export default function Page() {
  return (
    <>
      <Seo
        title="About BuzingBee - Digital Marketing & AI Growth Team"
        description="Learn how BuzingBee combines digital marketing expertise and AI services to help businesses grow with intelligent strategies, automation, and measurable results."
        keywords="about BuzingBee, digital marketing agency, AI services company, business growth experts, marketing automation team"
        canonicalPath="/about"
      />
      <AboutPage />
    </>
  );
}
