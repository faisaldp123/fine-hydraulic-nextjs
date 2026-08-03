"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { categories } from "@/lib/data";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", category: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            reply_to: form.email,
            phone: form.phone,
            category: form.category || "General enquiry",
            message: form.message,
          },
        }),
      });
      if (!response.ok) throw new Error("EmailJS request failed");

      setStatus("sent");
      setForm({ name: "", phone: "", email: "", category: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="font-data text-xs uppercase tracking-widest text-slate">Full name</label>
          <input required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" className="mt-2 w-full rounded-sm border border-line-dark bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber" />
        </div>
        <div>
          <label className="font-data text-xs uppercase tracking-widest text-slate">Phone number</label>
          <input required value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="+91 90000 00000" className="mt-2 w-full rounded-sm border border-line-dark bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber" />
        </div>
      </div>
      <div>
        <label className="font-data text-xs uppercase tracking-widest text-slate">Email address</label>
        <input type="email" required value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@company.com" className="mt-2 w-full rounded-sm border border-line-dark bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber" />
      </div>
      <div>
        <label className="font-data text-xs uppercase tracking-widest text-slate">Component category</label>
        <select value={form.category} onChange={(event) => update("category", event.target.value)} className="mt-2 w-full rounded-sm border border-line-dark bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber">
          <option value="">Select a category</option>
          {categories.map((category) => <option key={category.slug} value={category.name}>{category.name}</option>)}
          <option value="General enquiry">General enquiry</option>
        </select>
      </div>
      <div>
        <label className="font-data text-xs uppercase tracking-widest text-slate">Message</label>
        <textarea required rows={5} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell us the machine model, part required, and quantity..." className="mt-2 w-full resize-none rounded-sm border border-line-dark bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber" />
      </div>
      <button type="submit" disabled={status === "sending"} className="flex items-center gap-2 rounded-sm bg-amber px-6 py-3.5 font-display uppercase tracking-wide text-graphite transition-colors hover:bg-amber-dark disabled:cursor-not-allowed disabled:opacity-70">
        {status === "sending" ? "Sending..." : "Send Enquiry"} <Send size={16} />
      </button>
      {status === "sent" && <p className="font-data text-xs text-slate">Thanks - your enquiry has been sent to our team.</p>}
      {status === "error" && <p className="font-data text-xs text-red-700" role="alert">We could not send your enquiry. Please try again or contact us directly.</p>}
    </form>
  );
}
