import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import AOS from "aos";

import "aos/dist/aos.css";
import "../src/output.css";
import "../src/blog-styles.css";
import "../src/App.css";

import Navbar from "../src/Components/Home/Navbar";
import Footer from "../src/Components/Home/Footer";
import { ChatBubble } from "../src/Components/ChatBubble";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://buzingbee.com/#organization",
      name: "BuzingBee",
      url: "https://buzingbee.com",
      logo: {
        "@type": "ImageObject",
        url: "https://buzingbee.com/logo.png",
      },
      image: "https://buzingbee.com/og-image.png",
      description:
        "BuzingBee provides digital marketing services and AI services to help businesses grow through intelligent automation, SEO, paid ads, and AI agents.",
      keywords:
        "digital marketing services, AI services, business growth, SEO, Google Ads, Meta Ads, automation, AI agents",
      sameAs: [
        "https://www.instagram.com/buzingbee_/",
        "https://www.facebook.com/profile.php?id=61562079487441",
        "https://x.com/BuzingBee_",
        "https://www.linkedin.com/company/buzing-bee/?viewAsMember=true",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+1-950-798-1942",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://buzingbee.com/#website",
      name: "BuzingBee",
      url: "https://buzingbee.com/",
      description:
        "Digital marketing services and AI services for business growth by BuzingBee.",
      publisher: { "@id": "https://buzingbee.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://buzingbee.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      hasPart: [
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": "https://buzingbee.com/#webpage",
          url: "https://buzingbee.com/",
          name: "Home",
          description:
            "BuzingBee: Digital Marketing Services & AI Services for Business Growth.",
          isPartOf: { "@id": "https://buzingbee.com/#website" },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": "https://buzingbee.com/services#webpage",
          url: "https://buzingbee.com/services",
          name: "Services",
          description:
            "Explore BuzingBee digital marketing and AI services: AI agent development, SEO, Google Ads, Meta Ads, website automation, and email marketing automation.",
          isPartOf: { "@id": "https://buzingbee.com/#website" },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": "https://buzingbee.com/about#webpage",
          url: "https://buzingbee.com/about",
          name: "About",
          description:
            "Learn how BuzingBee combines digital marketing expertise and AI services to help businesses grow with intelligent strategies and measurable results.",
          isPartOf: { "@id": "https://buzingbee.com/#website" },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": "https://buzingbee.com/blog#webpage",
          url: "https://buzingbee.com/blog",
          name: "Blog",
          description:
            "Digital Marketing & AI Services Blog – insights, tips, and strategies by BuzingBee.",
          isPartOf: { "@id": "https://buzingbee.com/#website" },
        },
        {
          "@type": ["WebPage", "SiteNavigationElement"],
          "@id": "https://buzingbee.com/contact#webpage",
          url: "https://buzingbee.com/contact",
          name: "Contact",
          description:
            "Contact BuzingBee for digital marketing and AI services. Get in touch with our team today.",
          isPartOf: { "@id": "https://buzingbee.com/#website" },
        },
      ],
    },
  ],
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="/bee1-removebg-preview.png" />
        <link rel="apple-touch-icon" href="/bee1-removebg-preview.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '541222721908946');fbq('track', 'PageView');`}
      </Script>

      <div className="App overflow-x-hidden">
        <ChatBubble />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
