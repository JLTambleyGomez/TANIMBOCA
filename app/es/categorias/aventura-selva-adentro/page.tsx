import type { Metadata } from "next";
import Image from "next/image";
import NavbarES from "@/components/NavbarES";
import FooterES from "@/components/FooterES";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Aventura Selva Adentro | Ecoturismo en Tanimboca",
    description:
        "Vive expediciones únicas en la selva amazónica con Tanimboca: trekking, kayak, campamentos y avistamiento de fauna en Colombia y Perú. Programas de 6 a 8 días para exploradores aventureros.",
    openGraph: {
        title: "Aventura Selva Adentro | Ecoturismo en Tanimboca",
        description:
            "Explora la selva amazónica en profundidad: caminatas, kayak, noches en campamento y cultura indígena. Planes de 6 a 8 días en la Reserva Natural Tanimboca, Leticia, Amazonas.",
            url: `${siteUrl}/es/categorias/aventura-selva-adentro`,
        locale: "es_CO",
    },
    alternates: {
            canonical: `${siteUrl}/es/categorias/aventura-selva-adentro`,
        languages: {
                en: `${siteUrl}/en/categories/jungle-adventure`,
                de: `${siteUrl}/de/kategorien/dschungel-abenteuer`,
                es: `${siteUrl}/es/categorias/aventura-selva-adentro`
        },
    },
};

export default function AventuraSelvaAdentroPageES() {
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "¿Qué duración tienen los planes de Aventura Selva Adentro?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ofrecemos tres experiencias: Expedición Amazonas Extrema (8 días / 7 noches), Selva y Río – Aventura en Kayak (6 días / 5 noches) e Inmersión Amazónica – Trekking en la Selva (6 días / 5 noches).",
                },
            },
            {
                "@type": "Question",
                name: "¿Es necesario tener experiencia previa en trekking o kayak?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, los planes están diseñados para principiantes con buena condición física. Contamos con guías expertos locales que enseñan técnicas básicas de caminata en selva y navegación en kayak.",
                },
            },
            {
                "@type": "Question",
                name: "¿Dónde se realizan las expediciones?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las experiencias se desarrollan principalmente en la Reserva Natural Tanimboca en Leticia (Colombia), con travesías por el río Tacana, excursiones al río Amazonas, visitas a reservas naturales en Perú y recorridos en Puerto Nariño.",
                },
            },
            {
                "@type": "Question",
                name: "¿Qué tipo de alojamiento se incluye?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dependiendo del plan, el alojamiento varía entre casas en los árboles, cabañas, bungalows, campamentos en hamacas con toldillo en medio de la selva y hoteles en Leticia.",
                },
            },
            {
                "@type": "Question",
                name: "¿Qué animales se pueden observar?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Durante las expediciones es común observar monos, aves exóticas, caimanes, victorias regias, árboles de ceiba y, con suerte, rastros de jaguares en zonas profundas de la selva.",
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
                    Aventura Selva Adentro | Planes Tanimboca
                </h1>
                <p className="text-white mb-8">
                    Atrévete a vivir la <strong>Aventura Selva Adentro</strong> en la{" "}
                    <strong>Reserva Natural Tanimboca</strong>. Tres programas intensos de{" "}
                    <em>trekking, kayak, campamentos en selva virgen y expediciones por
                        el Amazonas</em>. Diseñados para aventureros que buscan explorar la
                    naturaleza en su máxima expresión.
                </p>

                {/* Imagen destacada */}
                <div className="w-100 h-80 rounded-lg overflow-hidden mb-12">
                    <Image
                        src="/trekking.jpg"
                        alt="Turistas explorando la selva amazónica en expedición"
                        width={600}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                {/* PLAN 1 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🏕️ Expedición Amazonas Extrema – Trekking & Kayak (8 Días / 7 Noches)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Día 1 - Llegada y Aventura en las Copas de los Árboles:</strong>
                        Arribo a Leticia en el aeropuerto Vásquez Cobo y traslado terrestre de 11 km hasta la Reserva Natural Tanimboca. Tras una cálida bienvenida, check-in y breve introducción al itinerario, nos dirigiremos a La Arenosa para disfrutar de un almuerzo tradicional amazónico con pescado fresco a la brasa.
                        Por la tarde, iniciaremos una corta caminata en la selva hasta llegar a las plataformas de dosel, donde vivirás una experiencia única entre las copas de los árboles: ascenso con cuerda a la primera plataforma, recorrido por tres puntos de observación conectados por tirolinas, cruce de un puente colgante y descenso final en rappel.
                        Después de la actividad, tu guía te acompañará a tu alojamiento para la noche—una cabaña en el bosque o una casa en el árbol (según disponibilidad). Tras un breve descanso, realizaremos una caminata nocturna para descubrir los sonidos y criaturas de la selva bajo la luz de la luna. La cena será una pizza amazónica especial o menú alternativo en nuestro restaurante. Noche rodeada por los sonidos de la selva. </p>
                    <p>
                        <strong>Día 2 - Inmersión en la Selva Virgen:</strong> Después del desayuno, comienza la expedición con una caminata de unas 6 horas por selva primaria. Llegaremos a un arroyo donde montaremos el primer campamento. La zona, llena de bromelias y orquídeas, es hábitat de jaguares, cuyos rastros son frecuentes.
                        Por la noche, los guías nativos nos llevarán a caminar por el arroyo para buscar animales y practicar técnicas tradicionales de pesca. </p>
                    <p>
                        <strong>Día 3 - Caminata hacia el Manantial de Arcilla
                            :</strong>Al amanecer, desmontamos campamento y seguimos adentrándonos en la selva, rodeados de árboles gigantes y vida silvestre. Por la tarde, llegaremos a un lugar donde emerge un arroyo rico en minerales. Muchos animales visitan este sitio para consumir arcilla y neutralizar toxinas de su dieta. Acamparemos cerca y, por la noche, volveremos al arroyo para intentar avistar fauna. </p>
                    <p>
                        <strong>Día 4  - Trekking y Primer Tramo en Kayak:</strong> Tras el desayuno, continuaremos la caminata hasta llegar al río Tacana, donde almorzaremos y descansaremos un poco. Luego, iniciaremos la navegación en kayak río abajo. Al atardecer, el guía elegirá el mejor lugar para instalar el campamento. Después de la cena, podrás acompañarlo en una caminata nocturna opcional. </p>
                    <p>
                        <strong>Día 5 - Kayak y Regreso a la Reserva:</strong> Seguiremos remando por el río, con pausas para descansar y almorzar en un paraje natural. Al final del recorrido llegaremos al punto de recogida y regresaremos a la reserva, donde pasaremos la noche en un cómodo bungalow. </p>

                    <p>
                        <strong>Día 6 - Aventura en Reserva Natural del Perú:</strong> Muy temprano viajaremos al puerto de Leticia para abordar un bote por el río Amazonas hasta una impresionante reserva natural en territorio peruano. Según la temporada, el acceso será caminando (45 minutos en época seca) o en canoa (época de lluvias).
                        Este lugar está lleno de biodiversidad: monos, aves exóticas y más. Podrás disfrutar de comidas típicas recién preparadas, caminatas y recorridos en canoa. Entre sus atractivos destacan las victorias regias (flor de loto gigante) y los imponentes árboles de Ceiba.
                        Al caer la noche, viviremos una emocionante excursión para observar caimanes. Noche en la reserva peruana.
                    </p>
                    <p>
                        <strong>Día 7 - Puerto Nariño y Espectáculo de Loras:</strong> En la mañana, traslado en bote privado río arriba (80 km) hasta Puerto Nariño, con paradas en Isla de los Monos y en la comunidad indígena Macedonia, famosa por sus tallas en madera y artesanías.
                        En Puerto Nariño, un pueblo tranquilo y sin autos a orillas del río Loretoyacu, almorzaremos y visitaremos la Fundación Natutama, que enseña sobre la vida subacuática del Amazonas.
                        Por la tarde, regreso a Leticia para presenciar un espectáculo natural inolvidable: miles de loros regresando a dormir en los árboles de la plaza principal al atardecer. Noche en un hotel en Leticia.</p>


                    <p>
                        <strong>Día 8 - Tour por Leticia y Despedida:</strong> Según el horario de tu vuelo, realizaremos un city tour por los puntos más emblemáticos de Leticia. El recorrido finaliza al mediodía con traslado privado al aeropuerto Vásquez Cobo para tu salida.</p>


                </div>

                {/* PLAN 2 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🛶 Selva y Río – Aventura en Kayak (6 Días / 5 Noches)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Día 1 - Llegada y Aventura en el Dosel:</strong> Llegada a Leticia al aeropuerto Vásquez Cobo, seguida de un traslado terrestre de 11 km hasta la Reserva Natural Tanimboca. Tras una cálida bienvenida, check-in y una breve introducción al itinerario, nos dirigiremos a La Arenosa para disfrutar de un almuerzo tradicional amazónico con pescado fresco a la brasa. Por la tarde, realizaremos una corta caminata por la selva hasta llegar a las plataformas en el dosel: una aventura emocionante pero segura entre las copas de los árboles. Subiremos a la primera plataforma mediante cuerdas, luego deslizaremos entre tres puntos de observación a través de tirolesas y cruzaremos un puente colgante suspendido en lo alto del bosque. El descenso final será en rápel. Después de la experiencia en el dosel, el guía lo acompañará a su alojamiento para pasar la noche—ya sea en una casa en el árbol o en una cabaña al borde de un arroyo (según disponibilidad). Tras un breve descanso, saldremos en una caminata nocturna guiada para descubrir los sonidos y criaturas de la selva durante la noche. La cena será una especial pizza al estilo amazónico u otras opciones de menú en nuestro restaurante, seguida de una tranquila noche rodeado de los sonidos de la selva.
                    </p>
                    <p>
                        <strong>Día 2:</strong> Después del desayuno, iniciaremos la expedición. Tras una caminata de una hora por la selva, llegaremos al pequeño río Tacana, donde comenzaremos a remar río abajo en kayak. Alrededor del medio dia el guía se detendrá en un lugar estratégico para el almuerzo. Por la tarde, el guía nativo buscará el sitio ideal para instalar el campamento de la noche. Después de la cena, podrá unirse al guía en una caminata nocturna en busca de animales exóticos y disfrutar de un poco de pesca.
                    </p>
                    <p>
                        <strong>Día 3:</strong> Este día continuaremos nuestra travesía en kayak. Nos detendremos en un hermoso lugar para almorzar antes de continuar el recorrido hasta llegar al punto de recogida. Desde allí regresaremos a la reserva, donde se hospedará en un cómodo bungalow.
                    </p>
                    <p>
                        <strong>Día 4:</strong> Después de un desayuno temprano, saldremos hacia el puerto de Leticia y abordaremos una lancha por el río Amazonas con destino a una impresionante reserva natural en Perú. Dependiendo de la temporada, el acceso será mediante una caminata de 45 minutos por la selva (época seca) o un tranquilo recorrido en canoa (época de lluvias). Esta reserva está llena de biodiversidad: podrá observar monos, aves exóticas y otra fauna silvestre. Disfrutará de comidas locales recién preparadas y explorará el bosque a pie o en canoa. Esté atento a las victorias regias (nenúfares gigantes) y a los imponentes árboles de ceiba. Al anochecer, participará en una excursión guiada en busca de caimanes—una experiencia emocionante pero segura. Noche en la reserva peruana.</p>
                    <p>
                        <strong>Día 5:</strong>Por la mañana, viajaremos en lancha privada 80 km río arriba hasta Puerto Nariño, con paradas en la Isla de los Monos y en Macedonia, una comunidad indígena reconocida por sus tallas en madera y artesanías. Al llegar a Puerto Nariño—un tranquilo pueblo sin autos a orillas del río Loretoyacu—almorzaremos y luego visitaremos la Fundación Natutama, una iniciativa local que educa a los visitantes sobre la rica vida subacuática del Amazonas. Por la tarde, regresaremos a Leticia y presenciaremos un espectáculo natural inolvidable: miles de loros regresando a dormir en los árboles de la plaza principal al atardecer. La última noche la pasará en un hotel en Leticia.
                    </p>
                    <p>
                        <strong>Día 6:</strong>Dependiendo del horario de su vuelo, disfrutará de un city tour para explorar los principales atractivos de Leticia. El recorrido finaliza al medio día seguido de un traslado privado al aeropuerto Vásquez Cobo para su salida.   </p>

                </div>

                {/* PLAN 3 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🌿 Inmersión Amazónica – Trekking en la Selva (6 Días / 5 Noches)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Día 1:</strong> Llegada a Leticia al aeropuerto Vásquez Cobo, seguida de un traslado terrestre de 11 km hasta la Reserva Natural Tanimboca. Después de una cálida bienvenida, registro y una charla informativa sobre tu itinerario, te dirigirás a La Arenosa para disfrutar de un almuerzo tradicional amazónico con pescado fresco a la parrilla. Por la tarde, harás una breve caminata por la selva para llegar a las plataformas en el dosel: una aventura emocionante pero segura entre las copas de los árboles. Subirás a la primera plataforma por cuerda, luego te deslizarás entre tres puntos de observación a través de tirolesas y cruzarás un puente colgante suspendido en lo alto del bosque. El descenso final se hace en rápel. Después de esta experiencia, tu guía te acompañará a tu alojamiento para la noche: una casa en el árbol o una cabaña en el borde de la selva junto a un arroyo (según disponibilidad). Tras un breve descanso, participarás en una caminata nocturna guiada para descubrir los sonidos y criaturas nocturnas de la selva. La cena será una especial pizza al estilo amazónico u otras opciones de menú en nuestro restaurante, seguida de una noche tranquila rodeada por los sonidos de la jungla.
                    </p>
                    <p>
                        <strong>Día 2:</strong> Después del desayuno, tu expedición por la selva comienza realmente. Durante los próximos dos días, te adentrarás profundamente en la selva. La caminata de hoy dura unas cuatro horas y te llevará a un arroyo virgen donde montarás el primer campamento y dormirás en hamacas bajo el dosel del bosque. Por la tarde, tendrás tiempo para explorar los alrededores. Al caer la noche, tu guía indígena te llevará por el arroyo en busca de fauna exótica. También podrás intentar pescar de forma tradicional bajo las estrellas.
                    </p>
                    <p>
                        <strong>Día 3:</strong>Este día te llevará más adentro de la selva, donde encontrarás árboles gigantes y centenarios. Con un poco de suerte, tu guía avistará fauna escondida entre el denso follaje. A lo largo del recorrido, aprenderás cómo las comunidades locales encuentran fácilmente todo lo que necesitan para sobrevivir—y hasta disfrutar—en este entorno extraordinario. Por la tarde, montarás nuevamente el campamento. Después de oscurecer, si lo deseas, podrás unirte a tu guía en una caminata nocturna para experimentar el misterioso mundo de la selva después de anochecer.
                    </p>
                    <p>
                        <strong>Día 4:</strong>Después de un desayuno temprano, comenzarás la caminata de regreso a Tanimboca; desde allí te dirigirás al puerto de Leticia y abordarás una lancha por el río Amazonas hacia una impresionante reserva natural peruana. Dependiendo de la temporada, el acceso será por una caminata de 45 minutos por la selva (temporada seca) o un tranquilo paseo en canoa (temporada de lluvias). Esta reserva es rica en biodiversidad—podrás observar monos, aves exóticas y otra fauna. Disfrutarás de comidas locales recién preparadas y explorarás la selva a pie o en canoa. Mantente atento a las victorias regias (flores de loto gigantes) y a las imponentes ceibas. Al anochecer, participarás en una excursión guiada en busca de caimanes—una aventura emocionante pero segura. Noche en la reserva peruana.
                    </p>
                    <p>
                        <strong>Día 5:</strong>Por la mañana, viajarás en lancha privada 80 km río arriba hasta Puerto Nariño, haciendo paradas en Isla de los Monos y Macedonia, una comunidad indígena reconocida por sus tallas en madera y artesanías. Al llegar a Puerto Nariño—un apacible pueblo libre de vehículos sobre el río Loretoyacu—almorzarás y luego visitarás la Fundación Natutama, una iniciativa local que educa a los visitantes sobre la rica vida submarina del Amazonas. Por la tarde, regresarás a Leticia para presenciar un espectáculo natural inolvidable: miles de loros regresando a dormir a los árboles del parque principal. La noche la pasarás en un hotel en Leticia.
                    </p>
                    <p>
                        <strong>Día 6:</strong> Dependiendo del horario de tu vuelo, disfrutarás de un recorrido por la ciudad para explorar los lugares más destacados de Leticia. El tour finaliza al medio día  seguido de un traslado privado al aeropuerto Vásquez Cobo para tu salida.</p>
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
