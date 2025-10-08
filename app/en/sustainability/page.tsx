import type { Metadata } from "next";
import Image from "next/image";
import NavbarEN from "@/components/NavbarEN";
import FooterEN from "@/components/FooterEN";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sustainability Policy | Tanimboca Reserve",
  description:
    "Learn about Tanimboca's sustainability policy: environmental care, social responsibility, fair employment, indigenous respect, and waste management in the Amazon.",
  openGraph: {
    title: "Sustainability Policy | Tanimboca Reserve",
    description:
      "Commitment to sustainable tourism in the Amazon: water, energy, waste management, social responsibility, and respect for indigenous communities.",
      url: `${siteUrl}/en/sustainability`,
    locale: "en_US",
  },
  alternates: {
      canonical: `${siteUrl}/en/sustainability`,
    languages: {
        es: `${siteUrl}/es/sostenibilidad`,
        de: `${siteUrl}/de/nachhaltigkeit`,
        en: `${siteUrl}/en/sustainability`,
    },
  },
};

export default function SustainabilityEN() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Tanimboca's commitment to sustainability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tanimboca promotes sustainable tourism by making efficient use of water, energy, and waste, supporting local communities, respecting indigenous traditions, and preventing social risks such as child labor or sexual exploitation.",
        },
      },
      {
        "@type": "Question",
        name: "How does Tanimboca manage solid waste?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We reduce waste generation, promote recycling, and raise awareness about decomposition times of materials. Improper waste handling causes contamination, so we follow strict eco-friendly practices.",
        },
      },
      {
        "@type": "Question",
        name: "Does Tanimboca support local communities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We hire local staff under fair conditions, promote local handicrafts and products, and collaborate with indigenous communities to preserve their cultural heritage.",
        },
      },
      {
        "@type": "Question",
        name: "Which laws guide Tanimboca’s sustainability policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our policies comply with Colombian laws such as Law 679 of 2001 and Law 1336 of 2009 (child protection in tourism), Law 17 of 1981 and Law 1333 of 2009 (flora and fauna protection), and Law 63 of 1986 and Law 1185 of 2008 (cultural heritage protection).",
        },
      },
      {
        "@type": "Question",
        name: "How can visitors contribute to sustainability during their trip?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visitors are encouraged to respect local traditions, avoid exploitation, protect biodiversity, support fair trade by buying local products, reduce plastic use, and save energy and water.",
        },
      },
    ],
  };

  return (
    <>
      <NavbarEN />
      <main className="p-8 max-w-5xl mx-auto pt-40 text-white space-y-12">
        <h1 className="text-3xl font-bold text-green-200 mb-6">
          Sustainability Policy – Tanimboca S.A.S.
        </h1>

      <div className="w-full h-80 rounded-lg overflow-hidden mb-12">
                    <Image
                        src="/sostenibilidad.jpg"
                        alt="sostenibilidad"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

        <section>
          <p>
            At <strong>Tanimboca</strong>, our commitment is to give our clients
            the opportunity to live the Amazon in all its beauty in a conscious
            and environmentally friendly way. We ensure the efficient use of
            water, energy, and waste while respecting indigenous communities and
            their cultural traditions.
          </p>
          <p>
            We generate fair employment for locals, prevent child exploitation
            and abuse, and promote community development through the sale of
            local products. Sustainability is a shared responsibility between
            employees, clients, and suppliers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            🌍 Social Campaign & Objectives
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Less garbage, less contamination.</li>
            <li>Save energy efficiently.</li>
            <li>Protect and conserve water resources.</li>
            <li>Raise awareness about conserving natural and cultural heritage.</li>
            <li>Prevent sexual abuse, child labor, and discrimination.</li>
            <li>Empower employees to share sustainability knowledge with visitors.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            📜 General Guidelines for Sustainable Tourism
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Respect customs and traditions of local communities.</li>
            <li>Remember: child exploitation in tourism is a crime.</li>
            <li>Protect flora, fauna, and avoid buying endangered products.</li>
            <li>Respect cultural and archaeological resources.</li>
            <li>Avoid extracting plants, flowers, or remains.</li>
            <li>Support local artisans and fair trade products.</li>
            <li>Reduce packaging and choose recyclable options.</li>
            <li>Do not litter in visited areas.</li>
            <li>Turn off lights, AC, and faucets when not in use.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            ♻️ Solid Waste Management
          </h2>
          <p>
            Improper waste handling contaminates soil and water, creating public
            health risks. Tanimboca implements strict recycling and awareness
            campaigns.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Paper: 1–4 months</li>
            <li>Cigarette filters: 1–2 years</li>
            <li>Chewing gum: 5 years</li>
            <li>Fabric: 2–3 months</li>
            <li>Wool: 1 year</li>
            <li>Cans: 10–100 years</li>
            <li>Plastic bottles: 150–200 years</li>
            <li>Batteries: 1000 years</li>
            <li>Glass: indeterminate</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            ⚖️ Legal Framework
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Law 679 (2001) & Law 1336 (2009) – Prevention of child abuse in tourism.</li>
            <li>Law 17 (1981) & Law 1333 (2009) – Protection of flora and fauna.</li>
            <li>Law 63 (1986) & Law 1185 (2008) – Protection of cultural heritage.</li>
            <li>Resolution 0584 (2002) – Declares endangered wild species.</li>
            <li>Policies against labor exploitation, race, and gender discrimination.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            🔗 Useful Resources
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Against illegal wildlife trafficking:{" "}
              <a href="http://www.omacha.org" className="underline text-green-400">
                omacha.org
              </a>
            </li>
            <li>
              Against illegal cultural heritage trafficking:{" "}
              <a href="http://www.globosColombia.com" className="underline text-green-400">
                globosColombia.com
              </a>
            </li>
            <li>
              To prevent child exploitation:{" "}
              <a href="http://www.globosColombia.com" className="underline text-green-400">
                globosColombia.com
              </a>
            </li>
            <li>
              Colombian tourism information:{" "}
              <a href="http://www.colombia.co" className="underline text-green-400">
                colombia.co
              </a>{" "}
              |{" "}
              <a href="http://www.viajaporcolombia.com" className="underline text-green-400">
                viajaporcolombia.com
              </a>
            </li>
            <li>
              National Parks:{" "}
              <a
                href="http://www.parquesnacionales.gov.co"
                className="underline text-green-400"
              >
                parquesnacionales.gov.co
              </a>
            </li>
            <li>
              Ministry of Commerce & Tourism:{" "}
              <a href="http://www.mincit.gov.co" className="underline text-green-400">
                mincit.gov.co
              </a>
            </li>
          </ul>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterEN />
    </>
  );
}
