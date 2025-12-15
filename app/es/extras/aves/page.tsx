import type { Metadata } from "next";
import Image from "next/image";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Avistamiento de Aves | Reserva Natural Tanimboca",
  description:
    "Rutas guiadas de avistamiento de aves en la Amazonía para observadores y fotógrafos.",
  openGraph: {
    title: "Avistamiento de Aves | Reserva Natural Tanimboca",
    description:
      "Experiencias privadas de birdwatching con guías expertos en avifauna amazónica.",
    url: `${siteUrl}/es/extras/aves`,
    locale: "es_CO",
  },
  alternates: makeAlternates("extras/aves", "es"),
};

export default function AvesES() {
  return (
    <>
      <NavbarES />

      <main className="pt-40 text-white max-w-6xl mx-auto px-6">
        {/* HERO COLLAGE */}
        <div className="relative w-full h-[22rem] md:h-[30rem] mb-12 rounded-xl overflow-hidden shadow-xl">
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-2 grid-rows-2 w-full h-full">
            {["/ave1.jpeg", "/ave2.jpeg", "/ave3.jpeg", "/ave4.jpeg"].map(
              (src, i) => (
                <div key={i} className="relative">
                  <Image src={src} alt="Avistamiento de aves" fill className="object-fill" />
                </div>
              )
            )}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden w-full h-full">
            <div className="relative h-2/3">
              <Image src="/ave1.jpeg" alt="Aves amazónicas" fill className="object-fill" />
            </div>
            <div className="grid grid-cols-3 h-1/3">
              {["/ave2.jpeg", "/ave3.jpeg", "/ave4.jpeg"].map((src, i) => (
                <div key={i} className="relative">
                  <Image src={src} alt="Birdwatching Amazonía" fill className="object-fill" />
                </div>
              ))}
            </div>
          </div>

          {/* Overlay + title */}
          <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
            <h1 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-center px-4">
              Avistamiento de Aves
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 max-w-4xl mx-auto pb-20">
          <p data-aos="fade-up" className="text-lg">
            Explora la extraordinaria diversidad de aves amazónicas mediante rutas
            guiadas por expertos locales, desde plataformas de canopy hasta lagos y
            bosques de tierra firme.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            Qué incluye
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Guía especializado en avifauna amazónica</li>
            <li>Senderos, lagunas y plataformas elevadas</li>
            <li>Binoculares disponibles</li>
            <li>Hidratación básica</li>
          </ul>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] px-6 py-3 rounded-xl font-semibold transition"
          >
            Reservar experiencia
          </a>
        </div>
      </main>

      <FooterES />
    </>
  );
}
