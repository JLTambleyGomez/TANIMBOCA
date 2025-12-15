import type { Metadata } from "next";
import Image from "next/image";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Apoyo a Investigación Científica | Reserva Natural Tanimboca",
  description:
    "Servicios de apoyo logístico, hospedaje y acompañamiento para proyectos de investigación científica en el Amazonas.",
  openGraph: {
    title: "Apoyo a Investigación Científica | Reserva Natural Tanimboca",
    description:
      "Brindamos soporte especializado para investigaciones biológicas, ecológicas y socioculturales en la Amazonía.",
    url: `${siteUrl}/es/extras/investigacion`,
    locale: "es_CO",
  },
  alternates: makeAlternates("extras/investigacion", "es"),
};

export default function InvestigacionES() {
  return (
    <>
      <NavbarES />
      <main className="p-8 max-w-5xl mx-auto pt-40 text-white">

        {/* Hero */}
        <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/investigacion.jpg"
            alt="Investigación científica en la Amazonía"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-bold text-white text-center"
            >
              Investigación Científica
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">

          <p data-aos="fade-up" className="text-lg">
            Tanimboca ofrece apoyo integral para investigadores, instituciones
            académicas y proyectos de conservación que requieran trabajar en la
            Amazonía colombiana. Nuestro equipo local aporta conocimiento del
            territorio, logística y acompañamiento especializado.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-semibold mt-8">
            Servicios disponibles
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Logística para trabajo de campo</li>
            <li>Alojamiento y alimentación completa</li>
            <li>Acceso a senderos, cuerpos de agua y plataformas</li>
            <li>Asistencia de guías locales con experiencia en investigación</li>
            <li>Transporte dentro del área de estudio (según requerimientos)</li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-semibold mt-10">
            Áreas de investigación frecuentes
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside space-y-2">
            <li>Ecología y biodiversidad</li>
            <li>Herpetología, ornitología y mastozoología</li>
            <li>Etnobotánica y saberes tradicionales</li>
            <li>Conservación y restauración de ecosistemas</li>
          </ul>

          <p data-aos="fade-up" className="text-lg">
            Adaptamos nuestros servicios a las necesidades de cada proyecto,
            garantizando seguridad, accesibilidad y mínima intervención en los
            ecosistemas.
          </p>

          <a
            href="#footer"
            data-aos="fade-up"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition mt-6"
          >
            Solicitar información
          </a>
        </div>
      </main>

      <FooterES />
    </>
  );
}
