import type { Metadata } from "next";
import Image from "next/image";
import NavbarEN from "@/components/NavbarEN";
import FooterEN from "@/components/FooterEN";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Birdwatching Experience | Tanimboca Nature Reserve",
  description:
    "Specialized birding routes in the Amazon rainforest for birdwatchers and photographers.",
  openGraph: {
    title: "Birdwatching Experience | Tanimboca Nature Reserve",
    description:
      "Private birding routes across terra firme forest, canopy platforms, and lakes with expert local guides.",
    url: `${siteUrl}/en/extras/birdwatching`,
    locale: "en_US",
  },
  alternates: makeAlternates("extras/aves", "en"),
};

export default function BirdwatchingEN() {
  return (
    <>
      <NavbarEN />

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
                    alt="Amazon birdwatching experience"
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
                alt="Amazon birds"
                fill
                className="object-fill"
              />
            </div>
            <div className="grid grid-cols-3 h-1/3">
              {["/ave2.jpeg", "/ave3.jpeg", "/ave4.jpeg"].map((src, i) => (
                <div key={i} className="relative">
                  <Image
                    src={src}
                    alt="Birdwatching in the Amazon rainforest"
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
              Birdwatching
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 max-w-4xl mx-auto pb-20">
          <p data-aos="fade-up" className="text-lg">
            Discover the extraordinary diversity of Amazonian birdlife through guided
            routes led by expert local birders. From canopy platforms to lakes and
            terra firme forest, this experience is designed for birdwatchers,
            photographers, and nature enthusiasts.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            What’s Included
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Expert local birding guide</li>
            <li>Trails, lakes, and canopy platforms</li>
            <li>Binoculars available</li>
            <li>Basic hydration</li>
          </ul>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] px-6 py-3 rounded-xl font-semibold transition"
          >
            Book experience
          </a>
        </div>
      </main>

      <FooterEN />
    </>
  );
}
