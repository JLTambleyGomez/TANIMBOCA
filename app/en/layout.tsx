import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { siteUrl } from "@/lib/seo";
import type { ReactNode } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function ENLayout({ children }: { children: ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/en`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: `${siteUrl}/en/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Discovering the Amazon",
        item: `${siteUrl}/en/categories/discovering-the-amazon`,
      },
      {
  "@type": "ListItem",
        position: 4,
        name: "Jungle Adventure",
        item: `${siteUrl}/en/categories/jungle-adventure`,

      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Bushcraft and Survival",
        item: `${siteUrl}/en/categories/bushcraft-survival`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Sustainability",
        item: `${siteUrl}/en/sustainability`,}
   
      
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          id="breadcrumb-schema-en"
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
