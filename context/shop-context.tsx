"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ShopProduct } from "@/data/shop-data";

type CartItem = {
  product: ShopProduct;
  quantity: number;
};

type ShopContextValue = {
  cartItems: CartItem[];
  wishlistItems: ShopProduct[];
  addToCart: (product: ShopProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: ShopProduct) => void;
  isInWishlist: (productId: string) => boolean;
  cartCount: number;
  wishlistCount: number;
  cartTotal: number;
};

const ShopContext = createContext<ShopContextValue | undefined>(undefined);

const CART_KEY = "pawsnwhiskers-cart";
const WISHLIST_KEY = "pawsnwhiskers-wishlist";

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<ShopProduct[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_KEY);
      const storedWishlist = window.localStorage.getItem(WISHLIST_KEY);
      if (storedCart) setCartItems(JSON.parse(storedCart));
      if (storedWishlist) setWishlistItems(JSON.parse(storedWishlist));
    } catch {
      // Ignore malformed local storage payloads.
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }, [cartItems, isReady]);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistItems));
  }, [wishlistItems, isReady]);

  const value = useMemo<ShopContextValue>(
    () => ({
      cartItems,
      wishlistItems,
      addToCart: (product, quantity = 1) => {
        setCartItems((current) => {
          const existing = current.find((item) => item.product.id === product.id);
          if (existing) {
            return current.map((item) =>
              item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            );
          }
          return [...current, { product, quantity }];
        });
      },
      removeFromCart: (productId) => {
        setCartItems((current) => current.filter((item) => item.product.id !== productId));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          setCartItems((current) => current.filter((item) => item.product.id !== productId));
          return;
        }
        setCartItems((current) =>
          current.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
        );
      },
      clearCart: () => setCartItems([]),
      toggleWishlist: (product) => {
        setWishlistItems((current) =>
          current.some((item) => item.id === product.id)
            ? current.filter((item) => item.id !== product.id)
            : [...current, product]
        );
      },
      isInWishlist: (productId) => wishlistItems.some((item) => item.id === productId),
      cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      wishlistCount: wishlistItems.length,
      cartTotal: cartItems.reduce((sum, item) => sum + (item.product.salePrice ?? item.product.price) * item.quantity, 0)
    }),
    [cartItems, wishlistItems]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within a ShopProvider");
  return context;
}
