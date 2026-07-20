import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { categories, getCategory, siteConfig } from "@/lib/data";
import { CategoryVisual } from "@/components/CategoryVisual";
import { PageHero } from "@/components/PageHero";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  const title = `${category.name} — Rebuilt & Genuine-Spec Parts`;
  const description = category.description;
  const url = `${siteConfig.url}/products/${category.slug}`;

  return {
    title,
    description,
    keywords: category.keywords,
    alternates: { canonical: `/products/${category.slug}` },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [{ url: `/products/${category.slug}/opengraph-image`, width: 1200, height: 630, alt: category.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [`/products/${category.slug}/opengraph-image`],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const related = categories.filter((c) => c.slug !== category.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: category.name,
    description: category.description,
    brand: { "@type": "Brand", name: siteConfig.name },
    category: category.name,
    url: `${siteConfig.url}/products/${category.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Product Category"
        title={category.name}
        description={category.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/gallery" },
          { label: category.shortName },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <CategoryVisual category={category} figNo="01" className="sm:col-span-2" />
            <CategoryVisual category={category} figNo="02" variant={1} />
            <CategoryVisual category={category} figNo="03" variant={2} />
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-slate">{category.intro}</p>

            <div className="mt-8 overflow-hidden rounded-sm border border-line-dark">
              <table className="w-full font-data text-sm">
                <tbody>
                  {category.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 === 0 ? "bg-paper-2" : "bg-paper"}>
                      <td className="w-1/3 px-4 py-3 uppercase tracking-wide text-slate">{s.label}</td>
                      <td className="px-4 py-3 text-ink">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-lg uppercase tracking-wide text-ink">Applications</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2.5">
                {category.applications.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-slate">
                    <CheckCircle2 size={16} className="shrink-0 text-amber" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-sm bg-amber px-6 py-3.5 font-display uppercase tracking-wide text-graphite hover:bg-amber-dark transition-colors"
              >
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="/gallery"
                className="flex items-center gap-2 rounded-sm border border-line-dark px-6 py-3.5 font-display uppercase tracking-wide text-ink hover:border-amber hover:text-amber transition-colors"
              >
                See More Photos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line-dark bg-paper-2 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Related categories</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((c, i) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group crop-marks overflow-hidden rounded-sm border border-line-dark bg-steel transition-transform hover:-translate-y-1"
              >
                <CategoryVisual category={c} figNo={String(i + 1).padStart(2, "0")} />
                <div className="p-4">
                  <h3 className="font-display uppercase tracking-wide text-paper group-hover:text-amber transition-colors">
                    {c.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
