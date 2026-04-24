import { products } from "@/data/home-data";
import { ProductCard } from "@/components/home/product-card";
import { SectionReveal } from "@/components/home/section-reveal";

export function BestDeals() {
  return (
    <SectionReveal className="container-px py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Today&apos;s Best Deals</p>
          <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">Cart-worthy pet favorites</h2>
        </div>
        <p className="max-w-lg text-sm font-semibold leading-6 text-ink/60">
          Bright best sellers with premium textures, clean ingredients, and playful details.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </SectionReveal>
  );
}
