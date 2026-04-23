"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { galleryItems } from "@/data/home-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function Gallery() {
  const reduceMotion = useReducedMotion();
  const [first, second, large, fourth, fifth, sixth, seventh, eighth, ninth] = galleryItems;

  const cardMotion = reduceMotion ? {} : { whileHover: { y: -6 } };

  const Card = ({
    item,
    className
  }: {
    item: (typeof galleryItems)[number];
    className: string;
  }) => (
    <motion.article className={className} transition={{ duration: 0.2 }} {...cardMotion}>
      <div className="relative h-full overflow-hidden rounded-[28px] bg-white shadow-card">
        <Image
          src={item.image}
          alt={item.alt}
          width={900}
          height={900}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
    </motion.article>
  );

  return (
    <SectionReveal className="container-px py-12">
      <div className="mb-8 text-center">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Pet Gallery</p>
        <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">Daily life, styled for happier pets</h2>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:hidden">
        {galleryItems.map((item) => (
          <Card key={item.title} item={item} className={`${item.size === "large" ? "md:col-span-2 h-[320px] md:h-[430px]" : "h-[280px] md:h-[320px]"}`} />
        ))}
      </div>

      <div className="hidden xl:grid xl:grid-cols-6 xl:grid-rows-2 xl:gap-4">
        <Card item={first} className="col-span-1 row-span-1 h-[280px]" />
        <Card item={second} className="col-span-1 row-span-1 h-[280px]" />
        <Card item={large} className="col-span-2 row-span-2 h-[576px]" />
        <Card item={fourth} className="col-span-1 row-span-1 h-[280px]" />
        <Card item={fifth} className="col-span-1 row-span-1 h-[280px]" />
        <Card item={sixth} className="col-span-1 row-span-1 h-[280px]" />
        <Card item={seventh} className="col-span-1 row-span-1 h-[280px]" />
        <Card item={eighth} className="col-span-1 row-span-1 h-[280px]" />
        <Card item={ninth} className="col-span-1 row-span-1 h-[280px]" />
      </div>
    </SectionReveal>
  );
}
