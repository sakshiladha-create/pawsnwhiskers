import { ExternalLink, PlayCircle } from "lucide-react";
import { petVideo } from "@/data/about-data";
import { SectionReveal } from "@/components/home/section-reveal";
import Link from "next/link";
import Image from "next/image";

export function PetVideoSection() {
  return (
    <SectionReveal className="container-px py-12">
      <div className="grid items-center gap-6 rounded-[34px] bg-ink p-5 text-white shadow-soft lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
        <div className="relative overflow-hidden rounded-[28px] bg-black">
          <Image
            src={petVideo.poster}
            alt="Pet family lifestyle preview"
            width={1200}
            height={675}
            className="aspect-video w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          <Link
            href={petVideo.videoPageUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring absolute inset-0 flex items-center justify-center"
            aria-label="Open Pexels pet lifestyle video"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/92 text-brand shadow-soft transition hover:scale-105">
              <PlayCircle className="h-10 w-10" aria-hidden />
            </span>
          </Link>
        </div>
        <div className="p-3 lg:p-8">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
            <PlayCircle className="h-7 w-7" aria-hidden />
          </span>
          <p className="mt-7 text-sm font-black uppercase tracking-[0.16em] text-brand">{petVideo.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">{petVideo.title}</h2>
          <p className="mt-4 text-base font-semibold leading-7 text-white/70">{petVideo.copy}</p>
          <Link
            href={petVideo.videoPageUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-brand hover:text-white"
          >
            Watch on Pexels
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </SectionReveal>
  );
}
