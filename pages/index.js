import HomePage from "../src/pages/HomePage";
import Seo from "../src/Components/Seo";

export default function Page() {
  return (
    <>
      <Seo
        title="Digital Marketing Services & AI Services for Business Growth"
        description="BuzingBee helps you grow your business with digital marketing services and AI services, including SEO, paid ads, automation workflows, and intelligent AI agents, and shows how to scale faster."
        keywords="digital marketing services, AI services, grow business online, AI agents, intelligent automation, SEO, Google Ads, Meta Ads, email marketing"
        canonicalPath="/"
      />
      <HomePage />
    </>
  );
}
