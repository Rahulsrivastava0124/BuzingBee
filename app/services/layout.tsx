import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Dhanbad — SEO, Ads, Social & AI",
  description:
    "Explore BuzingBee digital marketing services in Dhanbad: local SEO, Google Ads, Meta Ads, social media marketing, website development, and AI automation for business growth.",
  keywords: [
    "digital marketing services",
    "dhanbad degital marketing agency",
    "dhanbad digital marketing agency",
    "digital marketing agency in dhanbad",
    "best digital marketing agency in dhanbad",
    "digital marketing company in dhanbad",
    "seo agency in dhanbad",
    "local seo services dhanbad",
    "google ads agency dhanbad",
    "meta ads agency dhanbad",
    "social media marketing agency dhanbad",
    "web development services",
    "website development services",
    "web application development services",
    "app development services",
    "mobile app development company",
    "android app development services",
    "ios app development services",
    "website development company",
    "website design agency",
    "ecommerce website development",
    "landing page design services",
    "mobile app development services",
    "AI services",
    "AI automation services",
    "AI chatbot development",
    "whatsapp chatbot automation",
    "lead generation automation",
    "LLM SEO services",
    "AI SEO services",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AEO services",
    "GEO agency",
    "LLM optimization agency",
    "chatgpt seo optimization",
    "google ai overview optimization",
    "content marketing services",
    "performance marketing services",
    "branding and marketing services",
    "GEO services",
    "BuzingBee services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Digital Marketing Services in Dhanbad — SEO, Ads, Social & AI",
    description:
      "BuzingBee offers result-driven digital marketing services in Dhanbad, including SEO, paid ads, social media, web development, and AI automation.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Dhanbad — SEO, Ads, Social & AI",
    description:
      "BuzingBee offers result-driven digital marketing services in Dhanbad, including SEO, paid ads, social media, web development, and AI automation.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
