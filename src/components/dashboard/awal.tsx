"use client";

import { motion } from "framer-motion";

export default function Awal() {
  const iconRepeat = Array(8)
    .fill(null)
    .map((_, i) => (
      <span key={i} className="pr-4 sm:pr-6 md:pr-8">
        {i % 2 === 0 ? "✧" : "BBB"}
      </span>
    ));

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <section className="py-28 sm:py-36 md:py-12 lg:py-36 px-4 sm:px-8 md:px-12 lg:px-36 relative min-h-screen overflow-hidden">
        {/* Decorative Images */}
        <motion.img
          src="/images/element/bintang.png"
          alt="Bintang"
          className="hidden sm:block  absolute top-5 lg:left-3 sm:left-0 md:left-0 w-12 sm:w-20 md:w-32 lg:w-60 brightness-75 opacity-80 pointer-events-none sm:top-28 md:-top-0 lg:top-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src="/images/element/plus.png"
          alt="Plus"
          className="hidden sm:block absolute bottom-24 sm:bottom-[305px] md:bottom-[218px] lg:bottom-64 right-6 sm:right-12 md:right-10 lg:right-32 w-12 sm:w-20 md:w-28 lg:w-20 brightness-75 pointer-events-none"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <img
          src="/images/element/pray.gif"
          alt="Pray"
          className="hidden sm:block absolute bottom-6 sm:bottom-[140px] md:bottom-20 lg:bottom-[130px] left-4 sm:left-64 md:left-80 lg:left-8 w-12 sm:w-20 md:w-28 lg:w-32 -z-10 pointer-events-none"
        />

        {/* Heading */}
        <h1
          className="relative z-10 flex flex-col sm:flex-row 
             items-center sm:items-center 
             justify-center sm:justify-start 
             gap-2 sm:gap-4 md:gap-6 
             text-center sm:text-left 
             font-bold leading-tight 
             text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        >
          <span>Kawanku,</span>
          <span
            className="relative inline-block 
             px-2 sm:px-3 py-1 
             bg-about-biru rounded-full overflow-hidden 
             max-w-[250px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-none 
             mx-auto sm:mx-0"
          >
            <motion.span
              className="relative inline-flex whitespace-nowrap will-change-transform text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-9xl text-about-body"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              {iconRepeat}
            </motion.span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-9xl font-bold leading-tight text-center sm:text-left mt-4 sm:mt-6">Mari Bergerak</p>

        {/* Description & Social Links */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8 text-center sm:text-start lg:text-left">
          <p className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 sm:px-0 lg:px-14 lg:mx-0">
            Menghubungkan ide lewat teknologi, mewujudkan ruang dengan konstruksi, dan mengabadikan momen melalui lensa.
          </p>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg">
            <li>✦ IT Consultant</li>
            <li>✦ Photography & Videography</li>
            <li>✦ Contractor</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
