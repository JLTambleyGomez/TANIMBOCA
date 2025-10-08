// app/en/categories/ethno-travel/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import NavbarEN from "@/components/NavbarEN";
import FooterEN from "@/components/FooterEN";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Ethno Travel | Tanimboca Reserve",
  description:
    "Immerse yourself in authentic cultural experiences with indigenous communities in the Amazon. Cultural exchanges, traditional crafts, gastronomy, and expeditions with the Matis in Brazil.",
  openGraph: {
    title: "Ethno Travel | Cultural Tourism in the Amazon",
    description:
      "Live an authentic encounter with indigenous communities in the Amazon tri-border region (Colombia, Brazil, Peru).",
      url: `${siteUrl}/en/categories/ethno-travel`,
    locale: "en_US",
  },
  alternates: makeAlternates("categorias/ethno-travel", "en"),
  // alternates: {
  //     canonical: `${siteUrl}/en/categories/ethno-travel`,
  //   languages: {
  //       es: `${siteUrl}/es/categorias/ethno-travel`,
  //       de: `${siteUrl}/de/kategorien/ethno-travel`,
  //       en: `${siteUrl}/en/categories/ethno-travel`,
  //   },
  // },
};

export default function EthnoTravelPageEN() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Ethno Travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ethno Travel is a form of responsible tourism that allows visitors to live with indigenous communities, learning about their traditions, languages, crafts, gastronomy, and worldview.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to speak Spanish or indigenous languages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Our local guides facilitate communication and cultural exchange, ensuring a respectful and immersive experience.",
        },
      },
      {
        "@type": "Question",
        name: "Where do these experiences take place?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In indigenous communities near Leticia (Colombia) and in the Yavarí River valley in Brazil, home of the Matis people.",
        },
      },
      {
        "@type": "Question",
        name: "What activities are included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cultural immersion with indigenous families, handicraft workshops, traditional cuisine, guided walks, participation in rituals, and cultural expeditions.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All activities are coordinated with community leaders and local guides, prioritizing respect, safety, and mutual benefit.",
        },
      },
    ],
  };

  return (
    <>
      <NavbarEN />
      <main className="p-8 max-w-5xl mx-auto pt-40">
        <h1 className="text-3xl font-bold mb-6 text-green-200">
          🌿 Ethno Travel: Cultural Tourism in the Amazon
        </h1>
        <p className="text-white mb-8">
          <strong>Ethno Travel</strong> is much more than a journey: it is an{" "}
          <em>authentic encounter with cultural diversity</em>. This type of
          tourism invites you to live with indigenous communities, sharing their
          traditions, languages, handicrafts, gastronomy, and unique worldview.
          Unlike conventional tourism, it is based on respect, participation,
          and mutual benefit. Each experience strengthens cultural identity,
          promotes sustainable development, and offers travelers the opportunity
          to discover the world through the eyes of native peoples.
        </p>

        <div className="w-full h-80 rounded-lg overflow-hidden mb-12">
          <Image
            src="/ethno-travel2.jpg"
            alt="Traveler participating in an indigenous cultural exchange in the Amazon"
            width={800}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Program 1 */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🪶 Program 1: Cultural Exchanges (3 Days / 2 Nights)
        </h2>
        <div className="text-white space-y-4 mb-10">
          <p>
            We organize immersive experiences with indigenous communities near
            Leticia, where visitors can share directly with families and learn
            from their ancestral knowledge. Through craft workshops, guided
            walks, and moments of dialogue, travelers have the opportunity to
            experience culture from the inside.
          </p>
          <p>
            Activities include cooking traditional dishes, learning local
            crafts, canoeing, participating in rituals, and exploring the
            rainforest alongside community members. Lodging is provided in
            eco-lodges or within community homes, respecting daily life
            rhythms.
          </p>
        </div>

        {/* Program 2 */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🌍 Program 2: Expedition to Brazil – Encounter with the Matis (5 Days)
        </h2>
        <div className="text-white space-y-4 mb-10">
          <p>
            We also offer expeditions to the Brazilian side, in the Yavarí River
            valley — home of the Matis communities. The Matis first came into
            contact with the outside world in 1975. A few years later, diseases
            introduced by outsiders reduced their population to fewer than 100
            survivors, mostly children and young people.
          </p>
          <p>
            Today, the Matis are a joyful and thriving people, with around 600
            members living in five communities. During the expedition, we spend
            five days with several Matis families in a jungle hunting camp,
            about eight hours by boat from Leticia. This unique journey allows
            travelers to experience their culture and way of life up close.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-green-300">
          📩 Information & Reservations
        </h2>
        <p className="text-white mb-8">
          For more details or to sign up for the next expedition, please contact
          us by email or through our communication channels. Each experience is
          designed in collaboration with the communities to ensure
          authenticity, respect, and shared benefits.
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterEN />
    </>
  );
}
