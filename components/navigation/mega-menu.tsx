"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronRight, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { KeyboardEvent, RefObject, useEffect, useRef } from "react";
import { categoryHref, megaMenuCategories, menuPromos } from "@/lib/menu-data";

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  panelRef: RefObject<HTMLDivElement | null>;
};

export function MegaMenu({ open, onClose, onMouseEnter, onMouseLeave, panelRef }: MegaMenuProps) {
  const reduceMotion = useReducedMotion();
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  const handleArrowNavigation = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(event.key)) return;
    event.preventDefault();
    const links = linkRefs.current.filter(Boolean) as HTMLAnchorElement[];
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (index + direction + links.length) % links.length;
    links[nextIndex]?.focus();
  };

  let linkIndex = 0;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          role="menu"
          aria-label="Shop categories"
          className="absolute left-0 right-0 top-full z-40 border-t border-black/5 bg-white/95 shadow-soft backdrop-blur"
          initial={reduceMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="container-px grid gap-8 py-8 lg:grid-cols-[1.05fr_1fr]">
            <div className="grid gap-6 md:grid-cols-2">
              {megaMenuCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <section key={category.slug} aria-labelledby={`${category.slug}-heading`}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${category.accent}`}>
                        <Icon className="h-5 w-5 text-ink" aria-hidden />
                      </span>
                      <h3 id={`${category.slug}-heading`} className="text-xl font-black text-ink">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-1.5">
                      {category.subcategories.map((subcategory) => {
                        const currentIndex = linkIndex++;
                        return (
                          <li key={subcategory}>
                            <Link
                              ref={(node) => {
                                linkRefs.current[currentIndex] = node;
                              }}
                              href={categoryHref(category.slug, subcategory)}
                              role="menuitem"
                              className="focus-ring group flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-bold text-ink/72 transition hover:bg-cream hover:text-ink"
                              onKeyDown={(event) => handleArrowNavigation(event, currentIndex)}
                              onClick={onClose}
                            >
                              <span className="flex items-center gap-2">
                                <PawPrint className="h-3.5 w-3.5 text-brand opacity-70" aria-hidden />
                                {subcategory}
                              </span>
                              <ChevronRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" aria-hidden />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                );
              })}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {menuPromos.map((promo) => (
                <Link
                  key={promo.title}
                  href={promo.href}
                  className={`${promo.tone} focus-ring group relative min-h-[250px] overflow-hidden rounded-[30px] p-6 text-white shadow-card transition hover:-translate-y-1 hover:shadow-soft`}
                  role="menuitem"
                  onClick={onClose}
                >
                  <PawPrint className="absolute right-6 top-5 h-12 w-12 rotate-12 text-white/18" aria-hidden />
                  <div className="relative z-10 max-w-[70%]">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-white/80">{promo.eyebrow}</p>
                    <h3 className="mt-2 text-3xl font-black leading-none">{promo.title}</h3>
                    <p className="mt-3 text-sm font-semibold text-white/84">{promo.copy}</p>
                    <span className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-black text-ink transition group-hover:bg-brand group-hover:text-white">
                      Shop Now
                    </span>
                  </div>
                  <Image
                    src={promo.image}
                    alt=""
                    width={280}
                    height={260}
                    className="absolute -bottom-8 -right-10 h-44 w-52 rounded-[28px] object-cover shadow-2xl transition duration-500 group-hover:scale-105"
                  />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
