import { getWorkData } from "@/lib/cms";
import type { Metadata } from "next";
import WorkClient from "./WorkClient";

export async function generateMetadata(): Promise<Metadata> {
  const data = getWorkData();

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

export default async function WorkPage() {
  const data = await getWorkData();

  return (
    <main className="pt-8 pb-12 md:pb-32 px-6 max-w-v2-container mx-auto">
      <WorkClient
        hero={data.hero}
        projects={data.projects}
        filters={data.filters}
        caseStudyLabel={data.caseStudyLabel}
        expertise={data.expertise}
      />
    </main>
  );
}
