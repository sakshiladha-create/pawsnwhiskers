import { Sparkles } from "lucide-react";
import Link from "next/link";

type ShopHeroProps = {
  title: string;
  copy: string;
  eyebrow?: string;
  compact?: boolean;
};

export function ShopHero({ title, copy, eyebrow = "Pet Shop", compact = false }: ShopHeroProps) {
  return (
    <section className="w-full px-4 pt-6">
      <div className={`relative overflow-hidden rounded-[36px] bg-[#F8D8C8] shadow-soft ${compact ? "p-6 md:p-10" : "p-6 md:p-12 lg:p-16"}`}>
        <div className="relative z-10 max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-brand shadow-card">
            <Sparkles className="h-4 w-4" aria-hidden />
            {eyebrow}
          </p>
          <h1 className={`mt-6 font-black leading-[0.95] text-ink ${compact ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl"}`}>{title}</h1>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-ink/68 md:text-lg">{copy}</p>
          {!compact ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="focus-ring rounded-full bg-brand px-7 py-4 font-black text-white shadow-card transition hover:bg-ink">
                Shop All
              </Link>
              <Link href="/wishlist" className="focus-ring rounded-full bg-white px-7 py-4 font-black text-ink shadow-card transition hover:bg-ink hover:text-white">
                View Wishlist
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
