// app/insights/page.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  useEffect(() => {
    // Split teks di <q>
    const split = new SplitType("#service", {
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
          trigger: "#service",
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
  const articles = [
    {
      img: "/images/l1.png",
      tags: ["IT Consultanting", "Web Development"],
      title: "Web Development -",
      desc: "Bangun website modern, responsif, dan sesuai kebutuhan bisnis Anda.",
    },
    {
      img: "/images/s2.png",
      tags: ["Photography", "Videography"],
      title: "Photography & Videography -",
      desc: "Abadikan momen penting dengan hasil visual yang kreatif dan berkesan.",
    },
    {
      img: "/images/s1.png",
      tags: ["Contractor"],
      title: "Contractor -",
      desc: "Mewujudkan proyek konstruksi dengan kualitas terbaik dan hasil yang terpercaya.",
    },
  ];

  return (
    <main data-aos="fade-up" className=" text-white min-h-screen px-6 md:px-16 py-14 sm:py-14 md:py-16 lg:py-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div>
          <h2 id="service" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Yang <span className="text-logo-tosca">B</span>
            <span className="text-logo-biru">B</span>
            <span className="text-logo-gold">B</span> Tawarkan
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl">Dari teknologi, visual, hingga pembangunan—kami hadir untuk menciptakan karya yang berdampak.</p>
        </div>
        <Link href="/indexkarya">
          <Button variant="outline" className="rounded border-white text-white hover:bg-white hover:text-black">
            Karya Kami →
          </Button>
        </Link>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <Card key={i} className="bg-transparent border-0 text-white shadow-none">
            <CardHeader className="p-0">
              <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                <Image src={a.img} alt={a.title} fill className="object-cover" />
              </div>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {a.tags.map((t, j) => (
                  <Badge key={j} variant="secondary" className="rounded-full bg-white/10 text-white hover:bg-white/20">
                    {t}
                  </Badge>
                ))}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold">
                {a.title} <span className="font-normal text-gray-400">{a.desc}</span>
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
