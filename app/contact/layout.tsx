import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Best Digital Marketing Agency in Dhanbad",
  description:
    "Contact BuzingBee, a trusted digital marketing agency in Dhanbad, for SEO, paid ads, social media marketing, web development, and AI services.",
  keywords: [
    "contact BuzingBee",
    "best digital marketing agency in dhanbad",
    "digital marketing agency in dhanbad contact",
    "get a free quote",
    "digital agency contact",
    "web development quote",
    "marketing consultation",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Best Digital Marketing Agency in Dhanbad",
    description:
      "Reach out to BuzingBee for SEO, paid ads, social media, web development, and AI services in Dhanbad. Get a free quote.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Best Digital Marketing Agency in Dhanbad",
    description:
      "Reach out to BuzingBee for SEO, paid ads, social media, web development, and AI services in Dhanbad. Get a free quote.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
