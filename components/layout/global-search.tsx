"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FileText, Newspaper, PackageSearch, PawPrint, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { blogPosts } from "@/data/blog-data";
import { products } from "@/data/shop-data";

type SearchItem = {
  type: "Product" | "Blog" | "Page";
  title: string;
  subtitle: string;
  href: string;
  searchable: string;
};

const pages: SearchItem[] = [
  {
    type: "Page",
    title: "About Us",
    subtitle: "Our story, values, and pet care promise",
    href: "/about-us",
    searchable: "about us story values pet care promise"
  },
  {
    type: "Page",
    title: "Contact Us",
    subtitle: "Support for products, orders, and pet questions",
    href: "/contact-us",
    searchable: "contact support help orders product questions"
  },
  {
    type: "Page",
    title: "Shop",
    subtitle: "Browse cat, dog, and pet essentials",
    href: "/shop",
    searchable: "shop products cat dog pet essentials treats toys beds food"
  },
  {
    type: "Page",
    title: "Blog",
    subtitle: "Pet care tips, guides, and stories",
    href: "/blog",
    searchable: "blog articles pet care tips guides stories"
  },
  {
    type: "Page",
    title: "Wishlist",
    subtitle: "Your saved pet favorites",
    href: "/wishlist",
    searchable: "wishlist saved favorites"
  },
  {
    type: "Page",
    title: "Cart",
    subtitle: "Review your selected pet essentials",
    href: "/cart",
    searchable: "cart checkout shopping bag"
  }
];

function ResultIcon({ type }: { type: SearchItem["type"] }) {
  if (type === "Product") return <PackageSearch className="h-4 w-4" aria-hidden />;
  if (type === "Blog") return <Newspaper className="h-4 w-4" aria-hidden />;
  return <FileText className="h-4 w-4" aria-hidden />;
}

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const items = useMemo<SearchItem[]>(() => {
    const productItems = products.map((product) => ({
      type: "Product" as const,
      title: product.name,
      subtitle: `${product.subcategoryTitle} - ${product.productType}`,
      href: `/product/${product.slug}`,
      searchable: [
        product.name,
        product.shortDescription,
        product.description,
        product.categoryTitle,
        product.subcategoryTitle,
        product.productType,
        product.tags.join(" ")
      ].join(" ")
    }));

    const blogItems = blogPosts.map((post) => ({
      type: "Blog" as const,
      title: post.title,
      subtitle: `${post.category} - ${post.readTime}`,
      href: `/blog/${post.slug}`,
      searchable: [post.title, post.excerpt, post.category, post.tags.join(" "), post.author].join(" ")
    }));

    return [...productItems, ...blogItems, ...pages];
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setDebouncedQuery(query.trim().toLowerCase()), 300);
    return () => window.clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    const handlePointerDown = (event: PointerEvent) => {
      if (wrapperRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const results = useMemo(() => {
    if (!debouncedQuery) return [];
    return items
      .filter((item) => `${item.title} ${item.subtitle} ${item.searchable}`.toLowerCase().includes(debouncedQuery))
      .slice(0, 8);
  }, [debouncedQuery, items]);

  return (
    <div ref={wrapperRef} className="relative flex items-center justify-end">
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="search-input"
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2"
            initial={reduceMotion ? false : { width: 44, opacity: 0 }}
            animate={{ width: "min(78vw, 420px)", opacity: 1 }}
            exit={reduceMotion ? undefined : { width: 44, opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
          >
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4C6795]" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={"Search for treats, toys, blogs... \uD83D\uDC3E"}
                className="h-12 w-full rounded-full border border-[#E7E2DC] bg-white py-3 pl-11 pr-11 text-sm font-bold text-ink shadow-card outline-none transition placeholder:text-ink/38 focus:border-brand focus:ring-4 focus:ring-brand/20"
              />
              <button
                type="button"
                aria-label="Close search"
                className="focus-ring absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink transition hover:bg-brand hover:text-white"
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                }}
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <AnimatePresence>
              {query ? (
                <motion.div
                  className="absolute right-0 top-[calc(100%+10px)] max-h-[420px] w-full overflow-y-auto rounded-[24px] bg-white p-2 shadow-soft"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                >
                  {results.length ? (
                    <div className="space-y-1">
                      {results.map((result) => (
                        <Link
                          key={`${result.type}-${result.href}`}
                          href={result.href}
                          className="focus-ring flex gap-3 rounded-[18px] px-3 py-3 transition hover:-translate-y-0.5 hover:bg-cream"
                          onClick={() => {
                            setOpen(false);
                            setQuery("");
                          }}
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4C6795] text-white">
                            <ResultIcon type={result.type} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-black text-ink">{result.title}</span>
                            <span className="mt-0.5 block text-xs font-bold text-ink/55">
                              {result.type} - {result.subtitle}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 rounded-[18px] bg-cream px-4 py-5 text-sm font-black text-ink/62">
                      <PawPrint className="h-5 w-5 fill-current text-brand" aria-hidden />
                      No results found
                    </div>
                  )}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        aria-label="Search"
        aria-expanded={open}
        className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink transition hover:bg-brand hover:text-white"
        onClick={() => setOpen(true)}
      >
        <Search className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}
