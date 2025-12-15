import type { Metadata } from "next";
import Image from "next/image";
import NavbarDE from "@/components/NavbarDE";
import FooterDE from "@/components/FooterDE";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Unterstützung für Wissenschaftliche Forschung | Naturschutzgebiet Tanimboca",
  description:
    "Logistische Unterstützung, Unterkunft und fachkundige Begleitung für wissenschaftliche Forschungsprojekte im Amazonas.",
  openGraph: {
    title: "Unterstützung für Wissenschaftliche Forschung | Naturschutzgebiet Tanimboca",
    description:
      "Wir bieten spezialisierte Unterstützung für biologische, ökologische und kulturbezogene Forschungsarbeiten im Amazonasgebiet.",
    url: `${siteUrl}/de/extras/forschung`,
    locale: "de_DE",
  },
  alternates: makeAlternates("extras/investigacion", "de"),
};

export default function ForschungDE() {
  return (
    <>
      <NavbarDE />

      <main className="p-8 max-w-5xl mx-auto pt-40 text-white">

        {/* Hero */}
        <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/investigacion.jpg"
            alt="Wissenschaftliche Forschung im Amazonas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-bold text-white text-center"
            >
              Wissenschaftliche Forschung
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">

          <p data-aos="fade-up" className="text-lg">
            Tanimboca bietet umfassende Unterstützung für Forscherinnen und Forscher,
            akademische Institutionen sowie Naturschutzprojekte, die im kolumbianischen
            Amazonas arbeiten. Unser lokales Team stellt fundiertes Regionalwissen,
            Logistik und spezialisierte Begleitung bereit.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold mt-8">
            Verfügbare Leistungen
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Logistik für Feldforschung</li>
            <li>Unterkunft und Vollverpflegung</li>
            <li>Zugang zu Wegen, Gewässern und Plattformen</li>
            <li>Unterstützung durch lokale Guides mit Forschungserfahrung</li>
            <li>Transport innerhalb des Untersuchungsgebiets (je nach Anforderungen)</li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-semibold mt-10">
            Häufige Forschungsbereiche
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Ökologie und Biodiversität</li>
            <li>Herpetologie, Ornithologie und Mammalogie</li>
            <li>Ethnobotanik und traditionelles Wissen</li>
            <li>Naturschutz und Wiederherstellung von Ökosystemen</li>
          </ul>

          <p data-aos="fade-up" className="text-lg">
            Wir passen unsere Dienstleistungen an die Bedürfnisse jedes Projekts an und
            gewährleisten Sicherheit, Zugänglichkeit und minimale Auswirkung auf die
            Ökosysteme.
          </p>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition mt-6"
          >
            Informationen anfordern
          </a>

        </div>
      </main>

      <FooterDE />
    </>
  );
}
