import Image from "next/image";
import Link from "next/link";

export default function CategoriesCardDE() {
  return (
    <div
      id="categories"
      className="relative w-full bg-fixed bg-center bg-cover"
      style={{ backgroundImage: 'url("/test.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />

      {/* Haupttitel */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center text-white pt-16 pb-8 relative z-10"
      >
        Wähle deine perfekte Kategorie und deinen Plan
      </h1>

      {/* Inhalt */}
      <div className="grid md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto relative z-10">
        {/* Kategorie 1 */}
        <div
          data-aos="fade-right"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/bushcraft-adventure.jpg"
            alt="Den Amazonas entdecken"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">
            Den Amazonas entdecken
          </h3>
          <p className="text-white mb-4">
            Touren mit moderater körperlicher Anforderung, ideal für alle
            Altersgruppen, die den Dschungel auf eine bequeme und sichere Weise
            erkunden möchten.
          </p>
          <Link
            href="/de/kategorien/amazonas-entdecken"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Details ansehen
          </Link>
        </div>

        {/* Kategorie 2 */}
        <div
          data-aos="fade-up"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/trekking.jpg"
            alt="Abenteuer tief im Dschungel"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">
            Abenteuer tief im Dschungel
          </h3>
          <p className="text-white mb-4">
            Für abenteuerlustige Reisende und Sportliebhaber. Erfordert gute
            körperliche Verfassung, da es ein Vordringen in den tiefen Dschungel
            beinhaltet.
          </p>
          <Link
            href="/de/kategorien/dschungel-abenteuer"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Details ansehen
          </Link>
        </div>

        {/* Kategorie 3 */}
        <div
          data-aos="fade-left"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/bushcraft.jpg"
            alt="Bushcraft und Überleben"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">
            Bushcraft und Überleben
          </h3>
          <p className="text-white mb-4">
            Ideal für Familien, Freundesgruppen oder Alleinreisende. Lerne mit
            dem Dschungel zu leben und überlebenstechniken im Herzen des
            Amazonas anzuwenden.
          </p>
          <Link
            href="/de/kategorien/bushcraft"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Details ansehen
          </Link>
        </div>
      </div>
    </div>
  );
}
