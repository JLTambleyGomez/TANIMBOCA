import Image from "next/image";
import Link from "next/link";

export default function ExtrasCardES() {
  return (
    <section
      id="extras"
      className="relative w-full bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: 'url("/pirarucu.jpeg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />

      {/* Título principal */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center text-white pt-16 pb-8 relative z-10"
      >
        Extras — Actividades y Servicios Adicionales
      </h1>

      {/* Contenido */}
      <div className="grid md:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto relative z-10">
        {/* Extra 1: Anfibios */}
        <div
          data-aos="fade-right"
          data-aos-delay="80"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/rana2.jpeg"
            alt="Exploración y avistamiento de anfibios"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Exploración: Avistamiento de Anfibios</h3>
          <p className="text-white mb-4 text-sm">
            Tours especializados con guías locales para descubrir la riqueza de anfibios
            en la Reserva Natural Tanimboca. Alojamiento y alimentación incluidos.
          </p>
          <Link
            href="/es/extras/anfibios"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Ver detalles
          </Link>
        </div>

        {/* Extra 2: Peces ornamentales */}
        <div
          data-aos="fade-up"
          data-aos-delay="120"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/pez3.jpeg"
            alt="Safari de pesca y fotografía"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Safari: Peces Ornamentales</h3>
          <p className="text-white mb-4 text-sm">
            Excursiones personalizadas para aficionados y expertos en peces ornamentales.
            Pesca responsable, fotografía y observación en arroyos y lagunas.
          </p>
          <Link
            href="/es/extras/peces-ornamentales"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Ver detalles
          </Link>
        </div>

        {/* Extra 3: Observación de aves */}
        <div
          data-aos="fade-up"
          data-aos-delay="160"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/ave3.jpeg"
            alt="Observación de aves en la triple frontera"
            width={400}
            height={250}
            className="w-full h-40 object-fill rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Birding: Observación de Aves</h3>
          <p className="text-white mb-4 text-sm">
            Rutas privadas de aviturismo por bosques de tierra firme, cochas y plataformas
            en el dosel — guiadas por expertos locales.
          </p>
          <Link
            href="/es/extras/aves"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Ver detalles
          </Link>
        </div>

        {/* Extra 4: Investigación */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/investigacion.jpg"
            alt="Apoyo a la investigación científica"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Apoyo a Investigación Científica</h3>
          <p className="text-white mb-4 text-sm">
            Facilitamos logística, alojamiento y conocimiento local para proyectos
            académicos y de conservación en Tanimboca.
          </p>
          <Link
            href="/es/extras/investigacion"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </section>
  );
}
