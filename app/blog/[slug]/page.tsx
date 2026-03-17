import Link from "next/link";
import { fetchBlogBySlug } from "@/lib/blog";

const toTitleFromSlug = (slug = "") =>
  slug
    .split("-")
    .filter(Boolean)
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchBlogBySlug(slug);
  const title = post?.title || (slug ? toTitleFromSlug(slug) : "Blog Detail");
  const image = post?.image || "";
  const category = post?.category || "Blog";
  const date = post?.date || "";

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container-max max-w-3xl">
        <div className="mb-8">
          <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4 border border-accent/20">
            {category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textHeading font-heading leading-tight">
            {title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-textMuted text-sm">
            <span>BuzingBee Team</span>
            {date && (
              <>
                <span>•</span>
                <span>{date}</span>
              </>
            )}
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="w-full aspect-video bg-bgSection rounded-[14px] mb-10 relative overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
          {!image && (
            <div className="absolute inset-0 flex items-center justify-center text-accent/50">
              <span className="text-sm font-semibold">BuzingBee Blog</span>
            </div>
          )}
        </div>

        <article className="prose prose-invert max-w-none">
          <div className="space-y-6 text-textBody leading-relaxed">
            <p>
              In today&apos;s rapidly evolving digital landscape, businesses
              need to stay ahead of the curve to maintain their competitive
              edge. This article explores the latest trends and strategies in
              digital marketing and AI services that are transforming how
              companies connect with their audiences.
            </p>
            <h2 className="text-2xl font-bold text-textHeading font-heading mt-10 mb-4">
              The Digital Transformation Imperative
            </h2>
            <p>
              Digital transformation is no longer optional — it&apos;s a
              business imperative. Companies that embrace digital-first
              strategies are seeing significant improvements in customer
              engagement, operational efficiency, and revenue growth.
            </p>
            <p>
              At BuzingBee, we help businesses navigate this transformation with
              our comprehensive suite of digital marketing and AI services. From
              building high-converting websites to implementing AI-powered
              customer engagement tools, we provide end-to-end solutions that
              drive measurable results.
            </p>
            <h2 className="text-2xl font-bold text-textHeading font-heading mt-10 mb-4">
              Key Takeaways
            </h2>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Invest in AI-powered marketing automation to scale your
                  campaigns without scaling your team.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Focus on data-driven decision making to optimize every aspect
                  of your marketing funnel.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Prioritize mobile-first experiences — over 70% of web traffic
                  now comes from mobile devices.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Build a strong content strategy that establishes your brand as
                  a thought leader in your industry.
                </span>
              </li>
            </ul>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/blog" className="btn-outline text-sm">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
