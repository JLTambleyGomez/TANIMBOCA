import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") || "";
    let lang = "en"; // 🌍 fallback por defecto

    // Normalizamos a minúsculas para evitar errores
    const lowerLang = acceptLanguage.toLowerCase();

    if (lowerLang.startsWith("es")) {
      lang = "es";
    } else if (lowerLang.startsWith("de")) {
      lang = "de";
    }
    // 👉 cualquier otro idioma (fr, it, pt, etc.) va al fallback "en"

    const url = new URL(`/${lang}`, request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// ✅ Solo en la raíz
export const config = {
  matcher: ["/"],
};
