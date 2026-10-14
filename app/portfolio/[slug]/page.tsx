import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";
import {
  getProjectBySlug,
  portfolioProjects,
} from "@/lib/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Alaqa Portfolio`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <SiteAtmosphere>
          <ProjectDetail project={project} />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
