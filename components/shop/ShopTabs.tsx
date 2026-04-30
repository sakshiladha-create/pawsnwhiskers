"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PawPrint } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/shop/product-grid";
import { products, type ProductType, type ShopProduct } from "@/data/shop-data";

type ProductCategory = "cat" | "dog" | "pet";
type TabId = "all" | ProductCategory;
type TabProduct = ShopProduct & { category: ProductCategory };

const tabs: Array<{
  id: TabId;
  label: string;
  inactiveClassName: string;
  activeClassName: string;
  hoverClassName: string;
}> = [
  {
    id: "all",
    label: "All",
    inactiveClassName: "bg-[#FFF5EE] text-[#4C6795]",
    activeClassName: "bg-[#4C6795]",
    hoverClassName: "hover:bg-[#4C6795] hover:text-white"
  },
  {
    id: "cat",
    label: "Cat Essentials",
    inactiveClassName: "bg-[#F3E8FF] text-[#7C3AED]",
    activeClassName: "bg-[#7C3AED]",
    hoverClassName: "hover:bg-[#7C3AED] hover:text-white"
  },
  {
    id: "dog",
    label: "Dog Essentials",
    inactiveClassName: "bg-[#E0F2FE] text-[#0284C7]",
    activeClassName: "bg-[#0284C7]",
    hoverClassName: "hover:bg-[#0284C7] hover:text-white"
  },
  {
    id: "pet",
    label: "Pet Essentials",
    inactiveClassName: "bg-[#ECFDF5] text-[#059669]",
    activeClassName: "bg-[#059669]",
    hoverClassName: "hover:bg-[#059669] hover:text-white"
  }
];

const petEssentialTypes: ProductType[] = ["Accessories", "Health", "Grooming"];

function getProductCategory(product: ShopProduct): ProductCategory {
  if (petEssentialTypes.includes(product.productType)) return "pet";
  return product.categorySlug === "cat-essentials" ? "cat" : "dog";
}

function PawPattern() {
  const paws = [
    { top: "9%", left: "7%", size: "h-9 w-9", rotate: "-18deg", opacity: "opacity-[0.08]" },
    { top: "18%", left: "32%", size: "h-6 w-6", rotate: "14deg", opacity: "opacity-[0.06]" },
    { top: "7%", left: "78%", size: "h-10 w-10", rotate: "23deg", opacity: "opacity-[0.07]" },
    { top: "38%", left: "14%", size: "h-7 w-7", rotate: "31deg", opacity: "opacity-[0.05]" },
    { top: "44%", left: "57%", size: "h-11 w-11", rotate: "-10deg", opacity: "opacity-[0.055]" },
    { top: "35%", left: "90%", size: "h-6 w-6", rotate: "-28deg", opacity: "opacity-[0.08]" },
    { top: "68%", left: "5%", size: "h-8 w-8", rotate: "8deg", opacity: "opacity-[0.06]" },
    { top: "74%", left: "28%", size: "h-12 w-12", rotate: "-24deg", opacity: "opacity-[0.05]" },
    { top: "63%", left: "72%", size: "h-7 w-7", rotate: "18deg", opacity: "opacity-[0.07]" },
    { top: "82%", left: "94%", size: "h-10 w-10", rotate: "-12deg", opacity: "opacity-[0.055]" },
    { top: "4%", left: "48%", size: "h-8 w-8", rotate: "34deg", opacity: "opacity-[0.05]" },
    { top: "24%", left: "20%", size: "h-5 w-5", rotate: "-8deg", opacity: "opacity-[0.075]" },
    { top: "29%", left: "67%", size: "h-9 w-9", rotate: "-32deg", opacity: "opacity-[0.045]" },
    { top: "51%", left: "36%", size: "h-6 w-6", rotate: "26deg", opacity: "opacity-[0.065]" },
    { top: "53%", left: "84%", size: "h-11 w-11", rotate: "9deg", opacity: "opacity-[0.045]" },
    { top: "88%", left: "14%", size: "h-6 w-6", rotate: "-35deg", opacity: "opacity-[0.07]" },
    { top: "86%", left: "52%", size: "h-9 w-9", rotate: "15deg", opacity: "opacity-[0.055]" },
    { top: "78%", left: "80%", size: "h-5 w-5", rotate: "-18deg", opacity: "opacity-[0.08]" }
  ];

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {paws.map((paw, index) => (
        <PawPrint
          key={index}
          className={`absolute ${paw.size} ${paw.opacity} fill-current text-[#4C6795]`}
          style={{ top: paw.top, left: paw.left, transform: `rotate(${paw.rotate})` }}
        />
      ))}
    </div>
  );
}

export function ShopTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const reduceMotion = useReducedMotion();

  const tabProducts = useMemo<TabProduct[]>(() => products.map((product) => ({ ...product, category: getProductCategory(product) })), []);
  const filteredProducts = activeTab === "all" ? tabProducts : tabProducts.filter((product) => product.category === activeTab);

  return (
    <section className="relative overflow-hidden bg-cream py-12 md:py-16">
      <PawPattern />
      <div className="pointer-events-none absolute left-[-70px] top-10 h-40 w-40 rounded-full bg-brand/15 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-8 right-[-80px] h-48 w-48 rounded-full bg-[#4C6795]/15 blur-2xl" aria-hidden />

      <div className="container-px relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Shop by pet</p>
          <h2 className="mt-2 text-4xl font-black text-[#4C6795] md:text-5xl">Find Their Favorites</h2>
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-3 rounded-[30px] bg-white/72 p-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                type="button"
                aria-pressed={isActive}
                className={`relative flex min-h-12 items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition md:px-6 ${
                  isActive
                    ? "text-white shadow-[0_6px_18px_rgba(0,0,0,0.12)]"
                    : `${tab.inactiveClassName} ${tab.hoverClassName} shadow-[0_6px_18px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.1)]`
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={reduceMotion ? undefined : { scale: 1.04, rotate: isActive ? 0 : -1.5 }}
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              >
                {isActive ? (
                  <motion.span
                    className={`absolute inset-0 rounded-full ${tab.activeClassName}`}
                    layoutId="shop-tab-active-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
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
            key={activeTab}
            className="mt-10"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
          >
            <ProductGrid products={filteredProducts} columns={4} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
