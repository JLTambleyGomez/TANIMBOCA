// app/en/gallery/page.tsx
import { fetchGalleryImages } from "@/lib/cloudinary";
import LightboxGallery from "@/components/LightboxGallery";

export const metadata = {
  title: "Ethno Travel Gallery | Tanimboca Reserve",
  description: "Explore authentic images of cultural experiences in the Amazon.",
  openGraph: {
    title: "Ethno Travel Gallery | Tanimboca Reserve",
    description: "Explore authentic images of cultural experiences in the Amazon.",
    url: "/en/gallery",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/gallery",
    languages: {
      es: "/es/galeria",
      de: "/de/galerie",
    },
  },
};

export default async function GalleryPageEN() {
  const images = await fetchGalleryImages();
  return (
    <main className="pt-32 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-200 mb-8 text-center">
        📸 Ethno Travel Gallery
      </h1>
      {images.length === 0 ? (
        <p className="text-center text-white">No images found.</p>
      ) : (
        <LightboxGallery images={images} />
      )}
    </main>
  );
}
