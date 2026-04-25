"use client";

import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/menu-data";
import { MegaMenu } from "@/components/navigation/mega-menu";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { useShop } from "@/context/shop-context";

export function Header() {
  const { cartCount, wishlistCount } = useShop();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const shopButtonRef = useRef<HTMLAnchorElement>(null);

  const closeMega = useCallback(() => setMegaOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || shopButtonRef.current?.contains(target)) return;
      closeMega();
    };
    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [closeMega, megaOpen]);

  const handleNavBlur = () => {
    window.setTimeout(() => {
      const active = document.activeElement;
      if (panelRef.current?.contains(active) || shopButtonRef.current?.contains(active)) return;
      closeMega();
    }, 0);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white/20 backdrop-blur-xl transition-shadow ${scrolled ? "shadow-card" : "shadow-none"}`}>
      <div className="relative border-b border-black/5">
        <div className="container-px flex h-24 items-center justify-between gap-4">
          <Link href="/" className="focus-ring flex min-w-[164px] items-center" aria-label="Paws N Whiskers home">
            <Image src="/images/Pawlogo.png" alt="Paws N Whiskers" width={190} height={58} className="h-24 w-auto object-contain" priority />
          </Link>

          <nav className="hidden items-center justify-center gap-2 lg:flex" aria-label="Main navigation" onBlur={handleNavBlur}>
            {navItems.map((item) =>
              item.hasMegaMenu ? (
                <Link
                  key={item.label}
                  ref={shopButtonRef}
                  href={item.href}
                  aria-haspopup="true"
                  aria-expanded={megaOpen}
                  className="focus-ring rounded-full px-5 py-3 text-sm font-black text-ink transition hover:bg-cream hover:text-brand"
                  onMouseEnter={() => setMegaOpen(true)}
                  onFocus={() => setMegaOpen(true)}
                  onMouseLeave={() => {
                    if (!panelRef.current?.matches(":hover")) {
                      closeMega();
                    }
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="focus-ring rounded-full px-5 py-3 text-sm font-black text-ink transition hover:bg-cream hover:text-brand"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <button type="button" aria-label="Search" className="focus-ring hidden h-11 w-11 items-center justify-center rounded-full bg-cream text-ink transition hover:bg-brand hover:text-white sm:flex">
              <Search className="h-5 w-5" aria-hidden />
            </button>
            <Link href="/account" aria-label="Account" className="focus-ring hidden h-11 w-11 items-center justify-center rounded-full bg-cream text-ink transition hover:bg-brand hover:text-white sm:flex">
              <UserRound className="h-5 w-5" aria-hidden />
            </Link>
            <Link href="/wishlist" aria-label="Wishlist" className="focus-ring relative hidden h-11 w-11 items-center justify-center rounded-full bg-cream text-ink transition hover:bg-brand hover:text-white sm:flex">
              <Heart className="h-5 w-5" aria-hidden />
              {wishlistCount ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[11px] font-black text-white">
                  {wishlistCount}
                </span>
              ) : null}
            </Link>
            <Link href="/cart" aria-label="Cart" className="focus-ring relative flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition hover:bg-brand">
              <ShoppingBag className="h-5 w-5" aria-hidden />
              {cartCount ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[11px] font-black text-white">
                  {cartCount}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              aria-label="Open navigation"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <MegaMenu
          open={megaOpen}
          onClose={closeMega}
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={closeMega}
          panelRef={panelRef}
        />
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
