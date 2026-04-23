"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categoryHref, megaMenuCategories, navItems } from "@/lib/menu-data";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [shopOpen, setShopOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-50 bg-ink/45 backdrop-blur-sm lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed bottom-0 right-0 top-0 z-50 w-full max-w-[390px] overflow-y-auto bg-cream p-5 shadow-soft lg:hidden"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-5">
              <Link href="/" className="focus-ring flex items-center gap-3" onClick={onClose}>
                <Image src="/images/Pawlogo.png" alt="Paws N Whiskers" width={172} height={52} className="h-12 w-auto object-contain" priority />
              </Link>
              <button
                type="button"
                aria-label="Close navigation"
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-card"
                onClick={onClose}
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav className="mt-6" aria-label="Mobile main menu">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.hasMegaMenu ? (
                      <div className="rounded-[22px] bg-white shadow-card">
                        <button
                          type="button"
                          aria-expanded={shopOpen}
                          className="focus-ring flex w-full items-center justify-between px-5 py-4 text-left text-base font-black text-ink"
                          onClick={() => setShopOpen((value) => !value)}
                        >
                          Shop
                          <ChevronDown className={`h-5 w-5 transition ${shopOpen ? "rotate-180" : ""}`} aria-hidden />
                        </button>
                        <AnimatePresence initial={false}>
                          {shopOpen ? (
                            <motion.div
                              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-5 border-t border-black/5 px-5 py-4">
                                {megaMenuCategories.map((category) => {
                                  const Icon = category.icon;
                                  return (
                                    <section key={category.slug}>
                                      <h3 className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-brand">
                                        <Icon className="h-4 w-4" aria-hidden />
                                        {category.title}
                                      </h3>
                                      <ul className="space-y-1">
                                        {category.subcategories.map((subcategory) => (
                                          <li key={subcategory}>
                                            <Link
                                              href={categoryHref(category.slug, subcategory)}
                                              className="focus-ring block rounded-2xl px-3 py-2.5 text-sm font-bold text-ink/72 hover:bg-cream hover:text-ink"
                                              onClick={onClose}
                                            >
                                              {subcategory}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </section>
                                  );
                                })}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="focus-ring block rounded-[22px] bg-white px-5 py-4 text-base font-black text-ink shadow-card"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
