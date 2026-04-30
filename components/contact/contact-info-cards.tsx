"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PawPrint } from "lucide-react";
import { contactCards } from "@/data/contact-data";
import { SectionReveal } from "@/components/home/section-reveal";

const cardStyles = [
  { bg: "bg-[#FFF5EE]", icon: "bg-[#DA8A70]", dot: "bg-[#DA8A70]/20" },
  { bg: "bg-[#E0F2FE]", icon: "bg-[#0284C7]", dot: "bg-[#0284C7]/20" },
  { bg: "bg-[#ECFDF5]", icon: "bg-[#059669]", dot: "bg-[#059669]/20" },
  { bg: "bg-[#F3E8FF]", icon: "bg-[#7C3AED]", dot: "bg-[#7C3AED]/20" }
];

export function ContactInfoCards() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="container-px py-12">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {contactCards.map((card, index) => {
          const Icon = card.icon;
          const style = cardStyles[index % cardStyles.length];
          const content = (
            <motion.article
              className={`relative h-full overflow-hidden rounded-[28px] ${style.bg} p-6 shadow-card`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              whileHover={reduceMotion ? undefined : { y: -4, rotate: index % 2 === 0 ? 1 : -1 }}
            >
              <PawPrint className="absolute right-4 top-4 h-12 w-12 rotate-12 fill-current text-black/5" aria-hidden />
              <span className={`absolute -bottom-7 -right-7 h-24 w-24 rounded-full ${style.dot}`} aria-hidden />
              <motion.span
                className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-[22px] ${style.icon} text-white`}
                whileHover={reduceMotion ? undefined : { scale: 1.08 }}
              >
                <Icon className="h-7 w-7" aria-hidden />
              </motion.span>
              <h2 className="relative z-10 mt-5 text-xl font-black text-ink">{card.title}</h2>
              <p className="relative z-10 mt-2 text-sm font-bold leading-6 text-ink/65">{card.content}</p>
            </motion.article>
          );

          return card.href ? (
            <a key={card.title} href={card.href} className="focus-ring block">
              {content}
            </a>
          ) : (
            <div key={card.title}>{content}</div>
          );
        })}
      </div>
    </SectionReveal>
  );
}
