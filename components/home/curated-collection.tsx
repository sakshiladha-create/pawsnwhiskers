import Image from "next/image";
import Link from "next/link";
import { curatedCollections } from "@/data/home-data";
import { ProductCard } from "@/components/home/product-card";
import { SectionReveal } from "@/components/home/section-reveal";

type CuratedCollectionProps = {
  variant: "kittens" | "puppies";
};

export function CuratedCollection({ variant }: CuratedCollectionProps) {
  const collection = curatedCollections[variant];

  return (
    <SectionReveal className="container-px py-12">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="relative overflow-hidden rounded-[34px] bg-ink p-8 text-white shadow-soft md:p-10">
          <Image src={collection.image} alt={collection.eyebrow} width={900} height={760} className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/72 to-transparent" />
          <div className="relative z-10 max-w-md">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-peach">{collection.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">{collection.title}</h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/75">{collection.copy}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {collection.links.map((link) => (
                <Link key={link} href="/shop" className="focus-ring rounded-full bg-white/12 px-4 py-2 text-sm font-black transition hover:bg-brand">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </article>
        <div className="grid gap-5 md:grid-cols-3">
          {collection.products.map((product) => (
            <ProductCard key={`${variant}-${product.title}`} product={product} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
