import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Users, Factory, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CategoryVisual } from "@/components/CategoryVisual";
import { categories, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — ${siteConfig.founded} years rebuilding and supplying transmissions, engines, hydraulic pumps, motors and CAT spares for earthmoving equipment.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name} — heavy-equipment component rebuilders since ${siteConfig.founded}.`,
    url: `${siteConfig.url}/about`,
    images: [{ url: "/about/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/about/opengraph-image"],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Component specialists since 2005"
        description="We rebuild, repair and supply the parts that keep excavators, dozers, graders and rollers on the job — with a testing standard we're not willing to skip."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="font-data text-xs uppercase tracking-[0.25em] text-amber">Our story</span>
            <h2 className="mt-3 font-display text-3xl uppercase tracking-tight text-ink">
              Built on the workshop floor, not the sales floor
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate">
              {siteConfig.name} started as a small hydraulic repair bay working on excavators and
              dozers for local construction contractors. Two decades on, we've grown into a
              full component house covering transmissions, engines, hydraulic pumps and motors,
              undercarriage assemblies and CAT spares — but the standard hasn't changed: every
              unit gets stripped, inspected and tested before it earns a warranty tag.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              We work with owner-operators, rental fleets and contractors who need equipment
              back on site fast, without gambling on an untested rebuild. That means genuine-spec
              kits, documented test results, and straight answers about what a part can and can't do.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="flex items-center gap-2 rounded-sm bg-amber px-6 py-3.5 font-display uppercase tracking-wide text-graphite hover:bg-amber-dark transition-colors"
              >
                See Our Work <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-sm border border-line-dark px-6 py-3.5 font-display uppercase tracking-wide text-ink hover:border-amber hover:text-amber transition-colors"
              >
                Talk to Us
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <CategoryVisual category={categories[1]} figNo="01" className="translate-y-6" />
            <CategoryVisual category={categories[4]} figNo="02" variant={1} />
            <CategoryVisual category={categories[6]} figNo="03" variant={2} />
            <CategoryVisual category={categories[10]} figNo="04" variant={3} className="translate-y-6" />
          </div>
        </div>
      </section>

      <section className="border-t border-line-dark bg-paper-2 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { Icon: Factory, value: "20+ yrs", label: "In operation" },
              { Icon: Award, value: "1000+", label: "Units rebuilt" },
              { Icon: Users, value: "300+", label: "Fleet & contractor clients" },
              { Icon: Target, value: "12", label: "Component categories" },
            ].map(({ Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon size={26} className="mx-auto text-amber" />
                <div className="mt-3 font-display text-2xl text-ink">{value}</div>
                <div className="mt-1 font-data text-xs uppercase tracking-wide text-slate">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <span className="font-data text-xs uppercase tracking-[0.25em] text-amber">What we stand for</span>
        <h2 className="mt-3 font-display text-3xl uppercase tracking-tight text-ink">Our values</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              title: "Test everything",
              body: "No unit leaves the shop without a bench, dyno or pressure test result attached to it.",
            },
            {
              title: "Honest turnaround",
              body: "We quote a realistic timeline based on core condition, not the fastest number to win the job.",
            },
            {
              title: "Stand behind it",
              body: "Every rebuild ships with a written warranty — because that's the only way to prove we trust our own work.",
            },
          ].map((v) => (
            <div key={v.title} className="border-t-2 border-amber pt-5">
              <h3 className="font-display text-lg uppercase tracking-wide text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
