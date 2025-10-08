import type { Metadata } from "next";
import Image from "next/image";
import NavbarDE from "@/components/NavbarDE";
import FooterDE from "@/components/FooterDE";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
    title: "Dschungel-Abenteuer | Ökotourismus in Tanimboca",
    description:
        "Erlebe einzigartige Expeditionen im Amazonas-Dschungel mit Tanimboca: Trekking, Kajak, Camping und Tierbeobachtung in Kolumbien und Peru. Programme von 6 bis 8 Tagen für wahre Abenteurer.",
    openGraph: {
        title: "Dschungel-Abenteuer | Ökotourismus in Tanimboca",
        description:
            "Entdecke den Amazonas-Regenwald hautnah: Wanderungen, Kajakfahrten, Camping und indigene Kultur. 6- bis 8-tägige Programme im Naturreservat Tanimboca, Leticia, Amazonas.",
            url: `${siteUrl}/de/kategorien/dschungel-abenteuer`,
            locale: "de_DE",
    },
    alternates: makeAlternates("categorias/aventura-selva-adentro", "de"),
    // alternates: {
    //     canonical: `${siteUrl}/de/kategorien/dschungel-abenteuer`,
    //     languages: {
    //           es: `${siteUrl}/es/categorias/aventura-selva-adentro`,
    //         en: `${siteUrl}/en/categories/jungle-adventure`,
    //         de: `${siteUrl}/de/kategorien/dschungel-abenteuer`,
    //     },
    // },
};

export default function DschungelAbenteuerPageDE() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Wie lange dauern die Dschungel-Abenteuer-Pläne?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Wir bieten drei Erlebnisse: Extreme Amazonas-Expedition (8 Tage / 7 Nächte), Dschungel & Fluss – Kajak-Abenteuer (6 Tage / 5 Nächte) und Amazonas-Immersion – Trekking im Dschungel (6 Tage / 5 Nächte).",
                },
            },
            {
                "@type": "Question",
                name: "Brauche ich Vorerfahrung im Trekking oder Kajakfahren?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nein, die Programme sind für Anfänger mit guter körperlicher Verfassung konzipiert. Lokale Expertenführer stellen die Ausrüstung und vermitteln grundlegende Techniken.",
                },
            },
            {
                "@type": "Question",
                name: "Wo finden die Expeditionen statt?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Die Erlebnisse finden hauptsächlich im Naturreservat Tanimboca bei Leticia (Kolumbien) statt, mit Touren entlang des Tacana-Flusses, Ausflügen auf dem Amazonas, Besuchen von Naturreservaten in Peru und Puerto Nariño.",
                },
            },
            {
                "@type": "Question",
                name: "Welche Unterkünfte sind enthalten?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Je nach Plan umfasst die Unterkunft Baumhäuser, Hütten, Bungalows, Hängematten im Dschungel mit Moskitonetzen und Hotels in Leticia.",
                },
            },
            {
                "@type": "Question",
                name: "Welche Tiere kann man sehen?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Während der Expeditionen können Sie Affen, exotische Vögel, Kaimane, Riesen-Seerosen, Ceiba-Bäume und mit etwas Glück Jaguar-Spuren entdecken.",
                },
            },
        ],
    };

    return (
        <>
            <NavbarDE />
            <main className="p-8 max-w-5xl mx-auto pt-40">
                <h1 className="text-3xl font-bold mb-6 text-green-200">
                    Dschungel-Abenteuer | Tanimboca-Pläne
                </h1>
                <p className="text-white mb-8">
                    Wage das <strong>Dschungel-Abenteuer</strong> im{" "}
                    <strong>Naturschutzgebiet Tanimboca</strong>. Drei intensive Programme
                    mit <em>Trekking, Kajakfahren, Dschungel-Camping und
                        Amazonas-Expeditionen</em>. Für Abenteurer, die die Natur pur erleben
                    wollen.
                </p>

                <div className="w-100 h-80 rounded-lg overflow-hidden mb-12">
                    <Image
                        src="/trekking.jpg"
                        alt="Reisende erkunden den Amazonas-Dschungel auf Expedition"
                        width={600}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🏕️ Extreme Amazonas-Expedition – Trekking & Kajak (8 Tage / 7 Nächte)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Tag 1 - Ankunft & Abenteuer in den Baumkronen:</strong>
                        Ankunft am Flughafen Vásquez Cobo in Leticia und anschließender 11 km Transfer zur Naturreservat Tanimboca. Nach einer herzlichen Begrüßung, Check-in und Einführung in das Programm geht es nach La Arenosa, wo ein traditionelles Amazonas-Mittagessen mit frisch gegrilltem Fisch serviert wird.
                        Am Nachmittag erwartet dich ein aufregendes Baumkronen-Erlebnis: Aufstieg mit Seil zur ersten Plattform, Fahrt mit Seilrutschen zwischen drei Aussichtspunkten, Überquerung einer Hängebrücke hoch über dem Waldboden und abschließender Abstieg im Abseilen.
                        Dein Guide begleitet dich danach zu deiner Unterkunft für die Nacht—entweder ein Baumhaus oder eine Hütte am Waldrand (je nach Verfügbarkeit). Nach einer kurzen Pause folgt eine geführte Nachtwanderung, um die Geräusche und Tiere des Regenwaldes zu entdecken. Abendessen mit einer besonderen Amazonas-Pizza oder anderen Menüs im Restaurant. Übernachtung umgeben vom Konzert des Dschungels.

                    </p>
                    <p>
                        <strong>Tag 2 - Eintauchen in den Primärwald:</strong> Nach dem Frühstück beginnt die Expedition mit einer etwa 6-stündigen Wanderung durch unberührten Regenwald. Ziel ist ein kleiner Bach, wo wir das erste Camp aufschlagen. Die Gegend, reich an Bromelien und Orchideen, ist ein beliebtes Versteck für Jaguare, deren Spuren oft zu finden sind.
                        Nachts führen dich die einheimischen Guides zu einer Bachwanderung auf der Suche nach Tieren und zum Ausprobieren traditioneller Fischfangmethoden.

                    </p>
                    <p>
                        <strong>Tag 3 - Wanderung zur Mineralquelle:</strong>Am Morgen Abbau des Camps und Fortsetzung der Wanderung tiefer in den Dschungel. Unterwegs begegnest du gigantischen Bäumen und mit etwas Glück auch Wildtieren. Am Nachmittag erreichen wir eine mineralreiche Quelle, die viele Tiere aufsuchen, um Ton aufzunehmen und damit Pflanzengifte zu neutralisieren. Campaufbau in der Nähe, abends Rückkehr zur Quelle für Tierbeobachtungen.
                    </p>
                    <p>
                        <strong>Tag 4 - Trekking & Erste Kajaketappe:</strong>Nach dem Frühstück Wanderung bis zum Tacana-Fluss, wo Mittagspause und Erholung warten. Anschließend beginnt die Kajaktour flussabwärts. Am späten Nachmittag sucht der Guide den idealen Platz zum Übernachten. Nach dem Abendessen optionale Nachtwanderung.

                    </p>
                    <p>
                        <strong>Tag 5 - Kajak & Rückkehr ins Reservat:</strong>Weiterfahrt im Kajak entlang des Flusses, mit Pausen zum Ausruhen und Mittagessen an landschaftlich schönen Orten. Gegen Nachmittag erreichen wir den Abholpunkt und kehren ins Reservat zurück. Übernachtung in einem komfortablen Bungalow.

                    </p>

                    <p>
                        <strong>Tag 6 - Naturreservat in Peru:</strong>Frühmorgens Fahrt zum Hafen von Leticia und Bootsfahrt auf dem Amazonas-Fluss zu einem beeindruckenden Naturreservat in Peru. Je nach Jahreszeit erfolgt der Zugang per 45-minütiger Dschungelwanderung (Trockenzeit) oder per ruhiger Kanufahrt (Regenzeit).
                        Das Reservat ist reich an Biodiversität: Affen, exotische Vögel und vieles mehr. Erkunde den Wald zu Fuß oder per Kanu, genieße frisch zubereitete lokale Mahlzeiten und bewundere Naturwunder wie die Riesen-Seerosen (Victoria Regia) und die mächtigen Ceiba-Bäume.
                        Nach Einbruch der Dunkelheit erwartet dich eine spannende Exkursion zur Beobachtung von Kaimanen. Übernachtung im peruanischen Reservat.

                    </p>
                    <p>
                        <strong>Tag 7 - Puerto Nariño & Papageien-Spektakel:</strong> Am Morgen Fahrt mit dem Privatboot 80 km flussaufwärts nach Puerto Nariño, mit Stopps auf der Affeninsel und im indigenen Dorf Macedonia, das für seine Holzschnitzereien und Handarbeiten bekannt ist.
                        In Puerto Nariño—einem friedlichen, autofreien Dorf am Loretoyacu-Fluss—genießen wir das Mittagessen und besuchen die Stiftung Natutama, die über das reiche Unterwasserleben des Amazonas informiert.
                        Am Nachmittag Rückfahrt nach Leticia, um ein unvergessliches Naturwunder zu erleben: Tausende Papageien, die zum Schlafen in die Bäume des Hauptplatzes zurückkehren. Übernachtung im Hotel in Leticia.

                    </p>


                    <p>
                        <strong>Tag 8 - Stadttour & Abreise:</strong>
                        Je nach Flugzeit unternehmen wir eine geführte Stadttour zu den wichtigsten Sehenswürdigkeiten von Leticia. Ende der Tour mittags, anschließend privater Transfer zum Flughafen Vásquez Cobo für die Heimreise.
                    </p>


                </div>

                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🛶 Dschungel & Fluss – Kajak-Abenteuer (6 Tage / 5 Nächte)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Tag 1:</strong>
                        Ankunft und Abenteuer im Baumkronendach. Ankunft in Leticia am Flughafen Vásquez Cobo, gefolgt von einem 11 km langen Transfer zur Naturreservat Tanimboca. Nach einer herzlichen Begrüßung, dem Check-in und einer kurzen Einführung in das Programm fahren wir nach La Arenosa, um ein traditionelles Amazonas-Mittagessen mit frisch gegrilltem Fisch zu genießen. Am Nachmittag unternehmen wir einen kurzen Dschungelspaziergang zu den Plattformen im Baumkronendach – ein spannendes, aber sicheres Abenteuer hoch oben in den Bäumen. Sie klettern mit Seilen zur ersten Plattform hinauf, gleiten anschließend über drei Zip-Lines zwischen Aussichtspunkten und überqueren eine Hängebrücke in luftiger Höhe. Der letzte Abstieg erfolgt per Abseilen. Nach diesem Erlebnis bringt Sie Ihr Guide zu Ihrer Unterkunft für die Nacht – entweder ein Baumhaus oder eine Dschungelhütte am Bach (je nach Verfügbarkeit). Nach einer kurzen Pause nehmen Sie an einer geführten Nachtwanderung teil, um die Geräusche und Tiere des Regenwaldes in der Dunkelheit zu entdecken. Zum Abendessen gibt es eine besondere Pizza im Amazonas-Stil oder andere Menüoptionen in unserem Restaurant, gefolgt von einer erholsamen Nacht inmitten der Dschungelgeräusche.

                    </p>
                    <p>
                        <strong>Tag 2:</strong> Nach dem Frühstück beginnt unsere Expedition. Nach einer einstündigen Wanderung durch den Dschungel erreichen wir den kleinen Fluss Tacana, wo wir flussabwärts mit dem Kajak paddeln. Gegen Mittag hält der Guide an einem geeigneten Platz für das Mittagessen. Am Nachmittag sucht der einheimische Guide den idealen Ort, um das Nachtlager aufzuschlagen. Nach dem Abendessen können Sie ihn auf eine Nachtwanderung zur Beobachtung exotischer Tiere begleiten und auch etwas fischen.

                    </p>
                    <p>
                        <strong>Tag 3:</strong>An diesem Tag setzen wir unsere Kajaktour fort. Unterwegs machen wir Halt an einem schönen Platz zum Mittagessen, bevor wir weiterpaddeln bis zum Treffpunkt für die Abholung. Von dort geht es zurück ins Reservat, wo Sie die Nacht in einem komfortablen Bungalow verbringen.
                    </p>
                    <p>
                        <strong>Tag 4:</strong>Nach einem frühen Frühstück fahren wir zum Hafen von Leticia und besteigen ein Boot auf dem Amazonas in Richtung eines beeindruckenden Naturreservats in Peru. Je nach Jahreszeit erfolgt der Zugang entweder über eine 45-minütige Dschungelwanderung (Trockenzeit) oder eine ruhige Kanufahrt (Regenzeit). Dieses Reservat ist reich an Biodiversität – Sie können Affen, exotische Vögel und andere Tiere beobachten. Sie genießen frisch zubereitete lokale Mahlzeiten und erkunden den Wald zu Fuß oder per Kanu. Halten Sie Ausschau nach den Riesenseerosen (Victoria Regia) und den mächtigen Ceiba-Bäumen. Nach Einbruch der Dunkelheit erwartet Sie ein geführter Ausflug zur Beobachtung von Kaimanen – ein aufregendes, aber sicheres Erlebnis. Übernachtung im peruanischen Reservat.

                    </p>
                    <p>
                        <strong>Tag 5:</strong>Am Morgen fahren wir mit einem Privatboot 80 km flussaufwärts nach Puerto Nariño und machen Zwischenstopps auf der Affeninsel sowie in Macedonia, einer indigenen Gemeinschaft, die für ihre Holzschnitzereien und Handarbeiten bekannt ist. In Puerto Nariño – einem ruhigen, autofreien Dorf am Loretoyacu-Fluss – essen wir zu Mittag und besuchen anschließend die Fundación Natutama, eine lokale Initiative, die Besucher über das reiche Unterwasserleben des Amazonas informiert. Am Nachmittag kehren wir nach Leticia zurück und erleben ein unvergessliches Naturschauspiel: tausende Papageien, die bei Sonnenuntergang zu ihren Schlafbäumen auf dem Hauptplatz zurückkehren. Die letzte Nacht verbringen Sie in einem Hotel in Leticia.

                    </p>

                    <p>
                        <strong>Tag 6:</strong>Abhängig von Ihrem Flugplan unternehmen Sie eine Stadtrundfahrt zu den wichtigsten Sehenswürdigkeiten von Leticia. Die Tour endet mittags, anschließend erfolgt der private Transfer zum Flughafen Vásquez Cobo für Ihre Abreise.

                    </p>



                </div>

                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🌿 Amazonas-Immersion – Trekking im Dschungel (6 Tage / 5 Nächte)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Tag 1:</strong>
                        Ankunft in Leticia am Flughafen Vásquez Cobo, gefolgt von einem 11 km langen Transfer zur Naturreservat Tanimboca. Nach einer herzlichen Begrüßung, dem Check-in und einer kurzen Einführung in Ihr Programm fahren Sie nach La Arenosa, um ein traditionelles Amazonas-Mittagessen mit frisch gegrilltem Fisch zu genießen. Am Nachmittag unternehmen Sie einen kurzen Dschungelspaziergang zu den Plattformen im Baumkronendach – ein spannendes, aber sicheres Abenteuer hoch oben im Wald. Sie klettern mit Seilen zur ersten Plattform, gleiten anschließend über drei Zip-Lines zwischen Aussichtspunkten und überqueren eine Hängebrücke in luftiger Höhe. Der letzte Abstieg erfolgt per Abseilen. Nach diesem Erlebnis begleitet Sie Ihr Guide zu Ihrer Unterkunft für die Nacht – entweder ein Baumhaus oder eine Hütte am Waldrand bei einem Bach (je nach Verfügbarkeit). Nach einer kurzen Pause starten Sie zu einer geführten Nachtwanderung, um die nächtlichen Geräusche und Tiere des Regenwaldes zu entdecken. Zum Abendessen gibt es eine besondere Pizza im Amazonas-Stil oder andere Menüoptionen in unserem Restaurant, gefolgt von einer erholsamen Nacht inmitten der Dschungelklänge.

                    </p>
                    <p>
                        <strong>Tag 2:</strong>
                        Nach dem Frühstück beginnt Ihre eigentliche Dschungel-Expedition. In den nächsten zwei Tagen dringen Sie tief in den Regenwald vor. Die heutige Wanderung dauert etwa vier Stunden und führt Sie zu einem unberührten Bach, wo Sie Ihr erstes Nachtlager aufschlagen und in Hängematten unter dem Blätterdach schlafen. Am Nachmittag haben Sie Zeit, die Umgebung zu erkunden. Nach Einbruch der Dunkelheit nimmt Sie Ihr indigener Guide mit entlang des Baches auf die Suche nach exotischer Tierwelt. Unter dem Sternenhimmel können Sie auch Ihr Glück beim traditionellen Fischen versuchen.

                    </p>
                    <p>
                        <strong>Tag 3:</strong>
                        Dieser Tag führt Sie tiefer in den Dschungel, wo Sie auf riesige, jahrhundertealte Bäume stoßen. Mit etwas Glück entdeckt Ihr Guide versteckte Tiere im dichten Blätterwerk. Unterwegs lernen Sie, wie die Einheimischen mühelos alles finden, was sie zum Überleben – und sogar zum Genießen – in dieser einzigartigen Umgebung brauchen. Am Nachmittag schlagen Sie erneut das Lager auf. Nachts können Sie, wenn Sie möchten, Ihren Guide auf eine weitere Nachtwanderung begleiten, um die geheimnisvolle Welt des Waldes nach Einbruch der Dunkelheit zu erleben.
                    </p>
                    <p>
                        <strong>Tag 4:</strong>
                        Nach einem frühen Frühstück wandern Sie zurück nach Tanimboca. Von dort fahren Sie zum Hafen von Leticia und besteigen ein Boot auf dem Amazonas in Richtung eines beeindruckenden Naturreservats in Peru. Je nach Jahreszeit erfolgt der Zugang über eine 45-minütige Dschungelwanderung (Trockenzeit) oder eine ruhige Kanufahrt (Regenzeit). Dieses Reservat ist reich an Biodiversität – Sie können Affen, exotische Vögel und andere Tiere beobachten. Sie genießen frisch zubereitete lokale Mahlzeiten und erkunden den Wald zu Fuß oder mit dem Kanu. Halten Sie Ausschau nach den Riesenseerosen (Victoria Regia) und den mächtigen Ceiba-Bäumen. Nach Einbruch der Dunkelheit erwartet Sie ein geführter Ausflug zur Beobachtung von Kaimanen – ein aufregendes, aber sicheres Erlebnis. Übernachtung im peruanischen Reservat.


                    </p>
                    <p>
                        <strong>Tag 5:</strong>
                        Am Morgen fahren Sie mit einem Privatboot 80 km flussaufwärts nach Puerto Nariño und machen Halt auf der Affeninsel sowie in Macedonia, einer indigenen Gemeinschaft, die für ihre kunstvollen Holzschnitzereien und Handarbeiten bekannt ist. In Puerto Nariño – einem ruhigen, autofreien Dorf am Loretoyacu-Fluss – essen Sie zu Mittag und besuchen anschließend die Fundación Natutama, eine lokale Initiative, die Besucher über das reiche Unterwasserleben des Amazonas informiert. Am Nachmittag kehren Sie nach Leticia zurück und erleben ein unvergessliches Naturschauspiel: tausende Papageien, die bei Sonnenuntergang zu ihren Schlafbäumen im Hauptpark zurückkehren. Die Nacht verbringen Sie in einem Hotel in Leticia.

                    </p>

                    <p>
                        <strong>Tag 6:</strong>
                        Abhängig von Ihrem Flugplan unternehmen Sie eine Stadtrundfahrt, um die wichtigsten Sehenswürdigkeiten von Leticia zu erkunden. Die Tour endet mittags, anschließend erfolgt der private Transfer zum Flughafen Vásquez Cobo für Ihre Abreise.


                    </p>



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
