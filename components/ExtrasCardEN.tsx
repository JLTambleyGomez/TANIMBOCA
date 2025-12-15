import Image from "next/image";
import Link from "next/link";

export default function ExtrasCardEN() {
  return (
    <section
      id="extras"
      className="relative w-full bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: 'url("/pirarucu.jpeg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />

      {/* Main Title */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center text-white pt-16 pb-8 relative z-10"
      >
        Extras — Additional Activities & Services
      </h1>

      {/* Content */}
      <div className="grid md:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto relative z-10">
        {/* Extra 1: Amphibians */}
        <div
          data-aos="fade-right"
          data-aos-delay="80"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/rana2.jpeg"
            alt="Amphibian watching and field exploration"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Exploration: Amphibian Watching</h3>
          <p className="text-white mb-4 text-sm">
            Specialized night walks with local guides to discover the rich amphibian
            diversity within the Tanimboca Natural Reserve. Lodging and meals included.
          </p>
          <Link
            href="/en/extras/amphibians"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            View details
          </Link>
        </div>

        {/* Extra 2: Ornamental Fish */}
        <div
          data-aos="fade-up"
          data-aos-delay="120"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/pez3.jpeg"
            alt="Responsible ornamental fish exploration"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Safari: Ornamental Fish</h3>
          <p className="text-white mb-4 text-sm">
            Tailored excursions for hobbyists and researchers to explore ornamental fish
            in creeks and lagoons — photography, observation, and responsible practices.
          </p>
          <Link
            href="/en/extras/ornamental-fish"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            View details
          </Link>
        </div>

        {/* Extra 3: Birdwatching */}
        <div
          data-aos="fade-up"
          data-aos-delay="160"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/ave4.jpeg"
            alt="Birdwatching routes with expert guides"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Birding: Birdwatching</h3>
          <p className="text-white mb-4 text-sm">
            Private birding routes across terra firme forest, canopy platforms and lakes,
            guided by local specialists.
          </p>
          <Link
            href="/en/extras/birdwatching"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            View details
          </Link>
        </div>

        {/* Extra 4: Scientific Research */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/investigacion.jpg"
            alt="Scientific research support in the Amazon"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Scientific Research Support</h3>
          <p className="text-white mb-4 text-sm">
            We provide logistics, lodging, and local knowledge for academic and
            conservation-focused research projects based in Tanimboca.
          </p>
          <Link
            href="/en/extras/research"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            View details
          </Link>
        </div>
      </div>
    </section>
  );
}
