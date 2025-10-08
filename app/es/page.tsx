// app/es/page.tsx
import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";
import HeroES from "@/components/HeroES";
import NavbarES from "@/components/NavbarES";
import AboutES from "@/components/AboutES";
import CategoriesCardES from "@/components/CategoriesCardES";
import CallToActionES from "@/components/CallToActionES";
import FooterES from "@/components/FooterES";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
    title: "Aventuras en la Selva Amazónica | Reserva Natural Tanimboca",
    description:
        "Tanimboca, en el Amazonas colombiano: canopy, kayak, expediciones en la selva, tradiciones indígenas, gastronomía amazónica y planes de viaje personalizados.",
    keywords: [
        "Tanimboca",
        "Amazonas Colombia",
        "turismo Amazonas",
        "canopy Amazonas",
        "kayak Amazonas",
        "excursiones selva Colombia",
        "cultura indígena Amazonas",
        "ecoturismo Colombia",
        "reserva natural Amazonas",
        "aventuras en la selva",
        "planes personalizados Amazonas",
    ],
    openGraph: {
        title: "Tanimboca | Aventuras en el Amazonas colombiano",
        description:
            "Vive el Amazonas colombiano como nunca: canopy, kayak, excursiones en la selva, cultura indígena, gastronomía amazónica y viajes totalmente personalizados.",
            url: `${siteUrl}/es`,
        locale: "es_CO",
    },
    alternates: makeAlternates("home", "es"),
    // alternates: {
    //     canonical: `${siteUrl}/es`,
    //     languages: {
    //         en: `${siteUrl}/en`,
    //         de: `${siteUrl}/de`,
    //     },
    // },
};

export default function HomeES() {
    return (
    <section className="overflow-hidden">
            <NavbarES />
            <HeroES />
            <AboutES />
            <CategoriesCardES />
            <CallToActionES />
            <FooterES />

        </section>
    );
}
