"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bone, PawPrint, Plus, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/data/home-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const reviewTrack = [...testimonials, ...testimonials];

  return (
    <SectionReveal className="relative overflow-hidden py-20 md:py-28 ">
      <div className="absolute inset-0 z-0 bg-[#445B81]" />

      <motion.div
        className="pointer-events-none absolute -left-16 -top-20 z-0 h-56 w-56 rounded-full bg-brand blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -bottom-20 right-0 z-0 h-64 w-64 rounded-full bg-[#4C6795] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -20, 0], y: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 overflow-hidden" aria-hidden>
        <svg viewBox="0 0 1440 160" className="h-full w-full" preserveAspectRatio="none">
          <path d="M0,44 C140,58 286,30 434,44 C586,58 728,22 882,30 C1020,38 1184,20 1440,34 L1440,0 L0,0 Z" fill="#fff" />
          <path d="M0,45 C152,57 292,31 438,45 C586,59 730,22 886,31 C1034,39 1190,21 1440,35" fill="none" stroke="#FFF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M22,49 94,47 M198,43 258,40 M466,42 538,38 M826,32 890,31 M1184,28 1266,31 M1334,35 1398,37" fill="none" stroke="#FFF" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 overflow-hidden" aria-hidden>
        <svg viewBox="0 0 1440 160" className="h-full w-full" preserveAspectRatio="none">
          <path d="M0,114 C154,92 300,132 448,116 C606,100 734,90 876,106 C1034,124 1186,132 1440,116 L1440,160 L0,160 Z" fill="#FFF" />
          <path d="M0,113 C150,92 302,130 450,115 C604,100 732,91 878,106 C1032,121 1188,132 1440,117" fill="none" stroke="#FFF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M28,117 100,112 M236,126 304,121 M534,108 606,105 M786,107 862,110 M1098,124 1178,121 M1280,115 1380,119" fill="none" stroke="#FFF" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute left-[8%] top-[20%] text-white/100"
          animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <PawPrint className="h-10 w-10" />
        </motion.div>
        <motion.div
          className="absolute right-[10%] top-[18%] text-white/100"
          animate={reduceMotion ? undefined : { y: [0, 8, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Bone className="h-10 w-10" />
        </motion.div>
        <motion.svg
          viewBox="0 0 160 90"
          className="absolute left-[10%] bottom-[24%] h-16 w-28 text-brand/100"
          animate={reduceMotion ? undefined : { x: [0, 6, 0], y: [0, -4, 0] }}
          transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <path d="M10 50c20-18 34-18 54 0s34 18 54 0 34-18 32 0" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 80 80"
          className="absolute right-[10%] bottom-[22%] h-10 w-10 text-white/100"
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <path d="M40 64C19 45 8 35 8 21A13 13 0 0 1 21 8c8 0 14 5 19 11 5-6 11-11 19-11a13 13 0 0 1 13 13c0 14-11 24-32 43Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </div>

      <div className="container-px relative z-20">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden />
          <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-brand">Reviews and awards</p>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">What Pet Parents Are Saying</h2>
        </motion.div>

        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => setReviewsPaused(true)}
          onMouseLeave={() => setReviewsPaused(false)}
        >
          <motion.div
            className="flex min-w-max gap-5 pr-4"
            animate={
              reduceMotion || reviewsPaused
                ? undefined
                : { x: ["0%", "-50%"] }
            }
            transition={
              reduceMotion || reviewsPaused
                ? undefined
                : { duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
            }
          >
            {reviewTrack.map((testimonial, index) => (
              <motion.article
                key={`${testimonial.name}-${index}`}
                className="group flex w-[620px] overflow-hidden rounded-[28px] bg-transparent"
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
              >
                <div className="flex w-[58%] flex-col bg-[#EEF7FA] p-6 text-black md:p-7">
                  <div className="flex gap-1 text-[#F7C948]" aria-label={`${testimonial.rating} star rating`}>
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden />
                    ))}
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-black">{testimonial.title}</h3>
                  <blockquote className="mt-4 text-base font-medium leading-8 text-white/88">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                  <div className="mt-auto flex items-center gap-2 pt-6">
                    <PawPrint className="h-4 w-4 text-brand" aria-hidden />
                    <div>
                      <p className="text-sm font-black text-black">{testimonial.name}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-white/62">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                <div className="relative w-[42%] overflow-hidden bg-[#fff]">
                  <motion.div whileHover={reduceMotion ? undefined : { scale: 1.04 }} transition={{ duration: 0.35, ease: "easeOut" }} className="h-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      width={520}
                      height={520}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  {/* <button
                    type="button"
                    aria-label={`Open review from ${testimonial.name}`}
                    className="focus-ring absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand transition hover:bg-brand hover:text-white"
                  >
                    <Plus className="h-5 w-5" aria-hidden />
                  </button> */}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

      </div>
    </SectionReveal>
  );
}
