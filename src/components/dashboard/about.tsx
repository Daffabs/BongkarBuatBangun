"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Split teks di <q>
    const split = new SplitType("#quote-text", { types: "chars" });

    gsap.fromTo(
      split.chars,
      { color: "#2B2A2A", opacity: 0.2 }, // awalnya gelap
      {
        color: "#FFF", // jadi terang
        opacity: 1,
        stagger: 0.05, // jeda antar huruf
        scrollTrigger: {
          trigger: "#quote-text",
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

  return (
    <section className="py-0 md:py-36 mt-28 sm:mt-0 md:mt-0 lg:mt-0">
      <div className="container">
        <div className="flex flex-col items-center gap-6 border-y py-14 text-center md:py-20">
          <p id="quote-text" className="block max-w-full sm:max-w-2xl lg:max-w-4xl text-xl sm:text-2xl lg:text-3xl font-medium break-words whitespace-normal text-center">
            Mengubah setiap inspirasi menjadi inovasi, membangun
            <br />
            solusi nyata melalui teknologi, konstruksi, dan cerita visual.
          </p>

          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <p className="font-medium text-logo-tosca">
              Bongkar <span className="text-logo-biru">Buat</span> <span className="text-logo-gold">Bangun</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
