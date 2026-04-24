import { collections, shopCategories } from "@/data/shop-data";
import { CollectionCard } from "@/components/shop/collection-card";
import { SectionReveal } from "@/components/home/section-reveal";

export function CollectionGrid() {
  return (
    <div className="container-px py-12">
      {shopCategories.map((category) => (
        <SectionReveal key={category.slug} className="py-6" decorVariant="section">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Collections</p>
              <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">{category.title}</h2>
            </div>
            <p className="max-w-md text-sm font-semibold leading-6 text-ink/60">
              Rounded, playful essentials curated for everyday pet care, comfort, and home life.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {collections
              .filter((collection) => collection.categorySlug === category.slug)
              .map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}
