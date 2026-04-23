"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/home-data";

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const slide = heroSlides[active];

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const goTo = (index: number) => setActive((index + heroSlides.length) % heroSlides.length);

  return (
<section className="container-px pt-6">
  <div className={`relative min-h-[620px] overflow-hidden rounded-[36px] ${slide.bg} shadow-soft`}>
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.title}
        className="absolute inset-0 grid items-center gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12 lg:grid-cols-[0.88fr_1.12fr] lg:pl-16 lg:pr-0 lg:py-16"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="relative z-10 max-w-2xl">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-brand shadow-card"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            {slide.eyebrow}
          </motion.p>

          <motion.h1
            className="mt-6 text-5xl font-black leading-[0.95] text-ink sm:text-6xl lg:text-7xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.8, ease: "easeOut" }}
          >
            {slide.title}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg font-semibold leading-8 text-ink/68"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.8, ease: "easeOut" }}
          >
            {slide.copy}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.8, ease: "easeOut" }}
          >
            <Link
              href={slide.href}
              className="focus-ring rounded-full bg-brand px-7 py-4 font-black text-white shadow-card transition hover:-translate-y-0.5 hover:bg-ink"
            >
              {slide.primaryCta}
            </Link>
            <Link
              href="/shop"
              className="focus-ring rounded-full bg-white px-7 py-4 font-black text-ink shadow-card transition hover:-translate-y-0.5 hover:bg-ink hover:text-white"
            >
              {slide.secondaryCta}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative min-h-[360px] md:min-h-[520px] md:pr-0 lg:pr-0"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, x: 32 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
        >
          <div className="absolute inset-8 rounded-full bg-white/45 blur-2xl" />
          <Image
            src={slide.image}
            alt={slide.title}
            width={900}
            height={760}
            priority={active === 0}
            className="relative z-10 h-full min-h-[360px] w-full rounded-[34px] object-cover shadow-soft md:rounded-r-none lg:rounded-r-none"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>

    <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">
      <div className="flex gap-2">
        {heroSlides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            className={`focus-ring h-3 rounded-full transition-all ${
              index === active ? "w-10 bg-ink" : "w-3 bg-white/80"
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Previous slide"
          className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-card transition hover:bg-ink hover:text-white"
          onClick={() => goTo(active - 1)}
        >
          <ArrowLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-card transition hover:bg-ink hover:text-white"
          onClick={() => goTo(active + 1)}
        >
          <ArrowRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  </div>
</section>
  );
}
