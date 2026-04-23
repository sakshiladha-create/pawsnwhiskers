"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { aboutFaqs } from "@/data/about-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function AboutFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="container-px py-12">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">FAQ</p>
        <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">Good questions, clear answers</h2>
      </div>
      <div className="mx-auto max-w-4xl space-y-3">
        {aboutFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const buttonId = `about-faq-button-${index}`;
          const panelId = `about-faq-panel-${index}`;
          return (
            <article key={faq.question} className="rounded-[24px] bg-white shadow-card">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-black text-ink"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {faq.question}
                <ChevronDown className={`h-5 w-5 shrink-0 text-brand transition ${isOpen ? "rotate-180" : ""}`} aria-hidden />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm font-semibold leading-7 text-ink/62">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </SectionReveal>
  );
}
