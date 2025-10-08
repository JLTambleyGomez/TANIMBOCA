import type { Metadata } from "next";
import Image from "next/image";
import NavbarEN from "@/components/NavbarEN";
import FooterEN from "@/components/FooterEN";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";

export const metadata: Metadata = {
    title: "Discovering the Amazon | Ecotourism Plans in Tanimboca",
    description:
        "Explore the Colombian Amazon with our exclusive plans: Amazon Discovery, Adventure Camp, and Amazon Discovery Tour. Enjoy canopy, kayaking, indigenous culture, and nature at Tanimboca Natural Reserve.",
    openGraph: {
        title: "Discovering the Amazon | Unique Experiences in Tanimboca",
        description:
            "Experience the Amazon rainforest with authentic adventures: canopy, kayaking, hiking, indigenous culture, and more at Tanimboca Natural Reserve, Leticia, Amazonas.",
            url: `${siteUrl}/en/categories/discovering-the-amazon`,
        locale: "en_US",
    },
    alternates: makeAlternates("categorias/descubriendo-el-amazonas", "en"),
    // alternates: {
    //         canonical: `${siteUrl}/en/categories/discovering-the-amazon`,
    //     languages: {
    //         es: `${siteUrl}/es/categorias/descubriendo-el-amazonas`,
    //         de: `${siteUrl}/de/kategorien/amazonas-entdecken`,
    //         en: `${siteUrl}/en/categories/discovering-the-amazon`,
    //     },
    // },
};

export default function DiscoveringAmazonPageEN() {
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How many ecotourism plans does Tanimboca offer in the Amazon?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We currently offer three complete experiences: Amazon Discovery (5 days / 4 nights), Adventure Camp (5 days / 4 nights), and Amazon Discovery Tour (4 days / 3 nights). Each plan includes lodging, meals, guided activities, and local transfers.",
                },
            },
            {
                "@type": "Question",
                name: "What activities are included in the Amazon Discovery plan?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The plan includes canopy in the treetops, zip-lining, rappelling, guided day and night hikes, a visit to a chagra (Amazon garden), mambe workshop with indigenous communities, Amazon River navigation, wildlife watching (monkeys and birds), and excursions to Puerto Nariño, Macedonia, and the Natutama Foundation.",
                },
            },
            {
                "@type": "Question",
                name: "What makes the Adventure Camp different?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "This plan is designed for travelers seeking deeper contact with the rainforest. It includes one night of camping with a bonfire, traditional stories, Amazon-style fishing, and resting in hammocks with mosquito nets, plus canopy, hiking, Amazon River navigation, and visits to natural reserves in Peru and Puerto Nariño.",
                },
            },
            {
                "@type": "Question",
                name: "What does the Amazon Discovery Tour offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is a shorter plan (4 days / 3 nights), ideal for those with less time. It combines canopy, guided hikes, Amazon River navigation, a visit to a natural reserve in Peru, caiman watching, and exploration of Puerto Nariño and Leticia, including the natural spectacle of parrots at sunset.",
                },
            },
            {
                "@type": "Question",
                name: "Where do the tours take place?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The experiences take place mainly in Tanimboca Natural Reserve in Leticia (Colombia), with excursions to Puerto Nariño, indigenous communities such as Macedonia, natural reserves in Peru, and a city tour in Leticia.",
                },
            },
            {
                "@type": "Question",
                name: "What type of lodging is included in each plan?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depending on the plan and availability, you may stay in treehouses, cabins by the creek, jungle bungalows, hammocks with mosquito nets at the campsite, or hotels in Leticia.",
                },
            },
            {
                "@type": "Question",
                name: "Do I need prior experience to participate?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, all activities are designed for people without prior experience and are carried out with expert local guides. Canopy, hikes, and excursions include safety equipment and specialized support.",
                },
            },
            {
                "@type": "Question",
                name: "What type of food is provided during the tours?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The plans include full meals with typical Amazonian dishes like fresh fish, traditional meals in indigenous malocas, and international options at the reserve’s restaurant. Special diets can be accommodated upon request.",
                },
            },
        ],
    };

    return (
        <>
            <NavbarEN />
            <main className="p-8 max-w-5xl mx-auto pt-40">
                <h1 className="text-3xl font-bold mb-6 text-green-200">
                    Discovering the Amazon | Tanimboca Plans
                </h1>
                <p className="text-white mb-8">
                    Live a unique experience in the{" "}
                    <strong>Tanimboca Natural Reserve</strong> with our{" "}
                    <strong>three ecotourism plans</strong>. Immerse yourself in the
                    Amazon’s biodiversity with activities such as{" "}
                    <em>
                        canopy, kayaking, guided hikes, indigenous workshops, and wildlife
                        watching
                    </em>
                    . Each program is designed for you to enjoy the Colombian Amazon in an
                    authentic and sustainable way.
                </p>

                {/* Featured Image */}
                <div className="w-100 h-80 rounded-lg overflow-hidden mb-12">
                    <Image
                        src="/bushcraft-adventure.jpg"
                        alt="Tourists enjoying ecotourism in the Amazon"
                        width={600}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                {/* PLAN 1 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🌿 Amazon Discovery Tour (5 Days / 4 Nights)

                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Day 1:</strong> Arrive in Leticia at Vásquez Cobo Airport, followed by an 11 km land transfer to the Tanimboca Natural Reserve. After a warm welcome, check-in, and a briefing on your itinerary, you’ll head to La Arenosa to enjoy a traditional Amazonian lunch featuring freshly grilled fish.
                        In the afternoon, take a short jungle walk to reach the canopy platforms—an exciting yet safe treetop adventure. You’ll climb to the first platform by rope, then glide between three observation points via zip lines and cross a hanging bridge suspended high in the forest canopy. The final descent is done by rappel.
                        After your canopy experience, your guide will accompany you to your accommodation for the night—either a treehouse or a jungle-edge cabin by a creek (depending on availability). Following a short rest, embark on a guided night walk to discover the rainforest’s nocturnal sounds and creatures. Dinner will be a special Amazonian-style pizza or other menu options served at our restaurant, followed by a peaceful night surrounded by the sounds of the jungle.
                    </p>
                    <p>
                        <strong>Day 2:</strong> After breakfast, begin a guided walk through the jungle. Along the way, your guide will introduce you to medicinal plants, natural construction materials, vines used for basket weaving, and other native resources.
                        The walk concludes at Reserva Natural Selva, where lunch is served in a Maloca—a traditional communal house normally used by Indigenous communities. Later, visit a Chagra—a traditional Amazonian garden—where crops such as yuca, chili peppers, plantains, bananas, and coca are cultivated.
                        In the afternoon, participate in a hands-on Mambe preparation workshop, where you’ll process coca leaves and learn about their ancestral uses and cultural significance. Return to Tanimboca Reserve to relax by the natural creek before spending the night in a comfortable jungle bungalow.
                    </p>
                    <p>
                        <strong>Day 3:</strong> After an early breakfast, head to the Leticia harbor and board a boat along the Amazon River to a stunning Peruvian Natural Reserve. Depending on the season, access is either a 45-minute jungle walk (dry season) or a peaceful canoe ride (rainy season).
                        This reserve is rich in biodiversity—you may spot monkeys, exotic birds, and other wildlife. Enjoy freshly prepared local meals and explore the forest on foot or by canoe. Keep an eye out for giant lotus flowers and the towering Ceiba trees.
                        After nightfall, join a guided excursion in search of caimans—a thrilling yet safe adventure. Overnight stay in the Peruvian reserve.
                    </p>
                    <p>
                        <strong>Day 4:</strong> In the morning, travel by private boat 80 km upriver to Puerto Nariño, stopping at Monkey Island and Macedonia, an Indigenous community renowned for its intricate wood carving and handicrafts.
                        Upon arrival in Puerto Nariño—a peaceful, car-free village on the Loretoyacu River—you’ll have lunch, then visit the Natutama Foundation, a local initiative that educates visitors about the rich underwater life of the Amazon.
                        In the afternoon, return to Leticia and witness an unforgettable natural spectacle: thousands of parrots returning to their roosting trees in the main square at sunset. The night you spend in Leticia at a hotel.
                    </p>
                    <p>
                        <strong>Day 5:</strong> Depending on your flight schedule, enjoy a city tour to explore Leticia’s highlights. The tour ends at noon, followed by a private transfer to Vásquez Cobo Airport for your departure. </p>
                </div>

                {/* PLAN 2 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🔥 Adventure camp (5 Days / 4 Nights)

                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Day 1:</strong> Arrive in Leticia at Vásquez Cobo Airport, followed by an 11 km land transfer to the Tanimboca Natural Reserve. After a warm welcome, check-in, and a briefing on your itinerary, you’ll head to La Arenosa to enjoy a traditional Amazonian lunch featuring freshly grilled fish.
                        In the afternoon, take a short jungle walk to reach the canopy platforms—an exciting yet safe treetop adventure. You’ll climb to the first platform by rope, then glide between three observation points via zip lines and cross a hanging bridge suspended high in the forest canopy. The final descent is by rappel.
                        After your canopy experience, your guide will take you to your accommodation for the night—either a treehouse or a jungle-edge cabin by a creek (depending on availability). Following a short rest, embark on a guided night walk to discover the rainforest’s nocturnal sounds and creatures. Dinner will be a special Amazonian-style pizza or other options served at our restaurant. Overnight stay surrounded by the sounds of the jungle.  </p>
                    <p>
                        <strong>Day 2:</strong>After breakfast, prepare your gear for one night of camping in the jungle. The campsite is located within the Tanimboca Reserve. Upon arrival, you’ll set up camp and build a fireplace for cooking and gathering. Your native guide will introduce you to useful plants for construction and medicine and teach you some basket-weaving techniques.
                        In the afternoon, try your luck fishing Amazon-style. At night, enjoy food and stories around the campfire before resting in hammocks equipped with mosquito nets. </p>
                    <p>
                        <strong>Day 3:</strong> Return to the reserve’s restaurant for breakfast before heading to the Leticia harbor. From here, board a boat along the Amazon River to a stunning Peruvian Natural Reserve. Depending on the season, access is either a 45-minute jungle walk (dry season) or a peaceful canoe ride (rainy season).
                        This reserve is rich in biodiversity—you may encounter monkeys, exotic birds, and other wildlife. Enjoy freshly prepared local meals and explore the forest on foot or by canoe. Look out for giant lotus flowers and the majestic Ceiba trees.
                        After nightfall, join a guided excursion in search of caimans—a thrilling yet safe adventure. Overnight stay in the Peruvian reserve.  </p>
                    <p>
                        <strong>Day 4:</strong>In the morning, travel by private boat 80 km upriver to Puerto Nariño, stopping at Monkey Island and Macedonia, an Indigenous community renowned for its intricate wood carvings and handicrafts.
                        Upon arrival in Puerto Nariño—a peaceful, car-free village on the Loretoyacu River—you’ll have lunch, then visit the Natutama Foundation, a local initiative that educates visitors about the rich underwater life of the Amazon.
                        In the afternoon, return to Leticia and witness an unforgettable natural spectacle: thousands of parrots flocking to their roosting trees in the main square at sunset. Overnight stay in a hotel in Leticia. </p>
                    <p>
                        <strong>Day 5:</strong> Depending on your flight schedule, enjoy a city tour exploring Leticia’s highlights. The tour ends at noon, followed by a private transfer to Vásquez Cobo Airport for your departure. </p>
                </div>

                {/* PLAN 3 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🛶 Amazon Discovery Tour (4 Days / 3 Nights)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Day 1:</strong> Arrive in Leticia at Vásquez Cobo Airport, followed by an 11 km land transfer to the Tanimboca Natural Reserve. After a warm welcome, check-in, and a briefing on your itinerary, you’ll head to La Arenosa to enjoy a traditional Amazonian lunch featuring freshly grilled fish.
                        In the afternoon, take a short jungle walk to reach the canopy platforms—an exciting yet safe treetop adventure. You’ll climb to the first platform by rope, then glide between three observation points via zip lines and cross a hanging bridge suspended high in the forest canopy. The final descent is done by rappel.
                        After your canopy experience, your guide will accompany you to your accommodation for the night—either a treehouse or a jungle-edge cabin by a creek (depending on availability). Following a short rest, embark on a guided night walk to discover the rainforest’s nocturnal sounds and creatures. Dinner will be a special Amazonian-style pizza or other menu options served at our restaurant, followed by a peaceful night surrounded by the sounds of the jungle.  </p>
                    <p>
                        <strong>Day 2:</strong>After an early breakfast, head to the Leticia harbor and board a boat along the Amazon River to a stunning Peruvian Natural Reserve. Depending on the season, access is either a 45-minute jungle walk (dry season) or a peaceful canoe ride (rainy season).
                        This reserve is rich in biodiversity—you may spot monkeys, exotic birds, and other wildlife. Enjoy freshly prepared local meals and explore the forest on foot or by canoe. Keep an eye out for giant lotus flowers and the towering Ceiba trees.
                        After nightfall, join a guided excursion in search of caimans—a thrilling yet safe adventure. Overnight stay in the Peruvian reserve. </p>
                    <p>
                        <strong>Day 3:</strong> In the morning, travel by private boat 80 km upriver to Puerto Nariño, stopping at Monkey Island and Macedonia, an Indigenous community renowned for its intricate wood carving and handicrafts.
                        Upon arrival in Puerto Nariño—a peaceful, car-free village on the Loretoyacu River—you’ll have lunch, then visit the Natutama Foundation, a local initiative that educates visitors about the rich underwater life of the Amazon.
                        In the afternoon, return to Leticia and witness an unforgettable natural spectacle: thousands of parrots returning to their roosting trees in the main square at sunset. The night you spent in a hotel in town.  </p>
                    <p>
                        <strong>Day 4:</strong> Depending on your flight schedule, enjoy a city tour to explore Leticia’s highlights. The tour ends at noon, followed by a private transfer to Vásquez Cobo Airport for your departure. </p>
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </main>
            <FooterEN />
        </>
    );
}
