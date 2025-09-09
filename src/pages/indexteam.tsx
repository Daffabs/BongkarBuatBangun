"use client";
import React, { useRef, useEffect } from "react";
import { Navbar1 } from "@/components/navbar";
import Hero from "@/components/team/hero";
import FotoScroll from "@/components/team/imagescroll";
import Marque from "@/components/team/marque";
import Tim from "@/components/team/tim";
// import { Sejarah } from "@/components/team/sejarah";
// import Artikel from "@/components/team/artikel";
import Contact from "@/components/dashboard/contact";

export default function Home() {
  return (
    <main className="min-h-screen font-[Space_Grotesk]">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="container mx-auto px-0 lg:px-0 py-0 md:py-16">
        <Navbar1 />
        <Hero />
        <FotoScroll />
        <Marque />
        <Tim />
        {/* <Sejarah /> */}
        {/* <Artikel /> */}
        <Contact />
      </div>
    </main>
  );
}
