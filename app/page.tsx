import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ShieldCheck, Gauge, Truck, Wrench, Phone } from "lucide-react";
import { categories, siteConfig } from "@/lib/data";
import { CategoryVisual } from "@/components/CategoryVisual";

export const metadata: Metadata = {
  title: "Fine Hydraulic | Hydraulic Pumps, Motors & Excavator Parts in India",
  description:
    "Fine Hydraulic in New Delhi supplies and rebuilds hydraulic pumps, hydraulic motors, excavator parts, transmissions, engines, track motors and CAT spares across India.",
  keywords: [
    "Fine Hydraulic",
    "Fine Hydraulic India",
    "hydraulic pump repair India",
    "hydraulic motor repair India",
    "excavator parts Delhi",
    "excavator spare parts India",
    "CAT spares India",
    "heavy equipment hydraulic parts",
    "hydraulic pump supplier Delhi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Fine Hydraulic | Hydraulic Pumps, Motors & Excavator Parts in India",
    description:
      "Hydraulic pumps, motors, excavator components, transmissions, engines and CAT spares â€” rebuilt, tested and supplied across India.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper-2 text-ink">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <span className="font-data text-xs uppercase tracking-[0.25em] text-amber">
              Est. {siteConfig.founded} — Heavy Equipment Component Specialists
            </span>
            <h1 className="mt-5 font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Fine Hydraulic: rebuilt to <span className="text-amber">factory tolerance.</span>
              <br /> Tested before it ships.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
              {siteConfig.shortDescription} From transmissions to CAT spares — {categories.length}
              component lines, one quality standard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
                View Our Work
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line-dark pt-6 sm:max-w-md">
              <div>
                <div className="font-display text-3xl text-amber">{categories.length}</div>
                <div className="font-data text-xs uppercase tracking-wide text-slate">Component lines</div>
              </div>
              <div>
                <div className="font-display text-3xl text-amber">20+</div>
                <div className="font-data text-xs uppercase tracking-wide text-slate">Years in service</div>
              </div>
              <div>
                <div className="font-display text-3xl text-amber">1000+</div>
                <div className="font-data text-xs uppercase tracking-wide text-slate">Units rebuilt</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 self-center p-2 sm:gap-6">
            <CategoryVisual category={categories[2]} figNo="A1" className="translate-y-4" />
            <CategoryVisual category={categories[7]} figNo="A2" variant={1} />
            <CategoryVisual category={categories[1]} figNo="A3" variant={2} />
            <CategoryVisual category={categories[9]} figNo="A4" variant={3} className="translate-y-4" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-line-dark bg-paper-2">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          {[
            { Icon: ShieldCheck, label: "Warranty backed" },
            { Icon: Gauge, label: "Bench & dyno tested" },
            { Icon: Wrench, label: "OEM-spec rebuilds" },
            { Icon: Truck, label: "Pan-India shipping" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={22} className="shrink-0 text-amber" />
              <span className="font-display text-sm uppercase tracking-wide text-ink">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-data text-xs uppercase tracking-[0.25em] text-amber">Catalog</span>
            <h2 className="mt-3 font-display text-3xl uppercase tracking-tight text-ink sm:text-4xl">
              {categories.length} component lines
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate">
            Every category below covers rebuild, repair and supply — click through for full
            specifications, applications and photos of finished units.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group crop-marks overflow-hidden rounded-sm border border-line-dark bg-steel transition-transform hover:-translate-y-1"
            >
              <CategoryVisual category={c} figNo={String(i + 1).padStart(2, "0")} />
              <div className="p-5">
                <h3 className="font-display text-lg uppercase tracking-wide text-paper group-hover:text-amber transition-colors">
                  {c.name}
                </h3>
                <p className="mt-1.5 text-sm text-slate-light line-clamp-2">{c.tagline}</p>
                <span className="mt-3 flex items-center gap-1.5 font-data text-xs uppercase tracking-widest text-amber">
                  View details <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-line-dark bg-paper-2 py-20 text-ink">
        <div className="mx-auto max-w-7xl px-6">
          <span className="font-data text-xs uppercase tracking-[0.25em] text-amber">Our process</span>
          <h2 className="mt-3 font-display text-3xl uppercase tracking-tight sm:text-4xl">
            From core to test bench
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "Inspect", body: "Every core is stripped and crack-checked before a rebuild is quoted." },
              { step: "Rebuild", body: "New seals, bearings and wear kits fitted to OEM clearances." },
              { step: "Test", body: "Bench and dyno-tested for pressure, flow, torque or compression." },
              { step: "Dispatch", body: "Packed and shipped pan-India with warranty documentation." },
            ].map((s, i) => (
              <div key={s.step} className="border-t border-line-dark pt-5">
                <span className="font-data text-xs text-slate">STEP {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-xl uppercase text-amber">{s.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-data text-xs uppercase tracking-[0.25em] text-amber">Recent work</span>
            <h2 className="mt-3 font-display text-3xl uppercase tracking-tight text-ink sm:text-4xl">
              From the workshop floor
            </h2>
          </div>
          <Link
            href="/gallery"
            className="flex items-center gap-2 font-display text-sm uppercase tracking-wide text-ink hover:text-amber transition-colors"
          >
            Full gallery <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.slice(0, 8).map((c, i) => (
            <CategoryVisual key={c.slug} category={c} figNo={String(i + 1).padStart(2, "0")} variant={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line-dark bg-amber">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-graphite sm:text-3xl">
              Need a part fast? Talk to our team.
            </h2>
            <p className="mt-2 text-graphite/80">Send us the machine model and part — we'll quote same day.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-sm bg-graphite px-6 py-3.5 font-display uppercase tracking-wide text-paper hover:bg-ink transition-colors"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-sm border border-graphite px-6 py-3.5 font-display uppercase tracking-wide text-graphite hover:bg-graphite hover:text-paper transition-colors"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
