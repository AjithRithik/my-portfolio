import { getHomeData, getResumeData, getWorkData, getContactData } from "@/lib/cms";
import type { Metadata } from "next";
import OverviewSection from "./components/sections/OverviewSection";
import ExploreSections from "./components/sections/ExploreSections";

export async function generateMetadata(): Promise<Metadata> {
  const data = getHomeData();

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

export default async function V2Home() {
  const home = await getHomeData();
  const resume = await getResumeData();
  const work = await getWorkData();
  const contact = await getContactData();

  return (
    <>
      <OverviewSection data={home} expertise={work.expertise} />
      <ExploreSections explore={home.explore} resume={resume} work={work} contact={contact} />
    </>
  );
}
