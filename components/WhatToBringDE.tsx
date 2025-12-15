import Image from "next/image";

export default function WhatToBringDE() {
  return (
    <section
      aria-labelledby="what-to-bring-de"
      className="relative bg-[#08837D] text-white py-16 px-6 md:px-12"
    >
      <div className="grid md:grid-cols-2 items-start gap-10 max-w-6xl mx-auto">
        {/* Text */}
        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <h2 id="what-to-bring-de" className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Bereit für das Abenteuer? Was man mitbringen sollte
          </h2>

          <p className="text-lg mb-6 text-gray-200" data-aos="fade-left" data-aos-delay="150">
            Für ein sicheres und angenehmes Erlebnis im Amazonas empfehlen wir, Folgendes mitzunehmen:
          </p>

          <ul className="space-y-3 text-gray-100 text-base" data-aos="fade-up" data-aos-delay="200">
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Leichte, atmungsaktive Kleidung – möglichst schnell trocknend, ideal für tropisches Klima.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Langärmlige Hemden und lange Hosen – als Schutz vor Sonne und Insekten.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Bequeme Schuhe oder Wanderschuhe – geeignet für feuchte und unebene Wege.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Sonnenschutz – Sonnencreme, Hut und Sonnenbrille.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Insektenschutzmittel – am besten mit DEET oder natürlichen Alternativen.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Regenjacke oder leichter Poncho – für tropische Regenschauer.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Taschenlampe oder Stirnlampe – mit Ersatzbatterien.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Trinkflasche oder Feldflasche – um während der Ausflüge hydriert zu bleiben.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Persönliches Pflege-Set – mit Hygieneartikeln, persönlichen Medikamenten und kleinem Erste-Hilfe-Set.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Kleiner Rucksack oder Tagesrucksack – für persönliche Gegenstände bei den täglichen Aktivitäten.</span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div
          data-aos="fade-left"
          data-aos-delay="120"
          className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
        >
          <Image
            src="/trekking.jpg"
            alt="Amazonas Essentials"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
