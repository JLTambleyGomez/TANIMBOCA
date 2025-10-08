import type { Metadata } from "next";
import Image from "next/image";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de Sostenibilidad | Reserva Tanimboca",
  description:
    "Conoce la política de sostenibilidad de Tanimboca: cuidado ambiental, responsabilidad social, empleo justo, respeto a comunidades indígenas y gestión de residuos en el Amazonas.",
  openGraph: {
    title: "Política de Sostenibilidad | Reserva Tanimboca",
    description:
      "Compromiso con el turismo sostenible en el Amazonas: agua, energía, gestión de residuos, responsabilidad social y respeto por las comunidades indígenas.",
    url: `${siteUrl}/es/sostenibilidad`,
    locale: "es_CO",
  },
  alternates: {
    canonical: `${siteUrl}/es/sostenibilidad`,
    languages: {
      en: "/en/sustainability",
      de: `${siteUrl}/de/nachhaltigkeit`,
      es: `${siteUrl}/es/sostenibilidad`,
    },
  },
};

export default function SustainabilityES() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es el compromiso de Tanimboca con la sostenibilidad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tanimboca promueve el turismo sostenible mediante el uso eficiente del agua, la energía y los residuos, apoyando a las comunidades locales, respetando las tradiciones indígenas y previniendo riesgos sociales como el trabajo infantil o la explotación sexual.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo maneja Tanimboca los residuos sólidos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reducimos la generación de residuos, promovemos el reciclaje y creamos conciencia sobre los tiempos de descomposición de los materiales. El manejo inadecuado de los residuos genera contaminación, por lo que seguimos prácticas ecoeficientes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tanimboca apoya a las comunidades locales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Contratamos personal local en condiciones justas, promovemos artesanías y productos locales, y trabajamos con comunidades indígenas para preservar su patrimonio cultural.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué leyes guían la política de sostenibilidad de Tanimboca?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cumplimos con leyes colombianas como la Ley 679 de 2001 y la Ley 1336 de 2009 (protección de la niñez en turismo), la Ley 17 de 1981 y la Ley 1333 de 2009 (flora y fauna), y la Ley 63 de 1986 y la Ley 1185 de 2008 (patrimonio cultural).",
        },
      },
    ],
  };

  return (
    <>
      <NavbarES />
      <main className="p-8 max-w-5xl mx-auto pt-40 text-white space-y-12">
        <h1 className="text-3xl font-bold text-green-200 mb-6">
          Política de Sostenibilidad – Tanimboca S.A.S.
        </h1>
    <div className="w-full h-80 rounded-lg overflow-hidden mb-12">
                    <Image
                        src="/sostenibilidad.jpg"
                        alt="sostenibilidad"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                
        <section>
          <p>
            En <strong>Tanimboca</strong> nuestro compromiso es ofrecer a los
            visitantes la oportunidad de vivir el Amazonas de manera consciente
            y amigable con el ambiente. Promovemos el uso adecuado de agua,
            energía y residuos, y respetamos las comunidades indígenas y sus
            tradiciones.
          </p>
          <p>
            Generamos empleo justo para locales, rechazamos la explotación
            infantil y apoyamos a la comunidad mediante la promoción de
            productos y artesanías. La sostenibilidad es un deber compartido
            entre empleados, clientes y proveedores.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Campañas Sociales
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Menos basura, menos contaminación</li>
            <li>Con la tierra en mente</li>
            <li>Ahorro de energía</li>
            <li>El agua es vida</li>
            <li>Cuidando lo nuestro</li>
            <li>Responsabilidad social</li>
            <li>Prevención de riesgos sociales</li>
            <li>Conocer es crecer</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Directrices para un Turismo Sostenible
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Respeta las costumbres y tradiciones locales.</li>
            <li>La explotación sexual infantil es un delito en Colombia.</li>
            <li>Protege la flora y fauna; no compres productos ilegales.</li>
            <li>Respeta los recursos culturales y patrimoniales.</li>
            <li>No extraigas restos arqueológicos ni plantas.</li>
            <li>Apoya la economía local comprando artesanías.</li>
            <li>Evita envases innecesarios y opta por reciclables.</li>
            <li>No arrojes basura en los sitios visitados.</li>
            <li>Ahorra agua y energía en alojamientos.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Manejo de Residuos
          </h2>
          <p>
            El mal manejo de residuos genera contaminación y riesgos para la
            salud. En Tanimboca promovemos la reducción, reutilización y
            reciclaje, creando conciencia sobre el tiempo de descomposición:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Papel: 1–4 meses</li>
            <li>Filtros de cigarrillos: 1–2 años</li>
            <li>Chicle: 5 años</li>
            <li>Tejidos: 2–3 meses</li>
            <li>Lana: 1 año</li>
            <li>Latas: 10–100 años</li>
            <li>Botellas plásticas: 150–200 años</li>
            <li>Pilas: 1000 años</li>
            <li>Vidrio: indeterminado</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Marco Legal
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ley 679 de 2001, Ley 1336 de 2009 – protección de la niñez.</li>
            <li>
              Ley 17 de 1981, Ley 1333 de 2009 – tráfico de flora y fauna.
            </li>
            <li>
              Ley 63 de 1986, Ley 1185 de 2008 – patrimonio cultural.
            </li>
            <li>
              Resolución 0584 de 2002 – especies silvestres en peligro en
              Colombia.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Recursos y Denuncias
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Contra tráfico ilegal de flora y fauna:{" "}
              <a href="https://www.omacha.org" className="text-green-400">
                www.omacha.org
              </a>
            </li>
            <li>
              Contra tráfico de patrimonio cultural:{" "}
              <a href="https://www.globoscolombia.com" className="text-green-400">
                www.globoscolombia.com
              </a>
            </li>
            <li>
              Contra explotación sexual infantil:{" "}
              <a href="https://www.animanaturalis.org" className="text-green-400">
                www.animanaturalis.org
              </a>
            </li>
          </ul>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterES />
    </>
  );
}
