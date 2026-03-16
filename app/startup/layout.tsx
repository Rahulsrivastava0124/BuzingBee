import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Startup Plans | BuzingBee - Minimal Cost Plans for Growing Businesses",
  description:
    "Affordable startup plans across all services. Get started with minimal investment and scale as you grow. Perfect for new businesses and startups.",
  keywords:
    "startup plans, affordable pricing, minimal cost, startup services, digital marketing startup, web development startup",
  openGraph: {
    title: "Startup Plans | BuzingBee",
    description:
      "Affordable startup plans across all services. Get started with minimal investment and scale as you grow.",
    type: "website",
    url: "https://buzingbee.com/startup",
  },
  alternates: {
    canonical: "https://buzingbee.com/startup",
  },
};

export default function StartupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
