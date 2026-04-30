"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PackageCheck, PawPrint, ShieldCheck, Star, Truck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { ShopProduct } from "@/data/shop-data";

type TabKey = "description" | "info" | "reviews" | "shipping";

const tabs: Array<{
  key: TabKey;
  label: string;
  inactiveClassName: string;
  activeClassName: string;
  hoverClassName: string;
}> = [
  {
    key: "description",
    label: "Description",
    inactiveClassName: "bg-[#FFF5EE] text-[#DA8A70]",
    activeClassName: "bg-[#DA8A70]",
    hoverClassName: "hover:bg-[#DA8A70] hover:text-white"
  },
  {
    key: "info",
    label: "Additional Information",
    inactiveClassName: "bg-[#E0F2FE] text-[#0284C7]",
    activeClassName: "bg-[#0284C7]",
    hoverClassName: "hover:bg-[#0284C7] hover:text-white"
  },
  {
    key: "reviews",
    label: "Reviews",
    inactiveClassName: "bg-[#F3E8FF] text-[#7C3AED]",
    activeClassName: "bg-[#7C3AED]",
    hoverClassName: "hover:bg-[#7C3AED] hover:text-white"
  },
  {
    key: "shipping",
    label: "Shipping & Returns",
    inactiveClassName: "bg-[#ECFDF5] text-[#059669]",
    activeClassName: "bg-[#059669]",
    hoverClassName: "hover:bg-[#059669] hover:text-white"
  }
];

const reviews = [
  {
    name: "Aanya P.",
    text: "My cat comes running as soon as she hears the pack. Perfect size for daily rewards."
  },
  {
    name: "Rohan M.",
    text: "Great crunchy texture and easy to use during puppy training."
  },
  {
    name: "Mira S.",
    text: "The treats feel fresh, easy to portion, and both of my pets enjoy them."
  }
];

const shippingPoints = [
  "Standard delivery: 3-5 business days",
  "Free shipping on eligible orders",
  "Returns accepted within 7 days for unopened products",
  "Contact support for damaged or incorrect items"
];

function PawPattern() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.045]" aria-hidden>
      <defs>
        <pattern id="product-tabs-paws" width="112" height="96" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
          <g fill="#4C6795">
            <ellipse cx="42" cy="32" rx="8" ry="11" />
            <ellipse cx="60" cy="32" rx="8" ry="11" />
            <ellipse cx="31" cy="48" rx="7" ry="9" />
            <ellipse cx="71" cy="48" rx="7" ry="9" />
            <path d="M51 48c13 0 22 15 16 26-4 9-28 9-33 0-6-11 4-26 17-26Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#product-tabs-paws)" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-brand" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
      ))}
    </div>
  );
}

export function ProductTabs({ product }: { product: ShopProduct }) {
  const [active, setActive] = useState<TabKey>("description");
  const reduceMotion = useReducedMotion();
  const descriptionPoints = [
    product.shortDescription,
    `Designed for ${product.subcategoryTitle.toLowerCase()} routines`,
    "Quality checked for everyday pet-parent confidence",
    "Easy to store, serve, clean, or use as directed"
  ];
  const infoItems = [
    ...product.additionalInfo.map((item) => [item.label, item.value]),
    ["Pet Type", product.categoryTitle.replace(" Essentials", "")],
    ["Best For", product.subcategoryTitle],
    ["Storage", product.productType === "Food" ? "Keep sealed in a cool, dry place" : "Store clean and dry between uses"]
  ];

  return (
    <section className="relative mt-10 overflow-hidden rounded-[32px] bg-white p-5 shadow-soft md:p-8">
      {/* <PawPattern /> */}
      <PawPrint className="pointer-events-none absolute right-6 top-6 h-16 w-16 rotate-12 fill-current text-brand/30" aria-hidden />

      <div className="relative z-10 mb-8 flex flex-wrap gap-3 rounded-[28px]  p-3">
        {tabs.map((tab) => {
          const isActive = active === tab.key;

          return (
            <motion.button
              key={tab.key}
              type="button"
              className={`relative flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition ${
                isActive
                  ? "text-white shadow-[0_6px_18px_rgba(0,0,0,0.12)]"
                  : `${tab.inactiveClassName} ${tab.hoverClassName} shadow-[0_6px_18px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.1)]`
              }`}
              onClick={() => setActive(tab.key)}
              whileHover={reduceMotion ? undefined : { scale: 1.04, rotate: isActive ? 0 : -1.5 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            >
              {isActive ? (
                <motion.span
                  className={`absolute inset-0 rounded-full ${tab.activeClassName}`}
                  layoutId="product-tab-active"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : null}
              <span className={`pointer-events-none absolute inset-[3px] rounded-full border-2 border-dotted ${isActive ? "border-white/90" : "border-white/70"}`} />
              <PawPrint className="relative z-10 h-4 w-4 fill-current" aria-hidden />
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="relative z-10"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          {active === "description" ? (
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-3xl font-black text-ink">Made for happier {product.subcategoryTitle.toLowerCase()}</h3>
                <p className="mt-4 text-base font-semibold leading-8 text-ink/68">
                  {product.description} This {product.name.toLowerCase()} is selected for pet parents who want dependable{" "}
                  {product.categoryTitle.toLowerCase()}, {product.productType.toLowerCase()} support, and everyday comfort for their pet.
                </p>
              </div>
              <div className="rounded-[26px] bg-cream p-5">
                <div className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-brand">
                  <PackageCheck className="h-5 w-5" aria-hidden />
                  Product benefits
                </div>
                <ul className="space-y-3">
                  {descriptionPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-bold leading-6 text-ink/70">
                      <PawPrint className="mt-1 h-4 w-4 shrink-0 fill-current text-[#4C6795]" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          {active === "info" ? (
            <div className="grid gap-4 md:grid-cols-2">
              {infoItems.map(([label, value]) => (
                <div key={label} className="rounded-[24px] bg-cream p-5">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-brand">{label}</p>
                  <p className="mt-2 text-base font-black text-ink">{value}</p>
                </div>
              ))}
            </div>
          ) : null}

          {active === "reviews" ? (
            <div className="grid gap-4 md:grid-cols-3">
              {reviews.map((review) => (
                <article key={review.name} className="rounded-[24px] bg-cream p-5">
                  <Stars />
                  <h3 className="mt-4 text-lg font-black text-ink">{review.name}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-ink/68">&ldquo;{review.text}&rdquo;</p>
                </article>
              ))}
            </div>
          ) : null}

         {active === "shipping" ? (
  <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
    
    {/* LEFT: Image + Gradient Card */}
    <div className="group relative overflow-hidden rounded-[26px]">
      
      {/* Background Image */}
      <Image
        src="https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Shipping"
        width={800}
        height={500}
        className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4C6795]/95 via-[#4C6795]/70 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 z-10 p-6 text-white">
        <Truck className="h-9 w-9 text-white/90" aria-hidden />
        <h3 className="mt-4 text-2xl font-black">
          Packed with care
        </h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-white/90">
          Every order is packed with love so your pet essentials arrive fresh, safe, and ready to enjoy.
        </p>
      </div>
    </div>

    {/* RIGHT: Points */}
    <div className="grid gap-3">
      {shippingPoints.map((point) => (
        <div
          key={point}
          className="flex items-center gap-3 rounded-[22px] bg-cream px-5 py-4 text-sm font-black text-ink/72 transition  hover:shadow-card"
        >
          <ShieldCheck className="h-5 w-5 shrink-0 text-brand" aria-hidden />
          {point}
        </div>
      ))}
    </div>

  </div>
) : null}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
