"use client";
import { ContactSection } from "@/components/ContactSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";
import { ProcessTeaser } from "@/components/ProcessTeaser";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustedBy } from "@/components/TrustedBy";
import { WhyServiceBusinesses } from "@/components/WhyServiceBusinesses";
export function HomePageContent(){return <PageIntro>{(ready)=><><Navbar/><main className="flex-1"><Hero contentReady={ready}/><SiteAtmosphere><TrustedBy/><ServicesSection/><WhyServiceBusinesses/><ProcessTeaser/><TestimonialsSection/><ContactSection/><Footer/></SiteAtmosphere></main><FloatingCTA/></>}</PageIntro>}
