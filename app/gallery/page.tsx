import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CategoryVisual } from "@/components/CategoryVisual";
import { categories, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery — Our Work",
  description: `Browse ${siteConfig.name}'s work: rebuilt transmissions, engines, hydraulic pumps, motors, undercarriage components and CAT spares, organized by category.`,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `Gallery | ${siteConfig.name}`,
    description: "Section-wise photos of every component category we rebuild and supply.",
    url: `${siteConfig.url}/gallery`,
    images: [{ url: "/gallery/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/gallery/opengraph-image"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our work, section by section"
        description="A category-wise look at the components we rebuild, repair and supply. Jump to any section below, or open a category page for full specifications."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      {/* quick jump nav */}
      <div className="sticky top-[57px] z-40 border-b border-line-dark bg-paper/95 backdrop-blur md:top-[93px]">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6">
          <div className="flex gap-6 whitespace-nowrap py-3.5">
            {categories.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="font-data text-xs uppercase tracking-widest text-slate hover:text-amber transition-colors"
              >
                {c.shortName}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {categories.map((c, ci) => {
          // Keep a one-photo category focused; use four tiles for every multi-photo category.
          const visualCount = c.images?.length === 1 ? 1 : 4;

          return (
          <section key={c.slug} id={c.slug} className="scroll-mt-32 border-b border-line-dark py-14 last:border-b-0">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <span className="font-data text-xs uppercase tracking-[0.25em] text-amber">
                  Section {String(ci + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-display text-2xl uppercase tracking-tight text-ink sm:text-3xl">
                  {c.name}
                </h2>
                <p className="mt-1.5 max-w-xl text-sm text-slate">{c.tagline}</p>
              </div>
              <Link
                href={`/products/${c.slug}`}
                className="flex items-center gap-1.5 font-display text-sm uppercase tracking-wide text-ink hover:text-amber transition-colors"
              >
                Full details <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className={`mt-7 grid gap-4 ${visualCount === 1 ? "max-w-sm grid-cols-1" : "grid-cols-2 sm:grid-cols-4"}`}>
              {Array.from({ length: visualCount }, (_, v) => (
                <CategoryVisual
                  key={v}
                  category={c}
                  variant={v}
                  figNo={`${String(ci + 1).padStart(2, "0")}.${v + 1}`}
                />
              ))}
            </div>
          </section>
          );
        })}
      </div>
    </>
  );
}
