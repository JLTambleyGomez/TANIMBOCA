import type { Metadata } from "next";
import Image from "next/image";
import NavbarEN from "@/components/NavbarEN";
import FooterEN from "@/components/FooterEN";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Ornamental Fish Safari | Extras Tanimboca",
  description:
    "Explore Amazonian creeks and lagoons on a specialized safari for observing and photographing ornamental fish in their natural habitat.",
  openGraph: {
    title: "Ornamental Fish Safari | Extras Tanimboca",
    description:
      "Tailored excursions for photographers, hobbyists, and researchers interested in Amazon ornamental fish. Responsible practices and expert local guidance.",
    url: `${siteUrl}/en/extras/ornamental-fish`,
    locale: "en_US",
  },
  alternates: makeAlternates("extras/peces-ornamentales", "en"),
};

export default function OrnamentalFishExtraPageEN() {
  return (
    <>
      <NavbarEN />

      <main className="pt-40 text-white max-w-6xl mx-auto px-6">
        {/* HERO COLLAGE */}
        <div className="relative w-full h-[22rem] md:h-[30rem] mb-12 rounded-xl overflow-hidden shadow-xl">
          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-3 w-full h-full">
            {["/pez1.jpeg", "/pez2.jpeg", "/pez3.jpeg"].map((src, i) => (
              <div key={i} className="relative">
                <Image
                  src={src}
                  alt="Amazon ornamental fish"
                  fill
                  className="object-fill"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden w-full h-full">
            <div className="relative h-2/3">
              <Image
                src="/pez1.jpeg"
                alt="Ornamental fish in the Amazon"
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
                    alt="Amazon fish safari"
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
              Amazon Ornamental Fish Safari
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 max-w-4xl mx-auto pb-20">
          <p data-aos="fade-up" className="text-lg">
            The Amazon rainforest is one of the most biodiverse aquatic ecosystems
            on Earth and home to iconic ornamental fish species such as cardinal
            tetras, arawanas, discus, and many vibrant cichlids and tetras.
          </p>

          <p data-aos="fade-up" className="text-lg">
            At Tanimboca, we offer specialized expeditions through
            <strong> creeks, lagoons, and flooded forests (igapó)</strong>, designed
            for observation, photography, and responsible documentation in the
            fish’s natural environment.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            Who is this experience for?
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Nature and wildlife photographers</li>
            <li>Aquarists and hobbyists</li>
            <li>Researchers and biology students</li>
            <li>Travelers interested in Amazon biodiversity</li>
          </ul>

          <p data-aos="fade-up" className="text-lg">
            Our local team provides expert guidance, ecological knowledge, and
            best practices to ensure minimal environmental impact throughout the
            experience.
          </p>

          <p data-aos="fade-up" className="text-lg">
            The safari can be complemented with
            <strong> full-board accommodation</strong> within the conservation
            area.
          </p>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] px-6 py-3 rounded-xl font-semibold transition"
          >
            Request information
          </a>
        </div>
      </main>

      <FooterEN />
    </>
  );
}
