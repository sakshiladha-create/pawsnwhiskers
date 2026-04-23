import { Award, Star } from "lucide-react";
import { testimonials } from "@/data/home-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function Testimonials() {
  return (
    <SectionReveal className="container-px py-12">
      <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="rounded-[34px] bg-ink p-8 text-white shadow-soft md:p-10">
          <Award className="h-12 w-12 text-brand" aria-hidden />
          <p className="mt-8 text-sm font-black uppercase tracking-[0.16em] text-brand">Loved by pet parents</p>
          <h2 className="mt-3 text-5xl font-black leading-none">4.9/5</h2>
          <p className="mt-4 text-sm font-semibold leading-6 text-white/68">
            Thousands of happy customers choose Paws N Whiskers for polished products and easy service.
          </p>
          <div className="mt-6 flex gap-1 text-brand" aria-label="Five star rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" aria-hidden />
            ))}
          </div>
        </aside>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[30px] bg-white p-6 shadow-card">
              <div className="flex gap-1 text-brand" aria-label={`${testimonial.rating} star rating`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-5 text-base font-bold leading-7 text-ink">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <div className="mt-6">
                <p className="font-black text-ink">{testimonial.name}</p>
                <p className="text-sm font-semibold text-ink/52">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
