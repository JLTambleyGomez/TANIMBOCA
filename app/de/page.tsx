// app/de/page.tsx
import type { Metadata } from "next";
import HeroDE from "@/components/HeroDE";
import NavbarDE from "@/components/NavbarDE";
import AboutDE from "@/components/AboutDE";
import CategoriesCardDE from "@/components/CategoriesCardDE";
import CallToActionDE from "@/components/CallToActionDE";
import FooterDE from "@/components/FooterDE";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Abenteuer im Amazonas Regenwald | Tanimboca Naturreservat",
  description:
    "Tanimboca im kolumbianischen Amazonas: Canopy-Abenteuer, Kajakfahren, Dschungel-Expeditionen, indigene Traditionen, Amazonas-Küche und individuell gestaltete Reisepläne.",
  keywords: [
    "Tanimboca",
    "Amazonas Kolumbien",
    "Amazonas Reisen",
    "Canopy Abenteuer",
    "Kajak Amazonas",
    "Dschungeltour Kolumbien",
    "indigene Kultur Amazonas",
    "Ökotourismus Kolumbien",
    "Naturreservat Amazonas",
    "Abenteuer Regenwald",
    "maßgeschneiderte Amazonas Reisen",
  ],
  openGraph: {
    title: "Tanimboca | Abenteuer im kolumbianischen Amazonas",
    description:
      "Entdecke den kolumbianischen Amazonas: Canopy, Kajak, Dschungel-Expeditionen, indigene Traditionen, Gastronomie und individuell angepasste Öko-Reisen.",
      url: `${siteUrl}/de`,
      locale: "de_DE",
  },
  alternates: {
    canonical:  `${siteUrl}/de`,
    languages: {
      es:  `${siteUrl}/es`,
      en: `${siteUrl}/en`,
    },
  },
};

export default function HomeDE() {
  return (
    <section className="overflow-hidden">
        <NavbarDE />
      <HeroDE />
      <AboutDE />
      <CategoriesCardDE />
      <CallToActionDE />
      <FooterDE />
    </section>
  );
}
