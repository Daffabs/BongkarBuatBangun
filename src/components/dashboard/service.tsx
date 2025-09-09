// app/page.tsx
"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, desc: "Menampilkan solusi digital modern dengan desain kreatif.", img: "/images/l1.png", tags: ["IT Consultant", "Web Development"] },
  { id: 2, desc: "Mengubah ide menjadi proyek konstruksi yang terpercaya.", img: "/images/s1.png", tags: ["Contractor"] },
  { id: 3, desc: "Mengabadikan momen berharga melalui lensa profesional.", img: "/images/s2.png", tags: ["Photography", "Videography"] },
  { id: 4, desc: "Perpaduan teknologi, seni, dan kreativitas dalam satu karya.", img: "/images/mari3.png", tags: ["IT Consultant", "Contractor", "Photography", "Videography"] },
];

const Service = () => {
  useEffect(() => {
    const desktopEl = document.querySelector("#serviceDesktop");
    const mobileEl = document.querySelector("#serviceMobile");

    const splitAnimations: (() => void)[] = [];

    // Desktop
    if (desktopEl instanceof HTMLElement) {
      const splitDesktop = new SplitType(desktopEl, { types: "chars", charClass: "split-chars" });
      gsap.fromTo(
        splitDesktop.chars,
        { color: "#2B2A2A", opacity: 0.2 },
        {
          color: "#FFF",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: desktopEl,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
      splitAnimations.push(() => splitDesktop.revert());
    }

    // Mobile
    if (mobileEl instanceof HTMLElement) {
      const splitMobile = new SplitType(mobileEl, { types: "chars", charClass: "split-chars" });
      gsap.fromTo(
        splitMobile.chars,
        { color: "#2B2A2A", opacity: 0.2 },
        {
          color: "#FFF",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: mobileEl,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
      splitAnimations.push(() => splitMobile.revert());
    }

    return () => {
      splitAnimations.forEach((revertFn) => revertFn());
    };
  }, []);

  return (
    <div data-aos="fade-up" className="text-white py-0 sm:py-14 md:py-20 lg:py-20">
      {/* DESKTOP & TABLET */}
      <div className="hidden md:flex min-h-screen px-4 sm:px-8 md:px-4 lg:px-4 overflow-hidden">
        {/* Left - sticky */}
        <aside className="w-1/3 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 sticky top-0 h-screen">
          <h1 id="serviceDesktop" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 break-words whitespace-normal">
            Merangkai Inspirasi Berani
          </h1>
          <p className="text-gray-400 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">Menemukan proyek tanpa batas, menghadirkan kreativitas berani menjadi solusi nyata.</p>
          <Link href="/indexkarya">
            <button className="px-4 sm:px-6 py-2 sm:py-3 border border-white rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base md:text-lg">Karya Kami →</button>
          </Link>
        </aside>

        {/* Right - scrollable */}
        <section className="w-2/3 h-screen overflow-y-auto space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 p-4 sm:p-6 md:p-16 lg:p-12 scrollbar-hide">
          {projects.map((project) => (
            <Card key={project.id} className="relative h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-[100vh] rounded-2xl overflow-hidden shadow-xl">
              <Image src={project.img} alt={project.desc} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-white/90 text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl">{project.desc}</p>
              </div>
            </Card>
          ))}
        </section>
      </div>

      {/* MOBILE - scroll overlap */}
      <div className="block md:hidden relative h-[480vh] px-4 sm:px-6">
        <h1 id="serviceMobile" className="text-4xl sm:text-4xl font-bold mb-2">
          Merangkai Inspirasi Berani
        </h1>
        <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">Menemukan proyek tanpa batas, menghadirkan kreativitas berani menjadi solusi nyata.</p>

        {projects.map((project, idx) => (
          <div key={project.id} className="sticky top-0 h-screen flex items-center justify-center" style={{ zIndex: idx + 10 }}>
            <Card className="relative w-72 sm:w-80 md:w-96 h-[260px] sm:h-[300px] md:h-[340px] rounded-2xl overflow-hidden shadow-xl">
              <Image src={project.img} alt={project.desc} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-white/90 text-black text-xs sm:text-sm md:text-base font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg">{project.desc}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Service };
