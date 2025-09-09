"use client";
import React, { useRef, useEffect } from "react";
import { Navbar1 } from "@/components/navbar";
import Awal from "@/components/dashboard/awal";
import ImageScroll from "@/components/dashboard/imagesroll";
import { About } from "@/components/dashboard/about";
import { Client } from "@/components/dashboard/client";
import { Service } from "@/components/dashboard/service";
import { Project } from "@/components/dashboard/project";
import Testimonials from "@/components/dashboard/testi";
import Contact from "@/components/dashboard/contact";
// import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen font-[Space_Grotesk]">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="container mx-auto px-0 lg:px-0 py-0 md:py-16">
        <Navbar1 />

        <Awal />
        <ImageScroll />
        <About />
        <Client />
        <Service />
        <Project />
        <Testimonials />
        <Contact />
        {/* <Footer /> */}
      </div>
    </main>
  );
}
