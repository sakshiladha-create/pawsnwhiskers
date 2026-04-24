"use client";

import { useState } from "react";
import type { ShopProduct } from "@/data/shop-data";

export function ProductTabs({ product }: { product: ShopProduct }) {
  const [active, setActive] = useState<"description" | "info" | "reviews" | "shipping">("description");

  return (
    <section className="mt-10 rounded-[32px] bg-white p-6 shadow-card md:p-8">
      <div className="mb-6 flex flex-wrap gap-2">
        {[
          ["description", "Description"],
          ["info", "Additional Information"],
          ["reviews", "Reviews"],
          ["shipping", "Shipping & Returns"]
        ].map(([key, label]) => (
          <button
            key={key}
            type="button"
            className={`focus-ring rounded-full px-5 py-3 text-sm font-black transition ${
              active === key ? "bg-brand text-white" : "bg-cream text-ink hover:bg-white"
            }`}
            onClick={() => setActive(key as typeof active)}
          >
            {label}
          </button>
        ))}
      </div>
      {active === "description" ? <p className="text-sm font-semibold leading-7 text-ink/68">{product.description}</p> : null}
      {active === "info" ? (
        <div className="grid gap-3 md:grid-cols-2">
          {product.additionalInfo.map((item) => (
            <div key={item.label} className="rounded-[22px] bg-cream px-4 py-4">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-brand">{item.label}</p>
              <p className="mt-2 text-sm font-bold text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      ) : null}
      {active === "reviews" ? (
        <p className="text-sm font-semibold leading-7 text-ink/68">
          Rated {product.rating} stars from {product.reviewCount} reviews. Pet parents love the quality, comfort, and everyday usefulness of this item.
        </p>
      ) : null}
      {active === "shipping" ? (
        <div className="space-y-3 text-sm font-semibold leading-7 text-ink/68">
          <p>Orders typically ship within one business day.</p>
          <p>Unused items can be returned within the return window.</p>
          <p>Tracking details are emailed as soon as your order is on the way.</p>
        </div>
      ) : null}
    </section>
  );
}
