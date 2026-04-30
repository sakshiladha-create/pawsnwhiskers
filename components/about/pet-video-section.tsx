"use client";

import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { petVideo } from "@/data/about-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function PetVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <SectionReveal className="relative overflow-hidden bg-[#445B81] py-24">
      {/* TOP WAVE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-20 overflow-hidden" aria-hidden>
        <svg viewBox="0 0 1440 120" className="h-full w-full fill-[#fff]" preserveAspectRatio="none">
          <path d="M0,80 C200,120 400,0 700,60 C1000,110 1200,40 1440,70 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* BOTTOM WAVE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-20 overflow-hidden" aria-hidden>
        <svg viewBox="0 0 1440 120" className="h-full w-full fill-[#fff]" preserveAspectRatio="none">
          <path d="M0,50 C240,10 440,110 720,70 C980,40 1200,20 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* DOODLE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]" aria-hidden="true">
        <svg className="h-full w-full" width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <pattern id="pet-video-pattern" width="140" height="120" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
                {/* PAW (top left) */}
                <circle cx="18" cy="20" r="2" />
                <circle cx="24" cy="16" r="2" />
                <circle cx="30" cy="20" r="2" />
                <path d="M20 28c3-3 7-3 10 0 1.5 3-1.5 5-5 5s-6.5-2-5-5Z" />

                {/* BONE (top right) */}
                <path d="M100 18c-2-2-5-.5-5 2-2-1.5-5 1.5-3.5 3.5l-8 8c-2-1.5-5 1.5-3.5 3.5-2 .5-2.5 3.5-.5 5.5s4.5.5 5-1.5c2 1.5 5-1.5 3.5-3.5l8-8c2 1.5 5-1.5 3.5-3.5 2-.5 2.5-3.5.5-5.5Z" />

                {/* HEART (middle left) */}
                <path d="M22 70c0-3 4-4 6-1 2-3 6-2 6 1 0 4.5-6 8-6 8s-6-3.5-6-8Z" />

                {/* FISH (middle right) */}
                <path d="M95 70c7-3 14-3 20 0-6 3-13 3-20 0Z" />
                <path d="M115 70l6-4v8l-6-4Z" />

                {/* SQUIGGLE (bottom left) */}
                <path d="M30 100c6-6 12 6 18 0" />

                {/* BALL (bottom right) */}
                <circle cx="105" cy="100" r="5" />
                <path d="M101 96c2 2 3 4 5 7" />

                {/* DOTS scattered */}
                <circle cx="70" cy="40" r="1.2" fill="#fff" stroke="none" />
                <circle cx="50" cy="90" r="1" fill="#fff" stroke="none" />
                <circle cx="120" cy="50" r="1" fill="#fff" stroke="none" />
              </g>
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#pet-video-pattern)" />
        </svg>
      </div>

      <div className="container-px relative z-10">
        <div className="grid items-center gap-6 rounded-[34px] bg-[#ffffff]/15 border-slate-50 p-5 text-white shadow-soft lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
        
        {/* VIDEO SECTION */}
        <div className="relative overflow-hidden rounded-[28px] bg-black">
          
          {/* Poster (only shown before play) */}
          {!isPlaying && (
            <>
              <Image
                src={petVideo.poster}
                alt="Pet family lifestyle preview"
                width={1200}
                height={675}
                className="aspect-video w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

              {/* Play Button */}
              <button
                onClick={handlePlay}
                className="focus-ring absolute inset-0 flex items-center justify-center"
                aria-label="Play pet lifestyle video"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/92 text-brand shadow-soft transition hover:scale-105">
                  <PlayCircle className="h-10 w-10" aria-hidden />
                </span>
              </button>
            </>
          )}

          {/* Local Video */}
          <video
            ref={videoRef}
            src="/videos/about-pet-video.mp4"
            className={`aspect-video w-full object-cover ${
              isPlaying ? "block" : "hidden"
            }`}
            muted
            loop
            playsInline
            controls
          />
        </div>

        {/* CONTENT */}
        <div className="p-3 lg:p-8">
          {/* <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
            <PlayCircle className="h-7 w-7" aria-hidden />
          </span> */}

          <p className="mt-7 text-sm font-black uppercase tracking-[0.16em] text-brand">
            {petVideo.eyebrow}
          </p>

          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            {petVideo.title}
          </h2>

          <p className="mt-4 text-base font-semibold leading-7 text-white/70">
            {petVideo.copy}
          </p>

          {/* UPDATED BUTTON */}
          <a
            href="/contact-us"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-brand hover:text-white"
          >
            Contact Us
          </a>
        </div>
        </div>
      </div>
    </SectionReveal>
  );
}
