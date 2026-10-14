import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";
export const metadata: Metadata = {
  title: { absolute: "Alaqa | Web, AI & Software Development for Service Businesses" },
  description: "Bring your next idea to life with Alaqa. We create websites, apps, and practical AI tools, with design and marketing support to help your business grow.",
  keywords: ["digital agency for service businesses","AI solutions for service businesses","web development agency for service businesses","SEO agency for service businesses UK US AU","custom software development for growing businesses","website and app development for agencies and clinics","digital marketing agency for professional services","web development company global teams"],
  openGraph: { title: "Alaqa | Web, AI & Software Development for Service Businesses", description: "Websites, apps, and AI tools for growing service businesses in the UK, US, and Australia.", type: "website" },
};
export default function HomePage(){return <HomePageContent/>}
