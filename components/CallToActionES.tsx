import Image from "next/image";
import Link from "next/link";

export default function CallToActionES() {
    return (
        <section
            aria-labelledby="cta-title"
            className="relative bg-[#7c9200] text-white py-16 px-6 md:px-12"
        >
            <div className="grid md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
                {/* Imagen */}
                <div data-aos="fade" className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/cta.jpg" // 📸 pon tu imagen en /public
                        alt="Reserva tu experiencia en el Amazonas con Tanimboca"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Texto + Botón */}
                <div>
                    <h2 data-aos="fade-up"
                        id="cta-title"
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Reserva tu experiencia en el Amazonas
                    </h2>
                    <p data-aos="fade-left" className="text-lg mb-6 text-gray-200">
                        Vive la selva como nunca antes: canopy sobre los árboles,
                        excursiones en kayak, senderismo, gastronomía local y
                        encuentros culturales con comunidades indígenas.
                    </p>


                    <a href="#footer" data-aos="fade-up"
                        className="inline-block bg-[#08837D] hover:bg-[#17c2b9] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"

                    >
                        Reservar Ahora
                    </a>



                </div>
            </div>
        </section>
    );
}
