"use client";
import React, { useRef, useEffect } from "react";
import { Navbar1 } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen font-[Space_Grotesk]">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="container mx-auto px-8 lg:px-0 py-0 md:py-16">
        <Navbar1 />
      </div>
    </main>
  );
}
