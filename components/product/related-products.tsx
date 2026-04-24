import type { ShopProduct } from "@/data/shop-data";
import { ProductCard } from "@/components/shop/product-card";
import { SectionReveal } from "@/components/home/section-reveal";

export function RelatedProducts({ products }: { products: ShopProduct[] }) {
  if (!products.length) return null;

  return (
    <SectionReveal className="container-px py-12">
      <div className="mb-8">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Related products</p>
        <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">You may also like</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionReveal>
  );
}
