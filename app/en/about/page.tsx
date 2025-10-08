import type { Metadata } from "next";
import Image from "next/image";
import NavbarEN from "@/components/NavbarEN";
import FooterES from "@/components/FooterES";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "About Us | Tanimboca Amazon",
  description:
    "Discover the story, mission, and values of Tanimboca, the Colombian Amazon rainforest reserve dedicated to ecotourism, sustainability, and adventure.",
  openGraph: {
    title: "Tanimboca | About Us",
    description:
      "Learn about Tanimboca, our history, mission, and unique ecotourism experiences in the Colombian Amazon.",
      url: `${siteUrl}/en/about`,
    locale: "en_US",
  },
  alternates: makeAlternates("sobre-nosotros", "en"),
  // alternates: {
  //     canonical: `${siteUrl}/en/about`,
  //   languages: { es: `${siteUrl}/es/sobre-nosotros`, de: `${siteUrl}/de/uber-uns`, en: `${siteUrl}/en/about`  },
  // },
};

export default function AboutPageEN() {
    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Tanimboca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tanimboca is a nature reserve in the Colombian Amazon that combines ecotourism, conservation, and indigenous culture."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Tanimboca located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located in Leticia, Amazonas, Colombia, just minutes from the city, in the heart of the Amazon rainforest."
        }
      },
      {
        "@type": "Question",
        "name": "What experiences does Tanimboca offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visitors can enjoy canopy tours, guided jungle hikes, kayaking, eco-lodge accommodation, Amazonian cuisine, and cultural exchanges with indigenous communities."
        }
      }
    ]
  };

  return (
    <>
      <NavbarEN />
      <main className="p-8 max-w-5xl mx-auto pt-40">
        {/* Main Title */}
        <h1 className="text-3xl font-bold mb-6">
          About Us | Tanimboca Nature Reserve
        </h1>

        {/* Introduction */}
        <p className="text-white mb-6">
          Since 2001, <strong>Tanimboca</strong> has been working to protect the
          Amazon and share its magic with the world. We are a{" "}
          <strong>nature reserve in the Colombian Amazon</strong> dedicated to
          conservation, sustainability, and regional development through
          responsible ecotourism.
        </p>

        {/* Featured Image */}
        <Image
          src="/test.jpg"
          alt="Travelers exploring the Amazon rainforest at Tanimboca"
          width={500}
          height={200}
          priority
          className="rounded-lg mt-4 object-cover"
        />

        {/* History Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Our History
        </h2>
        <p className="text-white mb-6">
          For over two decades, Tanimboca has been a pioneer in{" "}
          <strong>ecotourism in Leticia and the Amazon</strong>. We were born
          with the idea of creating a place where travelers can{" "}
          <strong>discover the Amazon rainforest</strong> authentically, while
          contributing to the preservation of this unique ecosystem.
        </p>

        {/* Mission & Values */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Our Mission and Values
        </h2>
        <p className="text-white mb-6">
          Our mission is to provide{" "}
          <strong>sustainable tourism experiences</strong> that showcase the
          Amazon’s biodiversity and the cultural richness of its indigenous
          peoples, always with respect and responsibility. We believe in{" "}
          <strong>environmental conservation, cultural respect, and education</strong>{" "}
          as the foundation of all our activities.
        </p>

        {/* Experiences */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Unique Experiences at Tanimboca
        </h2>
        <ul className="list-disc list-inside text-white mb-6">
          <li>Canopy tours over the tallest Amazon trees.</li>
          <li>
            Kayak trips through rivers and lagoons surrounded by unique flora
            and fauna.
          </li>
          <li>Guided hikes to explore Amazonian biodiversity.</li>
          <li>
            Accommodation in <strong>eco-friendly cabins</strong> immersed in
            the jungle.
          </li>
          <li>Local Amazonian cuisine with fresh, native ingredients.</li>
          <li>
            Cultural exchange with{" "}
            <strong>indigenous Amazonian communities</strong>.
          </li>
        </ul>

        {/* Conservation */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Commitment to Conservation
        </h2>
        <p className="text-white mb-6">
          Every experience at Tanimboca helps preserve the Amazon rainforest and
          support local communities. We promote{" "}
          <strong>responsible ecotourism</strong> as a way to ensure that future
          generations can also enjoy the Amazon’s biodiversity.
        </p>

        {/* Call to Action */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-200">
          Explore the Amazon with Us
        </h2>
        <p className="text-white mb-6">
          We invite you to experience the Colombian Amazon in an authentic and
          transformative way. Discover our adventures and book your journey with
          Tanimboca:{" "}
          <strong>
            where traveling means learning, connecting, and contributing to
            conservation.
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
