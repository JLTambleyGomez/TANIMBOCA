// app/es/categories/ethno-travel/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";

export const metadata: Metadata = {
  title: "Ethno Travel | Reserva Tanimboca",
  description:
    "Vive un encuentro auténtico con las culturas indígenas del Amazonas. Intercambios culturales, gastronomía, artesanías, expediciones con comunidades Matis en Brasil y más.",
  openGraph: {
    title: "Ethno Travel | Turismo Cultural Amazónico",
    description:
      "Participa en intercambios culturales con comunidades indígenas y descubre su cosmovisión en la triple frontera (Colombia, Brasil y Perú).",
    url: "/es/categories/ethno-travel",
    locale: "es_CO",
  },
  alternates: {
    canonical: "/es/categories/ethno-travel",
    languages: {
      en: "/en/categories/ethno-travel",
      de: "/de/kategorien/ethno-reisen",
    },
  },
};

export default function EthnoTravelPageES() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es Ethno Travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ethno Travel es un tipo de turismo responsable que permite convivir con comunidades indígenas amazónicas, aprendiendo de sus tradiciones, lenguas, artesanías, gastronomía y cosmovisión.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se necesita hablar español o lenguas indígenas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es necesario. Contamos con guías locales que traducen y facilitan el intercambio cultural, creando un ambiente de respeto y participación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde se realizan las experiencias?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En comunidades indígenas cercanas a Leticia (Colombia), así como en el valle del río Yavarí en Brasil, donde habita el pueblo Matis.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué actividades incluye el programa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Convivencia directa con familias indígenas, talleres de artesanías, gastronomía tradicional, caminatas guiadas, participación en rituales y expediciones culturales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es una experiencia segura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Todas las actividades se realizan en coordinación con líderes comunitarios y guías locales, priorizando el respeto, la seguridad y el beneficio mutuo.",
        },
      },
    ],
  };

  return (
    <>
      <NavbarES />
      <main className="p-8 max-w-5xl mx-auto pt-40">
        <h1 className="text-3xl font-bold mb-6 text-green-200">
          🌿 Ethno Travel: Turismo Cultural Amazónico
        </h1>
        <p className="text-white mb-8">
          <strong>Ethno Travel</strong> es mucho más que un viaje: es un{" "}
          <em>encuentro auténtico con la diversidad cultural</em>. Esta modalidad
          de turismo invita a convivir con comunidades indígenas, compartiendo
          sus tradiciones, lenguas, artesanías, gastronomía y su particular
          visión del mundo. A diferencia del turismo convencional, se
          fundamenta en el respeto, la participación y el beneficio mutuo.
        </p>

        <div className="w-full h-80 rounded-lg overflow-hidden mb-12">
          <Image
            src="/ethno-travel2.jpg"
            alt="Turista participando en un intercambio cultural indígena en la Amazonía"
            width={800}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Programa 1 */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🪶 Programa 1: Intercambios Culturales (3 Días / 2 Noches)
        </h2>
        <div className="text-white space-y-4 mb-10">
          <p>
            Organizamos experiencias de convivencia con comunidades indígenas
            cercanas a Leticia, donde es posible compartir directamente con las
            familias y aprender de sus saberes ancestrales. A través de talleres
            de artesanías, caminatas interpretativas y momentos de diálogo, los
            visitantes tienen la oportunidad de vivir la cultura desde adentro.
          </p>
          <p>
            Las jornadas incluyen actividades culinarias, juegos tradicionales,
            navegación en canoas y participación en rituales que fortalecen la
            identidad cultural. Los alojamientos son en cabañas ecológicas o en
            casas de las comunidades, respetando sus dinámicas cotidianas.
          </p>
        </div>

        {/* Programa 2 */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🌍 Programa 2: Expedición al Brasil – Encuentro con los Matis (5 Días)
        </h2>
        <div className="text-white space-y-4 mb-10">
          <p>
            Ofrecemos expediciones hacia el lado brasileño, en el valle del río
            Yavarí, donde habita el pueblo Matis. Este pueblo indígena tuvo su
            primer contacto con el mundo exterior en 1975. Pocos años después,
            las enfermedades introducidas redujeron su población a menos de 100
            sobrevivientes. Hoy en día, los Matis son una comunidad alegre y en
            crecimiento, con alrededor de 600 integrantes distribuidos en cinco
            comunidades.
          </p>
          <p>
            Durante la expedición convivimos con varias familias Matis en un
            campamento de cacería en plena selva, a unas ocho horas en lancha
            desde Leticia. Esta experiencia ofrece una inmersión única en su
            cultura y estilo de vida, participando en actividades cotidianas,
            relatos orales y prácticas tradicionales.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-green-300">
          📩 Información y Reservas
        </h2>
        <p className="text-white mb-8">
          Para conocer más detalles o inscribirte en la próxima expedición,
          contáctanos por correo electrónico o a través de nuestros canales de
          atención. Cada experiencia es diseñada en colaboración con las
          comunidades para garantizar autenticidad, respeto y beneficios mutuos.
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterES />
    </>
  );
}
