// lib/hreflangRoutes.ts
import { siteUrl } from "@/lib/seo";

export const hreflangRoutes = {
  // 🌐 Home
  "home": {
    es: "/es",
    en: "/en",
    de: "/de",
  },

  // 📄 Sobre Nosotros
  "sobre-nosotros": {
    es: "/es/sobre-nosotros",
    en: "/en/about",
    de: "/de/uber-uns",
  },

  // extras
  // 🌿 Amphibian Exploration
  "extras/anfibios": {
    es: "/es/extras/anfibios",
    en: "/en/extras/amphibians",
    de: "/de/extras/amphibien",
  },

  "extras/peces-ornamentales": {
    es: "/es/extras/peces-ornamentales",
    en: "/en/extras/ornamental-fish",
    de: "/de/extras/zierfische",
  },
  "extras/aves": {
    es: "/es/extras/aves",
    en: "/en/extras/birdwatching",
    de: "/de/extras/vogelbeobachtung",
  },

  "extras/investigacion": {
    es: "/es/extras/investigacion",
    en: "/en/extras/research",
    de: "/de/extras/forschung",
  },

  // 🌱 Descubriendo el Amazonas
  "categorias/descubriendo-el-amazonas": {
    es: "/es/categorias/descubriendo-el-amazonas",
    en: "/en/categories/discovering-the-amazon",
    de: "/de/kategorien/amazonas-entdecken",
  },

  // 🏕 Aventura Selva Adentro
  "categorias/aventura-selva-adentro": {
    es: "/es/categorias/aventura-selva-adentro",
    en: "/en/categories/jungle-adventure",
    de: "/de/kategorien/dschungel-abenteuer",
  },

  // 🔥 Bushcraft y Supervivencia
  "categorias/bushcraft-supervivencia": {
    es: "/es/categorias/bushcraft-supervivencia",
    en: "/en/categories/bushcraft-survival",
    de: "/de/kategorien/bushcraft",
  },

  // 🪶 Ethno Travel
  "categorias/ethno-travel": {
    es: "/es/categorias/ethno-travel",
    en: "/en/categories/ethno-travel",
    de: "/de/kategorien/ethno-travel",
  },

  // 🌍 Sostenibilidad
  sostenibilidad: {
    es: "/es/sostenibilidad",
    en: "/en/sustainability",
    de: "/de/nachhaltigkeit",
  },

  // 🖼 Galería
  galeria: {
    es: "/es/galeria",
    en: "/en/gallery",
    de: "/de/galerie",
  },
} as const;

export type HreflangRouteKey = keyof typeof hreflangRoutes;

/**
 * 🧭 Genera los metadatos `alternates` (canonical + hreflang) para SEO.
 *
 * @param key - Clave de la ruta, ej: 'galeria', 'sobre-nosotros', 'categorias/bushcraft-supervivencia'
 * @param currentLang - Idioma actual de la página ('es' | 'en' | 'de')
 */
export function makeAlternates(
  key: HreflangRouteKey,
  currentLang: "es" | "en" | "de"
) {
  const routes = hreflangRoutes[key];

  return {
    canonical: `${siteUrl}${routes[currentLang]}`,
    languages: {
      es: `${siteUrl}${routes.es}`,
      en: `${siteUrl}${routes.en}`,
      de: `${siteUrl}${routes.de}`,
      "x-default": `${siteUrl}${routes.en}`, // idioma por defecto recomendado
    },
  };
}
