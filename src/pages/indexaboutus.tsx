"use client";
import React, { useRef, useEffect } from "react";
import { Navbar1 } from "@/components/navbar";
import HeroAboutUs from "@/components/aboutus/hero";
import { Cerita } from "@/components/aboutus/cerita";
import Marque from "@/components/aboutus/marque";
import { Client } from "@/components/aboutus/client";
import Service from "@/components/aboutus/service";
import Contact from "@/components/dashboard/contact";

export default function Home() {
  return (
    <main className="min-h-screen font-[Space_Grotesk]">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="container mx-auto px-8 lg:px-0 py-0 md:py-16">
        <Navbar1 />
        <HeroAboutUs />
        <Cerita />
        <Marque />
        <Client />
        <Service />
        <Contact />
      </div>
    </main>
  );
}
