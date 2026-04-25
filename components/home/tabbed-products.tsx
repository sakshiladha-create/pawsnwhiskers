"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { tabbedProducts } from "@/data/home-data";
import { ProductCard } from "@/components/home/product-card";
import { SectionReveal } from "@/components/home/section-reveal";

const tabs = Object.keys(tabbedProducts) as Array<keyof typeof tabbedProducts>;

export function TabbedProducts() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All Items");
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="container-px py-12 mt-20">
      <div className="mb-8 text-center">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Flea & Tick Solutions</p>
        <h2 className="mt-2 text-4xl font-black text-[#4C6795] md:text-5xl">Wellness picks by popularity</h2>
      </div>
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Product filters">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={`focus-ring rounded-full px-5 py-3 text-sm font-black transition ${
              activeTab === tab ? "bg-brand text-white shadow-card" : "bg-white text-ink hover:bg-cream"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="tabpanel"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.22 }}
        >
         {tabbedProducts[activeTab].slice(0, 3).map((product) => (
            <ProductCard key={`${activeTab}-${product.title}`} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionReveal>
  );
}
