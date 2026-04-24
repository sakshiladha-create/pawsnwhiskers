import { BestDeals } from "@/components/home/best-deals";
import { BrandStrip } from "@/components/home/brand-strip";
import { BrowseCategories } from "@/components/home/browse-categories";
import { CuratedCollection } from "@/components/home/curated-collection";
import { Gallery } from "@/components/home/gallery";
import { HomeBlogSection } from "@/components/home/home-blog-section";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { LowPrices } from "@/components/home/low-prices";
import { PromoBanners } from "@/components/home/promo-banners";
import { ServiceFeatures } from "@/components/home/service-features";
import { TabbedProducts } from "@/components/home/tabbed-products";
import { Testimonials } from "@/components/home/testimonials";
import { UtilityShortcuts } from "@/components/home/utility-shortcuts";
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
        <PromoBanners />
        <CuratedCollection variant="puppies" />
        <WideBanner />
        <TabbedProducts />
        <Testimonials />
        <Gallery />
        <BrandStrip />
        <UtilityShortcuts />
        <HomeBlogSection />
      </main>
      <Footer />
    </>
  );
}
