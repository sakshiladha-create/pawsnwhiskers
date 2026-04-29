import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { WishlistPageContent } from "@/components/shop/wishlist-page-content";

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
