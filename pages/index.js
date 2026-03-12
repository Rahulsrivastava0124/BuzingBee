import HomePage from "../src/pages/HomePage";
import Seo from "../src/Components/Seo";

export default function Page() {
  return (
    <>
      <Seo
        title="AI Marketing Automation Platform"
        description="Automate workflows, improve campaign performance, and scale conversions with AI-powered marketing automation from BuzingBee."
        keywords="AI marketing automation, digital marketing automation, lead generation automation, campaign optimization"
        canonicalPath="/"
      />
      <HomePage />
    </>
  );
}
