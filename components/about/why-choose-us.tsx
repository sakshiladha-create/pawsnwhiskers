"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { whyChooseUs } from "@/data/about-data";
import { SectionReveal } from "@/components/home/section-reveal";

const cardStyles = [
  {
    cardClassName: "bg-[#FFF2C9]",
    iconClassName: "bg-[#F0A15E]",
    shape: "rounded-[58%_42%_45%_55%/48%_55%_45%_52%]"
  },
  {
    cardClassName: "bg-[#E2F0D4]",
    iconClassName: "bg-[#82C735]",
    shape: "rounded-[62%_38%_55%_45%/44%_58%_42%_56%]"
  },
  {
    cardClassName: "bg-[#F9DDEB]",
    iconClassName: "bg-[#EC4389]",
    shape: "rounded-[45%_55%_62%_38%/58%_40%_60%_42%]"
  },
  {
    cardClassName: "bg-[#E2D8FA]",
    iconClassName: "bg-[#6849D8]",
    shape: "rounded-[50%_50%_40%_60%/60%_40%_60%_40%]"
  }
];

export function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="container-px py-12">
      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative overflow-hidden rounded-[34px] p-8 shadow-soft md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Why choose us</p>
          <h2 className="mt-3 font-black text-[#445b81] text-[2rem] leading-tight md:text-[2.6rem]">
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
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            const style = cardStyles[index % cardStyles.length];

            return (
              <motion.article
                key={item.title}
                className={`${style.cardClassName} flex min-h-[250px] flex-col items-center rounded-[22px] px-8 py-9 text-center transition hover:-translate-y-1`}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <div className={`${style.iconClassName} ${style.shape} flex h-[90px] w-[90px] items-center justify-center transition duration-300`}>
                  <Icon className="h-10 w-10 text-white" aria-hidden />
                </div>

                <h3 className="mt-6 text-[1.65rem] font-black text-[#111111]" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-[15px] font-semibold leading-8 text-[#4B4B4B]">{item.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
