import { pageMetadata } from "@/utils/metadata";
import { Metadata } from "next";
import HiringDeveloperClient from "./client-page";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = pageMetadata[`/${params.slug}`];
  if (meta) {
    return {
      title: meta.title,
      description: meta.description,
    };
  }
  return {
    title: "Employ Virtual",
    description: "Hire virtual employees.",
  };
}

export default function HiringDeveloper() {
  return <HiringDeveloperClient />;
}
