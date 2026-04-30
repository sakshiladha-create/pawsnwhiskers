"use client";

import { motion, useReducedMotion } from "framer-motion";
import { coreValues } from "@/data/about-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function CoreValues() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="container-px py-12">
      <div className="mb-8 text-center ">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Core Principles</p>
        <h2 className="mt-2 font-black text-[#445b81] text-3xl leading-tight md:text-4xl">Care principles behind every shelf.</h2>
        <p className="mt-4 text-base font-semibold leading-7 text-ink/60">
          We balance joyful design with practical pet care, so every product has a clear purpose in the home.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {coreValues.map((value) => {
          const Icon = value.icon;
          return (
            <motion.article
              key={value.title}
              className={`${value.bg} rounded-[30px] p-6 shadow-card`}
              whileHover={reduceMotion ? undefined : { y: -7 }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand shadow-card">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-black text-ink">{value.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-ink/62">{value.copy}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionReveal>
  );
}
