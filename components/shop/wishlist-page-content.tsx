"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { useShop } from "@/context/shop-context";
import { ProductGrid } from "@/components/shop/product-grid";

export function WishlistPageContent() {
  const { wishlistItems } = useShop();

  return (
    <section className="container-px py-12">
        {wishlistItems.length ? (
          <ProductGrid products={wishlistItems} columns={3} />
        ) : (
          <div className="rounded-[32px] bg-white p-10 text-center shadow-soft">
            <Heart className="mx-auto h-12 w-12 text-brand" aria-hidden />
            <h2 className="mt-5 text-3xl font-black text-ink">Your wishlist is empty</h2>
            <p className="mt-3 text-sm font-semibold text-ink/60">Save products you love and revisit them anytime.</p>
            <Link href="/shop" className="focus-ring mt-7 inline-flex rounded-full bg-brand px-7 py-4 font-black text-white transition hover:bg-ink">
              Start Shopping
            </Link>
          </div>
        )}
    </section>
  );
}
