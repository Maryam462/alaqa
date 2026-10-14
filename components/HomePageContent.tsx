"use client";

import { ContactSection } from "@/components/ContactSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";
import { TrustedBy } from "@/components/TrustedBy";
import { TechMarquee } from "@/components/TechMarquee";
import { BrochureAbout, BrochureServices, BrochureIndustries, BrochureWhyUs, BrochureBusinessModels, BrochureGoal, BrochureProcess } from "@/components/BrochureHomeSections";

export function HomePageContent() {
  return <PageIntro>{ready => <>
    <Navbar />
    <main className="flex-1">
      <Hero contentReady={ready} />
      <SiteAtmosphere>
        <TrustedBy />
        <BrochureAbout />
        <BrochureServices />
        <TechMarquee />
        <BrochureIndustries />
        <BrochureWhyUs />
        <BrochureBusinessModels />
        <BrochureGoal />
        <BrochureProcess />
        <ContactSection />
        <Footer />
      </SiteAtmosphere>
    </main>
    <FloatingCTA />
  </>}</PageIntro>;
}
