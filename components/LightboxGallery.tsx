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
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="break-inside-avoid rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={() => setSelected(img)}
          >
            <Image
              src={img.url}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 cursor-zoom-out"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-auto">
            <Image
              src={selected.url}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              className="object-contain w-full h-full"
              sizes="100vw"
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
