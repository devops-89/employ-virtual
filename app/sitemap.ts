import { MetadataRoute } from "next";
import { pageMetadata } from "@/utils/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.employvirtual.com";
  const routes = Object.keys(pageMetadata);

  return routes.map((route) => {
    const isHome = route === "/";
    return {
      url: `${baseUrl}${isHome ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: isHome ? "daily" : "weekly",
      priority: isHome ? 1.0 : route.startsWith("/hire-") ? 0.8 : 0.7,
    };
  });
}
