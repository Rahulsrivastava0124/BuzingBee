import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Our Work & Case Studies",
  description:
    "See the projects BuzingBee has delivered: websites, mobile apps, e-commerce stores, brand identities, and digital marketing campaigns.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
