import { getContactData } from "@/lib/cms";
import type { Metadata } from "next";
import ContactSection from "../components/sections/ContactSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = getContactData();

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

export default async function ContactPage() {
  const data = await getContactData();

  return <ContactSection data={data} />;
}
