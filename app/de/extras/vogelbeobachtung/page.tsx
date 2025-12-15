import type { Metadata } from "next";
import Image from "next/image";
import NavbarDE from "@/components/NavbarDE";
import FooterDE from "@/components/FooterDE";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Vogelbeobachtung im Amazonas | Naturreservat Tanimboca",
  description:
    "Geführte Vogelbeobachtungen im Amazonasgebiet – ideal für Fotografen, Vogelbeobachter und Naturliebhaber.",
  openGraph: {
    title: "Vogelbeobachtung im Amazonas | Naturreservat Tanimboca",
    description:
      "Private Vogelbeobachtungsrouten durch Terra-Firme-Wald, Blätterdach-Plattformen und Seen mit erfahrenen lokalen Guides.",
    url: `${siteUrl}/de/extras/vogelbeobachtung`,
    locale: "de_DE",
  },
  alternates: makeAlternates("extras/aves", "de"),
};

export default function VogelbeobachtungDE() {
  return (
    <>
      <NavbarDE />

      <main className="pt-40 text-white max-w-6xl mx-auto px-6">
        {/* HERO COLLAGE */}
        <div className="relative w-full h-[22rem] md:h-[30rem] mb-12 rounded-xl overflow-hidden shadow-xl">
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-2 grid-rows-2 w-full h-full">
            {["/ave1.jpeg", "/ave2.jpeg", "/ave3.jpeg", "/ave4.jpeg"].map(
              (src, i) => (
                <div key={i} className="relative">
                  <Image
                    src={src}
                    alt="Vogelbeobachtung im Amazonasgebiet"
                    fill
                    className="object-fill"
                  />
                </div>
              )
            )}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden w-full h-full">
            <div className="relative h-2/3">
              <Image
                src="/ave1.jpeg"
                alt="Amazonasvögel"
                fill
                className="object-fill"
              />
            </div>
            <div className="grid grid-cols-3 h-1/3">
              {["/ave2.jpeg", "/ave3.jpeg", "/ave4.jpeg"].map((src, i) => (
                <div key={i} className="relative">
                  <Image
                    src={src}
                    alt="Vogelbeobachtung im Regenwald"
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
              Vogelbeobachtung
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 max-w-4xl mx-auto pb-20">
          <p data-aos="fade-up" className="text-lg">
            Entdecken Sie die außergewöhnliche Vielfalt der Vogelwelt des Amazonas
            auf geführten Routen mit erfahrenen lokalen Guides. Von Plattformen im
            Blätterdach bis zu Seen und Terra-Firme-Wäldern bietet dieses Erlebnis
            ideale Bedingungen für Vogelbeobachter, Fotografen und Naturliebhaber.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            Leistungen
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Spezialisierter lokaler Vogelführer</li>
            <li>Wanderwege, Seen und Aussichtsplattformen</li>
            <li>Ferngläser verfügbar</li>
            <li>Grundlegende Verpflegung und Wasser</li>
          </ul>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] px-6 py-3 rounded-xl font-semibold transition"
          >
            Erlebnis buchen
          </a>
        </div>
      </main>

      <FooterDE />
    </>
  );
}
