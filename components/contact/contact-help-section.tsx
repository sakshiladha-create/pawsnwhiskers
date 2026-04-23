import { helpCards } from "@/data/contact-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function ContactHelpSection() {
  return (
    <SectionReveal className="container-px py-12">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">How we can help</p>
        <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">Support for shopping, orders, and pet questions.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {helpCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="rounded-[30px] bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FBE4D7] text-brand">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-black text-ink">{card.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-ink/62">{card.copy}</p>
            </article>
          );
        })}
      </div>
    </SectionReveal>
  );
}
