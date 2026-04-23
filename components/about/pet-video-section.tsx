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
    <SectionReveal className="container-px py-12">
      <div className="grid items-center gap-6 rounded-[34px] bg-ink p-5 text-white shadow-soft lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
        
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
    </SectionReveal>
  );
}