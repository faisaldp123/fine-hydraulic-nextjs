import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} for quotes on rebuilt transmissions, engines, hydraulic pumps, motors and CAT spares. Call, email or send an enquiry.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: "Request a quote or ask about a part — we usually respond the same working day.",
    url: `${siteConfig.url}/contact`,
    images: [{ url: "/contact/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/contact/opengraph-image"],
  },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you need"
        description="Send us the machine model and part, or call the workshop directly — we quote most enquiries the same working day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Get in touch</h2>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-amber" />
                <div>
                  <div className="font-display text-sm uppercase tracking-wide text-ink">Workshop address</div>
                  <div className="mt-1 text-sm text-slate">{siteConfig.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-amber" />
                <div>
                  <div className="font-display text-sm uppercase tracking-wide text-ink">Phone</div>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="mt-1 block text-sm text-slate hover:text-amber">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-amber" />
                <div>
                  <div className="font-display text-sm uppercase tracking-wide text-ink">Email</div>
                  <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-sm text-slate hover:text-amber">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-amber" />
                <div>
                  <div className="font-display text-sm uppercase tracking-wide text-ink">Working hours</div>
                  <div className="mt-1 text-sm text-slate">{siteConfig.hours}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={20} className="mt-0.5 shrink-0 text-amber" />
                <div>
                  <div className="font-display text-sm uppercase tracking-wide text-ink">WhatsApp</div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-slate hover:text-amber"
                  >
                    {siteConfig.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-sm border border-line-dark crop-marks">
              <iframe
                title="Workshop location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-sm border border-line-dark bg-paper-2 p-6 sm:p-8">
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Send an enquiry</h2>
            <p className="mt-2 text-sm text-slate">
              Fill in the details below — this opens a pre-filled email to our sales team.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
