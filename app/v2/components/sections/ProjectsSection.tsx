import type { WorkPageData } from "@/types/cms";
import ProjectsClient from "./ProjectsClient";

interface ProjectsSectionProps {
  data: WorkPageData;
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <div className="pt-8 pb-12 md:pb-32 px-6 max-w-v2-container mx-auto">
      <ProjectsClient
        hero={data.hero}
        projects={data.projects}
        filters={data.filters}
        caseStudyLabel={data.caseStudyLabel}
        expertise={data.expertise}
      />
    </div>
  );
}
