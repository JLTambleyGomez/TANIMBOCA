import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import { siteUrl } from "@/lib/seo";
import type { ReactNode } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function ESLayout({ children }: { children: ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${siteUrl}/es`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sobre Nosotros",
        item: `${siteUrl}/es/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Descubriendo el Amazonas",
        item: `${siteUrl}/es/categorias/descubriendo-el-amazonas`,
      },
      { 
        "@type": "ListItem",
        position: 4,
        name: "Aventura selva adentro",
        item: `${siteUrl}/es/categorias/aventura-selva-adentro`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Bushcraft y Supervivencia",
        item: `${siteUrl}/es/categorias/bushcraft-supervivencia`,

      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Sostenibilidad",
        item: `${siteUrl}/es/sostenibilidad`, },
              {
        "@type": "ListItem",
        position: 7,
        name: "ethno-travel",
        item: `${siteUrl}/es/ethno-travel`, }
    ],
  };

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Script
          id="breadcrumb-schema-es"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </body>
    </html>
  );
}
