// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/seo";
import type { ReactNode } from "react";
import AOSProvider from "@/app/AOSProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tanimboca Amazon Reserve",
              url: `${siteUrl}`,
              logo: `${siteUrl}/logo.png`,
              description:
                "Tanimboca Amazon Reserve in Colombia. Ecotourism, adventure, indigenous culture, canopy, kayaking, and sustainable travel in the Amazon rainforest.",
              sameAs: [
                "https://www.facebook.com/tanimboca",
                "https://www.instagram.com/tanimboca",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+57-123-456-7890",
                  contactType: "customer service",
                  areaServed: "CO",
                  availableLanguage: ["English", "Spanish", "German"],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
