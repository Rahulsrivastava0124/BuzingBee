import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Development, Marketing, AI & GEO",
  description:
    "Explore BuzingBee services: web & app development, digital marketing, paid ads, AI automation, and GEO strategies for business growth.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
