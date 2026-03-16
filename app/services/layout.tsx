import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Development, Marketing, AI & GEO",
  description:
    "Explore BuzingBee services: web & app development, digital marketing, paid ads, AI automation, and GEO strategies for business growth.",
  keywords: [
    "digital marketing services",
    "web development services",
    "AI services",
    "GEO services",
    "BuzingBee services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services — Development, Marketing, AI & GEO",
    description:
      "Explore BuzingBee services across digital marketing, development, AI automation, and generative engine optimization.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Development, Marketing, AI & GEO",
    description:
      "Explore BuzingBee services across digital marketing, development, AI automation, and generative engine optimization.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
