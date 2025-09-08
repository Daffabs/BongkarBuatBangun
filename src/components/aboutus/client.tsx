import { ArrowRight } from "lucide-react";

const Client = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-12">
      <div className="container flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-8 lg:px-16">
        <div
          className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-4 sm:gap-6 lg:gap-8 
          auto-rows-[180px] sm:auto-rows-[250px] lg:auto-rows-[350px]"
        >
          {/* Big Image Card */}
          <a href="/indexaboutus" className="group relative col-span-1 sm:col-span-2 overflow-clip rounded-lg">
            <img src="/images/g1.png" alt="placeholder" className="absolute h-full w-full object-cover object-center" />
            <div
              className="relative flex h-full w-full flex-col items-start justify-between 
              bg-primary/60 p-4 sm:p-6 lg:p-10 
              text-primary-foreground transition-colors hover:bg-primary/70"
            >
              <img src="/images/bbb_name.png" alt="placeholder logo" className="mb-6 sm:mb-10 lg:mb-12 h-6 sm:h-8 md:h-10 lg:h-12" />
              <div className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg">
                Tentang Kami <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>

          {/* Card - Happy Clients */}
          <div
            className="flex flex-col justify-between rounded-lg 
            bg-accent p-4 sm:p-6 lg:p-8 text-black  
            min-h-[180px] sm:min-h-[250px] lg:min-h-[350px] 
            bg-[url('/images/c2.png')] bg-cover bg-center"
          >
            <div>
              <div className="text-2xl sm:text-4xl lg:text-7xl font-bold">50+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">Kawan Bahagia</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">yang Mempercayai Karya Kami</div>
            </div>
          </div>

          {/* Card - Returning Clients */}
          <div
            className="flex flex-col justify-end rounded-lg 
            bg-accent p-4 sm:p-6 lg:p-8 text-black 
            min-h-[180px] sm:min-h-[250px] lg:min-h-[350px] 
            bg-[url('/images/c3.png')] bg-cover bg-center"
          >
            <div>
              <div className="text-2xl sm:text-4xl lg:text-7xl font-bold">80%</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">Kawan Kembali</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">untuk Proyek Baru</div>
            </div>
          </div>

          {/* Second Big Image Card */}
          <a href="/indexkarya" className="group relative col-span-1 sm:col-span-2 overflow-clip rounded-lg">
            <img src="/images/g2.png" alt="placeholder" className="absolute h-full w-full object-cover object-center" />
            <div
              className="relative flex h-full w-full flex-col sm:flex-row 
              items-start sm:items-end justify-between gap-4 
              bg-primary/50 p-4 sm:p-6 lg:p-10 
              text-primary-foreground transition-colors hover:bg-primary/70"
            >
              <img src="/images/bbb_name.png" alt="placeholder logo" className="h-6 sm:h-8 md:h-10 lg:h-12 mb-4 sm:mb-0" />
              <div className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg">
                Karya Kami <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Client };
