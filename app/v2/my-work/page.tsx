import { getWorkData } from "@/lib/cms";
import WorkClient from "./WorkClient";

export const metadata = {
  title: "Work | Ajith Kumar - Portfolio",
  description: "Selected architectural implementations — enterprise apps, consumer platforms, and technical experiments.",
};

export default async function WorkPage() {
  const data = await getWorkData();

  return (
    <main className="pt-8 pb-12 md:pb-32 px-6 max-w-v2-container mx-auto">
      <WorkClient hero={data.hero} projects={data.projects} />
    </main>
  );
}
