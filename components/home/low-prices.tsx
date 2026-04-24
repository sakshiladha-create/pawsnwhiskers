"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { lowPricePromos } from "@/data/home-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function LowPrices() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="container-px py-12">
      <div className="mb-8 text-center">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Everyday Low Prices</p>
        <h2 className="mt-2 text-4xl font-black text-[#4C6795] md:text-5xl">Little prices, big tail wags</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {lowPricePromos.map((promo) => (
          <motion.article
            key={promo.title}
            className={`${promo.bg} group relative min-h-[285px] overflow-hidden rounded-[30px] p-6 shadow-card`}
            whileHover={reduceMotion ? undefined : { y: -7 }}
          >
            <div className="relative z-10 max-w-[70%]">
              <h3 className="text-2xl font-black leading-tight text-ink">{promo.title}</h3>
              <p className="mt-2 text-sm font-bold text-ink/62">{promo.copy}</p>
              <p className="mt-5 text-xl font-black text-brand">{promo.price}</p>
              <Link href="/shop" className="focus-ring mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-black text-ink shadow-card transition hover:bg-ink hover:text-white">
                Shop Now
              </Link>
            </div>
            <Image
              src={promo.image}
              alt=""
              width={420}
              height={420}
              className="absolute -bottom-8 -right-10 h-44 w-48 rounded-[26px] object-cover shadow-soft transition duration-500 group-hover:scale-105"
            />
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  );
}
