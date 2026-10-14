import type { Metadata } from "next";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactMap } from "@/components/contact/ContactMap";
import { CTABanner } from "@/components/contact/CTABanner";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Start a conversation with Alaqa about your next project. This preview uses sample addresses and example contact details.",
  openGraph: {
    title: "Contact Us | Alaqa",
    description:
      "Have a project in mind? Reach Alaqa and we'll get back within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactHero />
        <SiteAtmosphere>
          <ContactInfoCards />
          <ContactForm />
          <ContactMap />
          <ContactFAQ />
          <CTABanner />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
