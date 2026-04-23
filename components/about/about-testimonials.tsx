import { Star } from "lucide-react";
import Image from "next/image";
import { aboutTestimonials } from "@/data/about-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function AboutTestimonials() {
  return (
    <SectionReveal className="container-px py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Happy pet parents</p>
          <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">What pet parents are saying</h2>
        </div>
        <div className="rounded-full bg-white px-5 py-3 font-black text-ink shadow-card">
          <span className="text-brand">4.9/5</span> average rating
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {aboutTestimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-[30px] bg-white p-6 shadow-card">
            <div className="flex gap-1 text-brand" aria-label="Five star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="mt-5 text-base font-bold leading-7 text-ink">&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <div className="mt-6 flex items-center gap-3">
              <Image src={testimonial.avatar} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="font-black text-ink">{testimonial.name}</p>
                <p className="text-sm font-semibold text-ink/52">{testimonial.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
