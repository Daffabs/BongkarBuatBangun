"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

const Project = () => {
  const images = [
    {
      src: "/images/mari5.png",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
      role: "Designer Chief",
      url: "#",
    },
    {
      src: "/images/mari5.png",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
      role: "Creative Director",
      url: "#",
    },
    {
      src: "/images/mari5.png",
      alt: "Portrait of Sarah Chen in studio setting",
      name: "Sarah Chen",
      role: "Art Director",
      url: "#",
    },
    {
      src: "/images/mari5.png",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
      role: "Designer Chief",
      url: "#",
    },
    {
      src: "/images/mari5.png",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
      role: "Creative Director",
      url: "#",
    },
    {
      src: "/images/mari5.png",
      alt: "Portrait of Sarah Chen in studio setting",
      name: "Sarah Chen",
      role: "Art Director",
      url: "#",
    },
  ];

  const css = `
  .mySwiper22 {
    width: 100%;
    height: 350px;
  }
  
  .mySwiper22 .swiper-slide {
    border-radius: 0px;
    width: 200px;
    height: 300px;
    opacity: 0.2;
    transition: all 0.3s ease-in-out;
  }

  .mySwiper22 .swiper-slide-active {
    opacity: 1;
  }
  
  .mySwiper22 .swiper-slide img {
    display: block;
    width: 100%;
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;

  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper, setSwiper] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-0 sm:py-0 md:py-0 lg:py-0">
      <style>{css}</style>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* KIRI - Slider */}
        <div className="relative flex justify-center max-md:order-2">
          {isLoaded && (
            <Swiper
              onSwiper={setSwiper}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              spaceBetween={40} // lebih kecil di mobile
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 80,
                modifier: 2.5,
              }}
              className="mySwiper22 max-w-[90%] md:max-w-full"
              modules={[EffectCoverflow, Autoplay]}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img className="mt-4 h-[250px] w-full md:h-full object-cover shadow-lg" src={image.src} alt={image.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Overlay card info */}
          {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:h-[450px] md:w-[230px] flex flex-col justify-end border p-4 bg-black/80 text-white max-md:w-[80%] rounded-lg">
            <h3 className="mb-1 text-lg md:text-2xl font-semibold tracking-tighter">{images[activeIndex].name}</h3>
            <p className="text-xs md:text-sm">{images[activeIndex].role}</p>
          </div> */}
        </div>

        {/* KANAN - Text */}
        <div className="text-center md:text-left max-md:order-1">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Kolaborasi Bersama <span className="text-logo-tosca">B</span>
            <span className="text-logo-biru">B</span>
            <span className="text-logo-gold">B</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed">Kolaborasi tanpa batas bersama kami membuka jalan bagi terciptanya inovasi dan karya berkelanjutan.</p>
        </div>
      </div>
    </section>
  );
};

export { Project };
