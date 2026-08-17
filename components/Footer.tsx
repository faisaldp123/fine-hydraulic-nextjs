import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { categories, siteConfig } from "@/lib/data";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();
  const half = Math.ceil(categories.length / 2);
  const col1 = categories.slice(0, half);
  const col2 = categories.slice(half);

  return (
    <footer className="border-t border-line-dark bg-white text-ink">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="relative block h-16 w-[250px]">
              <Image src="/images/logo-new.png" alt="Fine Hydraulic" fill className="object-contain object-left" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">
              {siteConfig.shortDescription}
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-amber" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-amber" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-amber transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-amber" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-amber transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-amber" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              {[
                { href: siteConfig.social.facebook, Icon: FacebookIcon, label: "Facebook" },
                { href: siteConfig.social.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: siteConfig.social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
                { href: siteConfig.social.youtube, Icon: YoutubeIcon, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-line-dark text-slate hover:border-amber hover:text-amber transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-amber">Products</h3>
            <ul className="mt-4 space-y-2.5">
              {col1.map((c) => (
                <li key={c.slug}>
                  <Link href={`/products/${c.slug}`} className="text-sm text-slate hover:text-amber transition-colors">
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-amber">&nbsp;</h3>
            <ul className="mt-4 space-y-2.5">
              {col2.map((c) => (
                <li key={c.slug}>
                  <Link href={`/products/${c.slug}`} className="text-sm text-slate hover:text-amber transition-colors">
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-amber">Company</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/" className="text-sm text-slate hover:text-amber transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-slate hover:text-amber transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-sm text-slate hover:text-amber transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-sm text-slate hover:text-amber transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-slate md:flex-row">
          <span>© {year} {siteConfig.legalName}. All rights reserved.</span>
          <span className="font-data">Genuine-spec parts · Tested before dispatch · Pan-India shipping</span>
        </div>
      </div>
    </footer>
  );
}
