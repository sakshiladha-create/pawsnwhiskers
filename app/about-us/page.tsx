import { AboutFaq } from "@/components/about/about-faq";
import { AboutHero } from "@/components/about/about-hero";
import { AboutTestimonials } from "@/components/about/about-testimonials";
import { BrandStory } from "@/components/about/brand-story";
import { CoreValues } from "@/components/about/core-values";
import { PetVideoSection } from "@/components/about/pet-video-section";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import { UtilityShortcuts } from "@/components/home/utility-shortcuts";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { SupportStrip } from "@/components/shared/support-strip";

export default function AboutUsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <AboutHero />
        <BrandStory />
        <CoreValues />
        <PetVideoSection />
        <AboutTestimonials />
        <WhyChooseUs />
        <SupportStrip />
        <AboutFaq />
        <UtilityShortcuts />
      </main>
      <Footer />
    </>
  );
}
