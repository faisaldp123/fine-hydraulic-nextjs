"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { categories, siteConfig } from "@/lib/data";

export function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  function openNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  }
  function closeSoon() {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 150);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-graphite/95 backdrop-blur supports-[backdrop-filter]:bg-graphite/90">
      {/* top strip */}
      <div className="hidden border-b border-line/60 bg-black/20 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 font-data text-xs text-slate-light">
          <span>Rebuilt &amp; tested heavy-equipment components — since {siteConfig.founded}</span>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-amber transition-colors">
            <Phone size={12} strokeWidth={2} />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-amber font-display text-lg font-semibold text-graphite">
            F
          </span>
          <span className="font-display text-xl uppercase tracking-wide text-paper">
            Fine<span className="text-amber">Hydraulic</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="font-body text-sm text-paper/90 hover:text-amber transition-colors">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={openNow}
            onMouseLeave={closeSoon}
          >
            <button
              className="flex items-center gap-1 font-body text-sm text-paper/90 hover:text-amber transition-colors"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((v) => !v)}
            >
              Products
              <ChevronDown size={15} className={`transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-4">
                <div className="crop-marks rounded-sm border border-line bg-steel p-5 shadow-2xl">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-data text-[11px] uppercase tracking-widest text-slate-light">
                      Component catalog
                    </span>
                    <span className="font-data text-[11px] text-slate-light">12 categories</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/products/${c.slug}`}
                        className="group rounded-sm px-3 py-2.5 hover:bg-steel-2 transition-colors"
                        onClick={() => setProductsOpen(false)}
                      >
                        <span className="block font-display text-[15px] uppercase tracking-wide text-paper/95 group-hover:text-amber transition-colors">
                          {c.shortName}
                        </span>
                        <span className="mt-0.5 block text-xs text-slate-light line-clamp-1">
                          {c.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 border-t border-line pt-3">
                    <Link
                      href="/gallery"
                      className="font-data text-xs uppercase tracking-widest text-amber hover:text-paper transition-colors"
                      onClick={() => setProductsOpen(false)}
                    >
                      View all work in the gallery →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/gallery" className="font-body text-sm text-paper/90 hover:text-amber transition-colors">
            Gallery
          </Link>
          <Link href="/about" className="font-body text-sm text-paper/90 hover:text-amber transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="font-body text-sm text-paper/90 hover:text-amber transition-colors">
            Contact Us
          </Link>

          <Link
            href="/contact"
            className="rounded-sm bg-amber px-5 py-2 font-display text-sm uppercase tracking-wide text-graphite hover:bg-amber-dark transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* mobile toggle */}
        <button
          className="p-2 text-paper lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      {mobileOpen && (
        <div className="border-t border-line bg-graphite lg:hidden">
          <div className="max-h-[80vh] overflow-y-auto px-6 py-4">
            <Link href="/" className="block py-2.5 font-body text-paper" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <button
              className="flex w-full items-center justify-between py-2.5 font-body text-paper"
              onClick={() => setMobileProductsOpen((v) => !v)}
            >
              Products
              <ChevronDown size={16} className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileProductsOpen && (
              <div className="grid grid-cols-1 gap-0.5 border-l border-line pl-4 pb-2">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    className="py-2 font-body text-sm text-slate-light hover:text-amber"
                    onClick={() => setMobileOpen(false)}
                  >
                    {c.shortName}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/gallery" className="block py-2.5 font-body text-paper" onClick={() => setMobileOpen(false)}>
              Gallery
            </Link>
            <Link href="/about" className="block py-2.5 font-body text-paper" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className="block py-2.5 font-body text-paper" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="mt-2 block rounded-sm bg-amber px-5 py-2.5 text-center font-display uppercase tracking-wide text-graphite"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
