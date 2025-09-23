import Image from "next/image";
import Link from "next/link";

export default function CategoriesCardES() {
  return (
    <div id="categories"
      className="relative w-full bg-fixed bg-center bg-cover"
      style={{ backgroundImage: 'url("/test.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />

      {/* Título principal */}
      <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-center text-white pt-16 pb-8 relative z-10">
        Escoge tu categoría y plan perfectos
      </h1>

      {/* Contenido */}
      <div className="grid md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto relative z-10">
        {/* Categoría 1 */}
        <div data-aos="fade-right" className="rounded-2xl shadow-lg   bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition">
          <Image
            src="/bushcraft-adventure.jpg"
            alt="Descubriendo el Amazonas"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">
            Descubriendo el Amazonas
          </h3>
          <p className="text-white mb-4">
            Tours de exigencia física moderada, ideales para todas las edades
            que deseen explorar y disfrutar la selva de una manera cómoda y
            segura.
          </p>
          <Link
            href="/es/categorias/descubriendo-el-amazonas"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Ver detalles
          </Link>
        </div>

        {/* Categoría 2 */}
        <div data-aos="fade-up" className="rounded-2xl shadow-lg   bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition">
          <Image
            src="/trekking.jpg"
            alt="Aventura Selva Adentro"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">
            Aventura Selva Adentro
          </h3>
          <p className="text-white mb-4">
            Para viajeros aventureros y amantes del deporte. Requieren buen
            estado físico, ya que implican internarse en lo más profundo de la
            selva.
          </p>
          <Link
            href="/es/categorias/aventura-selva-adentro"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Ver detalles
          </Link>
        </div>

        {/* Categoría 3 */}
        <div data-aos="fade-left" className="rounded-2xl shadow-lg   bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition">
          <Image
            src="/bushcraft.jpg"
            alt="Bushcraft y Supervivencia"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">
            Bushcraft y Supervivencia
          </h3>
          <p className="text-white mb-4">
            Ideal para familias, grupos de amigos o quienes viajan solos.
            Aprenderás a convivir con la selva y poner en práctica habilidades
            de supervivencia en el corazón del Amazonas.
          </p>
          <Link
            href="/es/categorias/bushcraft-supervivencia"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
