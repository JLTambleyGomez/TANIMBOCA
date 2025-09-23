export default function HeroEN() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: 'url("/test.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000059]" />

      {/* Content */}
      <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg relative z-10">
        Tanimboca - Natural Reserve in the Amazon
      </h1>
      <h2 className="text-xl text-gray-200 mb-6 drop-shadow-md relative z-10">
        More than traveling, it’s discovering the Colombian Amazon
      </h2>
      <p className="max-w-2xl text-lg text-gray-100 drop-shadow relative z-10">
        Explore the Amazon rainforest with authentic experiences: canopy over
        the trees, kayaking tours, guided hikes, local gastronomy, and the
        wisdom of indigenous communities.
      </p>
    </section>
  );
}
