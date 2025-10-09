import { MetadataRoute } from "next";
import { hreflangRoutes, makeAlternates, HreflangRouteKey } from "@/lib/hreflangRoutes";

const now = new Date();

const pageConfig: Record<HreflangRouteKey, { priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }> = {
  home: { priority: 1, changeFrequency: "weekly" },
  sostenibilidad: { priority: 0.8, changeFrequency: "monthly" },
  galeria: { priority: 0.7, changeFrequency: "monthly" },
  "sobre-nosotros": { priority: 0.7, changeFrequency: "monthly" },
  "categorias/descubriendo-el-amazonas": { priority: 0.9, changeFrequency: "weekly" },
  "categorias/aventura-selva-adentro": { priority: 0.9, changeFrequency: "weekly" },
  "categorias/bushcraft-supervivencia": { priority: 0.9, changeFrequency: "weekly" },
  "categorias/ethno-travel": { priority: 0.9, changeFrequency: "weekly" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  (Object.keys(hreflangRoutes) as HreflangRouteKey[]).forEach((key) => {
    ["es", "en", "de"].forEach((lang) => {
      const alternates = makeAlternates(key, lang as "es" | "en" | "de");
      const config = pageConfig[key];

      urls.push({
        url: alternates.canonical,
        lastModified: now,
        priority: config?.priority ?? 0.5,
        changeFrequency: config?.changeFrequency ?? "monthly",
        alternates,
      });
    });
  });

  return urls;
}
