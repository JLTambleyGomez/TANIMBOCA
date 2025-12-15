import Image from "next/image";

export default function WhatToBringES() {
  return (
    <section
      aria-labelledby="what-to-bring-es"
      className="relative bg-[#08837D] text-white py-16 px-6 md:px-12"
    >
      <div className="grid md:grid-cols-2 items-start gap-10 max-w-6xl mx-auto">
        {/* Texto */}
        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <h2 id="what-to-bring-es" className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            ¿Listo para la aventura? Qué llevar
          </h2>

          <p className="text-lg mb-6 text-gray-200" data-aos="fade-left" data-aos-delay="150">
            Para disfrutar de una experiencia cómoda y segura en el Amazonas, te recomendamos empacar lo siguiente:
          </p>

          <ul className="space-y-3 text-gray-100 text-base" data-aos="fade-up" data-aos-delay="200">
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Ropa ligera y transpirable – preferiblemente de secado rápido, ideal para el clima tropical.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Camisas de manga larga y pantalones largos – para protegerte del sol y los insectos.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Zapatos cómodos o botas de caminata – adecuados para terrenos húmedos y desiguales.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Protección solar – protector solar, sombrero y gafas de sol.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Repelente de insectos – preferiblemente con DEET o alternativas naturales.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Impermeable o poncho ligero – para las lluvias tropicales.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Linterna o frontal – con baterías de repuesto.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Cantimplora o botella reutilizable – para mantenerte hidratado durante las excursiones.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Kit de aseo personal – incluye artículos de higiene, medicamentos personales y un pequeño botiquín.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Mochila pequeña o de día – para llevar tus cosas esenciales durante las actividades.</span>
            </li>
          </ul>
        </div>

        {/* Imagen */}
        <div
          data-aos="fade-left"
          data-aos-delay="120"
          className="relative h-full md:h-full rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
        >
          <Image
            src="/trekking.jpg"
            alt="Esenciales para el Amazonas"
            fill
            className="object-fill"
            priority
          />
        </div>
      </div>
    </section>
  );
}
