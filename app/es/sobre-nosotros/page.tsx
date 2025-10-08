import type { Metadata } from "next";
import Image from "next/image";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";
import { siteUrl } from "@/lib/seo";


export const metadata: Metadata = {
  title: "Sobre Nosotros | Tanimboca Amazonas",
  description:
    "Descubre la historia, misión y valores de Tanimboca, la reserva amazónica en Colombia dedicada al ecoturismo, la sostenibilidad y la aventura en la selva.",
  openGraph: {
    title: "Tanimboca | Sobre Nosotros",
    description:
      "Conoce la historia de Tanimboca y nuestras experiencias únicas de ecoturismo, aventura y cultura en el Amazonas colombiano.",
    url: `${siteUrl}/es/sobre-nosotros`,
    locale: "es_CO",
  },
   alternates: {
    canonical: `${siteUrl}/es/sobre-nosotros`,
    languages: {
      es: `${siteUrl}/es/sobre-nosotros`,
      en: `${siteUrl}/en/about`,
      de: `${siteUrl}/de/uber-uns`,
    },},
};

export default function AboutPageES() {
  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es Tanimboca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tanimboca es una reserva natural en el Amazonas colombiano que combina ecoturismo, conservación y cultura indígena."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde está ubicada la reserva Tanimboca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Estamos en Leticia, Amazonas, Colombia, a pocos minutos de la ciudad, en plena selva amazónica."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué experiencias ofrece Tanimboca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos canopy, caminatas guiadas, kayak, alojamiento en cabañas ecológicas y experiencias culturales con comunidades indígenas."
        }
      }
    ]
  };

  return (
    <>
      <NavbarES />
      <main className="p-8 max-w-5xl mx-auto pt-40">
        {/* Título principal */}
        <h1 className="text-3xl font-bold mb-6">
          Sobre Nosotros | Tanimboca Reserva Natural
        </h1>

        {/* Introducción */}
        <p className="text-white mb-6">
          En <strong>Tanimboca</strong> trabajamos desde 2001 para proteger la
          Amazonía y compartir su magia con el mundo. Somos una{" "}
          <strong>reserva natural en el Amazonas colombiano</strong> dedicada a
          la conservación, la sostenibilidad y el desarrollo regional a través
          del ecoturismo responsable.
        </p>

        {/* Imagen destacada */}
        <Image
          src="/test.jpg"
          alt="Turistas explorando la selva amazónica en Tanimboca"
          width={500}
          height={200}
          priority
          className="rounded-lg mt-4 object-cover"
        />

        {/* Sección: Historia */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Nuestra Historia
        </h2>
        <p className="text-white mb-6">
          Desde hace más de dos décadas, Tanimboca se ha consolidado como una
          experiencia pionera en{" "}
          <strong>ecoturismo en Leticia y el Amazonas</strong>. Nacimos con la
          idea de crear un espacio donde los viajeros puedan{" "}
          <strong>descubrir la selva amazónica</strong> de manera auténtica,
          mientras contribuimos a la conservación de este ecosistema único en el
          planeta.
        </p>

        {/* Sección: Misión y Valores */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Nuestra Misión y Valores
        </h2>
        <p className="text-white mb-6">
          Nuestra misión es ofrecer{" "}
          <strong>experiencias de turismo sostenible</strong> que permitan
          disfrutar de la biodiversidad del Amazonas y la riqueza cultural de
          sus pueblos indígenas, siempre con respeto y responsabilidad. Creemos
          en valores como la{" "}
          <strong>conservación ambiental, el respeto cultural y la educación</strong>{" "}
          como ejes de todas nuestras actividades.
        </p>

        {/* Sección: Experiencias */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Experiencias Únicas en Tanimboca
        </h2>
        <ul className="list-disc list-inside text-white mb-6">
          <li>Canopy sobre los árboles más altos del Amazonas.</li>
          <li>Recorridos en kayak por ríos y lagunas amazónicas.</li>
          <li>Caminatas guiadas para descubrir la biodiversidad única.</li>
          <li>Alojamiento en <strong>cabañas ecológicas</strong>.</li>
          <li>Gastronomía local con ingredientes amazónicos.</li>
          <li>Intercambio cultural con <strong>comunidades indígenas</strong>.</li>
        </ul>

        {/* Sección: Conservación */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Compromiso con la Conservación
        </h2>
        <p className="text-white mb-6">
          Cada experiencia en Tanimboca ayuda a preservar la selva amazónica y
          a apoyar el desarrollo de comunidades locales. Promovemos{" "}
          <strong>ecoturismo responsable</strong> para garantizar que las
          futuras generaciones también puedan disfrutar de la biodiversidad del
          Amazonas.
        </p>

        {/* Llamado a la acción */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Descubre el Amazonas con Nosotros
        </h2>
        <p className="text-white mb-6">
          Te invitamos a vivir el Amazonas colombiano de una manera auténtica y
          transformadora. Explora nuestras aventuras y reserva tu experiencia
          con Tanimboca:{" "}
          <strong>
            donde viajar es aprender, conectar y contribuir a la conservación.
          </strong>
        </p>

        {/* Script con FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterES />
    </>
  );
}
