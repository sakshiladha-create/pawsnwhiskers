"use client";

import Image from "next/image";
import { useState } from "react";
import type { ShopProduct } from "@/data/shop-data";

export function ProductGallery({ product }: { product: ShopProduct }) {
  const [activeImage, setActiveImage] = useState(product.gallery[0] ?? product.image);

  return (
    <section className="rounded-[32px] bg-white p-4 shadow-soft">
      <div className="overflow-hidden rounded-[28px] bg-cream">
        <Image src={activeImage} alt={product.alt} width={1200} height={1200} className="h-[520px] w-full object-cover md:h-[520px]" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {product.gallery.map((image) => (
          <button
            key={image}
            type="button"
            aria-label={`Show image of ${product.name}`}
            className={`focus-ring overflow-hidden rounded-[18px] border-2 transition ${activeImage === image ? "border-brand" : "border-transparent"}`}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt="" width={320} height={320} className="h-24 w-full object-cover md:h-28" />
          </button>
        ))}
      </div>
    </section>
  );
}
