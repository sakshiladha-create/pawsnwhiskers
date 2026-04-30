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
    <SectionReveal className="bg-white py-16 md:py-24">
      <div className="container-px">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="text-[2.35rem] font-black leading-tight text-[#445b81] md:text-[3.1rem]" style={{ fontFamily: "var(--font-heading)" }}>
          Frequently Asked Questions
        </h2>
      </div>
      <div className="mx-auto max-w-[1240px] space-y-6">
        {aboutFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const buttonId = `about-faq-button-${index}`;
          const panelId = `about-faq-panel-${index}`;
          return (
            <article
              key={faq.question}
              className={`overflow-hidden rounded-[10px] transition ${
                isOpen ? "bg-[#445b81] text-white" : "border border-dashed border-[#D8D8D8] bg-white text-[#111111]"
              }`}
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={`focus-ring flex w-full items-center justify-between gap-4 px-6 text-left text-[1.15rem] font-black md:px-8 ${
                  isOpen ? "pb-5 pt-7 text-white md:text-[1.35rem]" : "py-7 text-[#111111] md:text-[1.28rem]"
                }`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {faq.question}
                <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180 text-white" : "text-[#111111]"}`} aria-hidden />
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
                    <p className="px-6 pb-12 text-base font-semibold leading-8 text-white md:px-8">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
      </div>
    </SectionReveal>
  );
}
