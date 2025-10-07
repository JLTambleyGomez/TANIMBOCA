// lib/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({ secure: true });

export async function fetchGalleryImages() {
  const result = await cloudinary.api.resources({
    type: "upload",
    max_results: 50,
  });

  return result.resources;
}
