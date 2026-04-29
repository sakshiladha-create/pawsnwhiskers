import { CollectionGrid } from "@/components/shop/collection-grid";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";

export default function ShopPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PageBanner
          title="Shop"
          subtitle="Explore happy essentials for cats, dogs, treats, toys, beds, and care."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
          variant="shop"
        />
        <CollectionGrid />
      </main>
      <Footer />
    </>
  );
}
