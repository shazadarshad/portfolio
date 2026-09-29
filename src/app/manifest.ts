import type { MetadataRoute } from "next";
import { profile } from "@/content/site";
import { seo } from "@/content/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — Portfolio`,
    short_name: profile.firstName,
    description: seo.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#fbfbfd",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
