import { getResumeData } from "@/lib/cms";
import type { Metadata } from "next";
import ExperienceSection from "../components/sections/ExperienceSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = getResumeData();

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

export default async function ExperiencePage() {
  const data = await getResumeData();

  return <ExperienceSection data={data} />;
}
