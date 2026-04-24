import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { CartPageContent } from "@/components/shop/cart-page-content";

export default function CartPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <CartPageContent />
      </main>
      <Footer />
    </>
  );
}
