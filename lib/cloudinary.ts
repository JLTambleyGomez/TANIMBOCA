import { v2 as cloudinary } from "cloudinary";

cloudinary.config({ secure: true });

export async function fetchGalleryImages(prefix = "") {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix,         // opcional: puedes filtrar por carpeta si quieres
      max_results: 50,
    });

    // 🧠 transformamos la respuesta de Cloudinary
    return result.resources.map((r: any) => ({
      id: r.public_id,                 // 👈 único
      url: r.secure_url,               // 👈 HTTPS siempre
      alt: r.display_name || r.public_id,
      width: r.width,
      height: r.height,
    }));
  } catch (error) {
    console.error("❌ Error fetching Cloudinary images:", error);
    return [];
  }
}
