import type { Metadata } from "next";
import Image from "next/image";
import NavbarDE from "@/components/NavbarDE";
import FooterDE from "@/components/FooterDE";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Nachhaltigkeitspolitik | Reserva Tanimboca",
  description:
    "Erfahre mehr über die Nachhaltigkeitspolitik von Tanimboca: Umweltschutz, soziale Verantwortung, faire Beschäftigung, Respekt gegenüber indigenen Gemeinschaften und Abfallmanagement im Amazonas.",
  openGraph: {
    title: "Nachhaltigkeitspolitik | Reserva Tanimboca",
    description:
      "Unser Engagement für nachhaltigen Tourismus im Amazonas: Wasser, Energie, Abfallmanagement, soziale Verantwortung und Respekt gegenüber indigenen Gemeinschaften.",
   
      url: `${siteUrl}/de/nachhaltigkeit`,
    locale: "de_DE",
  },
  // alternates: {
  //     canonical: `${siteUrl}/de/nachhaltigkeit`,
  //   languages: {
  //       es: `${siteUrl}/es/sostenibilidad`,
  //       en: `${siteUrl}/en/sustainability`,
  //       de: `${siteUrl}/de/nachhaltigkeit`,
  //   },
  // },
  alternates: makeAlternates("sostenibilidad", "de"),
};

export default function SustainabilityDE() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Welches Engagement verfolgt Tanimboca in Bezug auf Nachhaltigkeit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tanimboca fördert nachhaltigen Tourismus durch effiziente Nutzung von Wasser, Energie und Abfällen, Unterstützung der lokalen Gemeinschaften, Respekt gegenüber indigenen Traditionen und Prävention sozialer Risiken wie Kinderarbeit oder sexueller Ausbeutung.",
        },
      },
      {
        "@type": "Question",
        name: "Wie geht Tanimboca mit festen Abfällen um?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir reduzieren die Abfallmenge, fördern Recycling und sensibilisieren für die Zersetzungszeiten von Materialien. Unsachgemäße Abfallbewirtschaftung verursacht Umweltverschmutzung – daher setzen wir auf umweltfreundliche Praktiken.",
        },
      },
      {
        "@type": "Question",
        name: "Unterstützt Tanimboca die lokale Gemeinschaft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Wir beschäftigen lokales Personal unter fairen Bedingungen, fördern Kunsthandwerk und lokale Produkte und arbeiten mit indigenen Gemeinschaften zusammen, um ihr kulturelles Erbe zu bewahren.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Gesetze leiten die Nachhaltigkeitspolitik von Tanimboca?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir halten uns an kolumbianische Gesetze wie Gesetz 679 von 2001 und Gesetz 1336 von 2009 (Schutz von Minderjährigen im Tourismus), Gesetz 17 von 1981 und Gesetz 1333 von 2009 (Flora und Fauna) sowie Gesetz 63 von 1986 und Gesetz 1185 von 2008 (Kulturerbe).",
        },
      },
    ],
  };

  return (
    <>
      <NavbarDE />
      <main className="p-8 max-w-5xl mx-auto pt-40 text-white space-y-12">
        <h1 className="text-3xl font-bold text-green-200 mb-6">
          Nachhaltigkeitspolitik – Tanimboca S.A.S.
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
            Unser Ziel bei <strong>Tanimboca</strong> ist es, Besuchern die
            Möglichkeit zu geben, den Amazonas bewusst und umweltfreundlich zu
            erleben. Wir fördern den verantwortungsvollen Umgang mit Wasser,
            Energie und Abfall und respektieren die indigenen Gemeinschaften
            sowie ihre Traditionen.
          </p>
          <p>
            Wir schaffen faire Arbeitsplätze für Einheimische, lehnen
            Kinderarbeit ab und unterstützen die Gemeinschaft durch die
            Förderung lokaler Produkte und Kunsthandwerk. Nachhaltigkeit ist
            eine gemeinsame Verantwortung von Mitarbeitenden, Gästen und
            Partnern.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Soziale Kampagnen
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Weniger Müll, weniger Verschmutzung</li>
            <li>Mit der Erde im Sinn</li>
            <li>Energie sparen</li>
            <li>Wasser ist Leben</li>
            <li>Auf unser Eigenes achten</li>
            <li>Soziale Verantwortung</li>
            <li>Prävention sozialer Risiken</li>
            <li>Wissen bedeutet Wachstum</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Richtlinien für nachhaltigen Tourismus
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Respektiere lokale Bräuche und Traditionen.</li>
            <li>Kinder- und Jugendausbeutung ist in Kolumbien ein Verbrechen.</li>
            <li>Schütze Flora und Fauna; kaufe keine illegalen Produkte.</li>
            <li>Respektiere kulturelle und historische Ressourcen.</li>
            <li>Nimm keine archäologischen Überreste oder Pflanzen mit.</li>
            <li>Unterstütze die lokale Wirtschaft durch den Kauf von Kunsthandwerk.</li>
            <li>Vermeide unnötige Verpackungen, wähle recycelbare.</li>
            <li>Wirf keinen Abfall in die Natur.</li>
            <li>Spare Wasser und Energie in Unterkünften.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Abfallmanagement
          </h2>
          <p>
            Unsachgemäße Abfallbewirtschaftung führt zu Umweltverschmutzung und
            Gesundheitsrisiken. Bei Tanimboca fördern wir Reduzierung,
            Wiederverwendung und Recycling und sensibilisieren für die
            Zersetzungszeiten:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Papier: 1–4 Monate</li>
            <li>Zigarettenfilter: 1–2 Jahre</li>
            <li>Kaugummi: 5 Jahre</li>
            <li>Textilien: 2–3 Monate</li>
            <li>Wolle: 1 Jahr</li>
            <li>Dosen: 10–100 Jahre</li>
            <li>Plastikflaschen: 150–200 Jahre</li>
            <li>Batterien: 1000 Jahre</li>
            <li>Glas: unbestimmt</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Rechtlicher Rahmen
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Gesetz 679 von 2001, Gesetz 1336 von 2009 – Schutz von Minderjährigen.</li>
            <li>Gesetz 17 von 1981, Gesetz 1333 von 2009 – Flora und Fauna.</li>
            <li>Gesetz 63 von 1986, Gesetz 1185 von 2008 – Kulturerbe.</li>
            <li>Resolution 0584 von 2002 – gefährdete Tier- und Pflanzenarten in Kolumbien.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Ressourcen und Meldestellen
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Gegen illegalen Handel mit Flora und Fauna:{" "}
              <a href="https://www.omacha.org" className="text-green-400">
                www.omacha.org
              </a>
            </li>
            <li>
              Gegen illegalen Handel mit Kulturerbe:{" "}
              <a href="https://www.globoscolombia.com" className="text-green-400">
                www.globoscolombia.com
              </a>
            </li>
            <li>
              Gegen sexuelle Ausbeutung von Minderjährigen:{" "}
              <a href="https://www.animanaturalis.org" className="text-green-400">
                www.animanaturalis.org
              </a>
            </li>
          </ul>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterDE />
    </>
  );
}
