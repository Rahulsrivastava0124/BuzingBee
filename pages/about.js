import AboutPage from "../src/pages/AboutPage";
import Seo from "../src/Components/Seo";

export default function Page() {
  return (
    <>
      <Seo
        title="About BuzingBee"
        description="Learn about BuzingBee, our mission, and how our AI-powered marketing automation solutions help businesses grow faster."
        keywords="about BuzingBee, AI marketing company, marketing automation agency"
        canonicalPath="/about"
      />
      <AboutPage />
    </>
  );
}
