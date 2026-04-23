"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";

export type Product = {
  title: string;
  category: string;
  price: string;
  oldPrice: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  tag: string;
};

export function ProductCard({ product }: { product: Product }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="pet-card group overflow-hidden p-4"
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-[24px] bg-cream">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-black text-white">
          {product.tag}
        </span>
        <Image
          src={product.image}
          alt={product.title}
          width={620}
          height={500}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pt-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-brand">{product.category}</p>
          <p className="flex items-center gap-1 text-xs font-black text-ink/62">
            <Star className="h-4 w-4 fill-brand text-brand" aria-hidden />
            {product.rating} ({product.reviews})
          </p>
        </div>
        <h3 className="text-xl font-black leading-tight text-ink">{product.title}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-ink/62">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-lg font-black text-ink">
            {product.price}
            <span className="ml-2 text-sm text-ink/35 line-through">{product.oldPrice}</span>
          </p>
          <button type="button" className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition hover:bg-brand" aria-label={`Add ${product.title} to cart`}>
            <ShoppingBag className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
