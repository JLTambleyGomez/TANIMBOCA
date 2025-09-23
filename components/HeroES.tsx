
export default function HeroES() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("/test.jpg")' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000059] "></div>

      {/* Contenido */}
      <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg relative z-10">
        Tanimboca - Reserva Natural en el Amazonas
      </h1>
      <h2 className="text-xl text-gray-200 mb-6 drop-shadow-md relative z-10">
        Más que viajar, es descubrir el Amazonas colombiano
      </h2>
      <p className="max-w-2xl text-lg text-gray-100 drop-shadow relative z-10">
        Explora la selva amazónica con experiencias auténticas: canopy sobre los
        árboles, recorridos en kayak, excursiones guiadas, gastronomía local y
        la sabiduría de comunidades indígenas.
      </p>
    </section>
  );
}
