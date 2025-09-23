import type { Metadata } from "next";
import Image from "next/image";
import NavbarEN from "@/components/NavbarEN";
import FooterEN from "@/components/FooterEN";

export const metadata: Metadata = {
    title: "Bushcraft & Survival | Tanimboca Reserve",
    description:
        "Learn Amazon bushcraft and survival skills at Tanimboca Reserve. From family-friendly adventures to deep jungle expeditions: fire-making, fishing, navigation and more.",
    openGraph: {
        title: "Bushcraft & Survival | Amazon Adventures",
        description:
            "Experience authentic Amazon survival: camping, bushcraft, fishing, fire skills and expeditions in Tanimboca Natural Reserve.",
        url: "/en/categories/bushcraft-survival",
        locale: "en_US",
    },
    alternates: {
        canonical: "/en/categories/bushcraft-survival",
        languages: {
            es: "/es/categories/bushcraft-supervivencia",
            de: "/de/kategorien/bushcraft",
        },
    },
};

export default function BushcraftPageEN() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Do I need prior survival experience?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The Family or Friends Bushcraft plan is designed for beginners, while the Amazon Expedition is aimed at adventurers with good physical condition seeking advanced survival training.",
                },
            },
            {
                "@type": "Question",
                name: "Where are the camps set up?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "All camps are located within Tanimboca Natural Reserve, just 11 km from Leticia, in safe yet truly immersive Amazon jungle areas.",
                },
            },
            {
                "@type": "Question",
                name: "What bushcraft skills are taught?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use of machete and knife, making fishing tools, fire-making, open-fire cooking, orientation, navigation, building shelters and foraging.",
                },
            },
            {
                "@type": "Question",
                name: "Are cultural activities included?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Plans include boat trips on the Amazon River, visits to reserves in Peru, dolphin watching, and city tours in Leticia and Tabatinga.",
                },
            },
            {
                "@type": "Question",
                name: "What type of accommodation is included?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Treehouses, jungle cabins, hammock camps, and hotels in Leticia depending on the plan and itinerary.",
                },
            },
        ],
    };

    return (
        <>
            <NavbarEN />
            <main className="p-8 max-w-5xl mx-auto pt-40">
                <h1 className="text-3xl font-bold mb-6 text-green-200">
                    Bushcraft & Survival in the Amazon
                </h1>

                <p className="text-white mb-8">
                    <strong>Tanimboca Reserve</strong> is located just 11 km from Leticia,
                    spanning 30 hectares of protected jungle with rich wildlife and a
                    pristine stream ideal for artisanal fishing. Thanks to its strategic
                    location, it combines <em>authenticity, safety and comfort</em>,
                    making it the perfect place to practice survival without sacrificing
                    wellbeing. We offer bushcraft adventures for all levels: from families
                    seeking a first jungle contact to seasoned explorers perfecting their
                    skills.
                </p>

                <div className="w-full h-80 rounded-lg overflow-hidden mb-12">
                    <Image
                        src="/bushcraft-adventure.jpg"
                        alt="Tourists practicing bushcraft and survival in the Amazon jungle"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                {/* Plan 1 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🔥 Plan 1: Family or Friends Bushcraft (6 Days / 5 Nights)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        A <strong>beginner-friendly adventure</strong> designed for families
                        and groups of friends. Includes canopy, night walks, jungle camping,
                        fishing, and basic survival techniques.
                    </p>

                </div>

                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Day 1:</strong>
                        Arrival in Leticia and transfer to the Tanimboca Nature Reserve. Depending on your arrival time, you will be welcomed with a traditional Amazonian lunch, followed in the afternoon by a canopy tour among the treetops via steel cables and a hanging bridge. That night, you will stay in treehouses, ending the first day with a night hike to discover the nocturnal wildlife of the Amazon rainforest.

                    </p>
                    <p>
                        <strong>Day 2:</strong>
                        After breakfast, we prepare our gear to camp for the next two nights in the jungle.  The campsite is locatedinside the Tanimboca Reserve, once at the site, you will begin building the camp. The rest of the day will be dedicated to activities such as machete and knife use instruction, making fishing tools, fire-making, and cooking over an open flame. In the evening, you will go fishing in the stream and share stories around the campfire
                    </p>
                    <p>
                        <strong>Day 3:</strong> This day focuses on survival techniques: setting traps for small mammals and fish, navigation, different methods of making fire, and finding food in the wild. In the evening, you will try traditional fishing and finish the day with a barbecue over the fire, accompanied by jungle stories.
                    </p>
                    <p>
                        <strong>Day 4:</strong>  After breakfast, we take you to the port of Leticia, where you will board a boat on the mighty Amazon River and cross into neighboring Peru to a nature reserve located on a beautiful lake. Here, you may spot many birds, fish for piranhas, see the giant Victoria Regia water lilies, and at night search for caimans on the lake
                    </p>
                    <p>
                        <strong>Day 5:</strong>In the morning, a boat will pick you up for a trip along the Amazon River in search of pink river dolphins. You will also visit some points of interest along the way. Lunch will be served on the river in a floating restaurant. In the afternoon, you can witness the spectacular arrival of thousands of parrots at Santander Park. You will spend the night in a hotel in Leticia. Evening at leisure.
                    </p>
                    <p>
                        <strong>Day 6:</strong>In the morning, we take you on a city tour of Tabatinga, the neighboring Brazilian town, as well as Leticia. Transfer to the airport. End of the Amazon
                    </p>
                </div>

                {/* Plan 2 */}
                <h2 className="text-2xl font-semibold mb-4 text-green-300">
                    🌿 Plan 2: Amazon Expedition (11 Days / 10 Nights)
                </h2>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        Jungle Bushcraft and Survival is all about learning to survive by adapting to nature—whether for the thrill of adventure or in real emergency situations.
                        Your journey begins with an extended trek deep into the rainforest, where we establish a basecamp. The site is carefully chosen near a creek, the perfect place to set up hammocks equipped with mosquito nets and tarps. From this base, over the following days, you will gain skills through direct, hands-on experience.
                        Our native guides, from diverse ethnic groups, will teach you how to build simple yet highly effective shelters, practice traditional fishing techniques in creeks and rivers, set traps for fish, mammals, and birds, navigate using the sun, and craft tools for fishing and hunting—along with many other skills that naturally emerge along the way.

                    </p>

                </div>
                <div className="text-white space-y-4 mb-10">
                    <p>
                        <strong>Day 1 - Arrival and Canopy Adventure:</strong>
                        Touch down in Leticia at Vásquez Cobo Airport, where your adventure begins. A short 11 km drive takes you to the Tanimboca Natural Reserve, your gateway to the Amazon. After a warm welcome, check-in, and orientation, we head to La Arenosa to enjoy a traditional Amazonian lunch of freshly grilled fish.
                        In the afternoon, step right into the treetops with an exhilarating canopy experience. Climb by rope to the first platform, then soar between three observation points on zip lines, and cross a hanging bridge suspended high above the forest floor. The final descent is a thrilling rappel back to solid ground.
                        Your accommodation tonight will be truly unique: a treehouse perched in the jungle canopy or a rustic cabin by a creek (subject to availability). After a short rest, join your guide for a night walk, where the rainforest reveals its hidden nocturnal life. Dinner is served back at the reserve—a special Amazon-style pizza or other local dishes—before you drift off to sleep to the symphony of the jungle.

                    </p>
                    <p>
                        <strong>Day 2 - Preparing for the Expedition</strong>
                        Fuel up with breakfast, then head into Leticia for any last-minute gear or supplies. We’ll enjoy lunch at a local restaurant before returning to Tanimboca.
                        In the afternoon, we gather for a hands-on expedition briefing. You’ll learn essential jungle skills, including a basic introduction to machete use and safety. Afterwards, you’ll begin sorting and preparing the gear for the days ahead. The excitement builds—tomorrow, the real expedition begins.
                    </p>
                    <p>
                        <strong>Day 3 - Into the Jungle:</strong>
                        After breakfast, we set out on foot into the heart of the Amazon. A couple of hours of trekking brings us to a pristine creek, where we establish our base camp.
                        For the next seven days, this camp becomes much more than shelter—it is your home in the wild and your open-air classroom. Here, you’ll live immersed in the rainforest, learning its rhythms, discovering its secrets, and building a bond with this extraordinary environment. By the time we leave, you’ll feel a deep connection to the place—and you’ll miss it the moment we turn back toward civilization.
                    </p>
                    <p>
                        <strong>Day 9 - Back to Civilization:</strong>
                        We take down camp and begin the trek back to Tanimboca Reserve. After a hearty lunch, we’ll head into town for a well-deserved cold drink or ice cream and some time to browse local handicrafts.
                        In the late afternoon, get ready for one of the Amazon’s most unforgettable spectacles: thousands of parrots swirling back to their roosts in Leticia’s main square at sunset. It’s the perfect reminder of the jungle’s wild beauty before returning to Tanimboca for the night.
                    </p>
                    <p>
                        <strong>Day 10 - Amazon River Exploration:</strong>Today we trade boots for boats and explore the mighty Amazon River. We’ll visit Monkey Island, then set out in search of the elusive pink river dolphins.
                        Lunch is served at a floating restaurant on the river—an experience in itself. In the afternoon, we return to Tanimboca and close the expedition with a festive Amazonian barbecue and caipirinhas, sharing stories under the stars.
                    </p>
                    <p>
                        <strong>Day 11 - Farewell:</strong>Depending on your flight schedule, we’ll transfer you to the airport and assist with check-in.
                        End of Tour – but the Amazon will stay with you forever.
                    </p>
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
