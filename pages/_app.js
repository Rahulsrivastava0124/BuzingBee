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
      name: "BuzingBee",
      url: "https://buzingbee.com",
      logo: "https://buzingbee.com/logo.png",
      image: "https://buzingbee.com/og-image.png",
      description:
        "BuzingBee is an AI-powered marketing automation platform that helps businesses automate workflows, scale campaigns, and boost conversions with intelligent AI agents.",
      sameAs: [
        "https://www.instagram.com/buzingbee_/",
        "https://www.facebook.com/profile.php?id=61562079487441",
        "https://x.com/BuzingBee_",
        "https://www.linkedin.com/company/buzing-bee/?viewAsMember=true",
      ],
    },
    {
      "@type": "WebSite",
      name: "BuzingBee",
      url: "https://buzingbee.com/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://buzingbee.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      name: "Primary site links",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          url: "https://buzingbee.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          url: "https://buzingbee.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About",
          url: "https://buzingbee.com/about",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Blog",
          url: "https://buzingbee.com/blog",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Contact",
          url: "https://buzingbee.com/contact",
        },
      ],
    },
    {
      "@type": "SiteNavigationElement",
      name: ["Home", "Services", "About", "Blog", "Contact"],
      url: [
        "https://buzingbee.com/",
        "https://buzingbee.com/services",
        "https://buzingbee.com/about",
        "https://buzingbee.com/blog",
        "https://buzingbee.com/contact",
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
        <link rel="icon" href="/favicon.ico" />
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
