import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    // 🌐 HOME ES
    {
      url: `${siteUrl}/es`,
      lastModified: now,
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
    // 🌐 HOME EN
    {
      url: `${siteUrl}/en`,
      lastModified: now,
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
    // 🌐 HOME DE
    {
      url: `${siteUrl}/de`,
      lastModified: now,
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

    // 🌱 Categoría: Descubriendo el Amazonas (ES)
    {
      url: `${siteUrl}/es/categorias/descubriendo-el-amazonas`,
      lastModified: now,
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
    // EN
    {
      url: `${siteUrl}/en/categories/discovering-the-amazon`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // DE
    {
      url: `${siteUrl}/de/kategorien/amazonas-entdecken`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 🏕 Aventura Selva Adentro
    {
      url: `${siteUrl}/es/categorias/aventura-selva-adentro`,
      lastModified: now,
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
    {
      url: `${siteUrl}/en/categories/jungle-adventure`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/de/kategorien/dschungel-abenteuer`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 🔥 Bushcraft y Supervivencia
    {
      url: `${siteUrl}/es/categorias/bushcraft-supervivencia`,
      lastModified: now,
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
    {
      url: `${siteUrl}/en/categories/bushcraft-survival`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/de/kategorien/bushcraft`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 🪶 Ethno Travel
    {
      url: `${siteUrl}/es/categorias/ethno-travel`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/es/categorias/ethno-travel`,
          en: `${siteUrl}/en/categories/ethno-travel`,
          de: `${siteUrl}/de/kategorien/ethno-travel`,
        },
      },
    },
    {
      url: `${siteUrl}/en/categories/ethno-travel`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/de/kategorien/ethno-reisen`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 📄 Sobre nosotros
    {
      url: `${siteUrl}/es/sobre-nosotros`,
      lastModified: now,
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
    {
      url: `${siteUrl}/en/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/de/uber-uns`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return urls;
}
