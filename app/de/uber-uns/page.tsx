import type { Metadata } from "next";
import Image from "next/image";
import NavbarDE from "@/components/NavbarDE";
import FooterES from "@/components/FooterES";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Über Uns | Tanimboca Amazonas",
  description:
    "Erfahre mehr über die Geschichte, Mission und Werte von Tanimboca, dem Amazonas-Reservat in Kolumbien für Ökotourismus, Nachhaltigkeit und Abenteuer.",
  openGraph: {
    title: "Tanimboca | Über Uns",
    description:
      "Lerne die Geschichte von Tanimboca kennen und entdecke unsere einzigartigen Ökotourismus-Erlebnisse im kolumbianischen Amazonas.",
    url: `${siteUrl}/de/uber-uns`,
    locale: "de_DE",
  },
  alternates: {
    canonical: `${siteUrl}/de/uber-uns`,
    languages: { en: `${siteUrl}/en/about`, es: `${siteUrl}/es/sobre-nosotros`, de: `${siteUrl}/de/uber-uns` },
  },
};

export default function AboutPageDE() {
     const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist Tanimboca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tanimboca ist ein Naturreservat im kolumbianischen Amazonas, das Ökotourismus, Naturschutz und indigene Kultur verbindet."
        }
      },
      {
        "@type": "Question",
        "name": "Wo befindet sich Tanimboca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir befinden uns in Leticia, Amazonas, Kolumbien – nur wenige Minuten von der Stadt entfernt, mitten im Regenwald."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Erlebnisse bietet Tanimboca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zu den Angeboten gehören Canopy-Touren, geführte Wanderungen, Kajakfahrten, Unterkünfte in Öko-Hütten, Amazonas-Küche und kultureller Austausch mit indigenen Gemeinschaften."
        }
      }
    ]
  };

  return (
    <>
      <NavbarDE />
      <main className="p-8 max-w-5xl mx-auto pt-40">
        {/* Haupttitel */}
        <h1 className="text-3xl font-bold mb-6">
          Über Uns | Tanimboca Naturreservat
        </h1>

        {/* Einführung */}
        <p className="text-white mb-6">
          Seit 2001 arbeitet <strong>Tanimboca</strong> daran, den Amazonas zu
          schützen und seine Magie mit der Welt zu teilen. Wir sind ein{" "}
          <strong>Naturreservat im kolumbianischen Amazonas</strong>, das sich
          dem Schutz, der Nachhaltigkeit und der regionalen Entwicklung durch
          verantwortungsvollen Ökotourismus widmet.
        </p>

        {/* Bild */}
        <Image
          src="/test.jpg"
          alt="Reisende erkunden den Amazonas-Regenwald bei Tanimboca"
          width={500}
          height={200}
          priority
          className="rounded-lg mt-4 object-cover"
        />

        {/* Geschichte */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Unsere Geschichte
        </h2>
        <p className="text-white mb-6">
          Seit über zwei Jahrzehnten ist Tanimboca ein Pionier im{" "}
          <strong>Ökotourismus in Leticia und im Amazonasgebiet</strong>. Wir
          wurden mit der Idee gegründet, einen Ort zu schaffen, an dem Reisende
          den <strong>Amazonas-Regenwald authentisch entdecken</strong> und
          gleichzeitig zu seinem Erhalt beitragen können.
        </p>

        {/* Mission und Werte */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Unsere Mission und Werte
        </h2>
        <p className="text-white mb-6">
          Unsere Mission ist es,{" "}
          <strong>nachhaltige Tourismuserlebnisse</strong> zu schaffen, die die
          Biodiversität des Amazonas und den kulturellen Reichtum seiner
          indigenen Völker zeigen – immer mit Respekt und Verantwortung. Wir
          glauben an <strong>Naturschutz, kulturellen Respekt und Bildung</strong>{" "}
          als die Grundlagen all unserer Aktivitäten.
        </p>

        {/* Erlebnisse */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Einzigartige Erlebnisse in Tanimboca
        </h2>
        <ul className="list-disc list-inside text-white mb-6">
          <li>Canopy-Touren über die höchsten Bäume des Amazonas.</li>
          <li>
            Kajakfahrten durch Flüsse und Lagunen, umgeben von einzigartiger
            Flora und Fauna.
          </li>
          <li>Geführte Wanderungen zur Entdeckung der Artenvielfalt.</li>
          <li>
            Unterkunft in <strong>ökologischen Hütten</strong>, eingebettet in
            den Regenwald.
          </li>
          <li>Lokale Küche mit frischen Zutaten aus dem Amazonas.</li>
          <li>
            Kultureller Austausch mit{" "}
            <strong>indigenen Gemeinschaften des Amazonas</strong>.
          </li>
        </ul>

        {/* Naturschutz */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Engagement für den Naturschutz
        </h2>
        <p className="text-white mb-6">
          Jedes Erlebnis in Tanimboca trägt dazu bei, den Amazonas-Regenwald zu
          bewahren und die lokalen Gemeinschaften zu unterstützen. Wir fördern{" "}
          <strong>verantwortungsvollen Ökotourismus</strong>, um sicherzustellen,
          dass auch zukünftige Generationen die Biodiversität des Amazonas
          erleben können.
        </p>

        {/* Call-to-Action */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Erkunde den Amazonas mit uns
        </h2>
        <p className="text-white mb-6">
          Wir laden dich ein, den kolumbianischen Amazonas auf authentische und
          transformative Weise zu erleben. Entdecke unsere Abenteuer und buche
          dein Erlebnis mit Tanimboca:{" "}
          <strong>
            wo Reisen bedeutet zu lernen, sich zu verbinden und zum Schutz
            beizutragen.
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
