import type { Metadata } from "next";
import Image from "next/image";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";

export const metadata: Metadata = {
    title: "Descubriendo el Amazonas | Planes de Ecoturismo en Tanimboca",
    description:
        "Explora la Amazonía colombiana con nuestros planes exclusivos: Descubrimiento Amazónico, Campamento de Aventura y Amazon Discovery Tour. Vive canopy, kayak, cultura indígena y naturaleza en la Reserva Natural Tanimboca.",
    openGraph: {
        title: "Descubriendo el Amazonas | Experiencias Únicas en Tanimboca",
        description:
            "Vive la selva amazónica con experiencias auténticas: canopy, excursiones en kayak, senderismo, cultura indígena y más en la Reserva Natural Tanimboca, Leticia, Amazonas.",
        url: "/es/categories/descubriendo-el-amazonas",
        locale: "es_CO",
    },
    alternates: {
        canonical: "/es/categories/descubriendo-el-amazonas",
        languages: {
            en: "/en/categories/discovering-the-amazon",
            de: "/de/categories/amazonas-entdecken",
        },
    },
};

export default function DescubriendoAmazonasPageES() {
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "¿Cuántos planes de ecoturismo ofrece Tanimboca en el Amazonas?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Actualmente ofrecemos tres experiencias completas: Descubrimiento Amazónico (5 días / 4 noches), Campamento de Aventura (5 días / 4 noches) y Amazon Discovery Tour (4 días / 3 noches). Cada plan incluye alojamiento, alimentación, actividades guiadas y traslados locales.",
                },
            },
            {
                "@type": "Question",
                name: "¿Qué actividades incluye el plan Descubrimiento Amazónico?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "El plan incluye canopy en plataformas en el dosel, tirolesas, rappel, caminatas guiadas diurnas y nocturnas, visita a una chagra (huerto amazónico), taller de mambe con comunidades indígenas, navegación por el río Amazonas, observación de fauna como monos y aves, y excursiones a Puerto Nariño, Macedonia y la Fundación Natutama.",
                },
            },
            {
                "@type": "Question",
                name: "¿En qué se diferencia el Campamento de Aventura?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Este plan está diseñado para quienes buscan mayor contacto con la selva. Incluye una noche de campamento con fogata, historias tradicionales, pesca amazónica y descanso en hamacas con toldillo, además de canopy, caminatas, navegación por el Amazonas y visita a reservas naturales en Perú y Puerto Nariño.",
                },
            },
            {
                "@type": "Question",
                name: "¿Qué ofrece el Amazon Discovery Tour?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un plan más corto (4 días / 3 noches) ideal para quienes tienen menos tiempo. Combina canopy, caminatas guiadas, navegación por el río Amazonas, visita a una reserva natural en Perú, avistamiento de caimanes y exploración de Puerto Nariño y Leticia, incluyendo el espectáculo natural de los loros al atardecer.",
                },
            },
            {
                "@type": "Question",
                name: "¿Dónde se desarrollan las experiencias de los planes?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las experiencias se desarrollan principalmente en la Reserva Natural Tanimboca en Leticia (Colombia), con excursiones a Puerto Nariño, comunidades indígenas como Macedonia, reservas naturales en Perú y un city tour en Leticia.",
                },
            },
            {
                "@type": "Question",
                name: "¿Qué tipo de alojamiento incluye cada plan?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dependiendo del plan y la disponibilidad, podrás alojarte en casas en los árboles, cabañas junto al arroyo, bungalows en la selva, hamacas con toldillo en campamento o en hoteles en la ciudad de Leticia.",
                },
            },
            {
                "@type": "Question",
                name: "¿Es necesario tener experiencia previa para participar?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, todas las actividades están diseñadas para personas sin experiencia previa y se realizan con guías locales expertos. El canopy, las caminatas y las excursiones cuentan con equipos de seguridad y acompañamiento especializado.",
                },
            },
            {
                "@type": "Question",
                name: "¿Qué tipo de alimentación se ofrece en los tours?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los planes incluyen alimentación completa con comidas típicas amazónicas como pescado fresco, platos locales en malocas tradicionales y opciones internacionales en el restaurante de la reserva. También se adaptan a dietas especiales previa solicitud.",
                },
            },
        ],
    };


    return (
        <>
            <NavbarES />
            <main className="p-8 max-w-5xl mx-auto pt-40">
                {/* Encabezado principal */}
                <h1 className="text-3xl font-bold mb-6 text-green-200">
                    Descubriendo el Amazonas | Planes Tanimboca
                </h1>
                <p className="text-white mb-8">
                    Vive una experiencia única en la{" "}
                    <strong>Reserva Natural Tanimboca</strong> con nuestros{" "}
                    <strong>tres planes de ecoturismo</strong>. Sumérgete en la
                    biodiversidad amazónica con actividades como{" "}
                    <em>canopy, kayak, caminatas guiadas, talleres indígenas y
                        observación de fauna</em>. Cada programa está diseñado para que
                    disfrutes el Amazonas colombiano de forma auténtica y sostenible.
                </p>

                {/* Imagen destacada */}
                <div className="w-100 h-80 rounded-lg overflow-hidden mb-12">
                    <Image
                        src="/bushcraft-adventure.jpg"
                        alt="Turistas disfrutando del ecoturismo en el Amazonas"
                        width={600}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>


                {/* PLAN 1 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🌿 Descubrimiento Amazónico (5 Días / 4 Noches)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Día 1:</strong> Llegada a Leticia, al Aeropuerto Vásquez Cobo, y traslado terrestre de 11 km hasta la Reserva Natural Tanimboca. Después de una cálida bienvenida, registro y una breve introducción al itinerario, te dirigirás a La Arenosa para disfrutar de un almuerzo tradicional amazónico con pescado fresco a la parrilla.
                        En la tarde, realizarás una corta caminata por la selva para llegar a las plataformas en el dosel: una aventura emocionante pero segura entre las copas de los árboles. Ascenderás por cuerda hasta la primera plataforma, luego te deslizarás por tres puntos de observación mediante tirolesas y cruzarás un puente colgante suspendido a gran altura. El descenso final será en rappel.
                        Tras la experiencia en el dosel, tu guía te acompañará a tu alojamiento para la noche: ya sea una casa en el árbol o una cabaña al borde de la selva junto a un arroyo (según disponibilidad). Después de un breve descanso, participarás en una caminata nocturna guiada para descubrir los sonidos y criaturas nocturnas de la selva. La cena será una pizza al estilo amazónico u otras opciones del menú en nuestro restaurante, seguida de una noche tranquila rodeada de los sonidos de la naturaleza.

                    </p>
                    <p>
                        <strong>Día 2:</strong> Después del desayuno, iniciarás una caminata guiada por la selva. Durante el recorrido, tu guía te mostrará plantas medicinales, materiales naturales de construcción, bejucos para tejer canastos y otros recursos nativos. La caminata finaliza en la Reserva Natural Selva, donde almorzarás en una Maloca—la casa comunal tradicional utilizada por las comunidades indígenas.
                        Más tarde, visitarás una Chagra—huerto tradicional amazónico—donde se cultivan yuca, ají, plátano, banano y coca, entre otros. En la tarde, participarás en un taller práctico de preparación de Mambe, procesando hojas de coca y aprendiendo sobre sus usos ancestrales y su importancia cultural. Regresarás a la Reserva Tanimboca para relajarte junto al arroyo natural antes de pasar la noche en un cómodo bungalow en la selva.
                    </p>
                    <p>
                        <strong>Día 3:</strong> Después de un desayuno temprano, saldrás hacia el puerto de Leticia para embarcarte en un recorrido por el río Amazonas hacia una impresionante Reserva Natural en Perú. Según la temporada, el acceso será mediante una caminata de 45 minutos (temporada seca) o un tranquilo paseo en canoa (temporada de lluvias).
                        Esta reserva es rica en biodiversidad: podrás avistar monos, aves exóticas y otros animales silvestres. Disfrutarás de comidas locales recién preparadas y explorarás la selva a pie o en canoa. No olvides buscar las victorias regias (flores de loto gigantes) y los imponentes árboles de ceiba. Al caer la noche, te unirás a una excursión guiada en busca de caimanes—una aventura emocionante y segura. Pernocte en la reserva peruana.
                    </p>
                    <p>
                        <strong>Día 4:</strong> Por la mañana, navegarás en lancha privada 80 km río arriba hasta Puerto Nariño, con paradas en Isla de los Monos y en Macedonia, una comunidad indígena reconocida por su tallado en madera y artesanías.
                        Al llegar a Puerto Nariño—un tranquilo pueblo libre de automóviles a orillas del río Loretoyacu—almorzarás y luego visitarás la Fundación Natutama, una iniciativa local que educa sobre la rica vida subacuática del Amazonas.
                        En la tarde, regresarás a Leticia para presenciar un espectáculo natural inolvidable: miles de loros regresando a sus árboles de descanso en la plaza principal al atardecer.
                        La última noche pasarán en un hotel en Leticia
                    </p>
                    <p>
                        <strong>Día 5:</strong> Dependiendo de la hora de tu vuelo, disfrutarás de un recorrido por la ciudad para conocer los principales atractivos de Leticia. El tour finaliza al mediodía, seguido de traslado privado al Aeropuerto Vásquez Cobo para tu salida.
                    </p>
                </div>

                {/* PLAN 2 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🔥 Campamento de Aventura (5 Días / 4 Noches)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Día 1:</strong> Llegada a Leticia, al Aeropuerto Vásquez Cobo, y traslado terrestre de 11 km hasta la Reserva Natural Tanimboca. Después de una cálida bienvenida, registro y explicación del itinerario, nos dirigiremos a La Arenosa para disfrutar de un almuerzo tradicional amazónico con pescado fresco a la parrilla.
                        Por la tarde, realizaremos una corta caminata en la selva para llegar a las plataformas del dosel: una aventura emocionante y segura entre las copas de los árboles. Ascenderás a la primera plataforma con cuerda, luego deslizarás por tres puntos de observación mediante tirolesas y cruzarás un puente colgante suspendido en lo alto del bosque. El descenso final se hace en rápel.
                        Después de la experiencia en el dosel, tu guía te llevará a tu alojamiento de la noche: una casa en el árbol o una cabaña en la orilla de la selva junto a un arroyo (según disponibilidad). Tras un breve descanso, disfrutarás de una caminata nocturna guiada para descubrir los sonidos y criaturas de la selva. La cena será una pizza amazónica especial u otras opciones en nuestro restaurante. Noche rodeado de los sonidos de la selva.
                    </p>
                    <p>
                        <strong>Día 2:</strong> Después del desayuno, prepararás tu equipo para pasar una noche de campamento en la selva. El campamento está ubicado dentro de la Reserva Tanimboca. Al llegar, armarás el campamento y encenderás una fogata para cocinar y compartir. Tu guía nativo te enseñará plantas útiles para construcción y medicina, además de técnicas de tejido con fibras naturales.
                        Por la tarde podrás intentar pescar al estilo amazónico. En la noche, disfrutarás de la comida y de historias alrededor de la fogata antes de descansar en hamacas con toldillo.
                    </p>
                    <p>
                        <strong>Día 3:</strong> Regreso al restaurante de la reserva para desayunar y salida hacia el puerto de Leticia. Desde allí, tomarás una lancha por el río Amazonas rumbo a una impresionante Reserva Natural en Perú. Según la temporada, el acceso será mediante una caminata de 45 minutos (época seca) o un tranquilo paseo en canoa (época de lluvias).
                        Esta reserva es rica en biodiversidad: podrás observar monos, aves exóticas y otra fauna silvestre. Disfrutarás de comidas típicas recién preparadas y explorarás el bosque a pie o en canoa. Busca los victorias regias (flores de loto gigantes) y los imponentes árboles de ceiba.
                        Después del anochecer, participarás en una excursión guiada para observar caimanes, una aventura emocionante y segura. Noche en la reserva peruana.
                    </p>
                    <p>
                        <strong>Día 4:</strong> En la mañana, viaje en lancha privada 80 km río arriba hasta Puerto Nariño, con paradas en la Isla de los Monos y en Macedonia, comunidad indígena reconocida por sus tallas en madera y artesanías.
                        Al llegar a Puerto Nariño—un tranquilo pueblo sin carros a orillas del río Loretoyacu—almorzarás y visitarás la Fundación Natutama, iniciativa local que educa a los visitantes sobre la rica vida subacuática del Amazonas.
                        Por la tarde, regreso a Leticia para presenciar un espectáculo natural inolvidable: miles de loros regresando a dormir en los árboles de la plaza principal al atardecer. Noche en hotel en Leticia.
                    </p>
                    <p>
                        <strong>Día 5:</strong> Dependiendo del horario de tu vuelo, realizarás un city tour para conocer los principales atractivos de Leticia. El recorrido finaliza al mediodía, seguido de traslado privado al Aeropuerto Vásquez Cobo para tu salida.
                    </p>
                </div>

                {/* PLAN 3 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🛶 Amazon Discovery Tour (4 Días / 3 Noches)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Día 1:</strong> Llegada a Leticia, al aeropuerto Vásquez Cobo, y traslado terrestre de 11 km hasta la Reserva Natural Tanimboca. Tras una cálida bienvenida, registro y charla informativa sobre tu itinerario, te dirigirás a La Arenosa para disfrutar de un almuerzo tradicional amazónico con pescado fresco a la brasa.
                        Por la tarde, realizarás una corta caminata por la selva hasta llegar a las plataformas del dosel una aventura emocionante y segura entre las copas de los árboles. Ascenderás a la primera plataforma por cuerda, luego te deslizarás entre tres puntos de observación mediante tirolesas y cruzarás un puente colgante suspendido en lo alto del bosque. El descenso final se realiza en rápel.
                        Después de la experiencia en el dosel, tu guía te acompañará a tu alojamiento para la noche—ya sea en una casa en el árbol o en una cabaña al borde de la selva junto a un arroyo (según disponibilidad). Tras un breve descanso, saldrás en una caminata nocturna guiada para descubrir los sonidos y criaturas de la selva en la noche. La cena será una especial pizza al estilo amazónico u otras opciones de menú en nuestro restaurante, seguida de una noche tranquila rodeada por los sonidos de la selva.
                    </p>
                    <p>
                        <strong>Día 2:</strong> Después de un desayuno temprano, nos dirigiremos al puerto de Leticia para embarcar en un bote por el río Amazonas hacia una impresionante reserva natural peruana. Según la temporada, el acceso se realiza con una caminata de 45 minutos por la selva (temporada seca) o un tranquilo recorrido en canoa (temporada de lluvias).
                        Esta reserva es rica en biodiversidad—podrás observar monos, aves exóticas y otros animales silvestres. Disfrutarás de comidas locales recién preparadas y explorarás el bosque a pie o en canoa. Mantente atento a las flores de loto gigantes y a las imponentes ceibas. Al caer la noche, participarás en una excursión guiada para buscar caimanes—una aventura emocionante y segura. Noche en la reserva peruana.
                    </p>
                    <p>
                        <strong>Día 3:</strong> Por la mañana, viajarás en bote privado 80 km río arriba hasta Puerto Nariño, haciendo paradas en la Isla de los Monos y en Macedonia, comunidad indígena reconocida por su intrincada talla en madera y artesanías.
                        Al llegar a Puerto Nariño—un tranquilo pueblo libre de vehículos, a orillas del río Loretoyacu—almorzarás y luego visitarás la Fundación Natutama, una iniciativa local que educa a los visitantes sobre la rica vida acuática del Amazonas.
                        Por la tarde, regresarás a Leticia para presenciar un espectáculo natural inolvidable: miles de loros regresando a sus árboles para dormir en la plaza principal al atardecer. Pasarás la noche en un hotel en la ciudad.
                    </p>
                    <p>
                        <strong>Día 4:</strong> Dependiendo de la hora de tu vuelo, disfrutarás de un tour por la ciudad para conocer los principales atractivos de Leticia. El recorrido termina al mediodía, seguido de un traslado privado al aeropuerto Vásquez Cobo para tu partida.
                    </p>
                </div>

                {/* JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </main>
            <FooterES />
        </>
    );
}
