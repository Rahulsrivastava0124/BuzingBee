import type { Metadata } from "next";
import { Syne, DM_Sans, Roboto } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { SITE_CONFIG } from "@/lib/constants";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Best Digital Marketing Agency in Dhanbad | ${SITE_CONFIG.name}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  alternates: {
    canonical: "/",
  },
  description:
    "BuzingBee is a leading digital marketing agency in Dhanbad delivering SEO, paid ads, social media marketing, web development, and AI-powered automation for measurable growth.",
  keywords: [
    "digital marketing agency",
    "best digital marketing agency in dhanbad",
    "dhanbad digital marketing agency",
    "digital marketing agency in dhanbad",
    "top digital marketing agency in dhanbad",
    "digital marketing company in dhanbad",
    "seo agency in dhanbad",
    "local seo services in dhanbad",
    "social media marketing in dhanbad",
    "google ads agency in dhanbad",
    "website development company in dhanbad",
    "google ads agency",
    "meta ads agency",
    "social media marketing agency",
    "AI services",
    "AI SEO",
    "LLM SEO",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AEO services",
    "LLM optimization",
    "google ai overview optimization",
    "AI automation services",
    "AI chatbot development",
    "GEO services",
    "web development",
    "website development services",
    "web application development",
    "app development services",
    "website development company",
    "mobile app development",
    "mobile app development company",
    "android app development",
    "ios app development",
    "SEO services",
    "Google Ads",
    "social media marketing",
    "BuzingBee",
  ],
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `Best Digital Marketing Agency in Dhanbad  & AI Services Agency | ${SITE_CONFIG.name}`,
    description:
      "Looking for the best digital marketing agency in Dhanbad? BuzingBee helps brands grow with SEO, ads, social media, websites, and AI solutions.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Digital Marketing Agency in Dhanbad | ${SITE_CONFIG.name}`,
    description:
      "BuzingBee is a trusted digital marketing agency in Dhanbad for SEO, paid ads, social media, and AI-driven growth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/bee1-removebg-preview.png",
    apple: "/bee1-removebg-preview.png",
  },
  manifest: "/site.webmanifest",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/bee1-removebg-preview.png`,
      },
      image: `${SITE_CONFIG.url}/og-image.png`,
      description:
        "BuzingBee provides digital marketing, web development, and AI services to help businesses grow in Dhanbad and across India.",
      knowsAbout: [
        "SEO",
        "AI SEO",
        "LLM SEO",
        "Generative Engine Optimization",
        "Answer Engine Optimization",
        "Local SEO",
        "AI automation",
        "AI chatbot development",
        "Google Ads",
        "Meta Ads",
        "Social media marketing",
        "Performance marketing",
        "Web development",
        "Web application development",
        "Mobile app development",
      ],
      sameAs: Object.values(SITE_CONFIG.socials),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE_CONFIG.phone,
        areaServed: ["Dhanbad", "Jharkhand", "India", "Worldwide"],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_CONFIG.url}/#digital-marketing-agency`,
      name: `${SITE_CONFIG.name} Digital Marketing Agency`,
      url: SITE_CONFIG.url,
      description:
        "Digital marketing agency in Dhanbad offering SEO, Google Ads, Meta Ads, social media marketing, web development, and AI automation services.",
      provider: { "@id": `${SITE_CONFIG.url}/#organization` },
      areaServed: [
        { "@type": "City", name: "Dhanbad" },
        { "@type": "State", name: "Jharkhand" },
        { "@type": "Country", name: "India" },
      ],
      serviceType: [
        "SEO Services",
        "Google Ads Management",
        "Meta Ads Management",
        "Social Media Marketing",
        "Web Development",
        "AI Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
      significantLink: [
        `${SITE_CONFIG.url}/services`,
        `${SITE_CONFIG.url}/pricing`,
        `${SITE_CONFIG.url}/startup`,
        `${SITE_CONFIG.url}/portfolio`,
      ],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_CONFIG.url}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      hasPart: [
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": `${SITE_CONFIG.url}/#home`,
          name: "Home",
          url: `${SITE_CONFIG.url}/`,
          isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": `${SITE_CONFIG.url}/about#webpage`,
          name: "About",
          url: `${SITE_CONFIG.url}/about`,
          isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": `${SITE_CONFIG.url}/services#webpage`,
          name: "Services",
          url: `${SITE_CONFIG.url}/services`,
          isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": `${SITE_CONFIG.url}/pricing#webpage`,
          name: "Pricing",
          url: `${SITE_CONFIG.url}/pricing`,
          isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": `${SITE_CONFIG.url}/startup#webpage`,
          name: "Startup Plans",
          url: `${SITE_CONFIG.url}/startup`,
          isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": `${SITE_CONFIG.url}/portfolio#webpage`,
          name: "Portfolio",
          url: `${SITE_CONFIG.url}/portfolio`,
          isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": `${SITE_CONFIG.url}/blog#webpage`,
          name: "Blog",
          url: `${SITE_CONFIG.url}/blog`,
          isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": `${SITE_CONFIG.url}/contact#webpage`,
          name: "Contact",
          url: `${SITE_CONFIG.url}/contact`,
          isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/#home-webpage`,
      url: `${SITE_CONFIG.url}/`,
      name: "Best Digital Marketing Agency in Dhanbad",
      isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
      about: { "@id": `${SITE_CONFIG.url}/#digital-marketing-agency` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/og-image.png`,
      },
      description:
        "BuzingBee helps businesses in Dhanbad grow with SEO, paid ads, social media marketing, web development, and AI-powered growth systems.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${roboto.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
