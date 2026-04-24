import Image from "next/image";
import Link from "next/link";
import { midPromos } from "@/data/home-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function PromoBanners() {
  const [large, ...smallPromos] = midPromos;

  return (
    <SectionReveal className="container-px py-12">
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">

      <div className="grid gap-5">
          {smallPromos.map((promo, index) => (
            <Link
              key={promo.title}
              href={promo.href}
              className={`focus-ring group relative min-h-[220px] overflow-hidden rounded-[30px] p-7 shadow-card ${index === 0 ? "bg-skysoft text-ink" : "bg-ink text-white"}`}
            >
              <Image src={promo.image} alt="" width={700} height={420} className="absolute -right-8 bottom-0 h-full w-1/2 object-cover opacity-72 transition duration-500 group-hover:scale-105" />
              <div className="relative z-10 max-w-[58%]">
                <h3 className="text-3xl font-black leading-tight">{promo.title}</h3>
                <p className={`mt-3 text-sm font-semibold leading-6 ${index === 0 ? "text-ink/62" : "text-white/70"}`}>{promo.copy}</p>
                <span className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-black text-white transition group-hover:bg-white group-hover:text-ink">
                  {promo.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link href={large.href} className="focus-ring group relative min-h-[460px] overflow-hidden rounded-[34px] bg-brand p-8 text-white shadow-soft md:p-10">
          <Image src={large.image} alt="" width={1000} height={760} className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/82 to-transparent" />
          <div className="relative z-10 max-w-lg">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-white/72">Fresh pantry picks</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">{large.title}</h2>
            <p className="mt-4 text-base font-semibold leading-7 text-white/80">{large.copy}</p>
            <span className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-ink transition group-hover:bg-ink group-hover:text-white">
              {large.cta}
            </span>
          </div>
        </Link>
      </div>
    </SectionReveal>
  );
}
