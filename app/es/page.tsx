// app/es/page.tsx
import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";
import HeroES from "@/components/HeroES";
import NavbarES from "@/components/NavbarES";
import AboutES from "@/components/AboutES";
import CategoriesCardES from "@/components/CategoriesCardES";
import CallToActionES from "@/components/CallToActionES";
import FooterES from "@/components/FooterES";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Aventuras en la Selva Amazónica | Reserva Natural Tanimboca",
  description:
    "Tanimboca, en el Amazonas colombiano: canopy, kayak, expediciones en la selva, tradiciones indígenas, gastronomía amazónica y planes de viaje personalizados.",
  keywords: [
    "Tanimboca",
    "Amazonas Colombia",
    "turismo Amazonas",
    "canopy Amazonas",
    "kayak Amazonas",
    "excursiones selva Colombia",
    "cultura indígena Amazonas",
    "ecoturismo Colombia",
    "reserva natural Amazonas",
    "aventuras en la selva",
    "planes personalizados Amazonas",
  ],
  openGraph: {
    title: "Tanimboca | Aventuras en el Amazonas colombiano",
    description:
      "Vive el Amazonas colombiano como nunca: canopy, kayak, excursiones en la selva, cultura indígena, gastronomía amazónica y viajes totalmente personalizados.",
    url: `${siteUrl}/es`,
    locale: "es_CO",
  },
  alternates: makeAlternates("home", "es"),
};

export default function HomeES() {
  return (
    <section className="overflow-hidden">
      <NavbarES />
      <HeroES />
      <AboutES />
      <CategoriesCardES />
      <CallToActionES />
      <FooterES />

      {/* JSON-LD ultra detallado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": `${siteUrl}/es`,
            "name": "Reserva Natural Tanimboca",
            "description":
              "Tanimboca, en el Amazonas colombiano: canopy, kayak, expediciones en la selva, tradiciones indígenas, gastronomía amazónica y planes de viaje personalizados.",
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
                  "availableLanguage": ["es", "en", "de"]
                }
              ]
            },
            "location": {
              "@type": "Place",
              "name": "Reserva Natural Tanimboca",
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
                "name": "Planes de Aventura Selva Adentro",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Expedición Amazonas Extrema (8 Días / 7 Noches)",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Caminatas largas por selva primaria y manantiales de arcilla. Kayak por río Tacana y navegación por el Amazonas. Campamentos en hamacas, casas en árboles y bungalows. Excursión a reserva peruana y Puerto Nariño. Experiencias nocturnas de fauna y avistamiento de loros al atardecer."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Selva y Río – Aventura en Kayak (6 Días / 5 Noches)",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Trekking ligero combinado con kayak por ríos amazónicos. Campamentos y bungalows en medio de la selva. Excursión a reserva peruana y Puerto Nariño. Observación de fauna y espectáculos naturales de loros."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Inmersión Amazónica – Trekking en la Selva (6 Días / 5 Noches)",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Trekking profundo por selva virgen. Campamentos en hamacas bajo el dosel. Experiencia de inmersión con guías indígenas y aprendizaje de técnicas locales. Excursión a reserva peruana y Puerto Nariño. Avistamiento de fauna y plantas emblemáticas como ceibas y victorias regias."
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "name": "Planes de Bushcraft y Supervivencia",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Bushcraft Familia o Amigos (6 Días / 5 Noches)",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Diseñado para principiantes, familias y amigos. Canopy, caminatas nocturnas, construcción de campamentos, pesca, técnicas básicas de supervivencia. Día 1: llegada, canopy, caminata nocturna. Día 2-3: campamento, uso de machete, fuego, pesca, orientación. Día 4-5: excursiones al río Amazonas y reservas en Perú, avistamiento de fauna y loros. Día 6: recorrido por Tabatinga y Leticia, traslado al aeropuerto."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Expedición Amazónica (11 Días / 10 Noches)",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Aventura intensa con construcción de refugios, pesca y trampas, navegación, orientación y cocina en la selva. Día 1: llegada y canopy. Día 2: preparativos y charla de seguridad. Día 3-9: travesía profunda con campamento base y aprendizaje práctico de bushcraft. Día 10: exploración del río Amazonas, Isla de los Monos y avistamiento de delfines rosados. Día 11: despedida y traslado al aeropuerto."
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "name": "Planes Descubriendo el Amazonas",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Descubrimiento Amazónico (5 Días / 4 Noches)",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Canopy, tirolesa, rappel, caminatas guiadas diurnas y nocturnas, visita a chagras, taller de mambe con comunidades indígenas, navegación por el río Amazonas, observación de fauna (monos, aves, caimanes), excursiones a Puerto Nariño, Macedonia y Fundación Natutama. Alojamiento en casas en los árboles, cabañas junto al arroyo o bungalows. Día 1: llegada, canopy, rappel, caminata nocturna. Día 2: caminata por la selva, taller de mambe, visita a chagra. Día 3: excursión a reserva en Perú, observación de fauna, noche en la reserva. Día 4: navegación a Puerto Nariño y Macedonia, visita a Fundación Natutama, regreso a Leticia. Día 5: city tour y traslado al aeropuerto."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Campamento de Aventura (5 Días / 4 Noches)",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Campamento en la selva con fogata y hamacas, canopy, tirolesa, rappel, caminatas guiadas, pesca amazónica, observación de flora y fauna, navegación por el Amazonas y excursiones a Perú y Puerto Nariño. Alojamiento en casas en árboles, cabañas junto al arroyo, campamento en hamacas con toldillo o hoteles en Leticia. Día 1-5: itinerario detallado según actividades diarias."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Amazon Discovery Tour (4 Días / 3 Noches)",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Canopy, tirolesa, rappel, caminatas guiadas, navegación por el río Amazonas, excursión a reserva en Perú, observación de caimanes y loros, visita a Puerto Nariño y Fundación Natutama. Día 1-4: llegada, excursiones, navegación, city tour, traslado al aeropuerto."
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "name": "Ethno Travel",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Programa 1: Intercambios Culturales (3 Días / 2 Noches)",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Convivencia directa con familias indígenas, talleres de artesanías, caminatas interpretativas, actividades culinarias, juegos tradicionales, navegación en canoas y participación en rituales. Alojamiento en cabañas ecológicas o casas de la comunidad."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Programa 2: Expedición al Brasil – Encuentro con los Matis (5 Días)",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ubicación: valle del río Yavarí, Brasil. Convivencia con familias Matis, participación en actividades cotidianas, relatos orales y prácticas culturales tradicionales. Campamento de cacería en la selva, inmersión cultural auténtica y aprendizaje directo de sus costumbres."
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "name": "Sostenibilidad y Conservación",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Política de Sostenibilidad de Tanimboca",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Promoción de turismo responsable: cuidado ambiental, gestión de residuos, eficiencia energética, respeto a comunidades indígenas, prevención de riesgos sociales, educación ambiental y generación de empleo justo."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Gestión de residuos y conciencia ambiental",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Reducción, reutilización y reciclaje de materiales. Conciencia sobre tiempos de descomposición de residuos. Manejo responsable de agua y energía en alojamiento. Respeto a flora y fauna, y protección de patrimonio cultural."
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
