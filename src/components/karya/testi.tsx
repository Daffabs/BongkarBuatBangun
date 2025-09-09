"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Jadilan Yang Pertama",
    image: "/images/you.png",
    feedback:
      "Mari menjadi yang pertama bersama BBB, dan jadilah bagian dari perjalanan BBB dalam menghadirkan karya, inovasi, serta solusi terbaik. Bersama BBB melangkah lebih jauh, membangun mimpi, dan mewujudkan masa depan yang penuh peluang. Karena setiap langkah kecil yang BBB jalani bersama, akan menjadi awal dari sebuah perjalanan besar menuju kesuksesan.",
    link: "#",
    personName: "Jadilan Yang Pertama",
    position: "CEO",
    company: "SpaceX",
  },
  {
    id: 2,
    name: "Jadilan Yang Pertama",
    image: "/images/you.png",
    feedback:
      "Mari menjadi yang pertama bersama BBB, dan jadilah bagian dari perjalanan BBB dalam menghadirkan karya, inovasi, serta solusi terbaik. Bersama BBB melangkah lebih jauh, membangun mimpi, dan mewujudkan masa depan yang penuh peluang. Karena setiap langkah kecil yang BBB jalani bersama, akan menjadi awal dari sebuah perjalanan besar menuju kesuksesan.",
    link: "#",
    personName: "Jadilan Yang Pertama",
    position: "CEO",
    company: "Meta",
  },
  {
    id: 3,
    name: "Jadilan Yang Pertama",
    image: "/images/you.png",
    feedback:
      "Mari menjadi yang pertama bersama BBB, dan jadilah bagian dari perjalanan BBB dalam menghadirkan karya, inovasi, serta solusi terbaik. Bersama BBB melangkah lebih jauh, membangun mimpi, dan mewujudkan masa depan yang penuh peluang. Karena setiap langkah kecil yang BBB jalani bersama, akan menjadi awal dari sebuah perjalanan besar menuju kesuksesan.",
    link: "#",
    personName: "Jadilan Yang Pertama",
    position: "CEO",
    company: "Google",
  },
];

const Testimonials = () => {
  useEffect(() => {
    // Split teks di <q>
    const split = new SplitType("#testi", {
      types: "chars",
      charClass: "split-chars", // kasih class khusus biar bisa override
    });

    gsap.fromTo(
      split.chars,
      { color: "#2B2A2A", opacity: 0.2 }, // awalnya gelap
      {
        color: "#FFF", // jadi terang
        opacity: 1,
        stagger: 0.05, // jeda antar huruf
        scrollTrigger: {
          trigger: "#testi",
          start: "top 80%",
          end: "top 20%",
          scrub: true, // kalau scroll balik, huruf gelap lagi
        },
      }
    );

    return () => {
      split.revert();
    };
  }, []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({
      delay: 4000, // ganti sesuai kecepatan (ms)
      stopOnInteraction: false, // tetap jalan walau user geser
    }),
  ]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section data-aos="fade-up" className="text-white  px-6 md:px-16  pb-14 py-12 sm:py-14 md:py-14 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
        {/* Left Side */}
        <div>
          <h2 id="testi" className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
            Apa Kata <br /> Kawan <span className="text-logo-tosca">B</span>
            <span className="text-logo-biru">B</span>
            <span className="text-logo-gold">B</span>
          </h2>
          <p className="text-gray-400 mb-6">Lebih dari sekadar pelaksana, kami hadir sebagai kawan kreatif Anda. Saksikan bagaimana para kawan merasakan kolaborasi bersama kami.</p>
          <div className="flex items-center gap-2">
            <span className="text-red-500">4.9/5.0 ★★★★★</span>
          </div>
        </div>

        {/* Right Side Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, index) => (
              <div key={t.id} className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_70%] px-2 sm:px-4">
                <Card
                  className={cn(
                    // ukuran kartu adaptif
                    "w-full sm:w-[400px] md:w-[450px] h-auto md:h-[500px] bg-neutral-900 text-white rounded-2xl shadow-lg transition-all duration-500",
                    index === selectedIndex ? "scale-100 opacity-100 blur-0" : "scale-95 md:scale-90 opacity-70 md:opacity-50 blur-0 md:blur-sm"
                  )}
                >
                  <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-3 sm:gap-4 flex-grow">
                      {/* Avatar + Nama */}
                      <div className="flex items-center gap-3 sm:gap-4">
                        <Image src={t.image} alt={t.name} width={50} height={50} className="rounded-full object-cover sm:w-[60px] sm:h-[60px]" />
                        <h3 className="text-base sm:text-lg font-semibold">{t.name}</h3>
                      </div>

                      {/* Feedback */}
                      <p className="text-gray-300 text-sm sm:text-base text-justify leading-relaxed">{t.feedback}</p>

                      {/* Tombol */}
                      <Button variant="outline" className="w-fit mt-2 rounded-full border-white text-white text-xs sm:text-sm hover:bg-white hover:text-black">
                        Project Page →
                      </Button>
                    </div>

                    {/* Identitas di bawah */}
                    <div className="mt-3 sm:mt-4">
                      <p className="text-base sm:text-lg font-semibold">{t.personName}</p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {t.position} in <span className="underline">{t.company}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
