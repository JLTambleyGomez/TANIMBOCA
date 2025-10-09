// app/en/page.tsx
import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";
import HeroEN from "@/components/HeroEN";
import NavbarEN from "@/components/NavbarEN";
import AboutEN from "@/components/AboutEN";
import CategoriesCardEN from "@/components/CategoriesCardEN";
import CallToActionEN from "@/components/CallToActionEN";
import FooterEN from "@/components/FooterEN";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Amazon Rainforest Tours & Personalized Adventures in Colombia",
  description:
    "Discover Tanimboca in the Colombian Amazon: canopy, kayaking, jungle expeditions, indigenous traditions, Amazonian cuisine, and tailor-made eco-travel plans.",
  keywords: [
    "Tanimboca",
    "Amazon rainforest tours",
    "Colombia Amazon travel",
    "Amazon canopy adventure",
    "kayaking Amazon river",
    "jungle expeditions Colombia",
    "indigenous traditions Amazon",
    "eco tourism Amazon",
    "Amazon rainforest wildlife",
    "personalized Amazon tours",
    "custom eco travel Amazon",
  ],
  openGraph: {
    title: "Tanimboca | Amazon Rainforest Adventures in Colombia",
    description:
      "Experience the Colombian Amazon like never before: canopy, kayaking, jungle expeditions, indigenous culture, gastronomy, and fully personalized eco-adventures.",
    url: `${siteUrl}/en`,
    locale: "en_US",
  },
  alternates: makeAlternates("home", "en"),
};

export default function HomeEN() {
  return (
    <section className="overflow-hidden">
      <NavbarEN />
      <HeroEN />
      <AboutEN />
      <CategoriesCardEN />
      <CallToActionEN />
      <FooterEN />

      {/* JSON-LD ultra detailed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": `${siteUrl}/en`,
            "name": "Tanimboca Amazon Reserve",
            "description":
              "Discover Tanimboca in the Colombian Amazon: canopy, kayaking, jungle expeditions, indigenous traditions, Amazonian cuisine, and tailor-made eco-travel plans.",
            "publisher": {
              "@type": "Organization",
              "name": "Tanimboca Amazon Reserve",
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
                  "availableLanguage": ["en", "es", "de"]
                }
              ]
            },
            "location": {
              "@type": "Place",
              "name": "Tanimboca Amazon Reserve",
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
                    "name": "What is 'Aventura Selva Adentro'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Aventura Selva Adentro offers immersive rainforest adventures in Tanimboca, Colombian Amazon, including trekking, kayaking, overnight stays in hammocks or treehouses, wildlife observation (monkeys, exotic birds, caimans, jaguars), and cultural experiences with indigenous communities. Duration: 6–8 days."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What tours are included under 'Aventura Selva Adentro'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "🏕️ Expedition Amazon Extreme – Trekking & Kayak (8 Days / 7 Nights)\n🛶 Jungle & River – Kayak Adventure (6 Days / 5 Nights)\n🌿 Amazon Immersion – Deep Jungle Trekking (6 Days / 5 Nights)"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is 'Bushcraft and Survival'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Bushcraft and Survival is a hands-on learning experience teaching practical survival techniques in the Colombian Amazon, including shelter building, fire starting, knife and machete use, fishing, navigation, and cultural excursions. Duration: 6–11 days."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which plans are offered in 'Bushcraft and Survival'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "🔥 Plan 1: Bushcraft for Families or Friends (6 Days / 5 Nights)\n🌿 Plan 2: Amazon Expedition – Advanced Survival (11 Days / 10 Nights)"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is 'Discovering the Amazon'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Discovering the Amazon provides authentic eco-tourism experiences with canopy, kayaking, guided walks, indigenous workshops, and wildlife observation. Duration: 3–5 days, accessible to all without prior experience."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which plans are offered in 'Discovering the Amazon'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "🌿 Amazon Discovery (5 Days / 4 Nights)\n🔥 Adventure Camp (5 Days / 4 Nights)\n🛶 Amazon Discovery Tour (4 Days / 3 Nights)"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is 'Ethno Travel'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ethno Travel focuses on responsible cultural tourism, offering authentic immersion with indigenous communities near Leticia (Colombia) and the Yavarí river valley (Brazil, Matis people), including workshops, rituals, and daily life participation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which programs are offered in 'Ethno Travel'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "🪶 Program 1: Cultural Exchange (3 Days / 2 Nights)\n🌍 Program 2: Expedition to Brazil – Matis Encounter (5 Days)"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is Tanimboca Reserve?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Tanimboca is a natural Amazonian reserve founded in 2001 near Leticia, Colombia, offering sustainable tourism, wildlife conservation, canopy tours, kayaking, guided jungle walks, ecological lodging, Amazonian cuisine, and cultural exchange with indigenous communities."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What sustainability practices does Tanimboca follow?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Tanimboca promotes sustainable tourism including water and energy efficiency, waste management, support for local communities, respect for indigenous traditions, responsible tourism, no child exploitation, and educational campaigns on environmental awareness."
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
