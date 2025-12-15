import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { siteUrl } from "@/lib/seo";
import type { ReactNode } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function DELayout({ children }: { children: ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: `${siteUrl}/de`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Über Uns",
        item: `${siteUrl}/de/uber-uns`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Amazonas Entdecken",
        item: `${siteUrl}/de/categories/amazonas-entdecken`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Dschungel Abenteuer",
        item: `${siteUrl}/de/categories/dschungel-abenteuer`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Bushcraft und Überleben",
        item: `${siteUrl}/de/categories/bushcraft`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Nachhaltigkeit",
        item: `${siteUrl}/de/nachhaltigkeit`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Ethno-travel",
        item: `${siteUrl}/de/ethno-travel`,
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Galerie",
        item: `${siteUrl}/de/galerie`,
      },

      // NUEVAS PÁGINAS EXTRAS
      {
        "@type": "ListItem",
        position: 9,
        name: "Amphibien",
        item: `${siteUrl}/de/extras/amphibien`,
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Vogelbeobachtung",
        item: `${siteUrl}/de/extras/vogelbeobachtung`,
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "Zierfische",
        item: `${siteUrl}/de/extras/zierfische`,
      },
      {
        "@type": "ListItem",
        position: 12,
        name: "Forschung",
        item: `${siteUrl}/de/extras/forschung`,
      },
    ],
  };

  return (
    <html lang="de">
      <head>
        <meta httpEquiv="Content-Language" content="de" />

        <script
          id="breadcrumb-schema-de"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
