import Image from "next/image";
import Link from "next/link";

export default function CallToActionEN() {
    return (
        <section
            aria-labelledby="cta-title"
            className="relative bg-[#7c9200] text-white py-16 px-6 md:px-12"
        >
            <div className="grid md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
                {/* Image */}
                <div data-aos="fade" className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/cta.jpg" // 📸 place your image in /public
                        alt="Book your Amazon experience with Tanimboca"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Text + Button */}
                <div>
                    <h2 data-aos="fade-up"
                        id="cta-title"
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Book your Amazon adventure
                    </h2>
                    <p data-aos="fade-left" className="text-lg mb-6 text-gray-200">
                        Experience the jungle like never before: canopy through the trees, 
                        kayaking expeditions, hiking, local gastronomy, 
                        and cultural encounters with indigenous communities.
                    </p>

                    <a href="#footer" data-aos="fade-up"
                        className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    );
}
