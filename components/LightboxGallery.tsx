"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
};

export default function LightboxGallery({ images }: { images: GalleryImage[] }) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      {/* 🟩 Galería con miniaturas más pequeñas */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {images.map((img) => (
          <div
            key={img.id}
            className="break-inside-avoid rounded-md overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition"
            onClick={() => setSelected(img)}
          >
            <Image
              src={img.url}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 400px) 100vw, 25vw"
              style={{
                maxHeight: "160px", // 👈 controla la altura visible de las miniaturas
              }}
            />
          </div>
        ))}
      </div>

      {/* 🖼 Lightbox modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 cursor-zoom-out"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-3xl max-h-[100vh] w-full h-[90vh] mx-auto">
            <Image
              src={selected.url}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              className="object-contain w-full h-full rounded-md"
              sizes="90vw"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
