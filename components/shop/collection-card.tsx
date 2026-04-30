import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ShopCollection } from "@/data/shop-data";

export function CollectionCard({ collection }: { collection: ShopCollection }) {
  return (
    <Link
      href={`/category/${collection.categorySlug}/${collection.subcategorySlug}`}
      className="focus-ring group overflow-hidden rounded-[30px] bg-white p-3 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="overflow-hidden rounded-[24px] bg-cream">
        <Image
          src={collection.image}
          alt={collection.alt}
          width={900}
          height={640}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-3 pt-5">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-brand">{collection.categoryTitle}</p>
        <h3 className="mt-2 text-2xl font-black text-ink">{collection.title}</h3>
        <p className="mt-3 min-h-12 text-sm font-semibold leading-6 text-ink/60">{collection.description}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-sm font-black text-ink/55">{collection.productCount} products</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-black text-ink transition group-hover:bg-brand group-hover:text-white">
            View Collection
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
