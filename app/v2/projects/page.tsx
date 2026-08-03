import { getWorkData } from "@/lib/cms";
import type { Metadata } from "next";
import ProjectsSection from "../components/sections/ProjectsSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = getWorkData();

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

export default async function ProjectsPage() {
  const data = await getWorkData();

  return <ProjectsSection data={data} />;
}
