import { CollectionGrid } from "@/components/shop/collection-grid";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { ShopTabs } from "@/components/shop/ShopTabs";
import { CoreNutritionalPrinciples } from "@/components/home/core-nutritional-principles";
import { SupportStrip } from "@/components/shared/support-strip";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Shop Pet Supplies | Dog & Cat Essentials",
  description: "Shop pet food, toys, beds, dog essentials, cat essentials, grooming supplies, flea and tick care, and wellness products online.",
  path: "/shop"
});

export default function ShopPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PageBanner
          title="Shop"
          subtitle="Explore pet food, toys, beds, dog essentials, cat essentials, grooming supplies, and wellness care for happy everyday routines."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
          variant="shop"
        />
        <CoreNutritionalPrinciples />
        <ShopTabs />
        {/* <CollectionGrid /> */}
        <SupportStrip />
      </main>
      <Footer />
    </>
  );
}
