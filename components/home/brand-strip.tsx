import { brandLogos } from "@/data/home-data";

export function BrandStrip() {
  return (
    <section className="overflow-hidden py-10" aria-label="Featured brands">
      <div className="container-px">
        <div className="rounded-[30px] bg-white py-6 shadow-card overflow-hidden">
          <div className="flex animate-[brand-scroll_24s_linear_infinite] gap-10 whitespace-nowrap px-8">
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <span key={`${brand}-${index}`} className="display-font text-2xl font-black text-ink/42">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes brand-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[brand-scroll_24s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
