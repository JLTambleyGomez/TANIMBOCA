// app/de/kategorien/ethno-reisen/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import NavbarDE from "@/components/NavbarDE";
import FooterDE from "@/components/FooterDE";

export const metadata: Metadata = {
  title: "Ethno Travel | Reserva Tanimboca",
  description:
    "Erleben Sie authentischen kulturellen Austausch mit indigenen Gemeinschaften im Amazonas. Traditionelles Handwerk, Gastronomie, kulturelle Expeditionen und Begegnungen mit den Matis in Brasilien.",
  openGraph: {
    title: "Ethno Travel | Kultureller Tourismus im Amazonas",
    description:
      "Tauchen Sie ein in authentische Begegnungen mit indigenen Gemeinschaften in der Dreiländerregion Kolumbien–Brasilien–Peru.",
    url: "/de/kategorien/ethno-reisen",
    locale: "de_DE",
  },
  alternates: {
    canonical: "/de/kategorien/ethno-reisen",
    languages: {
      es: "/es/categories/ethno-travel",
      en: "/en/categories/ethno-travel",
    },
  },
};

export default function EthnoTravelPageDE() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was ist Ethno Travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ethno Travel ist eine Form des verantwortungsvollen Tourismus, bei der Reisende mit indigenen Gemeinschaften zusammenleben und ihre Traditionen, Sprachen, Handwerkskunst, Gastronomie und Weltanschauung kennenlernen.",
        },
      },
      {
        "@type": "Question",
        name: "Muss ich Spanisch oder indigene Sprachen sprechen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein. Unsere lokalen Guides übersetzen und erleichtern den kulturellen Austausch, sodass ein respektvolles und authentisches Erlebnis gewährleistet ist.",
        },
      },
      {
        "@type": "Question",
        name: "Wo finden die Erlebnisse statt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In indigenen Gemeinschaften in der Nähe von Leticia (Kolumbien) sowie im Tal des Yavarí-Flusses in Brasilien, wo die Matis leben.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Aktivitäten sind enthalten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kultureller Austausch mit indigenen Familien, Handwerksworkshops, traditionelle Küche, geführte Spaziergänge, Teilnahme an Ritualen und kulturelle Expeditionen.",
        },
      },
      {
        "@type": "Question",
        name: "Ist die Erfahrung sicher?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Alle Aktivitäten werden in Zusammenarbeit mit lokalen Führern und Gemeindeleitern organisiert. Respekt, Sicherheit und gegenseitiger Nutzen stehen im Vordergrund.",
        },
      },
    ],
  };

  return (
    <>
      <NavbarDE />
      <main className="p-8 max-w-5xl mx-auto pt-40">
        <h1 className="text-3xl font-bold mb-6 text-green-200">
          🌿 Ethno Travel: Kultureller Tourismus im Amazonas
        </h1>
        <p className="text-white mb-8">
          <strong>Ethno Travel</strong> ist weit mehr als eine Reise: Es ist eine{" "}
          <em>authentische Begegnung mit kultureller Vielfalt</em>. Diese Form
          des Tourismus lädt dazu ein, mit indigenen Gemeinschaften zu leben und
          ihre Traditionen, Sprachen, Handwerkskunst, Gastronomie und ihre
          einzigartige Weltanschauung zu teilen. Im Gegensatz zum
          herkömmlichen Tourismus basiert Ethno Travel auf Respekt, Teilhabe und
          gegenseitigem Nutzen. Jede Erfahrung stärkt die kulturelle Identität,
          fördert nachhaltige Entwicklung und ermöglicht es Reisenden, die Welt
          mit den Augen der indigenen Völker zu entdecken.
        </p>

        <div className="w-full h-80 rounded-lg overflow-hidden mb-12">
          <Image
            src="/ethno-travel2.jpg"
            alt="Reisende nehmen an einem kulturellen Austausch mit indigenen Gemeinschaften im Amazonas teil"
            width={800}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Programm 1 */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🪶 Programm 1: Kultureller Austausch (3 Tage / 2 Nächte)
        </h2>
        <div className="text-white space-y-4 mb-10">
          <p>
            Wir organisieren Begegnungen mit indigenen Gemeinschaften in der
            Nähe von Leticia, bei denen Besucher direkt mit Familien zusammenleben
            und von ihrem alten Wissen lernen können. Durch Handwerksworkshops,
            geführte Spaziergänge und den gemeinsamen Alltag erhalten Reisende
            tiefe Einblicke in die Kultur.
          </p>
          <p>
            Zu den Aktivitäten gehören traditionelle Kochkurse, Handwerkskunst,
            Kanufahrten, die Teilnahme an Ritualen sowie kulturelle Spaziergänge
            mit Gemeindemitgliedern. Die Unterbringung erfolgt in Öko-Lodges
            oder in Häusern der Gemeinschaften, im Einklang mit ihrem Alltag.
          </p>
        </div>

        {/* Programm 2 */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🌍 Programm 2: Expedition nach Brasilien – Begegnung mit den Matis (5 Tage)
        </h2>
        <div className="text-white space-y-4 mb-10">
          <p>
            Wir bieten auch Expeditionen auf die brasilianische Seite an, ins Tal
            des Yavarí-Flusses, wo die Matis-Gemeinschaften leben. Die Matis
            hatten ihren ersten Kontakt mit der Außenwelt im Jahr 1975. Wenige
            Jahre später reduzierten eingeschleppte Krankheiten ihre Bevölkerung
            auf weniger als 100 Überlebende, größtenteils Kinder und Jugendliche.
          </p>
          <p>
            Heute sind die Matis ein fröhliches, wachsendes Volk mit etwa 600
            Mitgliedern in fünf Gemeinschaften. Während der Expedition verbringen
            wir fünf Tage mit mehreren Matis-Familien in einem Jagdcamp im
            Dschungel, etwa acht Stunden mit dem Boot von Leticia entfernt. Diese
            einzigartige Reise ermöglicht es den Teilnehmern, ihre Kultur und
            Lebensweise hautnah zu erleben.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-green-300">
          📩 Informationen & Buchung
        </h2>
        <p className="text-white mb-8">
          Für weitere Details oder zur Anmeldung für die nächste Expedition
          kontaktieren Sie uns bitte per E-Mail oder über unsere
          Kommunikationskanäle. Jedes Programm wird in enger Zusammenarbeit mit
          den Gemeinschaften entwickelt, um Authentizität, Respekt und
          gegenseitigen Nutzen zu gewährleisten.
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterDE />
    </>
  );
}
