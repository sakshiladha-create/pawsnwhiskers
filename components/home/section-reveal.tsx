"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PetBackgroundDecor } from "@/components/shared/pet-background-decor";

export function SectionReveal({
  children,
  className = "",
  decorVariant
}: {
  children: React.ReactNode;
  className?: string;
  decorVariant?: "section" | "warm" | "dark";
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={`${className} ${decorVariant ? "relative overflow-hidden" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {decorVariant ? <PetBackgroundDecor variant={decorVariant} /> : null}
      <div className={decorVariant ? "relative z-10" : undefined}>{children}</div>
    </motion.section>
  );
}
