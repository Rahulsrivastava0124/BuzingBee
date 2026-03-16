import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact BuzingBee for digital marketing, web development, and AI services. Fill out our form or call us to get a free quote for your project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
