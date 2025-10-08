// components/AlternateLinks.tsx
import { siteUrl } from "@/lib/seo";
import { HreflangRouteKey, hreflangRoutes } from "@/lib/hreflangRoutes";

interface AlternateLinksProps {
  routeKey: HreflangRouteKey;
}

/**
 * Inserta automáticamente las etiquetas <link rel="alternate" hreflang="...">
 * para la ruta especificada en hreflangRoutes.ts
 */
export function AlternateLinks({ routeKey }: AlternateLinksProps) {
  const routes = hreflangRoutes[routeKey];

  if (!routes) return null;

  return (
    <>
      {Object.entries(routes).map(([lang, path]) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${siteUrl}${path}`}
        />
      ))}
      {/* x-default = idioma por defecto (ES en este caso) */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteUrl}${routes.es}`}
      />
    </>
  );
}
