import { serviceFeatures } from "@/data/home-data";

export function ServiceFeatures() {
  return (
    <section className="container-px relative z-40 -mt-20 pb-10 md:-mt-24" aria-label="Store services">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
        {serviceFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title} className="flex min-h-[188px] flex-col items-center rounded-[20px] bg-white px-5 py-7 text-center shadow-[0_8px_18px_rgba(17,17,17,0.05)] transition duration-300 hover:-translate-y-1">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center text-[#DA8A70]">
                <Icon className="h-12 w-12" strokeWidth={1.8} aria-hidden />
              </span>
              <div className="mt-4">
                <h2 className="text-3xl font-black leading-none text-[#4C6795]">{feature.title}</h2>
                <p className="mt-3 text-base font-medium leading-8 text-ink/44">{feature.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
