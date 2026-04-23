import { contactFaqs } from "@/data/contact-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function ContactFaqStrip() {
  return (
    <SectionReveal className="container-px py-12">
      <div className="rounded-[34px] bg-[#FBE4D7] p-6 shadow-soft md:p-8">
        <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Quick help</p>
            <h2 className="mt-2 text-4xl font-black text-ink">Before you send</h2>
          </div>
          <p className="max-w-md text-sm font-semibold leading-6 text-ink/62">
            A few fast answers for common contact questions.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactFaqs.map((faq) => {
            const Icon = faq.icon;
            return (
              <article key={faq.question} className="rounded-[24px] bg-white p-5 shadow-card">
                <Icon className="h-6 w-6 text-brand" aria-hidden />
                <h3 className="mt-4 text-lg font-black text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink/62">{faq.answer}</p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
