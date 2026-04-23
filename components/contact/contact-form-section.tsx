"use client";

import { Instagram, Send } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { contactSupport } from "@/data/contact-data";
import { SectionReveal } from "@/components/home/section-reveal";

const fields = [
  { id: "full-name", label: "Full Name", type: "text", autoComplete: "name" },
  { id: "email-address", label: "Email Address", type: "email", autoComplete: "email" },
  { id: "phone-number", label: "Phone Number", type: "tel", autoComplete: "tel" },
  { id: "subject", label: "Subject", type: "text", autoComplete: "off" }
];

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Connect this form to the preferred backend or email service.
    setSubmitted(true);
  };

  return (
    <SectionReveal className="container-px py-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[34px] bg-white p-6 shadow-soft md:p-8" aria-labelledby="contact-form-heading">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Send a message</p>
          <h2 id="contact-form-heading" className="mt-2 text-4xl font-black text-ink md:text-5xl">
            Tell us how we can help
          </h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-ink/60">
            We usually reply within one business day. Include your order number when relevant.
          </p>

          <form className="mt-8 grid gap-5" onSubmit={handleSubmit} noValidate={false}>
            <div className="grid gap-5 md:grid-cols-2">
              {fields.map((field) => (
                <div key={field.id}>
                  <label className="mb-2 block text-sm font-black text-ink" htmlFor={field.id}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required={field.id !== "phone-number"}
                    aria-invalid="false"
                    className="focus-ring min-h-14 w-full rounded-2xl border border-black/10 bg-cream px-4 font-bold text-ink outline-none transition focus:bg-white"
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="mb-2 block text-sm font-black text-ink" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                aria-invalid="false"
                className="focus-ring w-full resize-y rounded-2xl border border-black/10 bg-cream px-4 py-4 font-bold text-ink outline-none transition focus:bg-white"
              />
            </div>
            <button type="submit" className="focus-ring inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 font-black text-white transition hover:bg-ink sm:w-fit">
              <Send className="h-5 w-5" aria-hidden />
              Send Message
            </button>
            {submitted ? (
              <p className="rounded-2xl bg-mint px-4 py-3 text-sm font-black text-ink" role="status">
                Thanks. Your message is ready for a backend connection and has been captured in the interface.
              </p>
            ) : null}
          </form>
        </section>

        <aside className="relative overflow-hidden rounded-[34px] bg-ink p-6 text-white shadow-soft md:p-8">
          <Image src={contactSupport.image} alt={contactSupport.alt} width={900} height={760} className="h-72 w-full rounded-[28px] object-cover shadow-card" />
          <p className="mt-7 text-sm font-black uppercase tracking-[0.16em] text-brand">{contactSupport.eyebrow}</p>
          <h2 className="mt-2 text-4xl font-black leading-tight">{contactSupport.title}</h2>
          <p className="mt-4 text-sm font-semibold leading-6 text-white/70">{contactSupport.copy}</p>
          <ul className="mt-6 space-y-3">
            {contactSupport.notes.map((note) => (
              <li key={note} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white/86">
                {note}
              </li>
            ))}
          </ul>
          <a href="#" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-brand hover:text-white">
            <Instagram className="h-5 w-5" aria-hidden />
            Follow Updates
          </a>
        </aside>
      </div>
    </SectionReveal>
  );
}
