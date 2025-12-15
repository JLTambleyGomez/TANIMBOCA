// app/de/page.tsx
import type { Metadata } from "next";
import HeroDE from "@/components/HeroDE";
import NavbarDE from "@/components/NavbarDE";
import AboutDE from "@/components/AboutDE";
import CategoriesCardDE from "@/components/CategoriesCardDE";
import CallToActionDE from "@/components/CallToActionDE";
import FooterDE from "@/components/FooterDE";
import WhatToBringDE from "@/components/WhatToBringDE";
import ExtrasCardDE from "@/components/ExtrasCardDE";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";
import PersonalizedPlansDE from "@/components/PersonalizedPlansDE";

export const metadata: Metadata = {
  title: "Abenteuer im Amazonas Regenwald | Tanimboca Naturreservat",
  description:
    "Tanimboca im kolumbianischen Amazonas: Canopy-Abenteuer, Kajakfahren, Dschungel-Expeditionen, indigene Traditionen, Amazonas-Küche und individuell gestaltete Reisepläne.",
  keywords: [
    "Tanimboca",
    "Amazonas Kolumbien",
    "Amazonas Reisen",
    "Canopy Abenteuer",
    "Kajak Amazonas",
    "Dschungeltour Kolumbien",
    "indigene Kultur Amazonas",
    "Ökotourismus Kolumbien",
    "Naturreservat Amazonas",
    "Abenteuer Regenwald",
    "maßgeschneiderte Amazonas Reisen",
  ],
  openGraph: {
    title: "Tanimboca | Abenteuer im kolumbianischen Amazonas",
    description:
      "Entdecke den kolumbianischen Amazonas: Canopy, Kajak, Dschungel-Expeditionen, indigene Traditionen, Gastronomie und individuell angepasste Öko-Reisen.",
    url: `${siteUrl}/de`,
    locale: "de_DE",
  },
  alternates: makeAlternates("home", "de"),
};

export default function HomeDE() {
  return (
    <section className="overflow-hidden">
      <NavbarDE />
      <HeroDE />
      <AboutDE />
      <CategoriesCardDE />
      <ExtrasCardDE />
      <PersonalizedPlansDE />
      <WhatToBringDE />
      <CallToActionDE />
      <FooterDE />

      {/* JSON-LD ultra detailed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": `${siteUrl}/de`,
            "name": "Tanimboca Naturreservat",
            "description":
              "Tanimboca im kolumbianischen Amazonas: Canopy-Abenteuer, Kajakfahren, Dschungel-Expeditionen, indigene Traditionen, Amazonas-Küche und individuell gestaltete Reisepläne.",
            "publisher": {
              "@type": "Organization",
              "name": "Tanimboca Naturreservat",
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`
              },
              "sameAs": [
                "https://www.facebook.com/tanimboca",
                "https://www.instagram.com/tanimboca"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+57-123-456-7890",
                  "contactType": "customer service",
                  "areaServed": "CO",
                  "availableLanguage": ["de", "es", "en"]
                }
              ]
            },
            "location": {
              "@type": "Place",
              "name": "Tanimboca Naturreservat",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Leticia",
                "addressRegion": "Amazonas",
                "addressCountry": "Colombia"
              }
            },
            "mainEntity": [
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Was ist 'Aventura Selva Adentro'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "'Aventura Selva Adentro' bietet immersive Regenwald-Abenteuer in Tanimboca, Kolumbianischer Amazonas: Trekking, Kajak, Übernachtungen in Hängematten oder Baumhäusern, Tierbeobachtung (Affen, exotische Vögel, Kaimane, Jaguare) und kulturelle Erfahrungen mit indigenen Gemeinschaften. Dauer: 6–8 Tage."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Welche Touren sind in 'Aventura Selva Adentro' enthalten?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "🏕️ Expedition Amazonas Extrem – Trekking & Kajak (8 Tage / 7 Nächte)\n🛶 Dschungel & Fluss – Kajak Abenteuer (6 Tage / 5 Nächte)\n🌿 Amazonas Immersion – Tiefes Dschungel-Trekking (6 Tage / 5 Nächte)"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Was ist 'Bushcraft und Survival'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "'Bushcraft und Survival' bietet praxisnahes Erlernen von Überlebenstechniken im kolumbianischen Amazonas: Bau von Unterkünften, Feuer machen, Macheten- und Messereinsatz, Angeln, Navigation, sowie kulturelle Exkursionen. Dauer: 6–11 Tage."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Welche Pläne werden in 'Bushcraft und Survival' angeboten?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "🔥 Plan 1: Bushcraft für Familien oder Freunde (6 Tage / 5 Nächte)\n🌿 Plan 2: Amazonas Expedition – Fortgeschrittenes Survival (11 Tage / 10 Nächte)"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Was ist 'Discovering the Amazon'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "'Discovering the Amazon' bietet authentische Öko-Tourismus-Erlebnisse mit Canopy, Kajak, geführten Wanderungen, indigenen Workshops und Tierbeobachtung. Dauer: 3–5 Tage, für alle ohne Vorkenntnisse zugänglich."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Welche Pläne werden in 'Discovering the Amazon' angeboten?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "🌿 Amazonas Entdeckung (5 Tage / 4 Nächte)\n🔥 Abenteuer-Camp (5 Tage / 4 Nächte)\n🛶 Amazonas Entdeckungstour (4 Tage / 3 Nächte)"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Was ist 'Ethno Travel'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "'Ethno Travel' fokussiert sich auf verantwortungsvollen Kulturtourismus und bietet authentische Begegnungen mit indigenen Gemeinschaften nahe Leticia (Kolumbien) und im Yavarí-Flusstal (Brasilien, Matis), einschließlich Workshops, Ritualen und Teilnahme am Alltagsleben."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Welche Programme werden in 'Ethno Travel' angeboten?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "🪶 Programm 1: Kulturaustausch (3 Tage / 2 Nächte)\n🌍 Programm 2: Expedition nach Brasilien – Matis Begegnung (5 Tage)"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Was ist das Tanimboca Reservat?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Tanimboca ist ein Naturreservat im Amazonas nahe Leticia, Kolumbien, gegründet 2001, mit nachhaltigem Tourismus, Tier- und Pflanzenarten Schutz, Canopy-Touren, Kajakfahrten, geführten Dschungelwanderungen, ökologischer Unterkunft, Amazonas-Küche und kulturellem Austausch mit indigenen Gemeinschaften."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Welche Nachhaltigkeitspraktiken verfolgt Tanimboca?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Tanimboca fördert nachhaltigen Tourismus: Wasser- und Energieeffizienz, Abfallmanagement, Unterstützung lokaler Gemeinschaften, Respekt für indigene Traditionen, verantwortungsvoller Tourismus, kein Kinderarbeit, Bildungsmaßnahmen für Umweltbewusstsein."
                    }
                  }
                ]
              }
            ]

          })
        }}
      />
    </section>
  );
}
