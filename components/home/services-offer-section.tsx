"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { HeartPulse, PawPrint, Scissors, ShieldCheck, ShoppingBag, Soup } from "lucide-react";
import Image from "next/image";

const serviceDescription = "Quality essentials chosen to keep pets happy, healthy, and comfortable every day.";

const leftServices = [
  { title: "Pet Food", icon: Soup },
  { title: "Pet Toys", icon: PawPrint },
  { title: "Pet Accessories", icon: ShoppingBag }
];

const rightServices = [
  { title: "Pet Grooming", icon: Scissors },
  { title: "Health & Wellness", icon: HeartPulse },
  { title: "Flea & Tick Care", icon: ShieldCheck }
];

function BrushIcon({ icon: Icon }: { icon: typeof Soup }) {
  return (
    <motion.div
      className="group relative grid h-[86px] w-[86px] shrink-0 place-items-center"
      whileHover={{ scale: 1.06, rotate: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 15 }}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
        <path
          d="M48 8C69 7 90 22 92 45c2 23-13 42-35 47C34 97 12 85 8 62 4 39 16 17 39 10c4-1 7-2 9-2Z"
          fill="#4C6795"
        />
        <path
          d="M28 13c18-11 43-4 55 13M88 39c8 24-9 46-31 52M17 71C5 48 15 24 36 13"
          fill="none"
          stroke="#4C6795"
          strokeLinecap="round"
          strokeWidth="5"
          opacity="0.35"
        />
        <path
          d="M19 25c9-12 29-18 48-11"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeWidth="2.2"
          opacity="0.35"
        />
      </svg>
      <Icon className="relative z-10 h-9 w-9 text-white" strokeWidth={2.4} aria-hidden />
    </motion.div>
  );
}

function ServiceRow({
  service,
  side,
  index
}: {
  service: (typeof leftServices)[number];
  side: "left" | "right";
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      className={`flex items-center gap-6 ${side === "left" ? "lg:justify-end" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.09, ease: "easeOut" }}
    >
      <div className={`order-2 max-w-[330px] text-left ${side === "left" ? "lg:order-1 lg:text-right" : ""}`}>
        <h3 className="text-2xl font-black leading-tight text-[#202020]">{service.title}</h3>
        <p className="mt-4 text-base font-semibold leading-8 text-[#5F5F5F]">{serviceDescription}</p>
      </div>
      <div className={`${side === "left" ? "lg:order-2" : "order-1"}`}>
        <BrushIcon icon={Icon} />
      </div>
    </motion.article>
  );
}

function FloatingShapes({ reduceMotion }: { reduceMotion: boolean }) {
  const float = reduceMotion ? undefined : { y: [0, -14, 0], rotate: [0, 4, 0] };
  const slow: Transition = { duration: 7, repeat: Infinity, ease: "easeInOut" };

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        className="hidden h-[230px] w-[115px] rounded-[34px] bg-[#CFE8F6] md:absolute md:left-[-42px] md:top-[34%] md:block md:-rotate-[20deg]"
        animate={float}
        transition={slow}
      />
      <motion.div
        className="hidden h-[280px] w-[280px] rounded-full bg-[#F8C4B5] lg:absolute lg:right-[-126px] lg:top-[8%] lg:block"
        animate={reduceMotion ? undefined : { y: [0, 16, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span className="absolute left-[9%] top-[25%] h-5 w-5 rounded-full bg-brand/80" animate={float} transition={slow} />
      <motion.span className="absolute left-[13%] top-[63%] text-5xl font-light leading-none text-[#4C6795]" animate={float} transition={slow}>
        +
      </motion.span>
      <motion.span className="absolute right-[17%] top-[23%] text-5xl font-light leading-none text-[#4C6795]" animate={float} transition={slow}>
        +
      </motion.span>
      <motion.svg className="absolute left-[16%] top-[43%] h-12 w-12 text-[#F8C4B5]" viewBox="0 0 64 64" fill="none" animate={float} transition={slow}>
        <path d="M9 16 30 38V16H9Z" fill="currentColor" />
        <path d="M35 26 55 47V26H35Z" fill="currentColor" opacity="0.85" />
      </motion.svg>
      <motion.svg className="absolute right-[9%] top-[48%] h-10 w-10 text-brand" viewBox="0 0 64 64" fill="none" animate={float} transition={slow}>
        <path d="M13 16 50 51V16H13Z" fill="currentColor" />
      </motion.svg>
      <motion.svg className="absolute right-[13%] bottom-[23%] h-12 w-12 text-[#4C6795]" viewBox="0 0 64 64" fill="none" animate={float} transition={slow}>
        <path d="M14 14h32l-1 32L14 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
      </motion.svg>
    </div>
  );
}

export function ServicesOfferSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-24 lg:py-28">
      <FloatingShapes reduceMotion={reduceMotion} />

      <motion.div
        className="container-px relative z-10"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.08em] text-brand">OUR SERVICES</p>
          <h2 className="mt-5 text-4xl font-black leading-none text-[#111] md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
            What We Offer
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1fr_1.05fr_1fr] lg:gap-8">
          <div className="order-2 space-y-10 lg:order-1">
            {leftServices.map((service, index) => (
              <ServiceRow key={service.title} service={service} side="left" index={index} />
            ))}
          </div>

          <motion.div
            className="order-1 mx-auto flex w-full justify-center lg:order-2"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Image
              src="/images/img-1-16_580x.webp"
              alt="Cat and dog sitting together"
              width={650}
              height={560}
              className="max-h-[430px] w-full max-w-[560px] object-contain"
              priority={false}
            />
          </motion.div>

          <div className="order-3 space-y-10">
            {rightServices.map((service, index) => (
              <ServiceRow key={service.title} service={service} side="right" index={index + 3} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
