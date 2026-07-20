import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-graphite text-paper">
      <div className="absolute inset-0 blueprint-grid-dark" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <nav className="mb-5 flex flex-wrap items-center gap-1.5 font-data text-xs text-slate-light">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} />}
              {c.href ? (
                <Link href={c.href} className="hover:text-amber transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-amber">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <span className="font-data text-xs uppercase tracking-[0.25em] text-amber">{eyebrow}</span>
        <h1 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-light sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
