import type { Metadata } from "next";
import Image from "next/image";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Exploración y Avistamiento de Anfibios | Reserva Natural Tanimboca",
  description:
    "Explora la diversidad de anfibios amazónicos mediante caminatas nocturnas guiadas en la Reserva Natural Tanimboca.",
  openGraph: {
    title: "Exploración y Avistamiento de Anfibios | Reserva Natural Tanimboca",
    description:
      "Caminatas nocturnas con guías locales para descubrir ranas, sapos y reptiles amazónicos en su hábitat natural.",
    url: `${siteUrl}/es/extras/anfibios`,
    locale: "es_CO",
  },
  alternates: makeAlternates("extras/anfibios", "es"),
};

export default function AnfibiosES() {
  return (
    <>
      <NavbarES />

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
                  alt="Anfibios y reptiles amazónicos"
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
                alt="Ranas amazónicas"
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
                    alt="Fauna amazónica nocturna"
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
              Exploración de Anfibios
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 max-w-4xl mx-auto pb-20 text-white">
          <p data-aos="fade-up" className="text-lg">
            La Reserva Natural Tanimboca alberga una extraordinaria diversidad de
            anfibios y reptiles amazónicos. Esta experiencia se realiza
            principalmente al atardecer y durante la noche, cuando ranas, sapos y
            otras especies incrementan su actividad.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            ¿Qué incluye la experiencia?
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Guía local especializado en fauna herpetológica</li>
            <li>Caminata nocturna por senderos de selva primaria</li>
            <li>Equipo básico de observación</li>
            <li>Alojamiento en Tanimboca (opcional)</li>
            <li>Alimentación según el plan seleccionado</li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            ¿Qué podrás observar?
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Ranas arborícolas de colores intensos</li>
            <li>Sapos terrestres y especies crípticas</li>
            <li>Ranas venenosas y especies endémicas</li>
            <li>Renacuajos y ciclos reproductivos en charcas naturales</li>
            <li>Serpientes amazónicas en actividad nocturna</li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            Recomendaciones
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Ropa ligera de manga larga</li>
            <li>Linterna o frontal (preferiblemente luz cálida)</li>
            <li>Botas o calzado de senderismo</li>
            <li>No manipular a los animales</li>
          </ul>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] px-6 py-3 rounded-xl font-semibold transition"
          >
            Solicitar experiencia
          </a>
        </div>
      </main>

      <FooterES />
    </>
  );
}
