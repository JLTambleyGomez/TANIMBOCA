import Image from "next/image";

export default function WhatToBringEN() {
  return (
    <section
      aria-labelledby="what-to-bring-en"
      className="relative bg-[#08837D] text-white py-16 px-6 md:px-12"
    >
      <div className="grid md:grid-cols-2 items-start gap-10 max-w-6xl mx-auto">
        {/* Text */}
        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <h2
            id="what-to-bring-en"
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            data-aos="fade-up"
          >
            Ready for the Adventure? What to Bring
          </h2>

          <p className="text-lg mb-6 text-gray-200" data-aos="fade-left" data-aos-delay="150">
            For a safe and comfortable experience in the Amazon, we recommend packing the following:
          </p>

          <ul className="space-y-3 text-gray-100 text-base" data-aos="fade-up" data-aos-delay="200">
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Light, breathable clothing – ideally quick-drying fabrics suitable for tropical weather.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Long-sleeved shirts and long pants – to protect from sun and insects.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Comfortable walking shoes or hiking boots – suitable for humid and uneven terrain.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Sun protection – sunscreen, hat, and sunglasses.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Mosquito repellent – preferably with DEET or natural alternatives.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Rain gear – a lightweight raincoat or poncho.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Flashlight or headlamp – with extra batteries.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Reusable water bottle or canteen – to stay hydrated during excursions.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Personal care kit – including toiletries, any personal medications, and basic first aid items.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 text-lg">•</span>
              <span>Small backpack or daypack – to carry your essentials during daily activities.</span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div
          data-aos="fade-left"
          data-aos-delay="120"
          className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
        >
          <Image
            src="/trekking.jpg"
            alt="Amazon essentials"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
