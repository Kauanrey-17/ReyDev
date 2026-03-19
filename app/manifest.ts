import type { MetadataRoute } from "next"
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ReyDev — Kauan Rey",
    short_name: "ReyDev",
    description:
      "Desenvolvedor Full-Stack especializado em sites modernos, automações com IA e soluções digitais.",
    start_url: "/",
    display: "standalone",
    background_color: "#060a10",
    theme_color: "#06b6d4",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["developer", "portfolio", "technology"],
    lang: "pt-BR",
  }
}