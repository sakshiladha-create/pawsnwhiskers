"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { midPromos } from "@/data/home-data";
import { SectionReveal } from "@/components/home/section-reveal";

const promoOrder = [midPromos[1], midPromos[2], midPromos[0]];

const promoStyles = [
  {
    bg: "#F8AD95",
    image:
      "https://images.pexels.com/photos/4588019/pexels-photo-4588019.jpeg?auto=compress&cs=tinysrgb&w=700",
    imageClass: "object-cover object-center",
  },
  {
    bg: "#A6AEF0",
    image:
      "https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=700",
    imageClass: "object-cover object-center",
  },
  {
    bg: "#78C8E2",
    image:
      "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=700",
    imageClass: "object-cover object-center",
  },
];

export function PromoBanners() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="bg-white py-16 md:py-20">
      <div className="container-px">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <p className="inline-block border-b-2 border-[#8DB9FF] text-lg font-black text-[#8DB9FF]">
              Offer For You
            </p>

            <h2
              className="mt-3 text-[2.35rem] font-black leading-tight text-[#4C6795] md:text-[3.2rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Who are waiting for you?
            </h2>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {promoOrder.map((promo, index) => {
              const style = promoStyles[index];

              return (
                <motion.article
                  key={promo.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.42,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={promo.href}
                    className="focus-ring group relative flex h-[320px] overflow-hidden rounded-[26px] no-underline transition hover:-translate-y-1 md:h-[320px]"
                    style={{ backgroundColor: style.bg }}
                  >
                    {/* TEXT */}
                    <div className="relative z-20 flex w-[58%] flex-col justify-center px-8 py-8">
                      {"eyebrow" in promo && promo.eyebrow ? (
                        <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#16365F]">
                          {promo.eyebrow}
                        </p>
                      ) : null}

                      <h3
                        className="max-w-[280px] text-[2rem] font-black leading-[1.05] text-white md:text-[2.25rem]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {promo.title}
                      </h3>

                      <p className="mt-4 max-w-[250px] text-[1rem] font-semibold leading-7 text-white/95">
                        {promo.copy}
                      </p>

                      <span className="mt-6 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-black text-[#DA8A70] transition group-hover:bg-[#4C6795] group-hover:text-white">
                        {promo.cta}
                      </span>
                    </div>

                    {/* IMAGE */}
                    <div className="absolute inset-y-0 right-0 z-10 w-[46%] overflow-hidden">
                      <Image
                        src={style.image}
                        alt={promo.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className={`${style.imageClass} transition duration-500 group-hover:scale-105`}
                      />
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/shop"
              className="focus-ring inline-flex rounded-full bg-[#DA8A70] px-8 py-4 text-base font-bold text-white transition hover:bg-[#4C6795]"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}