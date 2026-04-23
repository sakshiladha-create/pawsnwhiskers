import { contactCards } from "@/data/contact-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function ContactInfoCards() {
  return (
    <SectionReveal className="container-px py-10">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {contactCards.map((card) => {
          const Icon = card.icon;
          const content = (
            <article className="h-full rounded-[28px] bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-brand">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="mt-5 text-xl font-black text-ink">{card.title}</h2>
              <p className="mt-2 text-sm font-bold leading-6 text-ink/62">{card.content}</p>
            </article>
          );

          return card.href ? (
            <a key={card.title} href={card.href} className="focus-ring block">
              {content}
            </a>
          ) : (
            <div key={card.title}>{content}</div>
          );
        })}
      </div>
    </SectionReveal>
  );
}
