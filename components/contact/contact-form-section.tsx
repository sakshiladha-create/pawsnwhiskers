"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Instagram, PawPrint, Send } from "lucide-react";
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

function PawPattern() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden>
      <defs>
        <pattern id="contact-form-paws" width="110" height="96" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
          <g fill="#4C6795">
            <ellipse cx="42" cy="32" rx="8" ry="11" />
            <ellipse cx="60" cy="32" rx="8" ry="11" />
            <ellipse cx="31" cy="48" rx="7" ry="9" />
            <ellipse cx="71" cy="48" rx="7" ry="9" />
            <path d="M51 48c13 0 22 15 16 26-4 9-28 9-33 0-6-11 4-26 17-26Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-form-paws)" />
    </svg>
  );
}

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionReveal className="container-px py-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <motion.section
          className="relative overflow-hidden rounded-[36px] bg-white p-6 shadow-soft md:p-8"
          aria-labelledby="contact-form-heading"
          initial={reduceMotion ? false : { opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <PawPattern />
          <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#F3E8FF]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-[#E0F2FE]" aria-hidden />

          <div className="relative z-10">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Send a message</p>
            <h2 id="contact-form-heading" className="mt-2 text-4xl font-black text-[#4C6795] md:text-5xl">
              Tell us how we can help
            </h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-ink/60">
              We usually reply within one business day. Include your order number when relevant.
            </p>

            <form className="mt-8 grid gap-5" onSubmit={handleSubmit} noValidate={false}>
              <div className="grid gap-5 md:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.id}>
                    <label className="mb-2 block text-sm font-black text-[#4C6795]" htmlFor={field.id}>
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      required={field.id !== "phone-number"}
                      aria-invalid="false"
                      className="min-h-14 w-full rounded-full border border-[#E7E2DC] bg-[#FFF7F0] px-5 font-bold text-ink outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="mb-2 block text-sm font-black text-[#4C6795]" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  aria-invalid="false"
                  className="w-full resize-y rounded-[24px] border border-[#E7E2DC] bg-[#FFF7F0] px-5 py-4 font-bold text-ink outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
                />
              </div>
              <motion.button
                type="submit"
                className="focus-ring relative inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 font-black text-white transition hover:bg-[#4C6795] sm:w-fit"
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              >
                <span className="pointer-events-none absolute inset-[4px] rounded-full border border-dashed border-white/70" />
                <Send className="relative z-10 h-5 w-5" aria-hidden />
                <span className="relative z-10">Send Message 🐾</span>
              </motion.button>
              {submitted ? (
                <p className="rounded-2xl bg-[#ECFDF5] px-4 py-3 text-sm font-black text-ink" role="status">
                  Thanks. Your message is ready for a backend connection and has been captured in the interface.
                </p>
              ) : null}
            </form>
          </div>
        </motion.section>

        <motion.aside
          className="group relative min-h-[520px] overflow-hidden rounded-[36px] bg-[#4C6795] p-6 text-white shadow-soft md:p-8"
          initial={reduceMotion ? false : { opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Image
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Happy dog and cat support team"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4C6795]/95 via-[#4C6795]/42 to-transparent" />
          <PawPrint className="absolute right-8 top-8 h-14 w-14 rotate-12 fill-current text-white/20" aria-hidden />
          <PawPrint className="absolute left-8 top-24 h-9 w-9 -rotate-12 fill-current text-white/18" aria-hidden />

          <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">{contactSupport.eyebrow}</p>
            <h2 className="mt-2 text-4xl font-black leading-tight">Need help choosing the perfect essentials?</h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/82">Our friendly pet care team is here to help.</p>
            <ul className="mt-6 space-y-3">
              {contactSupport.notes.map((note) => (
                <li key={note} className="rounded-2xl bg-white/12 px-4 py-3 text-sm font-black text-white/90">
                  {note}
                </li>
              ))}
            </ul>
            <a href="#" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-brand hover:text-white">
              <Instagram className="h-5 w-5" aria-hidden />
              Follow Updates
            </a>
          </div>
        </motion.aside>
      </div>
    </SectionReveal>
  );
}
