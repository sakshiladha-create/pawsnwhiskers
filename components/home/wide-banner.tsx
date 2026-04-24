import { ArrowRight, PawPrint } from "lucide-react";
import Link from "next/link";
import { SectionReveal } from "@/components/home/section-reveal";

export function WideBanner() {
  return (
    <SectionReveal className="relative w-full py-6">
      <section className="relative min-h-[420px] overflow-hidden md:min-h-[500px]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
          aria-hidden
        />

        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(10,12,18,0.45)_0%,rgba(10,12,18,0.56)_100%)]" aria-hidden />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 overflow-hidden" aria-hidden>
          <svg viewBox="0 0 1440 160" className="h-full w-full" preserveAspectRatio="none">
            <path
              d="M0,45 C130,56 252,34 386,48 C522,62 626,26 760,34 C888,42 1018,20 1160,28 C1280,34 1364,44 1440,36 L1440,0 L0,0 Z"
              fill="#FFFDF8"
            />
            <path
              d="M0,46 C118,56 258,31 392,46 C518,60 640,25 770,34 C906,43 1040,19 1172,27 C1292,34 1372,43 1440,38"
              fill="none"
              stroke="#1A2A2A"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path d="M28,50 96,48 M214,44 270,41 M470,43 534,39 M824,35 886,33 M1168,31 1248,33 M1330,37 1392,39" fill="none" stroke="#1A2A2A" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 overflow-hidden" aria-hidden>
          <svg viewBox="0 0 1440 160" className="h-full w-full" preserveAspectRatio="none">
            <path
              d="M0,120 C132,98 258,136 396,118 C520,102 650,92 768,106 C906,122 1020,136 1148,122 C1260,110 1354,108 1440,120 L1440,160 L0,160 Z"
              fill="#FFFDF8"
            />
            <path
              d="M0,119 C126,98 264,134 402,116 C540,98 650,94 776,107 C900,120 1038,136 1162,122 C1278,108 1364,109 1440,121"
              fill="none"
              stroke="#1A2A2A"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path d="M22,122 92,116 M222,126 286,121 M528,108 598,105 M760,108 838,111 M1060,126 1140,123 M1280,117 1376,121" fill="none" stroke="#1A2A2A" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative z-30 flex min-h-[420px] items-center justify-center px-6 py-24 text-center md:min-h-[500px] md:px-10">
          <div className="max-w-[720px]">
            <h2 className="mx-auto max-w-[14ch] text-4xl font-black leading-tight text-white md:text-6xl">
              Save more on bowls, beds, toys, and treats.
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-base font-medium leading-8 text-white/90 md:text-lg">
              Bundle your pet&apos;s everyday essentials and unlock exclusive auto-delivery discounts.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Link
                href="/shop"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-black text-white transition hover:bg-[#4C6795]"
              >
                Shop Savings
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <PawPrint className="absolute left-1/2 top-[19%] z-30 ml-52 hidden h-7 w-7 text-[#9B6DF3] md:block" aria-hidden />
      </section>
    </SectionReveal>
  );
}
