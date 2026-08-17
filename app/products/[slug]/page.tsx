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

  const title = `${category.name} Parts — Rebuilt & Genuine-Spec`;
  const description = category.description;
  const url = `${siteConfig.url}/products/${category.slug}`;

  return {
    title,
    description,
    keywords: [
      ...category.keywords,
      `${category.name} parts India`,
      `${category.name} repair Delhi`,
      `Fine Hydraulic ${category.name}`,
    ],
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
  const visualCount = category.images?.length === 1 ? 1 : 4;

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
          <div className={`grid gap-5 ${visualCount === 1 ? "max-w-lg grid-cols-1" : "grid-cols-2"}`}>
            {Array.from({ length: visualCount }, (_, index) => (
              <CategoryVisual
                key={index}
                category={category}
                figNo={String(index + 1).padStart(2, "0")}
                variant={index}
              />
            ))}
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
          <span className="font-data text-xs uppercase tracking-[0.25em] text-amber">Support from enquiry to fitment</span>
          <h2 className="mt-3 font-display text-2xl uppercase tracking-tight text-ink sm:text-3xl">
            Get the right {category.shortName.toLowerCase()} the first time
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate">
            Send us your machine make, model, serial number and the part number if available. Our team checks fitment before quoting and can help you compare repair, rebuilt and replacement options for your equipment.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "Identify", body: "Share the machine details, photographs or an old part number and we will help confirm the correct configuration." },
              { title: "Prepare", body: `Every ${category.shortName.toLowerCase()} is assessed against its application, operating load and compatibility requirements before dispatch.` },
              { title: "Support", body: "We provide clear installation guidance, warranty information and responsive help if you need to verify anything after delivery." },
            ].map((item, index) => (
              <div key={item.title} className="border-t-2 border-amber pt-5">
                <span className="font-data text-xs text-slate">0{index + 1}</span>
                <h3 className="mt-2 font-display text-xl uppercase tracking-wide text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello Fine Hydraulic, I need help with ${category.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-[#25D366] px-6 py-3.5 font-display uppercase tracking-wide text-white transition-colors hover:bg-[#1DAA56]"
            >
              Ask on WhatsApp
            </a>
            <Link href="/contact" className="rounded-sm border border-line-dark px-6 py-3.5 font-display uppercase tracking-wide text-ink transition-colors hover:border-amber hover:text-amber">
              Send an enquiry
            </Link>
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
