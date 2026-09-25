import { getMetadata, pageMetadata } from "@/utils/metadata";
import { Metadata } from "next";
import HiringDeveloperClient from "./client-page";

const staticRoutes = new Set([
  "",
  "about-us",
  "blogs",
  "careers",
  "contact-us",
  "privacy-policy",
  "services",
  "terms-of-use",
  "robots.txt",
  "sitemap.xml",
  "favicon.ico",
  "_not-found",
]);

export async function generateStaticParams() {
  return Object.keys(pageMetadata)
    .map((key) => key.replace(/^\//, ""))
    .filter((slug) => slug && !staticRoutes.has(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  return getMetadata(`/${slug}`);
}

export default function HiringDeveloper() {
  return <HiringDeveloperClient />;
}

