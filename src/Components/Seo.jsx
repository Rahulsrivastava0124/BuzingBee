import Head from "next/head";
import { useRouter } from "next/router";

const SITE_NAME = "BuzingBee";
const SITE_URL = "https://buzingbee.com";
const DEFAULT_IMAGE = "/og-image.png";

const normalizePath = (path) => {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
};

export default function Seo({
  title,
  description,
  keywords,
  canonicalPath,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}) {
  const router = useRouter();
  const fallbackPath = router.asPath?.split("?")?.[0] || "/";
  const finalPath = normalizePath(canonicalPath || fallbackPath);
  const canonicalUrl = `${SITE_URL}${finalPath}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Head>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={robots} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={fullTitle} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Head>
  );
}
