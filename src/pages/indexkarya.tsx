"use client";
import React, { useRef, useEffect } from "react";
import { Navbar1 } from "@/components/navbar";
import Hero from "@/components/karya/hero";
import Fotoscroll from "@/components/karya/fotoscroll";
import { Kawan } from "@/components/karya/kawan";
import Marque from "@/components/karya/marque";
import Testimonials from "@/components/karya/testi";
import Contact from "@/components/dashboard/contact";

export default function Home() {
  return (
    <main className="min-h-screen font-[Space_Grotesk]">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="container mx-auto px-8 lg:px-0 py-0 md:py-16">
        <Navbar1 />
        <Hero />
        <Fotoscroll />
        <Marque />
        <Kawan />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
