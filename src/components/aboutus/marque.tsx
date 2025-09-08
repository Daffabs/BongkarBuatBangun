// app/page.tsx
"use client";

import { cn } from "@/lib/utils"; // fungsi bawaan shadcn untuk gabung class (optional)

export default function Marque() {
  return (
    <main className="flex w-full items-center justify-centeroverflow-hidden mt-10">
      <div className="relative w-full flex overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-4xl md:text-6xl font-light text-gray-500">
          <span className="mx-8">✦Bongkar Buat Bangun✦</span>
          <span className="mx-8">✦BBB✦</span>
          <span className="mx-8">✦Bongkar Buat Bangun✦</span>
          <span className="mx-8">✦BBB✦</span>
          <span className="mx-8">✦Bongkar Buat Bangun✦</span>
        </div>
      </div>
    </main>
  );
}
