"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PawPrint, Play } from "lucide-react";
import Image from "next/image";
import { SectionReveal } from "@/components/home/section-reveal";

const stats = [
  { value: "120+", label: "ESSENTIALS" },
  { value: "15+", label: "QUALIFIED TRAINERS" },
  { value: "20k", label: "GRATEFUL CLIENTS" }
];

function DogImageDoodle({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      className="relative h-[96px] w-[128px] md:h-[128px] md:w-[170px]"
      aria-hidden
      animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/images/dog-img-png.png"
        alt=""
        fill
        sizes="(min-width: 768px) 170px, 128px"
        className="object-contain"
      />
    </motion.div>
  );
}

function BoneDoodle() {
  return (
    <svg width="100" height="100" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="boneFill" x1="45" y1="175" x2="175" y2="35" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.55" stop-color="#fffdf4"/>
      <stop offset="1" stop-color="#ffffff"/>
    </linearGradient>
  </defs>

  <path
    d="M55 161
       C45 169 30 169 21 159
       C9 146 15 124 33 118
       C42 115 51 117 58 122
       C83 102 105 77 124 50
       C119 39 122 25 132 18
       C146 8 167 15 173 31
       C176 38 176 46 173 53
       C180 50 189 50 197 55
       C213 64 216 87 204 101
       C193 114 174 115 162 105
       C137 125 115 150 96 177
       C101 189 97 203 86 210
       C72 219 52 212 46 196
       C42 185 46 172 55 161 Z"
    fill="url(#boneFill)"
    stroke="#111111"
    stroke-width="7"
    stroke-linejoin="round"
    stroke-linecap="round"
  />

  <path
    d="M73 169
       C90 130 119 94 151 67"
    fill="none"
    stroke="#e6e6e6"
    stroke-width="10"
    stroke-linecap="round"
    opacity="0.8"
  />

  <path
    d="M42 138
       C32 139 26 146 25 154"
    fill="none"
    stroke="#ffffff"
    stroke-width="7"
    stroke-linecap="round"
    opacity="0.9"
  />

  <path
    d="M140 31
       C150 22 163 26 165 38"
    fill="none"
    stroke="#ffffff"
    stroke-width="7"
    stroke-linecap="round"
    opacity="0.9"
  />

  <path
    d="M170 66
       C182 57 195 60 199 72"
    fill="none"
    stroke="#ffffff"
    stroke-width="7"
    stroke-linecap="round"
    opacity="0.9"
  />

  <path
    d="M61 185
       C69 193 82 192 88 184"
    fill="none"
    stroke="#eeeeee"
    stroke-width="5"
    stroke-linecap="round"
    opacity="0.9"
  />

  <path
    d="M82 148 C75 153 71 160 69 168"
    fill="none"
    stroke="#111111"
    stroke-width="4"
    stroke-linecap="round"
  />

  <path
    d="M148 83 C140 88 134 96 131 104"
    fill="none"
    stroke="#111111"
    stroke-width="4"
    stroke-linecap="round"
  />
</svg>
  );
}

function CircularBadge({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full border border-black/10 bg-white md:h-[105px] md:w-[105px]">
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path id="know-us-badge-path" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text fill="#3A302C" fontSize="8" fontWeight="900" letterSpacing="1.65">
          <textPath href="#know-us-badge-path" startOffset="0%">
            THE PET STORE FOR PET PARENTS
          </textPath>
        </text>
      </motion.svg>
      <span className="absolute right-[11px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full " />
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3A302C] text-white md:h-12 md:w-12">
        <svg viewBox="0 0 36 36" className="h-6 w-6" fill="none" aria-hidden>
          <path d="M18 9v12M13 15c0 4 2 7 5 7s5-3 5-7" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
          <circle cx="12" cy="9" r="3" fill="currentColor" />
          <circle cx="24" cy="9" r="3" fill="currentColor" />
          <circle cx="18" cy="6" r="2.5" fill="currentColor" />
          <path d="M10 25c4 4 12 4 16 0" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
        </svg>
      </span>
    </div>
  );
}

function Signature() {
  return (
    <svg viewBox="0 0 160 62" className="h-auto w-[94px]" fill="none" aria-label="Signature">
      <path
        d="M4 49c24-31 43-38 32-10-8 21-23 14-8 0 21-20 29-31 25-15-4 17-3 23 7 4 6-12 13-16 14-5 1 12-8 25-1 16 10-12 18-35 18-35 0 0-9 44 5 35 7-4 8-13 16-15 11-4 12 10 2 14-11 5-18-1-14-10 8-16 24 7 38 1 8-3 10-8 16-11"
        stroke="#3A302C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function PetMoodPattern() {
  return (
    <svg className="h-full w-full" width="100%" height="100%" preserveAspectRatio="none" aria-hidden>
      <defs>
        <pattern id="know-us-pet-mood-pattern" width="140" height="120" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#3A302C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" opacity="0.9">
            <circle cx="18" cy="20" r="2" />
            <circle cx="24" cy="16" r="2" />
            <circle cx="30" cy="20" r="2" />
            <path d="M20 28c3-3 7-3 10 0 1.5 3-1.5 5-5 5s-6.5-2-5-5Z" />
            <path d="M100 18c-2-2-5-.5-5 2-2-1.5-5 1.5-3.5 3.5l-8 8c-2-1.5-5 1.5-3.5 3.5-2 .5-2.5 3.5-.5 5.5s4.5.5 5-1.5c2 1.5 5-1.5 3.5-3.5l8-8c2 1.5 5-1.5 3.5-3.5 2-.5 2.5-3.5.5-5.5Z" />
            <path d="M22 70c0-3 4-4 6-1 2-3 6-2 6 1 0 4.5-6 8-6 8s-6-3.5-6-8Z" />
            <path d="M95 70c7-3 14-3 20 0-6 3-13 3-20 0Z" />
            <path d="M115 70l6-4v8l-6-4Z" />
            <path d="M30 100c6-6 12 6 18 0" />
            <circle cx="105" cy="100" r="5" />
            <path d="M101 96c2 2 3 4 5 7" />
            <circle cx="70" cy="40" r="1.2" fill="#3A302C" stroke="none" />
            <circle cx="50" cy="90" r="1" fill="#3A302C" stroke="none" />
            <circle cx="120" cy="50" r="1" fill="#3A302C" stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#know-us-pet-mood-pattern)" />
    </svg>
  );
}

export function KnowUsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="relative overflow-hidden bg-[#445B81] py-20 md:pb-[110px] md:pt-[105px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-20 overflow-hidden" aria-hidden>
        <svg viewBox="0 0 1440 120" className="h-full w-full fill-white" preserveAspectRatio="none">
          <path d="M0,80 C200,120 400,0 700,60 C1000,110 1200,40 1440,70 L1440,0 L0,0 Z" />
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-20 overflow-hidden" aria-hidden>
        <svg viewBox="0 0 1440 120" className="h-full w-full fill-white" preserveAspectRatio="none">
          <path d="M0,50 C240,10 440,110 720,70 C980,40 1200,20 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
      <div className="pointer-events-none absolute left-[-8%] top-[18%] z-0 h-72 w-72 rounded-full bg-[#DA8A70]/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-[-10%] bottom-[18%] z-0 h-80 w-80 rounded-full bg-[#445B81]/10 blur-3xl" aria-hidden />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[60px] z-0 -translate-x-1/2 text-[#D8D4CD] opacity-[0.38]"
        aria-hidden
        animate={reduceMotion ? undefined : { scale: [1, 1.05, 1], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <PawPrint className="h-[150px] w-[150px] fill-current md:h-[190px] md:w-[190px]" />
      </motion.div>

      <div className="container-px relative z-10 overflow-hidden">
        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,34%)_minmax(0,34%)_minmax(0,32%)]">
          <div>
            <p className="mb-[18px] text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#DA8A70]">KNOW US</p>
            <h2
              className="mb-10 max-w-[620px] text-[30px] font-black leading-[1.18] text-[#fff] md:mb-[72px] md:text-[36px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Making Happy Pet Moments And Accepting Love Every Day
            </h2>

            <motion.div
              className="relative"
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >

              <div className="relative h-[340px] w-full overflow-hidden rounded-[28px] md:h-[470px]">
                <Image
                  src="https://images.pexels.com/photos/5993626/pexels-photo-5993626.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Dog face close-up being gently petted"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute left-0 top-0 z-20 h-[90px] w-[140px] rounded-br-[48px] bg-[#445b81]  md:h-[125px] md:w-[130px] md:rounded-br-[64px]" />
              <div className="absolute left-0 top-[-6px] z-20 md:top-[-6px]">
                <CircularBadge reduceMotion={Boolean(reduceMotion)} />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="pt-0 lg:pt-[205px]"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h3
              className="mb-7 max-w-[560px] text-[28px] font-white leading-[1.18] text-brand"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              &quot;Treasure Pet Moments With Unending Love, Joy, and Handling Gentle&quot;
            </h3>
            <div className="max-w-[560px] space-y-[22px] text-[16px] font-bold leading-[1.7] text-[#fff]">
              <p>Selecting a cat or dog as a pet depends on individual preference or intent. Both can become wonderful companions.</p>
              <p>
                Vitae pellentesque sem placerat in id cursus mi. Eu aenean sed diam urna tempor pulvinar vivamus. Iaculis massa nisl
                malesuada lacinia integer nunc posuere.
              </p>
            </div>

            <div className="mt-[52px] grid grid-cols-3 gap-5 md:gap-[35px]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[36px] font-black leading-none text-[#fff] md:text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.04em] text-brand md:text-[13px]">{stat.label}</p>
                </div>
              ))}
            </div>

          </motion.div>

          <motion.div
            className="relative mt-0 lg:mt-12"
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="relative h-[420px] md:h-[560px]">
              <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] md:h-[560px]">
                <Image
                  src="https://images.pexels.com/photos/8606146/pexels-photo-8606146.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Two happy dogs sitting together"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute left-0 top-0 z-20 h-[90px] w-[140px] rounded-br-[48px] bg-[#445b81] md:h-[125px] md:w-[205px] md:rounded-br-[64px]" />
              </div>

              <div className="absolute left-[15px] top-0 z-30 md:top-[-18px]">
                <DogImageDoodle reduceMotion={Boolean(reduceMotion)} />
              </div>

              <motion.button
                type="button"
                aria-label="Play our story video"
                className="absolute bottom-[-12px] right-[-17px] z-30 flex h-[72px] w-[72px] items-center justify-center rounded-full border-[8px] border-[#445b81] bg-[#EA7A18] text-white md:h-[96px] md:w-[96px] md:border-[10px]"
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              >
                <BoneDoodle />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}
