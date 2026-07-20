"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { categories, siteConfig } from "@/lib/data";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Enquiry — ${form.category || "General"} — ${form.name || "Website visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCategory: ${form.category}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="font-data text-xs uppercase tracking-widest text-slate">Full name</label>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full rounded-sm border border-line-dark bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
          />
        </div>
        <div>
          <label className="font-data text-xs uppercase tracking-widest text-slate">Phone number</label>
          <input
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 90000 00000"
            className="mt-2 w-full rounded-sm border border-line-dark bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
          />
        </div>
      </div>

      <div>
        <label className="font-data text-xs uppercase tracking-widest text-slate">Email address</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@company.com"
          className="mt-2 w-full rounded-sm border border-line-dark bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
        />
      </div>

      <div>
        <label className="font-data text-xs uppercase tracking-widest text-slate">Component category</label>
        <select
          value={form.category}
          onChange={(e) => update("category", e.target.value)}
          className="mt-2 w-full rounded-sm border border-line-dark bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
        >
          <option value="">Select a category</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value="General enquiry">General enquiry</option>
        </select>
      </div>

      <div>
        <label className="font-data text-xs uppercase tracking-widest text-slate">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us the machine model, part required, and quantity..."
          className="mt-2 w-full resize-none rounded-sm border border-line-dark bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
        />
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 rounded-sm bg-amber px-6 py-3.5 font-display uppercase tracking-wide text-graphite hover:bg-amber-dark transition-colors"
      >
        Send Enquiry <Send size={16} />
      </button>
      {sent && (
        <p className="font-data text-xs text-slate">
          Your email app should be opening now with the message pre-filled — hit send from there to reach us.
        </p>
      )}
    </form>
  );
}
