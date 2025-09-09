"use client";
import React, { useRef, useEffect } from "react";
import { Navbar1 } from "@/components/navbar";
import Hero from "@/components/service/hero";
import { Feat } from "@/components/service/feat";
import Marque from "@/components/service/marque";
import Fotoscroll from "@/components/service/fotoscroll";
import Service from "@/components/service/service";
import Contact from "@/components/dashboard/contact";

export default function Home() {
  return (
    <main className="min-h-screen font-[Space_Grotesk]">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="container mx-auto px-0 lg:px-0 py-0 md:py-16">
        <Navbar1 />
        <Hero />
        <Feat />
        <Marque />
        <Fotoscroll />
        <Service />
        <Contact />
      </div>
    </main>
  );
}
