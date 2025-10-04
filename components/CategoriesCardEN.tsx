import Image from "next/image";
import Link from "next/link";

export default function CategoriesCardEN() {
  return (
    <div
      id="categories"
      className="relative w-full bg-fixed bg-center bg-cover"
      style={{ backgroundImage: 'url("/pirarucu.jpeg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />

      {/* Main Title */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center text-white pt-16 pb-8 relative z-10"
      >
        Choose your perfect category and plan
      </h1>

      {/* Content */}
      <div className="grid md:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto relative z-10">
        {/* Category 1 */}
        <div
          data-aos="fade-right"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/bushcraft-adventure.jpg"
            alt="Discovering the Amazon"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">
            Discovering the Amazon
          </h3>
          <p className="text-white mb-4">
            Tours with moderate physical demand, ideal for all ages who want to
            explore and enjoy the jungle in a comfortable and safe way.
          </p>
          <Link
            href="/en/categories/discovering-the-amazon"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            View details
          </Link>
        </div>

        {/* Category 2 */}
        <div
          data-aos="fade-up"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/trekking.jpg"
            alt="Deep Jungle Adventure"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">
            Deep Jungle Adventure
          </h3>
          <p className="text-white mb-4">
            For adventurous travelers and sports lovers. Requires good physical
            condition, as it involves venturing deep into the jungle.
          </p>
          <Link
            href="/en/categories/jungle-adventure"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            View details
          </Link>
        </div>

        {/* Category 3 */}
        <div
          data-aos="fade-left"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/bushcraft.jpg"
            alt="Bushcraft and Survival"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">
            Bushcraft and Survival
          </h3>
          <p className="text-white mb-4">
            Perfect for families, groups of friends, or solo travelers. Learn to
            live with the jungle and practice survival skills in the heart of
            the Amazon.
          </p>
          <Link
            href="/en/categories/bushcraft-survival"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            View details
          </Link>
        </div>

        {/* Category 4 - Ethno Travel */}
        <div
          data-aos="fade-left"
          className="rounded-2xl shadow-lg bg-[#00000053] backdrop-blur-md p-6 hover:shadow-xl transition"
        >
          <Image
            src="/ethno-travel.jpg"
            alt="Ethno Travel"
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-white text-lg font-bold mb-2">Ethno Travel</h3>
          <p className="text-white mb-4">
            More than just a trip — an authentic encounter with cultural
            diversity. Share traditions, languages, gastronomy, and worldviews
            with indigenous communities.
          </p>
          <Link
            href="/en/categories/ethno-travel"
            className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white px-4 py-2 rounded-xl transition"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}
