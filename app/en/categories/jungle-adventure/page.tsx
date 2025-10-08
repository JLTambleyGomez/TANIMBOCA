import type { Metadata } from "next";
import Image from "next/image";
import NavbarEN from "@/components/NavbarEN";
import FooterEN from "@/components/FooterEN";
import { siteUrl } from "@/lib/seo";
import { makeAlternates } from "@/lib/hreflangRoutes";


export const metadata: Metadata = {
    title: "Jungle Adventure | Ecotourism in Tanimboca",
    description:
        "Live unique expeditions in the Amazon jungle with Tanimboca: trekking, kayaking, camping and wildlife spotting in Colombia and Peru. 6 to 8-day programs for true explorers.",
    openGraph: {
        title: "Jungle Adventure | Ecotourism in Tanimboca",
        description:
            "Explore the Amazon rainforest in depth: trekking, kayaking, camping, and indigenous culture. 6 to 8-day plans in the Tanimboca Nature Reserve, Leticia, Amazonas.",
            url: `${siteUrl}/en/categories/jungle-adventure`,
            locale: "en_US",
    },
    alternates: makeAlternates("categorias/aventura-selva-adentro", "en"),
    // alternates: {
    //         canonical: `${siteUrl}/en/categories/jungle-adventure`,
    //     languages: {
    //             es: `${siteUrl}/es/categorias/aventura-selva-adentro`,
    //             de: `${siteUrl}/de/kategorien/dschungel-abenteuer`,
    //             en: `${siteUrl}/en/categories/jungle-adventure`,
    //     },
    // },
};

export default function JungleAdventurePageEN() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How long are the Jungle Adventure plans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer three experiences: Extreme Amazon Expedition (8 days / 7 nights), Jungle & River – Kayak Adventure (6 days / 5 nights) and Amazon Immersion – Trekking in the Jungle (6 days / 5 nights).",
                },
            },
            {
                "@type": "Question",
                name: "Do I need previous experience in trekking or kayaking?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, the plans are designed for beginners with good physical condition. Our local expert guides provide safety equipment and teach basic jungle trekking and kayaking techniques.",
                },
            },
            {
                "@type": "Question",
                name: "Where do the expeditions take place?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most experiences take place in the Tanimboca Nature Reserve near Leticia (Colombia), with journeys along the Tacana River, excursions on the Amazon River, visits to natural reserves in Peru and tours in Puerto Nariño.",
                },
            },
            {
                "@type": "Question",
                name: "What type of accommodation is included?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depending on the plan, accommodation includes treehouses, cabins, bungalows, jungle hammocks with mosquito nets, and hotels in Leticia.",
                },
            },
            {
                "@type": "Question",
                name: "What kind of animals can be seen?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "During expeditions you may spot monkeys, exotic birds, caimans, giant lotus flowers, ceiba trees, and sometimes jaguar tracks in the deeper jungle.",
                },
            },
        ],
    };

    return (
        <>
            <NavbarEN />
            <main className="p-8 max-w-5xl mx-auto pt-40">
                <h1 className="text-3xl font-bold mb-6 text-green-200">
                    Jungle Adventure | Tanimboca Plans
                </h1>
                <p className="text-white mb-8">
                    Dare to live the <strong>Jungle Adventure</strong> at the{" "}
                    <strong>Tanimboca Nature Reserve</strong>. Three intense programs of{" "}
                    <em>trekking, kayaking, jungle camping and Amazon expeditions</em>.
                    Designed for explorers seeking a raw connection with nature.
                </p>

                <div className="w-100 h-80 rounded-lg overflow-hidden mb-12">
                    <Image
                        src="/trekking.jpg"
                        alt="Travelers exploring the Amazon jungle on expedition"
                        width={600}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🏕️ Extreme Amazon Expedition – Trekking & Kayak (8 Days / 7 Nights)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Day 1 - Arrival & Treetop Adventure: </strong>
                        Arrival at Vásquez Cobo Airport in Leticia, followed by an 11 km transfer to the Tanimboca Natural Reserve. After a warm welcome, check-in, and a briefing on your itinerary, you’ll head to La Arenosa for a traditional Amazonian lunch with freshly grilled fish.
                        In the afternoon, enjoy an exciting canopy adventure: climb by rope to the first platform, glide between three observation points via zip lines, cross a hanging bridge high above the forest floor, and finish with a rappel descent.
                        Your guide will then accompany you to your accommodation for the night—either a treehouse or a jungle-edge cabin (depending on availability). After a short rest, join a guided night walk to discover the sounds and creatures of the rainforest. Dinner will be a special Amazon-style pizza or other menu options at our restaurant. Overnight surrounded by the symphony of the jungle.
                    </p> <p>
                        <strong>Day 2 - Immersion in Primary Rainforest: </strong> - After breakfast, the expedition begins with a 6-hour trek through pristine rainforest. You’ll reach a small creek where we set up the first camp. The area is rich in bromeliads and orchids and is known as a hideout for jaguars, whose tracks are often found here.
                        At night, native guides will lead a walk along the creek to search for wildlife and try traditional fishing techniques.
                    </p>
                    <p>
                        <strong>Day 3 - Trek to the Clay Lick Stream: </strong>After breaking camp, continue deeper into the jungle, passing towering trees and searching for wildlife. In the afternoon, arrive at a mineral-rich stream where animals gather to eat clay and neutralize plant toxins from their diet. We’ll set up camp nearby and return at night for a chance to observe wildlife activity.
                    </p>
                    <p>
                        <strong>Day 4  - Trekking & First Kayak Stage: </strong>After breakfast, hike until reaching the Tacana River for lunch and a short break. From there, begin your kayak journey downstream. In the late afternoon, the guide will select the perfect spot for camping. After dinner, you can join the guide for an optional night walk.
                    </p>
                    <p>
                        <strong>Day 5 - Kayaking & Return to the Reserve: </strong>Continue kayaking along the river, stopping at scenic spots to rest and enjoy lunch. By late afternoon, you’ll reach the pick-up point and return to the reserve. Overnight stay in a comfortable bungalow.
                    </p>
                    <p>
                        <strong>Day 6 - Peruvian Natural Reserve Adventure: </strong> After an early breakfast, transfer to the harbor in Leticia and board a boat along the Amazon River to a stunning natural reserve in Peru. Depending on the season, access will be either a 45-minute jungle hike (dry season) or a peaceful canoe ride (rainy season).
                        This reserve offers incredible biodiversity—you may spot monkeys, exotic birds, and more. Explore the forest on foot or by canoe, enjoy freshly prepared local meals, and admire natural wonders such as giant lotus flowers (Victoria Regia) and towering Ceiba trees.
                        After nightfall, embark on a thrilling guided excursion in search of caimans. Overnight stay inside the Peruvian reserve.
                    </p>
                    <p>
                        <strong>Day 7 - Puerto Nariño & Parrot Spectacle: </strong>In the morning, travel by private boat 80 km upriver to Puerto Nariño, with stops at Monkey Island and Macedonia, an Indigenous community known for its wood carvings and handicrafts.
                        Upon arrival in Puerto Nariño—a peaceful, car-free village on the Loretoyacu River—you’ll enjoy lunch and visit the Natutama Foundation, which educates visitors about the rich underwater life of the Amazon.
                        In the afternoon, return to Leticia to witness an unforgettable natural spectacle: thousands of parrots flying back to their roosting trees in the main square at sunset. Overnight at a hotel in Leticia.
                    </p>


                    <p>
                        <strong>Day 8 - City Tour & Departure: </strong> Depending on your flight schedule, enjoy a guided city tour of Leticia’s highlights. The tour ends at noon, followed by a private transfer to Vásquez Cobo Airport for your departure.</p>


                </div>


                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🛶 Jungle & River – Kayak Adventure (6 Days / 5 Nights)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Day 1 - Arrival and Canopy Adventure: </strong>
                        Arrive in Leticia at Vásquez Cobo Airport, followed by an 11 km land transfer to the Tanimboca Natural Reserve. After a warm welcome, check-in, and a briefing on your itinerary, you’ll head to La Arenosa to enjoy a traditional Amazonian lunch featuring freshly grilled fish.
                        In the afternoon, take a short jungle walk to reach the canopy platforms—an exciting yet safe treetop adventure. You’ll climb to the first platform by rope, then glide between three observation points via zip lines and cross a hanging bridge suspended high in the forest canopy. The final descent is done by rappel.
                        After your canopy experience, your guide will accompany you to your accommodation for the night—either a treehouse or a jungle-edge cabin by a creek (depending on availability). Following a short rest, embark on a guided night walk to discover the rainforest’s nocturnal sounds and creatures. Dinner will be a special Amazonian-style pizza or other menu options served at our restaurant, followed by a peaceful night surrounded by the sounds of the jungle.
                    </p> <p>
                        <strong>Day 2: </strong> After finishing breakfast, you begin your expedition.
                        Following a one-hour walk through the jungle, we will reach the small Tacana River, where we’ll start paddling downstream in kayaks. Around noon, your guide will stop at a strategic spot for lunch. In the afternoon, the native guide will look for the ideal place to set up camp for the night. After dinner, you can join the guide for a night walk in search of exotic animals and enjoy some fishing.
                    </p>
                    <p>
                        <strong>Day 3: </strong>This day continues with our kayak journey. We will stop at a beautiful spot for lunch before paddling onward until we reach the pick-up point. From there, we will take you back to the reserve, where you will settle into a comfortable bungalow.
                    </p>
                    <p>
                        <strong>Day 4: </strong>After an early breakfast, head to the Leticia harbor and board a boat along the Amazon River to a stunning Peruvian Natural Reserve. Depending on the season, access is either a 45-minute jungle walk (dry season) or a peaceful canoe ride (rainy season).
                        This reserve is rich in biodiversity—you may spot monkeys, exotic birds, and other wildlife. Enjoy freshly prepared local meals and explore the forest on foot or by canoe. Keep an eye out for giant lotus flowers and the towering Ceiba trees.
                        After nightfall, join a guided excursion in search of caimans—a thrilling yet safe adventure. Overnight stay in the Peruvian reserve.
                    </p>
                    <p>
                        <strong>Day 5: </strong>In the morning, travel by private boat 80 km upriver to Puerto Nariño, stopping at Monkey Island and Macedonia, an Indigenous community renowned for its intricate wood carving and handicrafts.
                        Upon arrival in Puerto Nariño—a peaceful, car-free village on the Loretoyacu River—you’ll have lunch, then visit the Natutama Foundation, a local initiative that educates visitors about the rich underwater life of the Amazon.
                        In the afternoon, return to Leticia and witness an unforgettable natural spectacle: thousands of parrots returning to their roosting trees in the main square at sunset. The last night you spend in a hotel in Leticia.
                    </p>
                    <p>
                        <strong>Day 6: </strong>Depending on your flight schedule, enjoy a city tour to explore Leticia’s highlights. The tour ends at noon, followed by a private transfer to Vásquez Cobo Airport for your departure.
                    </p>





                </div>

                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🌿 Amazon Immersion – Trekking in the Jungle (6 Days / 5 Nights)
                </h2>
                    <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Day 1: </strong>
                        Arrive in Leticia at Vásquez Cobo Airport, followed by an 11 km land transfer to the Tanimboca Natural Reserve. After a warm welcome, check-in, and a briefing on your itinerary, you’ll head to La Arenosa to enjoy a traditional Amazonian lunch featuring freshly grilled fish.
In the afternoon, take a short jungle walk to reach the canopy platforms—an exciting yet safe treetop adventure. You’ll climb to the first platform by rope, then glide between three observation points via zip lines and cross a hanging bridge suspended high in the forest canopy. The final descent is done by rappel.
After your canopy experience, your guide will accompany you to your accommodation for the night—either a treehouse or a jungle-edge cabin by a creek (depending on availability). Following a short rest, embark on a guided night walk to discover the rainforest’s nocturnal sounds and creatures. Dinner will be a special Amazonian-style pizza or other menu options served at our restaurant, followed by a peaceful night surrounded by the sounds of the jungle.
 </p> <p>
                        <strong>Day 2: </strong> After breakfast, your jungle expedition truly begins. Over the next two days, you’ll venture deep into the rainforest. Today’s hike takes about four hours, leading you to a pristine creek where you’ll set up your first night’s camp and sleep in hammocks beneath the forest canopy.
In the afternoon, you’ll have time to explore the surrounding area. After nightfall, your indigenous guide will take you along the creek in search of exotic wildlife. You may also try your hand at traditional fishing under the stars.
 </p>
                    <p>
                        <strong>Day 3: </strong>This day takes you deeper into the jungle, where you’ll encounter massive, centuries-old trees. With a bit of luck, your guide will spot wildlife hidden among the dense foliage. Along the way, you’ll learn how the local people effortlessly find everything they need to survive—and even enjoy themselves—in this remarkable environment.
In the afternoon, you’ll set up camp once again. After dark, you can join your guide for a nighttime walk, if you wish, to experience the forest’s mysterious after-hours world.
  </p>
                    <p>
                        <strong>Day 4: </strong>After an early breakfast  you’ll begin the hike back to Tanimboca, from there head to the Leticia harbor and board a boat along the Amazon River to a stunning Peruvian Natural Reserve. Depending on the season, access is either a 45-minute jungle walk (dry season) or a peaceful canoe ride (rainy season).
This reserve is rich in biodiversity—you may spot monkeys, exotic birds, and other wildlife. Enjoy freshly prepared local meals and explore the forest on foot or by canoe. Keep an eye out for giant lotus flowers and the towering Ceiba trees.
After nightfall, join a guided excursion in search of caimans—a thrilling yet safe adventure. Overnight stay in the Peruvian reserve.  </p>
                    <p>
                        <strong>Day 5: </strong>In the morning, travel by private boat 80 km upriver to Puerto Nariño, stopping at Monkey Island and Macedonia, an Indigenous community renowned for its intricate wood carving and handicrafts.
Upon arrival in Puerto Nariño—a peaceful, car-free village on the Loretoyacu River—you’ll have lunch, then visit the Natutama Foundation, a local initiative that educates visitors about the rich underwater life of the Amazon.
In the afternoon, return to Leticia and witness an unforgettable natural spectacle: thousands of parrots returning to their roosting trees in the main park 
The night you spend in a hotel in Leticia.  </p>
                    <p>
                        <strong>Day 6: </strong>Depending on your flight schedule, enjoy a city tour to explore Leticia’s highlights. The tour ends at noon, followed by a private transfer to Vásquez Cobo Airport for your departure. </p>





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
