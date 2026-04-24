import { CollectionGrid } from "@/components/shop/collection-grid";
import { ShopHero } from "@/components/shop/shop-hero";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";

export default function ShopPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <ShopHero
          title="Shop Pet Essentials"
          copy="Browse cheerful, premium collections for cats and dogs, from daily food and treats to beds, toys, wellness, and travel-ready supplies."
        />
        <CollectionGrid />
      </main>
      <Footer />
    </>
  );
}
