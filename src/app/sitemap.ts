import type { MetadataRoute } from "next";
import { profile } from "@/content/site";
import { seo } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seo.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${seo.url}${profile.photo}`],
    },
  ];
}
