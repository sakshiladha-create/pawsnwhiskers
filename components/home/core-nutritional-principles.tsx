"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgePercent, PawPrint, Soup, Wheat } from "lucide-react";
import { SectionReveal } from "@/components/home/section-reveal";

const principles = [
  {
    title: "Healthy Weight",
    description: "We provide food, equipment,\nand we provide pets too.",
    cardClassName: "bg-[#FFF2C9]",
    iconClassName: "bg-[#F0A15E]",
    icon: BadgePercent,
    shape: "rounded-[58%_42%_45%_55%/48%_55%_45%_52%]"
  },
  {
    title: "Hairball Management",
    description: "We provide food, equipment,\nand we provide pets too.",
    cardClassName: "bg-[#E2F0D4]",
    iconClassName: "bg-[#82C735]",
    icon: Soup,
    shape: "rounded-[62%_38%_55%_45%/44%_58%_42%_56%]"
  },
  {
    title: "Limited Ingredient",
    description: "We provide food, equipment,\nand we provide pets too.",
    cardClassName: "bg-[#F9DDEB]",
    iconClassName: "bg-[#EC4389]",
    icon: PawPrint,
    shape: "rounded-[45%_55%_62%_38%/58%_40%_60%_42%]"
  },
  {
    title: "Organic Grain",
    description: "We provide food, equipment,\nand we provide pets too.",
    cardClassName: "bg-[#E2D8FA]",
    iconClassName: "bg-[#6849D8]",
    icon: Wheat,
    shape: "rounded-[50%_50%_40%_60%/60%_40%_60%_40%]"
  }
];

export function CoreNutritionalPrinciples() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="container-px bg-white py-14 md:py-20 ">
      <div className="mx-auto">
        <div className="text-center">
          <PawPrint className="mx-auto h-7 w-7 fill-current text-brand" aria-hidden />
          <h2
            className="mt-4 text-[2rem] font-black leading-tight text-[#4C6795] md:text-[2.6rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Core Nutritional Principles
          </h2>
          <p
            className="mt-2 text-xl font-semibold italic text-brand md:text-[1.7rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            For pet reason
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-7">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.title}
                className={`${principle.cardClassName} flex min-h-[250px] flex-col items-center rounded-[22px] px-8 py-9 text-center transition hover:-translate-y-1`}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                {/* 🔥 ABSTRACT SHAPE */}
                <div
                  className={`${principle.iconClassName} ${principle.shape} flex h-[90px] w-[90px] items-center justify-center transition duration-300`}
                >
                  <Icon className="h-10 w-10 text-white" aria-hidden />
                </div>

                <h3
                  className="mt-6 text-[1.65rem] font-black text-[#111111]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {principle.title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-[15px] font-semibold leading-8 text-[#4B4B4B]">
                  {principle.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}