import type { Metadata } from "next";
import Image from "next/image";
import NavbarEN from "@/components/NavbarEN";
import FooterEN from "@/components/FooterEN";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
  title: "Scientific Research Support | Extras Tanimboca",
  description:
    "We provide logistics, lodging, and local knowledge for academic and conservation-focused research projects based in Tanimboca.",
  openGraph: {
    title: "Scientific Research Support | Extras Tanimboca",
    description:
      "We support researchers with logistics, local knowledge, and accommodation for academic and conservation research in the Amazon.",
    url: `${siteUrl}/en/extras/research`,
    locale: "en_US",
  },
  alternates: makeAlternates("extras/investigacion", "en"),
};

export default function ResearchExtraPageEN() {
  return (
    <>
      <NavbarEN />
      <main className="p-8 max-w-5xl mx-auto pt-40 text-white">
        {/* Header */}
        <h1 data-aos="fade-up" className="text-3xl font-bold mb-6 text-green-200">
          Scientific Research Support
        </h1>
        <p data-aos="fade-up" className="mb-8">
          Tanimboca offers essential support for scientific and conservation
          research projects in the Amazon. We provide logistics, accommodation,
          and expert local knowledge to help researchers and conservationists
          succeed in their studies of the region's unique ecosystems.
        </p>

        {/* Image */}
        <div
          data-aos="fade"
          className="w-full h-80 rounded-lg overflow-hidden mb-12 shadow-xl"
        >
          <Image
            src="/extra-investigacion.jpg"
            alt="Scientific research support in the Amazon"
            width={600}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Content */}
        <div className="text-white space-y-4">
          <p data-aos="fade-up">
            Our team of local experts offers guidance on research planning,
            logistics, and fieldwork, ensuring that projects are carried out with
            minimal environmental impact. We have extensive experience in
            supporting research related to biodiversity, conservation, and
            indigenous knowledge.
          </p>

          <p data-aos="fade-up">
            We can assist with everything from setting up field camps in the heart
            of the Amazon to arranging transportation for research equipment and
            personnel. Additionally, we provide lodging and meals for researchers
            staying within the Tanimboca Reserve.
          </p>

          <p data-aos="fade-up">
            Our goal is to facilitate groundbreaking research that contributes to
            the protection and understanding of the Amazon rainforest.
          </p>

          <p data-aos="fade-up" className="font-semibold">
            For more information or to discuss a research project, please
            contact us directly.
          </p>
        </div>
      </main>
      <FooterEN />
    </>
  );
}
