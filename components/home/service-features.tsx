import { serviceFeatures } from "@/data/home-data";

export function ServiceFeatures() {
  return (
    <section className="container-px py-10" aria-label="Store services">
      <div className="grid gap-4 rounded-[30px] bg-white p-4 shadow-card md:grid-cols-4">
        {serviceFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title} className="flex items-center gap-4 rounded-[24px] bg-cream px-5 py-6">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h2 className="text-base font-black text-ink">{feature.title}</h2>
                <p className="mt-1 text-sm font-semibold text-ink/58">{feature.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
