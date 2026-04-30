"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Trash2 } from "lucide-react";
import { formatCurrency } from "@/data/shop-data";
import { useShop } from "@/context/shop-context";
import { QuantitySelector } from "@/components/shop/quantity-selector";

export function CartPageContent() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useShop();

  return (
    <section className="container-px py-12">
        {cartItems.length ? (
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <article key={item.product.id} className="grid gap-4 rounded-[30px] bg-white p-4 shadow-card md:grid-cols-[120px_1fr_auto] md:items-center">
                  <Image src={item.product.image} alt={item.product.alt} width={140} height={140} className="h-28 w-full rounded-[22px] object-cover md:w-28" />
                  <div>
                    <Link href={`/product/${item.product.slug}`} className="focus-ring text-xl font-black text-ink transition hover:text-brand">
                      {item.product.name}
                    </Link>
                    <p className="mt-2 text-sm font-bold text-ink/55">{formatCurrency(item.product.salePrice ?? item.product.price)}</p>
                    <div className="mt-4">
                      <QuantitySelector value={item.quantity} onChange={(value) => updateQuantity(item.product.id, value)} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
                    <p className="text-lg font-black text-brand">{formatCurrency((item.product.salePrice ?? item.product.price) * item.quantity)}</p>
                    <button
                      type="button"
                      aria-label={`Remove ${item.product.name} from cart`}
                      className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink transition hover:bg-brand hover:text-white"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <aside className="rounded-[30px] bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-ink">Summary</h2>
              <div className="mt-6 space-y-4 border-b border-black/8 pb-6 text-sm font-bold text-ink/68">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(cartTotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-lg font-black text-ink">
                <span>Total</span>
                <span className="text-brand">{formatCurrency(cartTotal)}</span>
              </div>
              <button type="button" className="focus-ring mt-7 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 font-black text-white transition hover:bg-ink">
                <ShoppingBag className="h-5 w-5" aria-hidden />
                Checkout
              </button>
              <Link href="/shop" className="focus-ring mt-4 inline-flex text-sm font-black text-brand transition hover:text-ink">
                Continue shopping
              </Link>
            </aside>
          </div>
        ) : (
          <div className="rounded-[32px] bg-white p-10 text-center shadow-soft">
            <ShoppingBag className="mx-auto h-12 w-12 text-brand" aria-hidden />
            <h2 className="mt-5 text-3xl font-black text-ink">Your cart is empty</h2>
            <p className="mt-3 text-sm font-semibold text-ink/60">Add a few pet essentials to get started.</p>
            <Link href="/shop" className="focus-ring mt-7 inline-flex rounded-full bg-brand px-7 py-4 font-black text-white transition hover:bg-ink">
              Continue Shopping
            </Link>
          </div>
        )}
    </section>
  );
}
