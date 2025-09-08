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
        <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl">+ Kontak</span>
      </div>

      {/* Kanan */}
      <div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                     font-bold text-white leading-tight"
        >
          <span className="text-logo-tosca">Ngobrol</span> santai dulu, biar <span className="text-logo-biru">proyekmu</span> makin <span className="text-logo-gold">nyata</span>, kawan!
        </h1>

        <p
          className="mt-4 sm:mt-6 text-gray-400 
                     text-base sm:text-lg md:text-xl 
                     max-w-2xl md:max-w-3xl lg:max-w-4xl 
                     leading-relaxed"
        >
          Punya pertanyaan, ide, atau sekadar ingin ngobrol tentang proyekmu? Jangan ragu untuk menghubungi kami! Tim kami siap membantu dan berdiskusi denganmu.
        </p>
      </div>
    </section>
  );
}
