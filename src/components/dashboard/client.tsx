import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Client = () => {
  return (
    <section className="py-16 sm:py-14 md:py-0 lg:py-0">
      <div className="container flex flex-col items-center gap-8 sm:gap-12 md:gap-14 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div
          className="grid w-full 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-4 sm:gap-6 md:gap-8 lg:gap-10 
          auto-rows-[160px] sm:auto-rows-[220px] md:auto-rows-[280px] lg:auto-rows-[350px]"
        >
          {/* Big Image Card */}
          <Link href="/indexaboutus" className="group relative col-span-1 sm:col-span-2 overflow-hidden rounded-lg">
            <img src="/images/g1.png" alt="placeholder" className="absolute h-full w-full object-cover object-center" />
            <div
              className="relative flex h-full w-full flex-col items-start justify-between 
              bg-primary/60 p-4 sm:p-6 md:p-8 lg:p-10 
              text-primary-foreground transition-colors hover:bg-primary/70"
            >
              <img src="/images/bbb_name.png" alt="placeholder logo" className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 h-6 sm:h-8 md:h-10 lg:h-12" />
              <div className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg">
                Tentang Kami
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card - Happy Clients */}
          <div
            className="flex flex-col justify-between rounded-lg 
            bg-accent p-4 sm:p-6 md:p-8 lg:p-10 text-black  
            min-h-[160px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[350px] 
            bg-[url('/images/c2.png')] bg-cover bg-center"
          >
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">0+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">Mari Kawan</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">Jadilah Kawan Pertama Kami</div>
            </div>
          </div>

          {/* Card - Returning Clients */}
          <div
            className="flex flex-col justify-end rounded-lg 
            bg-accent p-4 sm:p-6 md:p-8 lg:p-10 text-black 
            min-h-[160px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[350px] 
            bg-[url('/images/c3.png')] bg-cover bg-center"
          >
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">0%</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">Mari Kawan</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">Membuat Projek Baru</div>
            </div>
          </div>

          {/* Second Big Image Card */}
          <Link href="/indexkarya" className="group relative col-span-1 sm:col-span-2 overflow-hidden rounded-lg">
            <img src="/images/g2.png" alt="placeholder" className="absolute h-full w-full object-cover object-center" />
            <div
              className="relative flex h-full w-full flex-col sm:flex-row 
              items-start sm:items-end justify-between gap-4 
              bg-primary/50 p-4 sm:p-6 md:p-8 lg:p-10 
              text-primary-foreground transition-colors hover:bg-primary/70"
            >
              <img src="/images/bbb_name.png" alt="placeholder logo" className="h-6 sm:h-8 md:h-10 lg:h-12 mb-4 sm:mb-0" />
              <div className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg">
                Karya Kami
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Client };
