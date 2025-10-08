"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function NavbarDE() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"es" | "en" | "de">("de");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname.startsWith("/es")) {
        setCurrentLang("es");
      } else if (window.location.pathname.startsWith("/en")) {
        setCurrentLang("en");
      } else {
        setCurrentLang("de");
      }
    }
  }, []);

  const changeLanguage = (lang: "es" | "en" | "de") => {
    window.location.href = `/${lang}`;
  };

  const languageLabels: Record<"es" | "en" | "de", string> = {
    es: "Español",
    en: "English",
    de: "Deutsch",
  };

  const languageFlags: Record<"es" | "en" | "de", string> = {
    es: "🇪🇸",
    en: "🇬🇧",
    de: "🇩🇪",
  };

  return (
    <nav
      data-aos="fade-down"
      className="w-full flex items-center justify-between p-4 bg-[#0b827cab] backdrop-blur-sm shadow-md fixed top-0 left-0 z-50"
    >
      <Link href="/de" className="text-2xl font-bold items-center flex text-white">
        <Image src="/logo.png" alt="Tanimboca" width={70} height={70} />
        Tanimboca
      </Link>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-white font-medium">
        <li>
          <a href="/de#about" className="hover:text-green-200">Über uns</a>
        </li>
        <li>
          <a href="/de#categories" className="hover:text-green-200">Abenteuer</a>
        </li>
        <li>
          <Link href="/de/nachhaltigkeit" className="hover:text-green-200">Nachhaltigkeit</Link>
        </li>
        <li>
          <Link href="/de/galerie" className="hover:text-green-200">Galerie</Link>
        </li>
        <li>
          <a href="/de#footer" className="hover:text-green-200">Kontakt</a>
        </li>
      </ul>

      <div className="flex items-center gap-4 relative">
        {/* Reservieren */}
        <Link
          href="/de#footer"
          className="hidden md:inline-block bg-[#ffffff] text-[#0b827cab] font-bold px-4 py-2 rounded-lg"
        >
          Reservieren
        </Link>

        {/* Language switcher (desktop) */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 px-2 py-1 text-white hover:text-green-200"
            aria-label="Sprache auswählen"
          >
            <Globe size={20} />
            <span>
              {languageFlags[currentLang]} {languageLabels[currentLang]}
            </span>
          </button>
          {langOpen && (
            <ul className="absolute right-0 mt-2 w-36 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
              <li>
                <button
                  onClick={() => changeLanguage("es")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  🇪🇸 Español
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  🇬🇧 English
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("de")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  🇩🇪 Deutsch
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden p-1 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full items-center bg-[#0b827cce] backdrop-blur-sm shadow-md flex flex-col md:hidden p-4 gap-4 text-white font-medium">
          <li><a href="/de#about" onClick={() => setMenuOpen(false)}>Über uns</a></li>
          <li><a href="/de#categories" onClick={() => setMenuOpen(false)}>Abenteuer</a></li>
          <li><Link href="/de/nachhaltigkeit" onClick={() => setMenuOpen(false)}>Nachhaltigkeit</Link></li>
          <li><Link href="/de/galerie" onClick={() => setMenuOpen(false)}>Galerie</Link></li>
          <li><a href="/de#footer" onClick={() => setMenuOpen(false)}>Kontakt</a></li>
          <li>
            <Link
              href="/de#footer"
              onClick={() => setMenuOpen(false)}
              className="bg-[#ffffff] text-[#0b827cab] font-bold px-4 py-2 rounded-lg"
            >
              Reservieren
            </Link>
          </li>

          {/* Language switcher (mobile) */}
          <li className="relative w-full text-center">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center justify-center gap-2 px-2 py-2 w-full bg-[#ffffff22] rounded-lg hover:bg-[#ffffff33]"
              aria-label="Sprache auswählen"
            >
              <Globe size={20} />
              <span>
                {languageFlags[currentLang]} {languageLabels[currentLang]}
              </span>
            </button>
            {langOpen && (
              <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
                <li>
                  <button onClick={() => changeLanguage("es")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    🇪🇸 Español
                  </button>
                </li>
                <li>
                  <button onClick={() => changeLanguage("en")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    🇬🇧 English
                  </button>
                </li>
                <li>
                  <button onClick={() => changeLanguage("de")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    🇩🇪 Deutsch
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
