import { Sparkles } from "lucide-react";
import { SectionReveal } from "@/components/home/section-reveal";

export function BlogHero() {
  return (
    <SectionReveal className="w-full px-4 pt-6">
      <section className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#FFF7F0_0%,#F8D8C8_48%,#DDEFF7_100%)] px-6 py-12 shadow-soft md:px-10 md:py-14 lg:px-14">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-brand shadow-card">
            <Sparkles className="h-4 w-4" aria-hidden />
            Pet Journal
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[0.95] text-ink md:text-5xl">Pet Care Tips & Insights</h1>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-ink/68 md:text-lg">
            Helpful reads on cats, dogs, food, grooming, toys, travel carriers, and the little routines that make pet life easier and brighter.
          </p>
        </div>
      </section>
    </SectionReveal>
  );
}
