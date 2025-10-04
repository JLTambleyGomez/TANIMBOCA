import type { Metadata } from "next";
import Image from "next/image";
import NavbarDE from "@/components/NavbarDE";
import FooterDE from "@/components/FooterDE";

export const metadata: Metadata = {
  title: "Bushcraft & Überleben | Tanimboca Reservat",
  description:
    "Erlebe Bushcraft und Überleben im Amazonas. Von familienfreundlichen Abenteuern bis zu tiefen Dschungel-Expeditionen: Feuer machen, Angeln, Orientierung und mehr.",
  openGraph: {
    title: "Bushcraft & Überleben | Abenteuer im Amazonas",
    description:
      "Authentisches Amazonas-Erlebnis: Camping, Bushcraft, Feuertechniken, Angeln und Expeditionen im Naturreservat Tanimboca.",
    url: "/de/kategorien/bushcraft-überleben",
    locale: "de_DE",
  },
  alternates: {
    canonical: "/de/kategorien/bushcraft",
    languages: {
      es: "/es/categories/bushcraft-supervivencia",
      en: "/en/categories/bushcraft-survival",
    },
  },
};

export default function BushcraftPageDE() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Brauche ich Vorkenntnisse im Überlebenstraining?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein. Der Bushcraft-Plan Familie oder Freunde ist für Anfänger gedacht. Die Amazonas-Expedition richtet sich an Abenteurer mit guter Kondition, die ihre Überlebensfähigkeiten vertiefen möchten.",
        },
      },
      {
        "@type": "Question",
        name: "Wo finden die Camps statt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alle Camps befinden sich im Naturreservat Tanimboca, nur 11 km von Leticia entfernt, in sicheren, aber authentischen Amazonasgebieten.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Bushcraft-Techniken werden vermittelt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Umgang mit Machete und Messer, Herstellung von Angelwerkzeugen, Feuermachen, Kochen über offenem Feuer, Orientierung, Navigation, Bau von Unterkünften und Nahrungssuche.",
        },
      },
      {
        "@type": "Question",
        name: "Gibt es kulturelle Aktivitäten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Die Programme beinhalten Bootsfahrten auf dem Amazonas, Besuche von Reservaten in Peru, Delfinbeobachtungen sowie Stadtrundgänge in Leticia und Tabatinga.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Unterkünfte sind inbegriffen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Baumhäuser, Dschungelhütten, Hängematten-Camps und Hotels in Leticia, je nach Plan und Reisetag.",
        },
      },
    ],
  };

  return (
    <>
      <NavbarDE />
      <main className="p-8 max-w-5xl mx-auto pt-40">
        <h1 className="text-3xl font-bold mb-6 text-green-200">
          Bushcraft & Überleben im Amazonas
        </h1>

        <p className="text-white mb-8">
          Das <strong>Tanimboca Reservat</strong> liegt nur 11 km von Leticia
          entfernt und umfasst 30 Hektar geschützten Dschungel mit reicher
          Tierwelt und einem Bach, ideal zum traditionellen Angeln. Dank seiner
          Lage verbindet es <em>Authentizität, Sicherheit und Komfort</em> – der
          perfekte Ort, um Überlebenstechniken im Amazonas zu erlernen. Wir
          bieten Abenteuer für alle Niveaus: von Familien bis hin zu erfahrenen
          Entdeckern.
        </p>

        <div className="w-full h-80 rounded-lg overflow-hidden mb-12">
          <Image
            src="/bushcraft.jpg"
            alt="Touristen beim Bushcraft- und Überlebenstraining im Amazonas-Dschungel"
            width={800}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Plan 1 */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🔥 Plan 1: Bushcraft Familie oder Freunde (6 Tage / 5 Nächte)
        </h2>
        <div className="text-white space-y-4 mb-10">
          <p>
     Die Tour ist darauf ausgelegt, Eltern und Kinder oder auch Freundesgruppen auf sichere Weise der Natur näherzubringen – mit vielen praktischen Erfahrungen.

          </p>
        </div>
          <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Tag 1:</strong>
Ankunft in Leticia und Transfer ins Naturreservat Tanimboca. Je nach Ankunftszeit erwartet Sie ein traditionelles Amazonas-Mittagessen. Am Nachmittag unternehmen Sie eine Canopy-Tour hoch oben in den Baumkronen über Stahlseile und eine Hängebrücke. Die Nacht verbringen Sie in Baumhäusern und beenden den ersten Tag mit einer Nachtwanderung, um die nachtaktive Tierwelt des Amazonas zu entdecken.
                    </p>
                    <p>
                        <strong>Tag 2:</strong>
Nach dem Frühstück bereiten wir unsere Ausrüstung für zwei Übernachtungen im Dschungel vor. Das Camp befindet sich im Reservat Tanimboca. Am Lagerplatz beginnen Sie mit dem Aufbau des Camps. Der Rest des Tages ist praktischen Aktivitäten gewidmet: Einführung in den Gebrauch von Machete und Messer, Anfertigung von Angelwerkzeugen, Feuer machen und Kochen über offenem Feuer. Am Abend wird im Bach gefischt und am Lagerfeuer Geschichten erzählt.
                    </p>
                    <p>
                        <strong>Tag 3:</strong> Dieser Tag steht im Zeichen der Überlebenstechniken: Fallenbau für kleine Säugetiere und Fische, Orientierung im Dschungel, verschiedene Methoden des Feuermachens sowie Nahrungssuche in der Wildnis. Am Abend probieren Sie traditionelles Angeln und beenden den Tag mit einem Grillabend am Feuer, begleitet von Dschungelgeschichten.
                        
                         </p>
                    <p>
                        <strong>Tag 4:</strong>  Nach dem Frühstück fahren wir Sie zum Hafen von Leticia. Dort besteigen Sie ein Boot und überqueren den mächtigen Amazonas nach Peru zu einem Naturreservat an einem wunderschönen See. Dort können Sie zahlreiche Vögel beobachten, Piranhas angeln, die riesigen Victoria-Regia-Seerosen sehen und nachts nach Kaimanen auf dem See suchen.
                        </p>
                    <p>
                        <strong>Tag 5:</strong>Am Morgen bringt Sie ein Boot auf eine Tour entlang des Amazonas auf der Suche nach den rosa Flussdelfinen. Unterwegs besuchen Sie interessante Orte. Das Mittagessen wird in einem schwimmenden Restaurant auf dem Fluss serviert. Am Nachmittag erleben Sie im Santander-Park das spektakuläre Schauspiel der Ankunft von tausenden Papageien. Übernachtung in einem Hotel in Leticia. Abend zur freien Verfügung.
                        </p>
                    <p>
                        <strong>Tag 6:</strong>Am Morgen Stadtrundfahrt durch Tabatinga, die brasilianische Nachbarstadt, sowie Leticia. Transfer zum Flughafen. Ende des Amazonas-Abenteuers.
                              </p>
                </div>


        {/* Plan 2 */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🌿 Plan 2: Amazonas-Expedition (11 Tage / 10 Nächte)
        </h2>
        <div className="text-white space-y-4 mb-10">
          <p>
           Das Bushcraft-Survival-Abenteuer beginnt mit einer ausgedehnten Wanderung tief hinein in den Dschungel, wo wir ein Basislager errichten. Der Lagerplatz wird strategisch in der Nähe eines Baches gewählt, wo wir Hängematten mit Moskitonetzen und Planen aufbauen. Von dort aus wirst du in den nächsten Tagen lernen, indem du es wirklich erlebst. Unsere einheimischen Guides aus verschiedenen ethnischen Gruppen zeigen dir, wie man einfache, aber äußerst effektive Unterkünfte baut, Fangtechniken für kleine Flüsse und Bäche anwendet, Fallen für Fische, Säugetiere und Vögel stellt, sich mit Hilfe der Sonne orientiert und Werkzeuge zum Fischen und Jagen herstellt – sowie viele andere Fertigkeiten, die unterwegs hinzukommen können.


          </p>
      
        </div>
  <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Tag 1 - Ankunft und Abenteuer im Blätterdach:</strong>
Ankunft in Leticia am Flughafen Vásquez Cobo – hier beginnt dein Abenteuer. Ein kurzer 11 km Transfer bringt dich ins Naturreservat Tanimboca, dein Tor zum Amazonas. Nach einer herzlichen Begrüßung, Check-in und Einführung fahren wir nach La Arenosa, wo ein traditionelles Amazonas-Mittagessen mit frisch gegrilltem Fisch auf dich wartet.
Am Nachmittag geht es hoch hinaus: Klettere mit dem Seil zur ersten Plattform, gleite per Seilrutsche zwischen drei Aussichtspunkten und überquere eine Hängebrücke hoch über dem Regenwald. Den Abschluss bildet ein spannender Abseilgang zurück auf den Waldboden.
Die heutige Unterkunft ist etwas Besonderes: ein Baumhaus oder eine Dschungelhütte am Bach (je nach Verfügbarkeit). Nach einer kurzen Pause begleitet dich dein Guide auf eine Nachtwanderung, bei der der Regenwald seine verborgene Welt offenbart. Abendessen gibt es im Reservat – eine besondere Amazonas-Pizza oder andere lokale Gerichte. Übernachtung mitten im Klangteppich des Dschungels.
                    </p>
                    <p>
                        <strong>Tag 2 - Vorbereitung auf die Expedition:</strong>
Nach dem Frühstück geht es nach Leticia für letzte Einkäufe. Mittagessen in einem lokalen Restaurant, anschließend Rückkehr nach Tanimboca.
Am Nachmittag findet das Sicherheitsbriefing zur Expedition statt, inklusive einer Einführung in den sicheren Umgang mit der Machete. Danach beginnst du, deine Ausrüstung für die kommenden Tage vorzubereiten. Morgen startet das große Abenteuer.
                    </p>
                    <p>
                        <strong>Tag 3 - Aufbruch in den Dschungel:</strong> Nach dem Frühstück geht es los: Wir wandern ein paar Stunden tief in den Regenwald, bis wir einen unberührten Bach erreichen. Dort errichten wir unser Basislager.
Für die nächsten sieben Tage ist dies weit mehr als nur ein Lager – es wird dein Zuhause in der Wildnis und dein Klassenzimmer unter freiem Himmel. Hier lebst du mitten im Regenwald, lernst seine Rhythmen kennen, entdeckst seine Geheimnisse und baust eine tiefe Verbindung zur Natur auf.

                         </p>
                    <p>
                        <strong>Tag 9 - Zurück in die Zivilisation:</strong>  Wir brechen das Lager ab und wandern zurück zur Tanimboca-Reserve. Nach dem Mittagessen fahren wir in die Stadt, genießen ein kaltes Getränk oder ein Eis und stöbern in den Läden mit lokalem Kunsthandwerk.
Am Abend erwartet uns ein unvergessliches Naturschauspiel: tausende Papageien, die in der Hauptplaza von Leticia in ihre Schlafbäume zurückkehren. Rückkehr nach Tanimboca zur Übernachtung.
  </p>
                    <p>
                        <strong>Tag 10 - Amazonas-Flusserkundung:</strong>Heute tauschen wir die Stiefel gegen Boote. Wir erkunden den mächtigen Amazonas, besuchen die Affeninsel und suchen nach den faszinierenden rosa Flussdelfinen.
Das Mittagessen nehmen wir in einem schwimmenden Restaurant ein. Am Nachmittag Rückkehr nach Tanimboca und Abschluss der Expedition mit einem traditionellen Amazonas-Barbecue und Caipirinhas – ein Fest unter den Sternen.
  </p>
                    <p>
                        <strong>Tag 11 -  Abschied:</strong>Je nach Flugplan Transfer zum Flughafen und Unterstützung beim Check-in.
Ende der Tour – doch der Amazonas bleibt für immer in deinem Herzen. </p>
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
