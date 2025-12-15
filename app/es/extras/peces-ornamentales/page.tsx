import type { Metadata } from "next";
import Image from "next/image";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Safari de Peces Ornamentales | Extras Tanimboca",
  description:
    "Explora quebradas y lagunas amazónicas en un safari especializado para observar y fotografiar peces ornamentales de manera responsable.",
  openGraph: {
    title: "Safari de Peces Ornamentales | Extras Tanimboca",
    description:
      "Recorridos personalizados para fotógrafos, aficionados y expertos en peces ornamentales. Observación y prácticas responsables en el Amazonas.",
    url: `${siteUrl}/es/extras/ornamental-fish`,
    locale: "es_CO",
  },
  alternates: makeAlternates("extras/peces-ornamentales", "es"),
};

export default function PecesExtraPageES() {
  return (
    <>
      <NavbarES />

      <main className="pt-40 text-white max-w-6xl mx-auto px-6">
        {/* HERO COLLAGE */}
        <div className="relative w-full h-[22rem] md:h-[30rem] mb-12 rounded-xl overflow-hidden shadow-xl">
          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-3 w-full h-full">
            {["/pez1.jpeg", "/pez2.jpeg", "/pez3.jpeg"].map((src, i) => (
              <div key={i} className="relative">
                <Image
                  src={src}
                  alt="Peces ornamentales del Amazonas"
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
                alt="Peces ornamentales amazónicos"
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
                    alt="Safari de peces ornamentales"
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
              Safari de Peces Ornamentales
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 max-w-4xl mx-auto pb-20">
          <p data-aos="fade-up" className="text-lg">
            El Amazonas es uno de los ecosistemas acuáticos más biodiversos del
            planeta y hogar de especies icónicas de peces ornamentales como
            cardenales, arawanas, cíclidos y tetras de colores vibrantes.
          </p>

          <p data-aos="fade-up" className="text-lg">
            En Tanimboca ofrecemos recorridos especializados por
            <strong> quebradas, lagunas y bosques inundables (igapó)</strong>,
            diseñados para la observación, fotografía y documentación responsable
            de especies en su entorno natural.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            ¿A quién va dirigido?
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Fotógrafos de naturaleza</li>
            <li>Acuaristas y aficionados</li>
            <li>Investigadores y estudiantes</li>
            <li>Viajeros interesados en biodiversidad amazónica</li>
          </ul>

          <p data-aos="fade-up" className="text-lg">
            Nuestro equipo local brinda acompañamiento experto, conocimiento
            ecológico y orientación para minimizar cualquier impacto sobre los
            ecosistemas acuáticos.
          </p>

          <p data-aos="fade-up" className="text-lg">
            La experiencia puede complementarse con
            <strong> alojamiento y alimentación completa</strong> dentro del área
            de conservación.
          </p>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] px-6 py-3 rounded-xl font-semibold transition"
          >
            Solicitar información
          </a>
        </div>
      </main>

      <FooterES />
    </>
  );
}
