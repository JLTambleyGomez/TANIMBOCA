"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutES() {
    return (
        <section
            id="about"
            data-aos="fade-up"
            className="relative flex flex-col md:flex-row h-[100vh] justify-center items-center gap-6 p-8 rounded-lg shadow-lg overflow-hidden"
        >



            {/* Contenido principal */}
            <div className="relative flex flex-col md:flex-row gap-6 w-full z-10">
                {/* Carrusel */}
                <div data-aos="fade-right" className="w-full md:w-1/3">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        className="rounded-lg overflow-hidden"
                    >
                        {/* Slide con GIF */}
                        <SwiperSlide>
                            <Image
                                src="/experience.gif"
                                alt="Tanimboca animado"
                                width={600}
                                height={400}
                                unoptimized // ⚡ evita que Next optimice el gif
                                className="w-full h-72 object-cover"
                            />
                        </SwiperSlide>

                        {/* Slides con imágenes */}
                        <SwiperSlide>
                            <Image
                                src="/cabin.jpg"
                                alt="Tanimboca - Imagen 1"
                                width={600}
                                height={400}
                                className="w-full h-72 object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/trekking.jpg"
                                alt="Tanimboca - Imagen 2"
                                width={600}
                                height={400}
                                className="w-full h-72 object-cover"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Texto */}
                <div data-aos="fade-left" className="md:w-2/3">
                    <h2  className="text-3xl font-bold mb-2 text-white drop-shadow-md">
                        Sobre Nosotros
                    </h2>
                    <p  className="text-gray-100 mb-4 drop-shadow">
                        Tanimboca es una reserva única en el Amazonas colombiano donde
                        vivirás experiencias inolvidables...
                    </p>
                    <Link 
                        href="/es/sobre-nosotros"
                        className="text-green-300 font-semibold hover:underline"
                    >
                        Ver más →
                    </Link>
                       <Image data-aos="fade-up"
                src="/informationES.png"
                alt="Tanimboca información"
                width={300}
                height={200}
                className="m-auto"
            />  
                </div>
                  
            </div>
       
            
              </section>
    );
}
