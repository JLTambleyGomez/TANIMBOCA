import Image from "next/image";
import Link from "next/link";

export default function ExtrasCardDE() {
  return (
    <section
      id="extras"
      className="relative w-full bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: 'url("/pirarucu.jpeg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />

      {/* Haupttitel */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center text-white pt-16 pb-8 relative z-10"
      >
        Extras — Zusätzliche Aktivitäten & Services
      </h1>

      {/* Inhalt */}
      <div className="grid md:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto relative z-10">
        {/* Extra 1: Amphibien */}
        <div
          data-aos="fade-right"
          data-aos-delay="80"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/rana3.jpeg"
            alt="Erkundung und Beobachtung von Amphibien"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Erkundung: Amphibienbeobachtung</h3>
          <p className="text-white mb-4 text-sm">
            Spezialisierte Touren mit lokalen Guides, um die vielfältige Amphibienwelt
            im Naturreservat Tanimboca kennenzulernen. Unterkunft und Verpflegung inklusive.
          </p>
          <Link
            href="/de/extras/amphibien"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Details ansehen
          </Link>
        </div>

        {/* Extra 2: Zierfische */}
        <div
          data-aos="fade-up"
          data-aos-delay="120"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/pez3.jpeg"
            alt="Zierfisch-Safari und Fotografie"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Safari: Zierfische</h3>
          <p className="text-white mb-4 text-sm">
            Individuelle Exkursionen für Hobbyisten und Experten, um die Vielfalt der
            Zierfische in Bächen und Lagunen zu entdecken — Beobachtung, Fotografie und nachhaltige Praktiken.
          </p>
          <Link
            href="/de/extras/zierfische"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Details ansehen
          </Link>
        </div>

        {/* Extra 3: Vogelbeobachtung */}
        <div
          data-aos="fade-up"
          data-aos-delay="160"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/ave4.jpeg"
            alt="Vogelbeobachtung in der Amazonasregion"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Birding: Vogelbeobachtung</h3>
          <p className="text-white mb-4 text-sm">
            Private Birding-Routen durch Terra-Firme-Wald, Baumkronenplattformen und Seen —
            begleitet von lokalen Experten.
          </p>
          <Link
            href="/de/extras/vogelbeobachtung"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Details ansehen
          </Link>
        </div>

        {/* Extra 4: Forschung */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/investigacion.jpg"
            alt="Unterstützung wissenschaftlicher Forschung"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Unterstützung wissenschaftlicher Forschung</h3>
          <p className="text-white mb-4 text-sm">
            Wir bieten Logistik, Unterkunft und lokales Wissen für akademische und
            naturschutzorientierte Forschungsprojekte in Tanimboca.
          </p>
          <Link
            href="/de/extras/forschung"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Details ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}