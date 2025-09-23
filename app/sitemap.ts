import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    // Home
    {
      url: `${siteUrl}/es`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: `${siteUrl}/es`,
          en: `${siteUrl}/en`,
          de: `${siteUrl}/de`,
        },
      },
    },

    // Categoría: Descubriendo el Amazonas
    {
      url: `${siteUrl}/es/categories/descubriendo-el-amazonas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/es/categorias/descubriendo-el-amazonas`,
          en: `${siteUrl}/en/categories/discovering-the-amazon`,
          de: `${siteUrl}/de/kategorien/amazonas-entdecken`,
        },
      },
    },

    // Categoría: Aventura selva adentro
    {
      url: `${siteUrl}/es/categorias/aventura-selva-adentro`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/es/categorias/aventura-selva-adentro`,
          en: `${siteUrl}/en/categories/jungle-adventure`,
          de: `${siteUrl}/de/kategorien/dschungel-abenteuer`,
        },
      },
    },

    // Categoría: Bushcraft y supervivencia
    {
      url: `${siteUrl}/es/categorias/bushcraft-supervivencia`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/es/categorias/bushcraft-supervivencia`,
          en: `${siteUrl}/en/categories/bushcraft-survival`,
          de: `${siteUrl}/de/kategorien/bushcraft`,
        },
      },
    },
    // Ejemplo con "about"
    {
      url: `${siteUrl}/es/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/es/sobre-nosotros`,
          en: `${siteUrl}/en/about`,
          de: `${siteUrl}/de/uber-uns`, 
        },
      },
    },
  ];

  return urls;
}
