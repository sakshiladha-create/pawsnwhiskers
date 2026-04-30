"use client";

import { motion, useReducedMotion } from "framer-motion";
import { helpCards } from "@/data/contact-data";
import { SectionReveal } from "@/components/home/section-reveal";

const helpStyles = [
  { bg: "bg-[#FFF5EE]", icon: "bg-[#DA8A70]" },
  { bg: "bg-[#E0F2FE]", icon: "bg-[#0284C7]" },
  { bg: "bg-[#ECFDF5]", icon: "bg-[#059669]" },
  { bg: "bg-[#F3E8FF]", icon: "bg-[#7C3AED]" }
];

export function ContactHelpSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="container-px py-12">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">How we can help</p>
        <h2 className="mt-2 text-4xl font-black text-[#4C6795] md:text-5xl">Support for shopping, orders, and pet questions.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {helpCards.map((card, index) => {
          const Icon = card.icon;
          const style = helpStyles[index % helpStyles.length];
          return (
            <motion.article
              key={card.title}
              className={`rounded-[30px] ${style.bg} p-6 shadow-card`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
            >
              <span className={`flex h-16 w-16 items-center justify-center rounded-[22px] ${style.icon} text-white`}>
                <Icon className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-black text-ink">{card.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-ink/62">{card.copy}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionReveal>
  );
}
