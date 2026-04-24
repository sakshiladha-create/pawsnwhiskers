"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/home-data";

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const slide = heroSlides[active];

  useEffect(() => {
    if (reduceMotion || paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const goTo = (index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="w-full">
      <div
        className={`relative min-h-[85vh] overflow-hidden ${slide.bg}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="absolute inset-0 z-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={active === 0}
              sizes="100vw"
              className="object-cover object-[72%_center] md:object-right lg:object-[78%_center]"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-10" aria-hidden="true">
          <div className="absolute left-[6%] top-[9%] h-40 w-40 rounded-full bg-white/32 blur-3xl" />
          <div className="absolute left-[36%] top-[18%] h-16 w-16 rounded-full bg-[#BFD8FF]/30 blur-2xl" />
          <div className="absolute right-[18%] top-[10%] h-44 w-44 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-[22%] left-[10%] h-24 w-24 rounded-full bg-[#F8D8C8]/22 blur-3xl" />
          <PawPrint className="absolute left-[8%] top-[16%] h-5 w-5 text-[#8EB4FF]/55" />
          <PawPrint className="absolute left-[14%] top-[26%] h-4 w-4 text-[#8EB4FF]/38" />
          <div className="absolute left-[13%] bottom-[31%] h-2.5 w-2.5 rounded-full bg-[#94B7FF]/50" />
          <div className="absolute left-[16%] bottom-[27%] h-1.5 w-1.5 rounded-full bg-[#94B7FF]/38" />
        </div>

        <div
          className="absolute inset-0 z-20 bg-[linear-gradient(90deg,rgba(244,243,252,0.96)_0%,rgba(244,243,252,0.92)_26%,rgba(244,243,252,0.68)_46%,rgba(244,243,252,0.18)_66%,rgba(244,243,252,0)_100%)] md:bg-[linear-gradient(90deg,rgba(244,243,252,0.95)_0%,rgba(244,243,252,0.9)_30%,rgba(244,243,252,0.64)_48%,rgba(244,243,252,0.1)_70%,rgba(244,243,252,0)_100%)]"
          aria-hidden="true"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            className="relative z-30"
            initial={reduceMotion ? false : { opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mx-auto grid min-h-[85vh] max-w-[1280px] items-center gap-10 px-6 pb-36 pt-14 md:min-h-[88vh] md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:pb-40 lg:pt-16 xl:min-h-[92vh]">
              <div className="max-w-[560px]">
                <motion.p
                  className={`text-xl font-medium ${slide.eyebrowColor} md:text-[22px]`}
                  initial={reduceMotion ? false : { opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
                >
                  {slide.eyebrow}
                </motion.p>

                <motion.h1
                  className={`hero-heading mt-4 max-w-[10ch] text-5xl leading-[0.96] ${slide.headingColor} sm:text-6xl lg:text-[5rem]`}
                  initial={reduceMotion ? false : { opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="mt-6 max-w-[34rem] text-lg font-medium leading-9 text-ink/54"
                  initial={reduceMotion ? false : { opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.24, duration: 0.5, ease: "easeOut" }}
                >
                  {slide.copy}
                </motion.p>

                <motion.div
                  className="mt-8"
                  initial={reduceMotion ? false : { opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.32, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={slide.href}
                    className="focus-ring inline-flex rounded-full bg-brand px-8 py-4 text-[1.05rem] font-black text-white transition hover:bg-ink"
                  >
                    {slide.primaryCta}
                  </Link>
                </motion.div>
              </div>

              <div className="hidden lg:block" />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          aria-label="Previous slide"
          className="focus-ring absolute left-5 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-white/45 text-[#C2C8D7] transition hover:bg-white md:flex"
          onClick={() => goTo(active - 1)}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="focus-ring absolute right-5 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-white/45 text-[#C2C8D7] transition hover:bg-white md:flex"
          onClick={() => goTo(active + 1)}
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="absolute bottom-[112px] left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              className={`focus-ring rounded-full transition-all ${
                index === active
                  ? "h-2.5 w-8 bg-[#4C6795]"
                  : "h-2.5 w-2.5 bg-[#4C6795]/20"
              }`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-28 overflow-hidden"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 180"
            className="h-full w-full fill-[#FFFDF8]"
            preserveAspectRatio="none"
          >
            <path d="M0,145 C210,55 440,170 740,128 C980,94 1160,62 1440,118 L1440,180 L0,180 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}