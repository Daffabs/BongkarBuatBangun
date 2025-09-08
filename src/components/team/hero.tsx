"use client";

export default function Hero() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[auto,1fr] 
                 gap-8 md:gap-12 items-start
                 py-12 sm:py-20 md:py-24 lg:py-28 
                 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      {/* Kiri */}
      <div className="mb-4 md:mb-0">
        <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl">+ Tim Kami</span>
      </div>

      {/* Kanan */}
      <div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                     font-bold text-white leading-tight"
        >
          Mari Berkenalan Dengan Tim <span className="text-logo-tosca">B</span>
          <span className="text-logo-biru">B</span>
          <span className="text-logo-gold">B</span>
        </h1>

        <p
          className="mt-4 sm:mt-6 text-gray-400 
                     text-base sm:text-lg md:text-xl 
                     max-w-2xl md:max-w-3xl lg:max-w-4xl 
                     leading-relaxed"
        >
          Di balik setiap proyek sukses, ada tim yang berdedikasi dan bersemangat. Tim kami terdiri dari individu-individu berbakat yang berkomitmen untuk memberikan yang terbaik dalam setiap aspek pekerjaan mereka. Kami percaya bahwa
          kolaborasi, inovasi, dan keahlian adalah kunci untuk mencapai hasil yang luar biasa. Mari kenali lebih dekat para profesional di balik layar yang mendorong visi kami menjadi kenyataan.
        </p>
      </div>
    </section>
  );
}
