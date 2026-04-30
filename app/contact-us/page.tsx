import { ContactFaqStrip } from "@/components/contact/contact-faq-strip";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { ContactHelpSection } from "@/components/contact/contact-help-section";
import { ContactInfoCards } from "@/components/contact/contact-info-cards";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { SupportStrip } from "@/components/shared/support-strip";

export default function ContactUsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PageBanner
          title="Contact Us"
          subtitle="We are here to help with products, orders, and pet care questions."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
          variant="contact"
        />
        <ContactInfoCards />
        <ContactFormSection />
        <SupportStrip />        
        <ContactHelpSection />
        <ContactFaqStrip />
      </main>
      <Footer />
    </>
  );
}
