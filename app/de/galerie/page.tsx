// app/de/galerie/page.tsx
import { fetchGalleryImages } from "@/lib/cloudinary";
import LightboxGallery from "@/components/LightboxGallery";
import NavbarDE from "@/components/NavbarDE";
import FooterDE from "@/components/FooterDE";
export const metadata = {
  title: "Ethno Travel Galerie | Reserva Tanimboca",
  description: "Entdecke authentische Bilder kultureller Erfahrungen im Amazonas.",
  openGraph: {
    title: "Ethno Travel Galerie | Reserva Tanimboca",
    description: "Entdecke authentische Bilder kultureller Erfahrungen im Amazonas.",
    url: "/de/galerie",
    locale: "de_DE",
  },
  alternates: {
    canonical: "/de/galerie",
    languages: {
      es: "/es/galeria",
      en: "/en/gallery",
    },
  },
};

export default async function GalleryPageDE() {
  const images = await fetchGalleryImages();
  return (
    <>
      <NavbarDE />

      <main className="pt-32 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-200 mb-8 text-center">
          📸 Tanimboca Galerie
        </h1>
        {images.length === 0 ? (
          <p className="text-center text-white">Keine Bilder gefunden.</p>
        ) : (
          <LightboxGallery images={images} />
        )}
      </main>
      <FooterDE />
    </>
  );
}
