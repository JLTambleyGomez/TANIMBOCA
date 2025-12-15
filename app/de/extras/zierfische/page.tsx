import type { Metadata } from "next";
import Image from "next/image";
import NavbarDE from "@/components/NavbarDE";
import FooterDE from "@/components/FooterDE";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Amazonas-Zierfisch-Safari | Extras Tanimboca",
  description:
    "Erkunde Bäche und Lagunen des Amazonas auf einer spezialisierten Safari zur Beobachtung und Fotografie von Zierfischen im natürlichen Lebensraum.",
  openGraph: {
    title: "Amazonas-Zierfisch-Safari | Extras Tanimboca",
    description:
      "Geführte Exkursionen für Fotografen, Aquarianer und Forscher mit Fokus auf Amazonas-Zierfische. Verantwortungsvolle Methoden und lokales Expertenwissen.",
    url: `${siteUrl}/de/extras/zierfische`,
    locale: "de_DE",
  },
  alternates: makeAlternates("extras/peces-ornamentales", "de"),
};

export default function OrnamentalFishExtraPageDE() {
  return (
    <>
      <NavbarDE />

      <main className="pt-40 text-white max-w-6xl mx-auto px-6">
        {/* HERO COLLAGE */}
        <div className="relative w-full h-[22rem] md:h-[30rem] mb-12 rounded-xl overflow-hidden shadow-xl">
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 w-full h-full">
            {["/pez1.jpeg", "/pez2.jpeg", "/pez3.jpeg"].map((src, i) => (
              <div key={i} className="relative">
                <Image
                  src={src}
                  alt="Amazonas-Zierfische"
                  fill
                  className="object-fill"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden w-full h-full">
            <div className="relative h-2/3">
              <Image
                src="/pez1.jpeg"
                alt="Zierfische im Amazonas"
                fill
                className="object-fill"
                priority
              />
            </div>
            <div className="grid grid-cols-2 h-1/3">
              {["/pez2.jpeg", "/pez3.jpeg"].map((src, i) => (
                <div key={i} className="relative">
                  <Image
                    src={src}
                    alt="Amazonas-Zierfisch-Safari"
                    fill
                    className="object-fill"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-bold text-center px-4"
            >
              Amazonas-Zierfisch-Safari
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 max-w-4xl mx-auto pb-20">
          <p data-aos="fade-up" className="text-lg">
            Der Amazonas zählt zu den artenreichsten aquatischen Ökosystemen der
            Erde und ist Heimat ikonischer Zierfischarten wie Kardinaltetra,
            Arawana, Diskus sowie zahlreicher farbenprächtiger Tetras und
            Buntbarsche.
          </p>

          <p data-aos="fade-up" className="text-lg">
            In Tanimboca führen wir spezialisierte Exkursionen durch
            <strong> Bäche, Lagunen und überschwemmte Wälder (Igapó)</strong>
            durch – ideal für Beobachtung, Fotografie und verantwortungsvolle
            Dokumentation in natürlicher Umgebung.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            Für wen ist diese Erfahrung geeignet?
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Natur- und Tierfotografen</li>
            <li>Aquarianer und Zierfisch-Enthusiasten</li>
            <li>Biologen und Studierende</li>
            <li>Reisende mit Interesse an Amazonas-Biodiversität</li>
          </ul>

          <p data-aos="fade-up" className="text-lg">
            Unser lokales Team begleitet jede Tour mit fundiertem Fachwissen,
            Artenkenntnis und umweltbewussten Praktiken, um den ökologischen
            Einfluss so gering wie möglich zu halten.
          </p>

          <p data-aos="fade-up" className="text-lg">
            Auf Wunsch kann die Safari mit
            <strong> Unterkunft und Vollverpflegung</strong> innerhalb des
            Schutzgebiets kombiniert werden.
          </p>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] px-6 py-3 rounded-xl font-semibold transition"
          >
            Informationen anfordern
          </a>
        </div>
      </main>

      <FooterDE />
    </>
  );
}
