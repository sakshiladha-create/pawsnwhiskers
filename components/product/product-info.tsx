"use client";

import { Heart, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { formatCurrency, getDisplayPrice, type ShopProduct } from "@/data/shop-data";
import { useShop } from "@/context/shop-context";
import { QuantitySelector } from "@/components/shop/quantity-selector";

export function ProductInfo({ product }: { product: ShopProduct }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isInWishlist, toggleWishlist } = useShop();
  const wished = isInWishlist(product.id);

  return (
    <section className="rounded-[32px] bg-white p-6 shadow-soft md:sticky md:top-28 md:p-8">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">{product.subcategoryTitle}</p>
      <h1 className="mt-3 text-4xl font-black leading-tight text-ink md:text-5xl">{product.name}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-black text-ink/65">
        <span className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-brand text-brand" aria-hidden />
          {product.rating}
        </span>
        <span>({product.reviewCount} reviews)</span>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <span className="text-3xl font-black text-brand">{formatCurrency(getDisplayPrice(product))}</span>
        {product.salePrice ? <span className="text-lg font-bold text-ink/35 line-through">{formatCurrency(product.price)}</span> : null}
      </div>
      <p className={`mt-4 text-sm font-black ${product.inStock ? "text-[#3d8b5a]" : "text-brand"}`}>
        {product.inStock ? "In stock" : "Sold out"}
      </p>
      <p className="mt-4 text-base font-semibold leading-7 text-ink/65">{product.shortDescription}</p>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <QuantitySelector value={quantity} onChange={(next) => setQuantity(Math.max(1, next))} />
        <button
          type="button"
          disabled={!product.inStock}
          className="focus-ring inline-flex min-h-14 items-center gap-2 rounded-full bg-brand px-7 font-black text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-45"
          onClick={() => addToCart(product, quantity)}
        >
          <ShoppingBag className="h-5 w-5" aria-hidden />
          Add to Cart
        </button>
        <button
          type="button"
          aria-pressed={wished}
          className={`focus-ring inline-flex min-h-14 items-center gap-2 rounded-full px-6 font-black transition ${
            wished ? "bg-ink text-white" : "bg-cream text-ink hover:bg-brand hover:text-white"
          }`}
          onClick={() => toggleWishlist(product)}
        >
          <Heart className={`h-5 w-5 ${wished ? "fill-current" : ""}`} aria-hidden />
          Wishlist
        </button>
      </div>

      <Link href="/cart" className="focus-ring mt-4 inline-flex min-h-14 items-center justify-center rounded-full bg-ink px-7 font-black text-white transition hover:bg-brand">
        Buy Now
      </Link>

      <div className="mt-8 space-y-3 rounded-[24px] bg-cream p-5">
        <div className="flex items-center gap-3 text-sm font-bold text-ink/72">
          <ShieldCheck className="h-5 w-5 text-brand" aria-hidden />
          Secure checkout and carefully packed orders
        </div>
        <div className="flex items-center gap-3 text-sm font-bold text-ink/72">
          <Truck className="h-5 w-5 text-brand" aria-hidden />
          Fast delivery and easy returns on unused products
        </div>
      </div>

      <div className="mt-8 grid gap-3 text-sm font-bold text-ink/68">
        <p><span className="text-ink">SKU:</span> {product.sku}</p>
        <p><span className="text-ink">Category:</span> {product.categoryTitle}</p>
        <p><span className="text-ink">Tags:</span> {product.tags.join(", ")}</p>
      </div>
    </section>
  );
}
