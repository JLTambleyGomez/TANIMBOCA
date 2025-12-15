import type { Metadata } from "next";
import Image from "next/image";
import NavbarDE from "@/components/NavbarDE";
import FooterDE from "@/components/FooterDE";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Amphibien-Entdeckung | Tanimboca Naturreservat",
  description:
    "Entdecke die außergewöhnliche Vielfalt der Amphibien im Amazonas bei geführten Nachtwanderungen im Naturreservat Tanimboca.",
  openGraph: {
    title: "Amphibien-Entdeckung | Tanimboca Naturreservat",
    description:
      "Geführte nächtliche Erkundungen zur Beobachtung von Fröschen, Kröten und Reptilien im Amazonas-Regenwald. Über 96 Amphibienarten in Tanimboca.",
    url: `${siteUrl}/de/extras/amphibien`,
    locale: "de_DE",
  },
  alternates: makeAlternates("extras/anfibios", "de"),
};

export default function AmphibienDE() {
  return (
    <>
      <NavbarDE />

      <main className="pt-40 text-white max-w-6xl mx-auto px-6">
        {/* HERO COLLAGE */}
        <div className="relative w-full h-[22rem] md:h-[30rem] mb-12 rounded-xl overflow-hidden shadow-xl">
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 grid-rows-2 w-full h-full">
            {[
              "/rana1.jpeg",
              "/rana2.jpeg",
              "/rana3.jpeg",
              "/serpiente1.jpeg",
              "/serpiente2.jpeg",
            ].map((src, i) => (
              <div
                key={i}
                className={`relative ${
                  i === 0 ? "row-span-2 col-span-2" : ""
                }`}
              >
                <Image
                  src={src}
                  alt="Amphibien und Reptilien im Amazonas"
                  fill
                  className="object-fill"
                />
              </div>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden w-full h-full">
            <div className="relative h-2/3">
              <Image
                src="/rana1.jpeg"
                alt="Amazonas-Frösche"
                fill
                className="object-fill"
              />
            </div>
            <div className="grid grid-cols-4 h-1/3">
              {[
                "/rana2.jpeg",
                "/rana3.jpeg",
                "/serpiente1.jpeg",
                "/serpiente2.jpeg",
              ].map((src, i) => (
                <div key={i} className="relative">
                  <Image
                    src={src}
                    alt="Nächtliche Tierwelt des Amazonas"
                    fill
                    className="object-fill"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Overlay + title */}
          <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-bold text-center px-4"
            >
              Amphibien-Entdeckung
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 max-w-4xl mx-auto pb-20">
          <p data-aos="fade-up" className="text-lg">
            Das Naturreservat Tanimboca beherbergt eine der artenreichsten
            Amphibiengemeinschaften im kolumbianischen Amazonasgebiet. Dank über
            20 Jahren aktiver Schutzarbeit wurden hier mehr als 96 Amphibienarten
            dokumentiert.
          </p>

          <p data-aos="fade-up" className="text-lg">
            Diese Erfahrung findet hauptsächlich in der Dämmerung und nachts
            statt, wenn Frösche, Kröten und Reptilien besonders aktiv sind und
            einzigartige Beobachtungsmöglichkeiten bieten.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            Inklusive Leistungen
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Lokaler Guide mit Spezialisierung auf Amphibien und Reptilien</li>
            <li>Geführte Nachtwanderung durch den Regenwald</li>
            <li>Grundlegende Beobachtungsausrüstung</li>
            <li>Unterkunft im Reservat (optional)</li>
            <li>Vollverpflegung je nach gebuchtem Programm</li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            Mögliche Beobachtungen
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Bunt gefärbte Baumfrösche und Pfeilgiftfrösche</li>
            <li>Terrestrische und gut getarnte Krötenarten</li>
            <li>Kaulquappen und Fortpflanzungsaktivitäten</li>
            <li>Nachtaktive Amazonas-Schlangen</li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            Empfehlungen
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Leichte, langärmelige Kleidung</li>
            <li>Stirnlampe oder Taschenlampe (warmem Licht bevorzugt)</li>
            <li>Wanderschuhe oder feste Trekkingschuhe</li>
            <li>Tiere nicht berühren</li>
          </ul>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] px-6 py-3 rounded-xl font-semibold transition"
          >
            Erlebnis anfragen
          </a>
        </div>
      </main>

      <FooterDE />
    </>
  );
}
