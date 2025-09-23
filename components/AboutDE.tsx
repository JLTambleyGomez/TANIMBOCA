"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutDE() {
    return (
        <section
            id="about"
            data-aos="fade-up"
            className="relative flex flex-col md:flex-row h-[100vh] justify-center items-center gap-6 p-8 rounded-lg shadow-lg overflow-hidden"
        >
            <div className="relative flex flex-col md:flex-row gap-6 w-full z-10">
                {/* Karussell */}
                <div data-aos="fade-right" className="w-full md:w-1/3">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        className="rounded-lg overflow-hidden"
                    >
                        <SwiperSlide>
                            <Image
                                src="/experience.gif"
                                alt="Tanimboca animiert"
                                width={600}
                                height={400}
                                unoptimized
                                className="w-full h-72 object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/cabin.jpg"
                                alt="Tanimboca - Bild 1"
                                width={600}
                                height={400}
                                className="w-full h-72 object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/trekking.jpg"
                                alt="Tanimboca - Bild 2"
                                width={600}
                                height={400}
                                className="w-full h-72 object-cover"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Text */}
                <div data-aos="fade-left" className="md:w-2/3">
                    <h2 className="text-3xl font-bold mb-2 text-white drop-shadow-md">
                        Über uns
                    </h2>
                    <p className="text-gray-100 mb-4 drop-shadow">
                        Tanimboca ist ein einzigartiges Reservat im kolumbianischen Amazonas, 
                        wo Sie unvergessliche Erlebnisse genießen werden...
                    </p>
                    <Link 
                        href="/de/uber-uns"
                        className="text-green-300 font-semibold hover:underline"
                    >
                        Mehr erfahren →
                    </Link>
                    <Image
                        data-aos="fade-up"
                        src="/informationDE.png"
                        alt="Tanimboca Information"
                        width={300}
                        height={200}
                        className="m-auto"
                    />
                </div>
            </div>
        </section>
    );
}
