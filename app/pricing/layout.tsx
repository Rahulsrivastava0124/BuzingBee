import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans — Affordable Website & Marketing Packages",
  description:
    "Choose from our flexible pricing plans: Basic, Standard, and Premium. Get a professional website with domain, hosting, SEO, and more starting at ₹9,999.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
