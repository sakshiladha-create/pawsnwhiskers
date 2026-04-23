import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { brandStory, storyHighlights } from "@/data/about-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function BrandStory() {
  return (
    <SectionReveal className="container-px py-12">
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">{brandStory.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-ink md:text-5xl">{brandStory.title}</h2>
          <div className="mt-6 space-y-4 text-base font-semibold leading-8 text-ink/64">
            {brandStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {storyHighlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-black text-ink shadow-card">
                <CheckCircle2 className="h-5 w-5 text-brand" aria-hidden />
                {highlight}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-mint" />
          <Image
            src={brandStory.image}
            alt={brandStory.alt}
            width={900}
            height={760}
            className="relative h-[520px] w-full rounded-[34px] object-cover shadow-soft"
          />
        </div>
      </div>
    </SectionReveal>
  );
}
