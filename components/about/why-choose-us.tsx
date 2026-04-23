import Image from "next/image";
import { whyChooseUs } from "@/data/about-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function WhyChooseUs() {
  return (
    <SectionReveal className="container-px py-12">
      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative overflow-hidden rounded-[34px] bg-[#FBE4D7] p-8 shadow-soft md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Why choose us</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-ink md:text-5xl">
            What makes us different from ordinary pet stores.
          </h2>
          <p className="mt-4 text-base font-semibold leading-7 text-ink/62">
            We combine premium merchandising with practical care, friendly guidance, and delivery options that respect busy homes.
          </p>
          <Image
            src="https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt="Dog enjoying pet care"
            width={700}
            height={480}
            className="mt-8 h-72 w-full rounded-[28px] object-cover shadow-card"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[30px] bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-brand">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 text-2xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-ink/62">{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
