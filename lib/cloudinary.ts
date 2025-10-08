import { v2 as cloudinary } from "cloudinary";

cloudinary.config({ secure: true });

type CloudinaryResource = {
  public_id: string;
  secure_url: string;
  display_name?: string;
  width: number;
  height: number;
};

export type GalleryImage = {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
};

export async function fetchGalleryImages(prefix = ""): Promise<GalleryImage[]> {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix,
      max_results: 50,
    });

    return (result.resources as CloudinaryResource[]).map((r) => ({
      id: r.public_id,
      url: r.secure_url,
      alt: r.display_name || r.public_id,
      width: r.width,
      height: r.height,
    }));
  } catch (error) {
    console.error("❌ Error fetching Cloudinary images:", error);
    return [];
  }
}
