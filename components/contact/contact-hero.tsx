"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contactHero } from "@/data/contact-data";

export function ContactHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="container-px pt-6">
      <div className="relative overflow-hidden rounded-[36px] bg-skysoft p-6 shadow-soft md:p-12 lg:p-16">
        <PawPrint className="absolute right-10 top-8 h-16 w-16 rotate-12 text-brand/20" aria-hidden />
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative z-10 max-w-2xl">
            <motion.p
              className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-brand shadow-card"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {contactHero.eyebrow}
            </motion.p>
            <motion.h1
              className="mt-6 text-5xl font-black leading-[0.95] text-ink md:text-6xl"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {contactHero.title}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-xl text-lg font-semibold leading-8 text-ink/68"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
            >
              {contactHero.copy}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
            >
              <a href="mailto:hello@pawsnwhiskers.com" className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-black text-white shadow-card transition hover:bg-ink">
                <Mail className="h-5 w-5" aria-hidden />
                Email Support
              </a>
              <Link href="/shop" className="focus-ring rounded-full bg-white px-7 py-4 font-black text-ink shadow-card transition hover:bg-ink hover:text-white">
                Continue Shopping
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="relative min-h-[360px]"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
          >
            <div className="absolute inset-8 rounded-full bg-white/45 blur-2xl" />
            <Image
              src={contactHero.image}
              alt={contactHero.alt}
              width={1000}
              height={760}
              priority
              className="relative z-10 h-[360px] w-full rounded-[34px] object-cover shadow-soft md:h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
