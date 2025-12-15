import type { Metadata } from "next";
import Image from "next/image";
import NavbarEN from "@/components/NavbarEN";
import FooterEN from "@/components/FooterEN";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Amphibian Exploration | Tanimboca Natural Reserve",
  description:
    "Explore the Amazon rainforest and discover its extraordinary amphibian diversity through guided nocturnal experiences at Tanimboca.",
  openGraph: {
    title: "Amphibian Exploration | Tanimboca Natural Reserve",
    description:
      "Guided night walks to discover frogs, toads, and reptiles in the Amazon rainforest. Over 96 amphibian species recorded at Tanimboca.",
    url: `${siteUrl}/en/extras/amphibians`,
    locale: "en_US",
  },
  alternates: makeAlternates("extras/anfibios", "en"),
};

export default function AmphibiansEN() {
  return (
    <>
      <NavbarEN />

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
                  alt="Amazonian amphibians and reptiles"
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
                alt="Amazonian frogs"
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
                    alt="Nocturnal Amazon wildlife"
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
              Amphibian Exploration
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 max-w-4xl mx-auto pb-20">
          <p data-aos="fade-up" className="text-lg">
            The Tanimboca Natural Reserve is home to one of the richest amphibian
            communities in the Colombian Amazon. With over 20 years of active
            conservation, more than 96 amphibian species have been recorded within
            the reserve.
          </p>

          <p data-aos="fade-up" className="text-lg">
            This experience takes place mainly at dusk and during the night, when
            frogs, toads, and reptiles become most active, offering unique
            opportunities for observation and photography.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            What’s included
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Expert local guide specialized in amphibians and reptiles</li>
            <li>Guided nocturnal walk through rainforest trails</li>
            <li>Basic observation equipment</li>
            <li>Accommodation at Tanimboca (optional)</li>
            <li>Full meals according to selected plan</li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            What you may observe
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Colorful tree frogs and poison dart frogs</li>
            <li>Terrestrial and cryptic toad species</li>
            <li>Tadpoles and breeding activity in natural ponds</li>
            <li>Nocturnal Amazonian snakes</li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            Recommendations
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Lightweight, long-sleeve clothing</li>
            <li>Headlamp or flashlight (warm light preferred)</li>
            <li>Hiking boots or trail shoes</li>
            <li>Avoid touching wildlife</li>
          </ul>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] px-6 py-3 rounded-xl font-semibold transition"
          >
            Request this experience
          </a>
        </div>
      </main>

      <FooterEN />
    </>
  );
}
