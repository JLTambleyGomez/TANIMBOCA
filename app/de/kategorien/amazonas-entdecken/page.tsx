import type { Metadata } from "next";
import Image from "next/image";
import NavbarDE from "@/components/NavbarDE";
import FooterDE from "@/components/FooterDE";

export const metadata: Metadata = {
  title: "Amazonas entdecken | Ökotourismus-Pläne in Tanimboca",
  description:
    "Entdecke den kolumbianischen Amazonas mit unseren exklusiven Angeboten: Amazonas-Entdeckung, Abenteuer-Camp und Amazon Discovery Tour. Erlebe Canopy, Kajak, indigene Kultur und Natur im Naturreservat Tanimboca.",
  openGraph: {
    title: "Amazonas entdecken | Einzigartige Erlebnisse in Tanimboca",
    description:
      "Erlebe den Amazonas-Regenwald mit authentischen Abenteuern: Canopy, Kajak, Wanderungen, indigene Kultur und mehr im Naturreservat Tanimboca, Leticia, Amazonas.",
    url: "/de/categories/amazonas-entdecken",
    locale: "de_DE",
  },
  alternates: {
    canonical: "/de/categories/amazonas-entdecken",
    languages: {
      es: "/es/categories/descubriendo-el-amazonas",
      en: "/en/categories/discovering-the-amazon",
    },
  },
};

export default function AmazonasEntdeckenPageDE() {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie viele Ökotourismus-Pläne bietet Tanimboca im Amazonas an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir bieten derzeit drei komplette Erlebnisse an: Amazonas-Entdeckung (5 Tage / 4 Nächte), Abenteuer-Camp (5 Tage / 4 Nächte) und Amazon Discovery Tour (4 Tage / 3 Nächte). Jeder Plan beinhaltet Unterkunft, Verpflegung, geführte Aktivitäten und lokale Transfers.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Aktivitäten sind im Plan Amazonas-Entdeckung enthalten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der Plan beinhaltet Canopy im Baumwipfelbereich, Seilrutschen, Abseilen, geführte Tages- und Nachtwanderungen, Besuch einer Chagra (amazonischer Garten), Mambe-Workshop mit indigenen Gemeinschaften, Amazonas-Flussfahrten, Tierbeobachtungen (Affen, Vögel) sowie Ausflüge nach Puerto Nariño, Macedonia und zur Natutama-Stiftung.",
        },
      },
      {
        "@type": "Question",
        name: "Wodurch unterscheidet sich das Abenteuer-Camp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dieser Plan richtet sich an Reisende, die intensiveren Kontakt mit dem Regenwald suchen. Er umfasst eine Nacht im Camp mit Lagerfeuer, traditionellen Geschichten, Angeln im Amazonas-Stil und Übernachtung in Hängematten mit Moskitonetzen sowie Canopy, Wanderungen, Amazonas-Flussfahrten und Besuche von Naturreservaten in Peru und Puerto Nariño.",
        },
      },
      {
        "@type": "Question",
        name: "Was bietet die Amazon Discovery Tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es handelt sich um einen kürzeren Plan (4 Tage / 3 Nächte), ideal für Reisende mit wenig Zeit. Er kombiniert Canopy, geführte Wanderungen, Amazonas-Flussfahrten, Besuch eines Naturreservats in Peru, Kaimanbeobachtung und die Erkundung von Puerto Nariño und Leticia, einschließlich des Naturschauspiels der Papageien bei Sonnenuntergang.",
        },
      },
      {
        "@type": "Question",
        name: "Wo finden die Erlebnisse statt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Erlebnisse finden hauptsächlich im Naturreservat Tanimboca in Leticia (Kolumbien) statt, mit Ausflügen nach Puerto Nariño, indigenen Gemeinschaften wie Macedonia, Naturreservaten in Peru und einer Stadttour in Leticia.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Art von Unterkunft ist in den Plänen enthalten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Je nach Plan und Verfügbarkeit übernachtest du in Baumhäusern, Hütten am Bach, Bungalows im Dschungel, Hängematten mit Moskitonetzen im Camp oder in Hotels in Leticia.",
        },
      },
      {
        "@type": "Question",
        name: "Brauche ich Vorerfahrung, um teilzunehmen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein, alle Aktivitäten sind für Teilnehmer ohne Vorerfahrung konzipiert und werden mit erfahrenen lokalen Guides durchgeführt. Canopy, Wanderungen und Exkursionen beinhalten Sicherheitsausrüstung und fachkundige Begleitung.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Art von Verpflegung wird während der Touren angeboten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Pläne beinhalten Vollverpflegung mit typischen Amazonas-Gerichten wie frischem Fisch, traditionellen Mahlzeiten in indigenen Malokas und internationalen Optionen im Restaurant des Reservats. Auf spezielle Ernährungsbedürfnisse wird auf Anfrage eingegangen.",
        },
      },
    ],
  };

  return (
    <>
      <NavbarDE />
      <main className="p-8 max-w-5xl mx-auto pt-40">
        <h1 className="text-3xl font-bold mb-6 text-green-200">
          Amazonas entdecken | Tanimboca-Pläne
        </h1>
        <p className="text-white mb-8">
          Erlebe ein einzigartiges Abenteuer im{" "}
          <strong> Naturreservat Tanimboca</strong> mit unseren{" "}
          <strong>drei Ökotourismus-Plänen</strong>. Tauche ein in die
          Biodiversität des Amazonas mit Aktivitäten wie{" "}
          <em>
            Canopy, Kajak, geführte Wanderungen, indigene Workshops und
            Tierbeobachtung
          </em>
          . Jeder Plan ist so gestaltet, dass du den kolumbianischen Amazonas
          authentisch und nachhaltig genießen kannst.
        </p>

        {/* Featured Image */}
        <div className="w-100 h-80 rounded-lg overflow-hidden mb-12">
          <Image
            src="/bushcraft-adventure.jpg"
            alt="Touristen genießen den Ökotourismus im Amazonas"
            width={600}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>
   {/* PLAN 1 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🌿 Amazon Discovery Tour (5 Tage / 4 Nächte)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Tag 1:</strong>Ankunft in Leticia am Flughafen Vásquez Cobo, anschließend 11 km Transfer zur Tanimboca Naturreservat. Nach einer herzlichen Begrüßung, Check-in und Einführung in dein Programm geht es nach La Arenosa, wo dich ein traditionelles Amazonas-Mittagessen mit frisch gegrilltem Fisch erwartet.
Am Nachmittag unternimmst du eine kurze Dschungelwanderung zu den Canopy-Plattformen – ein aufregendes, aber sicheres Abenteuer in den Baumwipfeln. Du kletterst per Seil zur ersten Plattform, gleitest dann über drei Ziplines zwischen den Aussichtspunkten und überquerst eine Hängebrücke hoch im Blätterdach. Der Abstieg erfolgt per Abseilen.
Nach dem Erlebnis bringt dich dein Guide zu deiner Unterkunft für die Nacht – wahlweise ein Baumhaus oder eine Dschungelhütte am Bach (je nach Verfügbarkeit). Nach einer kurzen Pause folgt eine Nachtwanderung, bei der du die Geräusche und Tiere des Regenwalds im Dunkeln entdeckst. Das Abendessen besteht aus einer besonderen Pizza im Amazonas-Stil oder anderen Gerichten im Restaurant. Übernachtung mitten im Klang des Dschungels.
                    </p>
                    <p>
                        <strong>Tag 2:</strong> Nach dem Frühstück beginnt eine geführte Wanderung durch den Dschungel. Dein Guide zeigt dir Heilpflanzen, Naturmaterialien für den Bau, Lianen zum Flechten und andere Ressourcen des Regenwaldes. Ziel ist die Reserva Natural Selva, wo es Mittagessen in einer Maloca gibt – einem traditionellen Versammlungshaus der Indigenen.
Danach besuchst du eine Chagra, einen Amazonas-Garten, in dem Maniok, Chili, Bananen, Kochbananen und Koka angebaut werden. Am Nachmittag nimmst du an einem Mambe-Workshop teil: du verarbeitest Koka-Blätter und lernst deren kulturelle und spirituelle Bedeutung kennen. Rückkehr ins Tanimboca Reservat, Entspannung am Bach und Übernachtung im komfortablen Dschungel-Bungalow.</p>
                    <p>
                        <strong>Tag 3:</strong> Nach dem frühen Frühstück geht es zum Hafen von Leticia. Mit dem Boot fährst du über den Amazonas in ein beeindruckendes Peruanisches Naturreservat. Je nach Jahreszeit erreichst du es nach einem 45-minütigen Dschungelspaziergang (Trockenzeit) oder per ruhiger Kanufahrt (Regenzeit).
Das Reservat ist reich an Biodiversität – mit etwas Glück siehst du Affen, exotische Vögel und andere Tiere. Du genießt frisch zubereitete lokale Mahlzeiten und erkundest den Wald zu Fuß oder mit dem Kanu. Halte Ausschau nach Riesen-Seerosen und den gewaltigen Ceiba-Bäumen. Nach Einbruch der Dunkelheit begibst du dich auf eine geführte Kaiman-Nachtwanderung. Übernachtung im Naturreservat in Peru. </p>
                    <p>
                        <strong>Tag 4:</strong> Am Morgen geht es mit dem Privatboot 80 km flussaufwärts nach Puerto Nariño, mit Stopps auf der Affeninsel und in Macedonia, einer indigenen Gemeinde, die für ihre Holzschnitzereien bekannt ist.
In Puerto Nariño, einem ruhigen, autofreien Dorf am Loretoyacu-Fluss, genießt du ein Mittagessen und besuchst die Natutama Stiftung, die über das reiche Unterwasserleben des Amazonas informiert. Am Nachmittag Rückfahrt nach Leticia und dort ein unvergessliches Schauspiel: tausende Papageien, die bei Sonnenuntergang in ihre Schlafbäume zurückkehren. Übernachtung im Hotel in Leticia. </p>
                    <p>
                        <strong>Tag 5:</strong> Je nach Flugplan unternimmst du eine Stadttour durch Leticia. Ende gegen Mittag und privater Transfer zum Flughafen Vásquez Cobo für deine Abreise.  </p>
                </div>

                {/* PLAN 2 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🔥 Adventure Camp (5 Tage / 4 Nächte)

                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Tag 1:</strong>Ankunft in Leticia und Transfer ins Tanimboca Naturreservat. Nach Begrüßung, Check-in und Einführung Mittagessen in La Arenosa. Danach Canopy-Abenteuer mit Klettern, Ziplines, Hängebrücke und Abseilen. Unterkunft in Baumhaus oder Dschungelhütte (je nach Verfügbarkeit). Abends Nachtwanderung und Abendessen (Amazonas-Pizza oder andere Gerichte). Übernachtung mitten im Dschungel. </p>
                    <p>
                        <strong>Tag 2:</strong> Nach dem Frühstück bereitest du dich auf eine Nacht im Dschungelcamp vor. Der Lagerplatz befindet sich im Tanimboca Reservat. Du baust dein Camp auf, richtest ein Feuer zum Kochen und Zusammensitzen ein. Dein indigener Guide erklärt dir nützliche Pflanzen, Heilmethoden und Korbflecht-Techniken. Am Nachmittag gehst du traditionell angeln. Abends Essen und Geschichten am Lagerfeuer, Übernachtung in Hängematten mit Moskitonetz. </p>
                    <p>
                        <strong>Tag 3:</strong> Nach dem Frühstück im Reservat geht es zum Hafen von Leticia. Bootsfahrt in ein Peruanisches Naturreservat (Zugang je nach Saison zu Fuß oder per Kanu). Entdeckungstouren, frisch zubereitete Mahlzeiten, Beobachtung von Riesen-Seerosen, Ceiba-Bäumen, Affen und Vögeln. Nachts geführte Kaiman-Suche. Übernachtung im peruanischen Reservat.</p>
                    <p>
                        <strong>Tag 4:</strong>Privatboot 80 km nach Puerto Nariño, mit Stopps bei Affeninsel und im Dorf Macedonia. Mittagessen in Puerto Nariño, Besuch der Natutama Stiftung. Rückfahrt nach Leticia und Beobachtung von tausenden Papageien in den Schlafbäumen auf der Plaza. Übernachtung im Hotel.</p>
                    <p>
                        <strong>Tag 5:</strong> Je nach Flugplan Stadtrundgang in Leticia. Ende gegen Mittag, Transfer zum Flughafen Vásquez Cobo.  </p>
                </div>

                {/* PLAN 3 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🛶 Amazon Discovery Tour (4 Tage / 3 Nächte)

                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Tag 1:</strong> Ankunft in Leticia, Transfer ins Tanimboca Naturreservat. Begrüßung, Check-in, Programm-Info. Mittagessen in La Arenosa. Danach Canopy-Abenteuer mit Ziplines, Brücke und Abseilen. Unterkunft im Baumhaus oder in der Dschungelhütte. Am Abend geführte Nachtwanderung. Abendessen im Restaurant. Übernachtung im Dschungel. </p>
                    <p>
                        <strong>Tag 2:</strong> Frühstück und Bootsfahrt in ein Peruanisches Naturreservat (Zugang per Fußweg oder Kanu, je nach Saison). Entdeckungstouren, lokale Mahlzeiten, Beobachtung von Ceiba-Bäumen, Riesen-Seerosen, Vögeln und Affen. Nachts Kaiman-Exkursion. Übernachtung im Reservat. </p>
                    <p>
                        <strong>Tag 3:</strong>Bootsausflug 80 km nach Puerto Nariño, mit Stopps bei Affeninsel und in Macedonia. Mittagessen in Puerto Nariño, Besuch der Natutama Stiftung. Rückfahrt nach Leticia. Am Abend Beobachtung von tausenden Papageien beim Schlafbaum. Übernachtung im Hotel. </p>
                    <p>
                        <strong>Tag 4:</strong> Je nach Flugplan Stadtrundgang in Leticia. Ende gegen Mittag, Transfer zum Flughafen Vásquez Cobo. </p>
                </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterDE />
    </>
  );
}
