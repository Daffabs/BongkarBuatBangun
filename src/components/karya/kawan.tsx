"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Forward } from "lucide-react";

import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";

const Kawan = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = Array(10).fill({ src: "/images/MARI.png" });

  return (
    <section data-aos="fade-up" className="h-full lg:h-screen overflow-hidden py-0 sm:py-0 md:py-0 lg:py-0 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="grid h-full w-full max-w-7xl grid-cols-2 overflow-hidden rounded-2xl bg-muted sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {/* Left Content */}
        <div className="relative flex flex-col justify-between p-6 sm:p-10 md:p-16">
          <div>
            <h2 className="relative mt-8 sm:mt-10 md:mt-12 text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tighter text-black">
              Kawan <span className="text-logo-tosca">B</span>
              <span className="text-logo-biru">B</span>
              <span className="text-logo-gold">B</span> Yang Sudah Percaya
            </h2>
            <p className="mx-auto mb-6 sm:mb-8 md:mb-10 mt-2 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground/80">
              Kami bangga menjadi bagian dari setiap langkah perjalanan kawan, dan akan terus berkomitmen memberikan yang terbaik melalui dedikasi, inovasi, serta pelayanan yang tulus demi tumbuh dan berkembang bersama.
            </p>
          </div>
          {/* <Button className="h-12 w-fit rounded-xl px-5">
            Be a Member <Forward />
          </Button> */}
        </div>

        {/* Right Content (Marquee) */}
        <div className="relative mr-2 sm:mr-3 flex h-[39rem] sm:h-[42rem] md:h-[55rem] lg:h-full flex-row items-center justify-end overflow-hidden">
          {/* Vertical Marquee - Normal */}
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {images.map((image, index) => (
              <motion.img
                key={`marquee1-${index}`}
                src={image.src}
                alt=""
                className="w-full rounded-2xl object-cover sm:h-32 md:h-44 lg:h-60"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.5,
                }}
                animate={{
                  filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(10px)" : "blur(0px)",
                  transition: { duration: 0.3, ease: "easeOut", delay: 0 },
                }}
              />
            ))}
          </Marquee>

          {/* Vertical Marquee - Reverse */}
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {images.map((image, index) => (
              <motion.img
                key={`marquee2-${index}`}
                src={image.src}
                alt=""
                className="w-full rounded-2xl object-cover sm:h-32 md:h-44 lg:h-60"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.5,
                }}
                animate={{
                  filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(10px)" : "blur(0px)",
                  transition: { duration: 0.3, ease: "easeOut", delay: 0 },
                }}
              />
            ))}
          </Marquee>

          {/* Top Gradient */}
          <div className="pointer-events-none absolute inset-x-0 top-0 block h-1/4 bg-gradient-to-b from-muted lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export { Kawan };
