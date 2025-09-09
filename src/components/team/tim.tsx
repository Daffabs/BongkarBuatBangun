// app/team/page.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Tim() {
  const members = [
    {
      name: "Daffa Bagus Syach Putra",
      img: "/images/barudak/daffa.jpg",
      socials: [{ label: "Website Developer" }],
    },
    {
      name: "Alfi Aditya Zufar",
      img: "/images/barudak/alfi.jpg",
      socials: [{ label: "IT Business Analyst" }],
    },
    {
      name: "Muhammad Fadhlan Putra F",
      img: "/images/barudak/fadhlan.jpg",
      socials: [{ label: "Contractor" }],
    },
    {
      name: "Abdul Aziz",
      img: "/images/barudak/bedul.jpg",
      socials: [{ label: "Website Developer" }],
    },
    {
      name: "Ariq Fadhilah Saputra",
      img: "/images/barudak/ariq.jpg",
      socials: [{ label: "Website Developer" }],
    },
    {
      name: "Dava Attabrani",
      img: "/images/barudak/dava2.jpg",
      socials: [{ label: "Photography" }, { label: "Videography" }],
    },
    {
      name: "Mochamad Ikhsan Anugrah",
      img: "/images/barudak/ikhsan2.jpg",
      socials: [{ label: "IT Business Analyst" }],
    },
    {
      name: "Rizki Ramdani",
      img: "/images/barudak/rizki.jpg",
      socials: [{ label: "IT Business Analyst" }],
    },
    {
      name: "Rangga Hadi Juniansyah",
      img: "/images/barudak/renggo.jpg",
      socials: [{ label: "IT Helpdesk" }],
    },
    {
      name: "Tristantio Bierhoff",
      img: "/images/barudak/tio3.jpg",
      socials: [{ label: "Website Developer" }],
    },
    {
      name: "Muhammad Raihan Hidayat",
      img: "/images/barudak/dayak2.jpg",
      socials: [{ label: "Media" }],
    },
  ];

  return (
    <main data-aos="fade-up" className="min-h-screen text-white px-0 md:px-1 lg:px-16 py-0 sm:py-10 md:py-16 lg:py-16">
      <section className="max-w-6xl mx-auto">
        {/* --- DESKTOP (grid biasa) --- */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-logo-bg border-logo-bg flex flex-col rounded-2xl">
            <CardContent className="mt-10">
              <h3 className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl font-semibold text-white">Mari Berkenalan</h3>
              <p className="text-gray-200 text-md mt-4">Kenalkan, ini tim keren kami! Penuh semangat, ide-ide segar, dan pastinya selalu siap bekerjasama untuk mewujudkan hal-hal luar biasa.</p>
            </CardContent>
          </Card>
          {members.map((m, i) => (
            <Card key={i} className="bg-zinc-900 border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <Image src={m.img} alt={m.name} width={500} height={500} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <div className="flex gap-2 mb-2 flex-wrap">
                    {m.socials.map((s, i) => (
                      <span key={i} className="bg-white/10 text-sm px-3 py-1 rounded-full text-logo-gold">
                        {s.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg text-white">{m.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* --- MOBILE (parallax scroll overlap) --- */}
        <div className="block md:hidden relative px-4 sm:px-6" style={{ height: `${(members.length + 1) * 100}vh` }}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Mari Berkenalan</h1>
          <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">Kenalkan, ini tim keren kami! Penuh semangat, ide-ide segar, dan pastinya selalu siap bekerjasama untuk mewujudkan hal-hal luar biasa.</p>

          {members.map((m, idx) => (
            <div key={m.name} className="sticky top-0 h-screen flex items-center justify-center" style={{ zIndex: idx + 10 }}>
              <Card className="relative w-72 sm:w-80 h-[340px] rounded-2xl overflow-hidden shadow-xl">
                <Image src={m.img} alt={m.name} fill className="object-cover" />

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {m.socials.map((s, i) => (
                      <span key={i} className="px-3 py-0.5 rounded-full bg-white/90 text-black text-xs sm:text-sm font-medium">
                        {s.label}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-200 text-sm sm:text-base">{m.name}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
