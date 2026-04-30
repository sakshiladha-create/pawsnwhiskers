"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PawPrint, Play } from "lucide-react";
import Image from "next/image";
import { SectionReveal } from "@/components/home/section-reveal";

const stats = [
  { value: "120+", label: "ESSENTIALS" },
  { value: "15+", label: "QUALIFIED TRAINERS" },
  { value: "20k", label: "GRATEFUL CLIENTS" },
];

function DogDoodle() {
  return (
    <svg viewBox="0 0 260 130" className="h-auto w-[150px] md:w-[168px]" fill="none" aria-hidden>
      <path d="M28 83C26 60 43 38 72 31C93 26 112 31 126 42" stroke="#8B4A16" strokeWidth="4" strokeLinecap="round" />
      <path d="M116 39L107 12L132 22L138 48" fill="#B96520" />
      <path d="M168 39L184 14L202 29L194 52" fill="#B96520" />
      <path
        d="M35 84C66 92 121 92 172 86C204 82 221 69 218 50C215 31 191 25 158 32C141 13 108 7 78 17C54 25 38 42 32 62C16 65 10 79 17 91C23 101 37 106 55 104H188"
        fill="#BF6D24"
      />
      <path d="M69 92V120" stroke="#BF6D24" strokeWidth="6" strokeLinecap="round" />
      <path d="M130 91V120" stroke="#BF6D24" strokeWidth="6" strokeLinecap="round" />
      <path d="M190 86V120" stroke="#BF6D24" strokeWidth="6" strokeLinecap="round" />
      <circle cx="166" cy="51" r="3.5" fill="#3A302C" />
      <path d="M178 65C169 72 157 72 149 65" stroke="#3A302C" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M7 64C1 63 -1 69 4 73" stroke="#8B5A2B" strokeWidth="3" strokeLinecap="round" />
      <path d="M239 48C248 46 254 51 250 57" stroke="#8B5A2B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function BoneDoodle() {
  return (
    <svg viewBox="0 0 140 100" className="h-auto w-[118px] md:w-[136px]" fill="none" aria-hidden>
      <path
        d="M31 24C22 14 9 18 7 29C5 38 10 46 20 49C11 52 7 62 12 71C17 82 32 80 39 70C45 80 58 82 67 74L100 50C108 43 109 31 101 23C108 13 104 3 93 3C84 3 78 8 74 18C68 8 56 6 47 14L13 39"
        stroke="#DA8A70"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </svg>
  );
}

function Badge() {
  return (
    <div className="relative flex h-[86px] w-[86px] items-center justify-center rounded-full bg-white ring-1 ring-black/10 shadow-sm md:h-[106px] md:w-[106px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <path d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" id="badge-circle-text" />
        </defs>
        <text fill="#3A302C" fontSize="8.4" fontWeight="800" letterSpacing="1.4">
          <textPath href="#badge-circle-text" startOffset="0%">
            THE PET STORE FOR PET PARENTS
          </textPath>
        </text>
      </svg>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3A302C] text-white md:h-12 md:w-12">
        <PawPrint className="h-5 w-5 fill-current" aria-hidden />
      </div>
    </div>
  );
}

export function KnowUsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="relative overflow-hidden bg-[#F7F1E8] py-16 md:py-20 lg:py-24">
      {/* Large pale paw exactly behind the center top */}
      <div className="pointer-events-none absolute left-[52%] top-[7%] z-0 -translate-x-1/2 opacity-35" aria-hidden>
        <PawPrint className="h-[150px] w-[150px] text-[#D8D4CD] md:h-[210px] md:w-[210px]" />
      </div>

      {/* Bone doodle near lower center-right */}
      <div className="pointer-events-none absolute bottom-[12%] right-[37%] z-0 rotate-[10deg]" aria-hidden>
        <BoneDoodle />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.9fr_0.95fr] xl:gap-14">
          {/* LEFT COLUMN */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#DA8A70]">
              Know Us
            </p>

            <h2
              className="mt-4 max-w-[650px] text-4xl font-black leading-[1.08] text-[#3A302C] md:text-4xl xl:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Making Happy Pet Moments And Accepting Love Every Day
            </h2>

            <motion.div
              className="relative mt-16 md:mt-20"
              initial={reduceMotion ? false : { opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="absolute left-[8px] top-[-38px] z-20 md:left-5 md:top-[-44px]">
                <Badge />
              </div>

              <div className="overflow-hidden rounded-[32px]">
                <Image
                  src="https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Happy dog being gently petted"
                  width={900}
                  height={900}
                  className="h-[350px] w-full object-cover object-[50%_56%] md:h-[470px]"
                />
              </div>
            </motion.div>
          </div>

          {/* CENTER COLUMN */}
          <motion.div
            className="relative lg:pt-[210px] xl:pt-[220px]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h3
              className="max-w-[560px] text-2xl font-black leading-[1.22] text-[#DA8A70] md:text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              “Treasure Pet Moments With Unending Love, Joy, and Gentle Care”
            </h3>

            <div className="mt-6 max-w-[560px] space-y-6 text-base font-semibold leading-7 text-[#6D6660] md:text-lg">
              <p>
                Selecting the right care for your cat or dog starts with love, patience, and everyday comfort.
                We bring joyful essentials that make pet parenting easier.
              </p>
              <p>
                From nourishing meals to cozy beds, toys, grooming picks, and expert support, everything is
                selected to bring confidence to your pet&apos;s routine.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-5 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl font-black leading-none text-[#0F2A3A] md:text-4xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.1em] text-[#6D6660] md:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="font-serif text-4xl italic leading-none text-[#3A302C] md:text-4xl">
                Paws
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-black">
                <span className="text-[#3A302C]">Kenneth Shih</span>
                <span className="text-[#DA8A70]">(Co-Founder)</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="relative lg:pt-6"
            initial={reduceMotion ? false : { opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-[34px]">
              {/* cream cutout */}
              <div className="absolute left-0 top-0 z-20 h-[92px] w-[145px] rounded-br-[46px] bg-[#F7F1E8] md:h-[130px] md:w-[205px] md:rounded-br-[64px]" />

              {/* dog doodle positioned on the cutout */}
              <div className="absolute left-[36px] top-[-10px] z-30 md:left-[55px] md:top-[-22px]">
                <DogDoodle />
              </div>

              <Image
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Two happy dogs sitting outdoors"
                width={900}
                height={1200}
                className="h-[430px] w-full object-cover object-[52%_center] md:h-[560px]"
              />
            </div>

            <motion.button
              type="button"
              aria-label="Play our story video"
              className="focus-ring absolute bottom-[-12px] right-[-12px] z-30 flex h-[72px] w-[72px] items-center justify-center rounded-full border-[8px] border-[#F7F1E8] bg-[#DA8A70] text-white md:h-[96px] md:w-[96px] md:border-[10px]"
              whileHover={reduceMotion ? undefined : { scale: 1.06 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              <Play className="ml-1 h-7 w-7 fill-current md:h-9 md:w-9" aria-hidden />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}