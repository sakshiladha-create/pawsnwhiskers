import { BestDeals } from "@/components/home/best-deals";
import { BrandStrip } from "@/components/home/brand-strip";
import { BrowseCategories } from "@/components/home/browse-categories";
import { CoreNutritionalPrinciples } from "@/components/home/core-nutritional-principles";
import { CuratedCollection } from "@/components/home/curated-collection";
import { Gallery } from "@/components/home/gallery";
import { HomeBlogSection } from "@/components/home/home-blog-section";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { KnowUsSection } from "@/components/home/know-us-section";
import { LowPrices } from "@/components/home/low-prices";
import { PetStatementSection } from "@/components/home/pet-statement-section";
import { ServiceFeatures } from "@/components/home/service-features";
import { TabbedProducts } from "@/components/home/tabbed-products";
import { Testimonials } from "@/components/home/testimonials";
import { WideBanner } from "@/components/home/wide-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroCarousel />
        <ServiceFeatures />
        <BestDeals />
        <LowPrices />
        <BrowseCategories />
        <CuratedCollection variant="kittens" />
        {/* <KnowUsSection /> */}
        <CoreNutritionalPrinciples />
        <CuratedCollection variant="puppies" />
        <WideBanner />
        <TabbedProducts />
        <Testimonials />
        <Gallery />
        {/* <BrandStrip /> */}
        <PetStatementSection />
        <HomeBlogSection />
      </main>
      <Footer />
    </>
  );
}
