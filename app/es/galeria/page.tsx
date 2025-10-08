// tanimboca/app/es/galeria/page.tsx
import { fetchGalleryImages } from "@/lib/cloudinary";
import LightboxGallery from "@/components/LightboxGallery";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";

export const metadata = {
  title: "Galería Ethno Travel | Reserva Tanimboca",
  description: "Explora imágenes auténticas de experiencias culturales en el Amazonas.",
  openGraph: {
    title: "Galería Ethno Travel | Reserva Tanimboca",
    description: "Explora imágenes auténticas de experiencias culturales en el Amazonas.",
    url: "/es/galeria",
    locale: "es_CO",
  },
  alternates: {
    canonical: "/es/galeria",
    languages: {
      en: "/en/gallery",
      de: "/de/galerie",
    },
  },
};

export default async function GalleryPageES() {
  const images = await fetchGalleryImages();

  return (
    <>
          <NavbarES />
    <main className="pt-32 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-200 mb-8 text-center">
        📸 Galería Tanimboca
      </h1>

      {images.length === 0 ? (
        <p className="text-center text-white">No se encontraron imágenes.</p>
      ) : (
        <LightboxGallery images={images} />
      )}
    </main>
      <FooterES />
        </>

  );
}
