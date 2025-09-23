"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavbarES() {
    const [menuOpen, setMenuOpen] = useState(false);



    return (
        <nav
            data-aos="fade-down"
            className="w-full flex items-center justify-between p-4 bg-[#0b827cab] backdrop-blur-sm  shadow-md fixed top-0 left-0 z-50"
        >
            <Link href="/es" className="text-2xl font-bold items-center flex  text-white">
                <Image src="/logo.png" alt="Tanimboca" width={70} height={70} />

                Tanimboca
            </Link>

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-6 text-white font-medium">
                <li>
                    <a href="#about" className="hover:text-green-200">
                        Nosotros
                    </a>

                </li>
                <li>
                    <a href="#categories" className="hover:text-green-200">
                        Aventuras
                    </a>
                </li>
                  <li>
                    <Link href="/es/sostenibilidad" className="hover:text-green-200">
                        Sostenibilidad
                    </Link>
                </li>

                <li>
                    <Link href="/es/gallery" className="hover:text-green-200">
                        Galería
                    </Link>
                </li>
                <li>
                    <a href="#footer" className="hover:text-green-200">
                        Contacto
                    </a>
                </li>
            </ul>

            <div className="flex items-center gap-4">
                <Link
                    href="/es/book"
                    className="hidden md:inline-block bg-[#ffffff] text-[#0b827cab] font-bold px-4 py-2 rounded-lg "
                >
                    Reservar
                </Link>

                {/* Hamburger button for mobile */}
                <button
                    className="md:hidden p-1 text-white "
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <ul className="absolute top-full left-0 w-full items-center bg-[#0b827cce] backdrop-blur-sm shadow-md flex flex-col md:hidden p-4 gap-4 text-white font-medium">
                    <li data-aos="fade-right" >

                        <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-green-200">
                            Nosotros
                        </a>

                    </li>
                    <li data-aos="fade-right" >
                        <a href="#categories" onClick={() => setMenuOpen(false)} className="hover:text-green-200">
                            Aventuras
                        </a>
                    </li>
                         <li data-aos="fade-right" >
                        <Link href="/es/sostenibilidad" onClick={() => setMenuOpen(false)}>
                            Sostenibilidad
                        </Link>
                    </li>

                    <li data-aos="fade-right" >
                        <Link href="/es/gallery" onClick={() => setMenuOpen(false)}>
                            Galería
                        </Link>
                    </li>
                    <li data-aos="fade-right" >
                        <a href="#categories" onClick={() => setMenuOpen(false)} className="hover:text-green-200">
                            Contacto
                        </a>
                    </li>
                    <li data-aos="fade-right" >
                
                        <a href="#footer" onClick={() => setMenuOpen(false)} className=" bg-[#ffffff] text-[#0b827cab] font-bold  px-4 py-2 rounded-lg"
                        >
                            Reservar
                        </a>

                    </li>
                </ul>
            )}
        </nav>
    );
}
