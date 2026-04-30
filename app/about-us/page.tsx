import { AboutFaq } from "@/components/about/about-faq";
import { AboutTestimonials } from "@/components/about/about-testimonials";
import { BrandStory } from "@/components/about/brand-story";
import { CoreValues } from "@/components/about/core-values";
import { KnowUsSection } from "@/components/about/know-us-section";
import { PetVideoSection } from "@/components/about/pet-video-section";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import { CoreNutritionalPrinciples } from "@/components/home/core-nutritional-principles";
import { UtilityShortcuts } from "@/components/home/utility-shortcuts";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { SupportStrip } from "@/components/shared/support-strip";

export default function AboutUsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PageBanner
          title="About Us"
          subtitle="Everything your pet needs for comfort, care, and everyday joy."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
          variant="about"
        />
        <BrandStory />
        <PetVideoSection />
        <CoreValues />
        <KnowUsSection />
        <WhyChooseUs />
        <SupportStrip />
        <AboutFaq />
      </main>
      <Footer />
    </>
  );
}
