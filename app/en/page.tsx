// app/en/page.tsx
import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";
import HeroEN from "@/components/HeroEN";
import NavbarEN from "@/components/NavbarEN";
import AboutEN from "@/components/AboutEN";
import CategoriesCardEN from "@/components/CategoriesCardEN";
import CallToActionEN from "@/components/CallToActionEN";
import FooterEN from "@/components/FooterEN";

export const metadata: Metadata = {
  title: "Amazon Rainforest Tours & Personalized Adventures in Colombia",
  description:
    "Discover Tanimboca in the Colombian Amazon: canopy, kayaking, jungle expeditions, indigenous traditions, Amazonian cuisine, and tailor-made eco-travel plans.",
  keywords: [
    "Tanimboca",
    "Amazon rainforest tours",
    "Colombia Amazon travel",
    "Amazon canopy adventure",
    "kayaking Amazon river",
    "jungle expeditions Colombia",
    "indigenous traditions Amazon",
    "eco tourism Amazon",
    "Amazon rainforest wildlife",
    "personalized Amazon tours",
    "custom eco travel Amazon",
  ],
  openGraph: {
    title: "Tanimboca | Amazon Rainforest Adventures in Colombia",
    description:
      "Experience the Colombian Amazon like never before: canopy, kayaking, jungle expeditions, indigenous culture, gastronomy, and fully personalized eco-adventures.",
      url: `${siteUrl}/en`,
    locale: "en_US",
  },
  alternates: {
    canonical:  `${siteUrl}/en`,
    languages: {
      es:  `${siteUrl}/es`,
      de:  `${siteUrl}/de`,
    },
  },
};

export default function HomeEN() {
  return (
    <section className="overflow-hidden">
      <NavbarEN />
      <HeroEN />
      <AboutEN />
      <CategoriesCardEN />
      <CallToActionEN />
      <FooterEN />
    </section>
  );
}
