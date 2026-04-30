import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { WishlistPageContent } from "@/components/shop/wishlist-page-content";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Wishlist | Saved Pet Supplies",
  description: "Save your favorite dog essentials, cat essentials, pet food, toys, beds, and wellness supplies to revisit while shopping.",
  path: "/wishlist",
  noIndex: true
});

export default function WishlistPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PageBanner
          title="My Wishlist"
          subtitle="Keep your favorite pet finds in one cheerful place."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
          variant="shop"
        />
        <WishlistPageContent />
      </main>
      <Footer />
    </>
  );
}
