import type { Metadata } from "next";
import Image from "next/image";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";


export const metadata: Metadata = {
    title: "Bushcraft y Supervivencia | Reserva Tanimboca",
    description:
        "Descubre técnicas de supervivencia amazónica en la Reserva Tanimboca. Planes familiares y expediciones extremas: campamentos en la selva, pesca artesanal, fuego, orientación y navegación.",
    openGraph: {
        title: "Bushcraft y Supervivencia | Ecoturismo en el Amazonas",
        description:
            "Vive el Amazonas en su máxima autenticidad: campamentos, bushcraft, pesca artesanal y expediciones de supervivencia en la Reserva Natural Tanimboca.",
            url: `${siteUrl}/es/categorias/bushcraft-supervivencia`,
        locale: "es_CO",
    },
    alternates: makeAlternates("categorias/bushcraft-supervivencia", "es"),
    // alternates: {
    //         canonical: `${siteUrl}/es/categorias/bushcraft-supervivencia`,
    //     languages: {
    //             en: `${siteUrl}/en/categories/bushcraft-survival`,
    //             de: `${siteUrl}/de/kategorien/bushcraft`,
    //             es: `${siteUrl}/es/categorias/bushcraft-supervivencia`,
    //     },
    // },
};

export default function BushcraftPageES() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "¿Es necesario tener experiencia previa en supervivencia?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. El plan Bushcraft Familia o Amigos está diseñado para principiantes y familias, mientras que la Expedición Amazónica es para aventureros con buena condición física que deseen profundizar en técnicas de supervivencia.",
                },
            },
            {
                "@type": "Question",
                name: "¿Dónde se realizan los campamentos?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los campamentos se desarrollan dentro de la Reserva Natural Tanimboca, a pocos kilómetros de Leticia, en áreas seguras pero inmersas en plena selva amazónica.",
                },
            },
            {
                "@type": "Question",
                name: "¿Qué técnicas de bushcraft se enseñan?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Uso de machete y cuchillo, elaboración de herramientas de pesca, encendido de fuego, cocina al aire libre, orientación, navegación, construcción de refugios y búsqueda de alimentos silvestres.",
                },
            },
            {
                "@type": "Question",
                name: "¿Hay actividades culturales incluidas?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Los planes incluyen paseos en bote por el río Amazonas, visitas a reservas naturales en Perú, avistamiento de delfines rosados y recorridos en Leticia y Tabatinga.",
                },
            },
            {
                "@type": "Question",
                name: "¿Qué tipo de alojamiento se incluye?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Casas en los árboles, cabañas en la selva, campamentos con hamacas y hoteles en Leticia, dependiendo del plan y del día del itinerario.",
                },
            },
        ],
    };

    return (
        <>
            <NavbarES />
            <main className="p-8 max-w-5xl mx-auto pt-40">
                <h1 className="text-3xl font-bold mb-6 text-green-200">
                    Bushcraft y Supervivencia en el Amazonas
                </h1>

                <p className="text-white mb-8">
                    La <strong>Reserva Tanimboca</strong> está ubicada a solo 11 km de
                    Leticia, en un área de 30 hectáreas de selva protegida, atravesada por
                    una quebrada ideal para la pesca artesanal. Aquí no necesitas recorrer
                    grandes distancias para sentirte inmerso en la jungla. Gracias a su
                    ubicación estratégica, combina <em>autenticidad, seguridad y
                        comodidad</em>, permitiendo experiencias únicas de supervivencia sin
                    sacrificar bienestar. Ofrecemos aventuras de bushcraft para todos los
                    niveles: desde familias hasta exploradores expertos.
                </p>

                <div className="w-full h-80 rounded-lg overflow-hidden mb-12">
                    <Image
                        src="/bushcraft.jpg"
                        alt="Turistas practicando bushcraft y supervivencia en la selva amazónica"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                {/* Plan 1 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🔥 Plan 1: Bushcraft Familia o Amigos (6 Días / 5 Noches)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        Este plan está diseñado para quienes buscan un{" "}
                        <strong>primer contacto con la selva</strong>, compartiendo en
                        familia o con amigos. Incluye actividades de canopy, caminatas
                        nocturnas, construcción de campamentos, pesca y técnicas básicas de
                        supervivencia.
                    </p>
                </div>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Día 1:</strong>  Llegada a Leticia y traslado a la Reserva Natural Tanimboca. Según la hora de llegada, serán recibidos con un almuerzo tradicional amazónico. Por la tarde, disfrutarán de un recorrido por el dosel del bosque entre las copas de los árboles, desplazándose por cables de acero y un puente colgante. Esa noche se alojarán en casas en los árboles y terminarán el día con una caminata nocturna para descubrir la fauna nocturna de la selva amazónica.

                    </p>
                    <p>
                        <strong>Día 2:</strong>
                        Después del desayuno, prepararemos nuestro equipo para pasar dos noches de campamento en la selva. El campamento se encuentra dentro de la Reserva Tanimboca. Una vez en el lugar, comenzarán a montar el campamento. El resto del día estará dedicado a actividades como el uso de machete y cuchillo, la elaboración de herramientas de pesca, encender fuego y cocinar sobre llama abierta. Por la tarde, podrán pescar en el arroyo y compartir historias alrededor de la fogata.
                    </p>
                    <p>
                        <strong>Día 3:</strong> Este día se centrará en técnicas de supervivencia: colocación de trampas para pequeños mamíferos y peces, orientación y navegación, diferentes métodos para hacer fuego y búsqueda de alimentos silvestres. Por la tarde, practicarán pesca tradicional y cerrarán la jornada con una barbacoa al fuego, acompañada de relatos de la selva.
                    </p>
                    <p>
                        <strong>Día 4:</strong> Después del desayuno, nos dirigiremos al puerto de Leticia, donde abordarán una lancha por el imponente río Amazonas para cruzar a la vecina Perú y visitar una reserva natural ubicada en un hermoso lago. Allí podrán avistar numerosas aves, pescar pirañas, observar los gigantes lirios Victoria Regia y, por la noche, buscar caimanes en el lago.

                    </p>
                    <p>
                        <strong>Día 5:</strong>Por la mañana, una lancha los llevará por el río Amazonas en busca de delfines rosados, con paradas en puntos de interés a lo largo del recorrido. El almuerzo se servirá en un restaurante flotante sobre el río. Por la tarde, serán testigos de la espectacular llegada de miles de loros al Parque Santander. Noche en hotel en Leticia. Tarde libre.
                    </p>
                    <p>
                        <strong>Día 6:</strong>Por la mañana, realizaremos un recorrido por la ciudad de Tabatinga, el pueblo brasileño vecino, así como por Leticia. Traslado al aeropuerto para su vuelo de regreso. Fin del tour por el Amazonas.
                    </p>
                </div>


                {/* Plan 2 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🌿 Plan 2: Expedición Amazónica (11 Días / 10 Noches)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        La aventura comienza con una caminata profunda en la selva, donde establecemos un campamento base. El campamento se ubica estratégicamente cerca de un arroyo, donde instalamos hamacas con mosquitero y toldos. A partir de ahí, durante los siguientes días, aprenderás de manera práctica, viviendo la experiencia directamente.
Nuestros guías nativos, pertenecientes a diferentes grupos étnicos, te enseñarán a construir refugios simples pero muy efectivos, practicar técnicas de pesca en riachuelos y quebradas, elaborar trampas para peces, mamíferos y aves, orientarte con la ayuda del sol y fabricar herramientas de pesca y caza—además de muchas otras habilidades que surgirán en el camino.

                    </p>
                </div>

      <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Día 1 - Llegada y Aventura en el Dosel:</strong> Aterriza en Leticia, en el aeropuerto Vásquez Cobo, donde comienza tu aventura. Un corto traslado de 11 km te llevará a la Reserva Natural Tanimboca, tu puerta de entrada al Amazonas. Tras una cálida bienvenida, check-in y orientación, nos dirigimos a La Arenosa para disfrutar de un almuerzo tradicional amazónico con pescado fresco a la parrilla.
Por la tarde, vive una experiencia única en las copas de los árboles. Ascenderás por cuerda a la primera plataforma, volarás entre tres puntos de observación en tirolina y cruzarás un puente colgante suspendido sobre la selva. El descenso final será en rappel.
Tu alojamiento de esta noche será especial: una casa en el árbol o una cabaña junto al arroyo (según disponibilidad). Después de un breve descanso, únete a tu guía para una caminata nocturna, donde la selva revela su vida oculta. La cena se servirá en la reserva—pizza amazónica especial u otros platos locales—antes de dormir arrullado por la sinfonía de la jungla.

                    </p>
                    <p>
                        <strong>Día 2 - Preparativos para la Expedición:</strong>
Después del desayuno, iremos a Leticia para realizar compras de último minuto. Almorzaremos en un restaurante local antes de regresar a Tanimboca.
Por la tarde tendremos una charla práctica de seguridad para la expedición, que incluye una introducción básica al uso del machete. Luego comenzarás a organizar el equipo para los días que vienen. La emoción crece: mañana empieza la verdadera expedición.
                    </p>
                    <p>
                        <strong>Día 3 - Rumbo a la Selva:</strong> 
Tras el desayuno, comienza nuestra travesía. Caminaremos un par de horas hasta llegar a un arroyo prístino, donde montaremos nuestro campamento base.
Durante los próximos siete días, este campamento será mucho más que refugio: será tu hogar en la selva y tu aula al aire libre. Vivirás inmerso en el bosque, aprendiendo sus ritmos, descubriendo sus secretos y conectándote profundamente con el entorno.
                    </p>
                    <p>
                        <strong>Día 9 - Regreso a la Civilización:</strong> Desmontamos el campamento y caminamos de regreso a Tanimboca. Después de almorzar, iremos a la ciudad para refrescarnos con una bebida fría o un helado, y recorrer las tiendas de artesanías.
Al atardecer, presenciaremos un espectáculo natural inolvidable: miles de loros regresando a sus árboles de descanso en la plaza principal de Leticia. Regreso a Tanimboca para pasar la noche.

                    </p>
                    <p>
                        <strong>Día 10 - Exploración del Río Amazonas:</strong>Hoy cambiamos las botas por el bote. Navegaremos el majestuoso río Amazonas, visitaremos la Isla de los Monos y buscaremos a los encantadores delfines rosados.
El almuerzo será en un restaurante flotante sobre el río. Por la tarde, regreso a Tanimboca para disfrutar de una barbacoa amazónica con caipirinhas, celebrando juntos la aventura bajo las estrellas.
  </p>
                    <p>
                        <strong>Día 11 - Despedida:</strong>Dependiendo del horario de tu vuelo, te llevaremos al aeropuerto y te asistiremos con el check-in.
Fin del tour – pero el Amazonas se quedará contigo para siempre.   </p>
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </main>
            <FooterES />
        </>
    );
}
