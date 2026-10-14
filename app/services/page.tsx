import type { Metadata } from "next";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CTABanner } from "@/components/services/CTABanner";
import { ServicesHubGrid } from "@/components/services/ServicesHubGrid";
import { ServicesHubHero } from "@/components/services/ServicesHubHero";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";

export const metadata: Metadata = {
  title: { absolute: "Alaqa Services | Web, AI & Marketing for Service Businesses" },
  description:
    "Web development, AI solutions, SEO, and marketing services built for growing service businesses in the UK, US, and Australia. Get a free quote.",
  keywords: [
    "digital services for service businesses",
    "AI solutions for service businesses",
    "web development services",
    "SEO services for service businesses",
    "mobile app development services",
    "digital marketing services for professional services firms",
    "graphic design services",
    "content writing and SEO copywriting",
  ],
  openGraph: {
    title: "Alaqa Services | Web, AI & Marketing for Service Businesses",
    description:
      "Web development, AI solutions, SEO, and marketing services for growing service businesses in the UK, US, and Australia.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServicesHubHero />
        <SiteAtmosphere>
          <ServicesHubGrid />
          <CTABanner />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
