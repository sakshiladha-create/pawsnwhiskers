"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bone, Cat, Dog, Heart, PawPrint } from "lucide-react";

type PetBackgroundDecorProps = {
  variant?: "hero" | "section" | "warm" | "dark";
  className?: string;
};

function Floating({
  children,
  className,
  duration = 10
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={reduceMotion ? undefined : { y: [0, -8, 0], x: [0, 4, 0] }}
      transition={reduceMotion ? undefined : { duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function FishDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 30c10-12 23-18 38-18 17 0 28 8 36 18-8 10-19 18-36 18-15 0-28-6-38-18Z" />
      <path d="M11 30 2 21v18l9-9Z" />
      <circle cx="59" cy="24" r="2.6" fill="currentColor" stroke="none" />
      <path d="M39 35c4 3 8 4 12 4" />
    </svg>
  );
}

function BallDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <circle cx="40" cy="40" r="26" />
      <path d="M18 40h44" />
      <path d="M40 14c8 6 12 14 12 26S48 60 40 66" />
    </svg>
  );
}

function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 60" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
      <path d="M6 38c18-22 35-22 52 0s34 22 52 0 35-22 58 0" />
    </svg>
  );
}

function Trail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 120" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M8 90c38-70 82-90 130-58 28 18 46 14 74-8" strokeDasharray="8 10" />
    </svg>
  );
}

export function PetBackgroundDecor({ variant = "section", className = "" }: PetBackgroundDecorProps) {
  const palettes = {
    hero: {
      blobA: "bg-[#F8D8C8]/70",
      blobB: "bg-[#BFE7F2]/45",
      blobC: "bg-[#D8C7F2]/45",
      ink: "text-brand/20",
      line: "text-ink/12",
      soft: "text-white/45"
    },
    section: {
      blobA: "bg-[#FFF7F0]",
      blobB: "bg-[#BFE7F2]/24",
      blobC: "bg-[#D8C7F2]/24",
      ink: "text-brand/14",
      line: "text-ink/10",
      soft: "text-[#F7C948]/20"
    },
    warm: {
      blobA: "bg-[#F8D8C8]/35",
      blobB: "bg-[#BFD8A8]/22",
      blobC: "bg-[#F7C948]/16",
      ink: "text-brand/18",
      line: "text-ink/10",
      soft: "text-[#D8C7F2]/24"
    },
    dark: {
      blobA: "bg-white/5",
      blobB: "bg-brand/10",
      blobC: "bg-[#BFE7F2]/8",
      ink: "text-white/8",
      line: "text-white/7",
      soft: "text-brand/18"
    }
  }[variant];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className={`absolute -left-12 top-6 h-40 w-40 rounded-full blur-2xl ${palettes.blobA}`} />
      <div className={`absolute right-8 top-10 h-28 w-28 rounded-full blur-xl ${palettes.blobB}`} />
      <div className={`absolute -bottom-6 left-1/4 h-32 w-32 rounded-full blur-xl ${palettes.blobC}`} />

      <Floating className={`absolute left-6 top-8 hidden md:block ${palettes.ink}`} duration={11}>
        <PawPrint className="h-10 w-10 rotate-[-18deg]" />
      </Floating>
      <Floating className={`absolute right-12 top-14 hidden lg:block ${palettes.line}`} duration={9}>
        <Bone className="h-10 w-10 rotate-12" />
      </Floating>
      <Floating className={`absolute bottom-10 right-8 hidden lg:block ${palettes.line}`} duration={13}>
        <Cat className="h-10 w-10" />
      </Floating>
      <Floating className={`absolute bottom-16 left-10 hidden xl:block ${palettes.ink}`} duration={12}>
        <Dog className="h-10 w-10" />
      </Floating>
      <Floating className={`absolute right-[24%] top-8 hidden lg:block ${palettes.soft}`} duration={8.5}>
        <Heart className="h-6 w-6" />
      </Floating>

      <Trail className={`absolute right-6 top-16 hidden h-24 w-44 md:block ${palettes.line}`} />
      <Squiggle className={`absolute bottom-10 left-1/3 hidden h-10 w-36 lg:block ${palettes.soft}`} />
      <FishDoodle className={`absolute bottom-6 right-[18%] hidden h-10 w-16 lg:block ${palettes.line}`} />
      <BallDoodle className={`absolute left-[16%] top-[42%] hidden h-12 w-12 lg:block ${palettes.soft}`} />
    </div>
  );
}
