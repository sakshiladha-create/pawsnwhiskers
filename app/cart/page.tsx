import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { CartPageContent } from "@/components/shop/cart-page-content";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Shopping Cart | Secure Pet Store Checkout",
  description: "Review your selected pet food, toys, beds, dog essentials, cat essentials, and wellness supplies before secure checkout.",
  path: "/cart",
  noIndex: true
});

export default function CartPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PageBanner
          title="Shopping Cart"
          subtitle="Review your pet picks before checkout."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
          variant="shop"
        />
        <CartPageContent />
      </main>
      <Footer />
    </>
  );
}
