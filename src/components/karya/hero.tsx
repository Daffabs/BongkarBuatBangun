// src/app/studio-template/page.tsx
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen text-white px-4 sm:px-6 py-12 lg:py-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[150px_1fr_150px] gap-8 sm:gap-10">
        {/* Left Section */}
        <div className="flex items-start text-sm text-gray-400 mb-4 md:mb-0">
          <span>Karya Kami</span>
          <ArrowUpRight size={14} className="ml-1" />
        </div>

        {/* Center Section */}
        <div>
          {/* Title */}
          {/* <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-logo-tosca">
            Bongkar <span className="text-logo-biru">Buat</span> <span className="text-logo-gold">Bangun</span>
          </h1> */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">Kami Temani Kawan</h1>

          {/* Description */}
          <p className="text-gray-200 max-w-2xl mb-10 sm:mb-12 leading-relaxed text-base sm:text-lg">
            Menggabungkan kekuatan teknologi, seni visual, dan konstruksi, BBB membantu mewujudkan ide-ide Anda menjadi nyata. IT Consultant, Photography, Videography, hingga Contractor, semua dalam satu layanan yang terintegrasi.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-6 sm:gap-y-8">
            <div>
              <p className="text-sm text-gray-400 mb-1">Kawan</p>
              <p className="font-semibold">Perusahaan & Personal</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Industri</p>
              <p className="font-semibold">Teknologi, Kreatif, & Konstruksi</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Layanan</p>
              <p className="font-semibold">Konsultasi IT, Fotografi, Videografi, Kontraktor</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Tahun</p>
              <p className="font-semibold">2025</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap md:flex-row lg:flex-col gap-3 items-start md:items-start lg:items-end justify-start md:justify-start lg:justify-end mt-8 md:mt-0">
          <Badge variant="outline" className="rounded-full px-4 py-1">
            IT Consultant
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-1">
            Photography
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-1">
            Videography
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-1">
            Contractor
          </Badge>
        </div>
      </div>
    </div>
  );
}
