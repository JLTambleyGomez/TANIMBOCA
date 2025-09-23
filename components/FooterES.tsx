import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      role="img"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      {...props}
    >
      <title>Facebook</title>
      <path d="M22 12a10 10 0 10-11.5 9.9v-7H8.5v-3h2.1V9.1c0-2.1 1.2-3.3 3-3.3.9 0 1.8.1 1.8.1v2h-1c-1 0-1.4.7-1.4 1.4V12h2.4l-.4 3h-2v7A10 10 0 0022 12z" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      role="img"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      {...props}
    >
      <title>Instagram</title>
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.2 3.2 0 1015.2 11 3.2 3.2 0 0012 8.2zm5.3-.8a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1zM12 9.4A2.6 2.6 0 1114.6 12 2.6 2.6 0 0112 9.4z" />
    </svg>
  );
}

export default function FooterES() {
  return (
    <footer id="footer" className="bg-[#08837D] text-gray-100 py-10 px-6 md:px-12 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div>
          <Image src="/logo.png" alt="Logo Tanimboca" width={140} height={60} className="mb-4" />
          <h2 className="text-lg font-bold mb-2">Tanimboca</h2>
          <p className="text-sm">
            Dosel Tanimboca <br />
            Carrera 10 No. 11-60 <br />
            Leticia, Amazonas – Colombia
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} aria-hidden />
              <span>(57 8) 5927679</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} aria-hidden />
              <span>3107917470 – 3212079909 – 3112043532</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} aria-hidden />
              <a href="mailto:contact@tanimboca.org" className="underline hover:text-white">contact@tanimboca.org</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="https://facebook.com/Tanimboca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <IconFacebook /> <span>Facebook /Tanimboca</span>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/Tanimboca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <IconInstagram /> <span>Instagram @Tanimboca</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-8 border-t border-[#0a6a66] pt-4">
        © {new Date().getFullYear()} Tanimboca. Todos los derechos reservados.
      </div>
    </footer>
  );
}
