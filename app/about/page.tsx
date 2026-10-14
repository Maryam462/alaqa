import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStats } from "@/components/about/AboutStats";
import { CoreValues } from "@/components/about/CoreValues";
import { CTABanner } from "@/components/about/CTABanner";
import { MissionVision } from "@/components/about/MissionVision";
import { OurStory } from "@/components/about/OurStory";
import { TeamSection } from "@/components/about/TeamSection";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";

export const metadata: Metadata = {
  title: { absolute: "About Alaqa | Software & Digital Agency for Service Businesses" },
  description:
    "Alaqa is a software development and digital agency built for growing service businesses in the UK, US & Australia. Meet the team and see how we work.",
  keywords: [
    "software development agency for service businesses",
    "digital agency team UK US Australia",
    "web development agency Example Town",
    "software development process",
    "about Alaqa",
  ],
  openGraph: {
    title: "About Alaqa | Software & Digital Agency for Service Businesses",
    description:
      "Meet the Alaqa team and see how we build software for growing service businesses in the UK, US, and Australia.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <SiteAtmosphere>
          <OurStory />
          <MissionVision />
          <AboutStats />
          <CoreValues />
          <ProcessSection />
          <TeamSection />
          <WhyChooseUs />
          <CTABanner />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
