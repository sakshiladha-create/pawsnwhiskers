import Image from "next/image";
import Link from "next/link";
import { browseCategories } from "@/data/home-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function BrowseCategories() {
  return (
    <SectionReveal className="relative overflow-hidden bg-[#182030] py-40 md:py-44">

      {/* TOP WAVE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-20 overflow-hidden" aria-hidden>
        <svg viewBox="0 0 1440 120" className="h-full w-full fill-[#FFFDF8]" preserveAspectRatio="none">
          <path d="M0,80 C200,120 400,0 700,60 C1000,110 1200,40 1440,70 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* BOTTOM WAVE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-20 overflow-hidden" aria-hidden>
        <svg viewBox="0 0 1440 120" className="h-full w-full fill-[#FFFDF8]" preserveAspectRatio="none">
          <path d="M0,50 C240,10 440,110 720,70 C980,40 1200,20 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* DOODLE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]" aria-hidden="true">
        <svg
          className="h-full w-full"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <defs>
          <pattern
              id="pet-pattern"
              width="140"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <g
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              >
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

          <rect width="100%" height="100%" fill="url(#pet-pattern)" />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="container-px relative z-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#DA8A70]">
              Browse By Categories
            </p>
            <h2 className="mt-2 text-4xl font-black text-white md:text-5xl">
              Shop by pet mood
            </h2>
          </div>

          <Link
            href="/shop"
            className="focus-ring hidden rounded-full bg-white px-6 py-3 text-sm font-black text-ink transition hover:bg-[#DA8A70] hover:text-white sm:inline-flex"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {browseCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group overflow-hidden rounded-[28px] bg-white p-3 transition hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-[23px]">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={420}
                  height={360}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="px-2 py-4 text-center text-lg font-black text-ink">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}