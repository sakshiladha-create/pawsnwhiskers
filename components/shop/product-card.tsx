"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency, getDisplayPrice, type ShopProduct } from "@/data/shop-data";
import { useShop } from "@/context/shop-context";

export function ProductCard({ product }: { product: ShopProduct }) {
  const reduceMotion = useReducedMotion();
  const { addToCart, isInWishlist, toggleWishlist } = useShop();
  const wished = isInWishlist(product.id);

  return (
    <motion.article
      className="group overflow-hidden rounded-[30px] bg-white p-4 shadow-card"
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-[24px] bg-cream">
        {product.salePrice ? (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-black text-white">
            Sale
          </span>
        ) : null}
        {!product.inStock ? (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-ink px-3 py-1 text-xs font-black text-white">
            Sold Out
          </span>
        ) : null}
        <div className="absolute right-4 top-14 z-10 flex flex-col gap-2 opacity-100 md:opacity-0 md:transition md:group-hover:opacity-100">
          <button
            type="button"
            aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            aria-pressed={wished}
            className={`focus-ring flex h-10 w-10 items-center justify-center rounded-full shadow-card transition ${
              wished ? "bg-brand text-white" : "bg-white text-ink hover:bg-brand hover:text-white"
            }`}
            onClick={() => toggleWishlist(product)}
          >
            <Heart className={`h-4 w-4 ${wished ? "fill-current" : ""}`} aria-hidden />
          </button>
          <button
            type="button"
            aria-label={product.inStock ? `Add ${product.name} to cart` : `${product.name} is sold out`}
            disabled={!product.inStock}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-card transition hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
            onClick={() => addToCart(product, 1)}
          >
            <ShoppingBag className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.alt}
            width={900}
            height={900}
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="pt-5">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-brand">{product.subcategoryTitle}</p>
        <Link href={`/product/${product.slug}`} className="focus-ring">
          <h3 className="mt-2 text-xl font-black leading-tight text-ink transition hover:text-brand">{product.name}</h3>
        </Link>
        <div className="mt-3 flex items-center gap-1 text-sm font-black text-ink/65">
          <Star className="h-4 w-4 fill-brand text-brand" aria-hidden />
          {product.rating} ({product.reviewCount})
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-lg font-black text-brand">{formatCurrency(getDisplayPrice(product))}</span>
          {product.salePrice ? <span className="text-sm font-bold text-ink/35 line-through">{formatCurrency(product.price)}</span> : null}
        </div>
      </div>
    </motion.article>
  );
}
