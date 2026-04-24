import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { WishlistPageContent } from "@/components/shop/wishlist-page-content";

export default function WishlistPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <WishlistPageContent />
      </main>
      <Footer />
    </>
  );
}
