"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ServiceProps = {
  title: string;
  image: string;
  size?: "large" | "medium" | "small";
};

const services: ServiceProps[] = [
  {
    title: "IT Consultant",
    image: "/images/l1.png",
    size: "large",
  },
  {
    title: "Contractor",
    image: "/images/kontraktor.png",
    size: "medium",
  },
  {
    title: "Photography & Videography",
    image: "/images/pv.png",
    size: "small",
  },
];

const Feat = () => {
  return (
    <section className="py-0 sm:py-0 md:py-0 lg:py-20">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h2 className="text-foreground mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium ">Layanan Kami</h2>
            <p className="text-muted-foreground w-72 text-base tracking-tight">Bikin proyek lebih mudah, momen lebih berkesan, dan teknologi lebih dekat dengan Anda.</p>
          </div>
          <Link href="/indexkarya">
            <Button variant="outline" className="rounded border-white text-white hover:bg-white hover:text-black">
              Karya Kami →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {/* Web Development - Hero card */}
          <motion.a whileHover={{ opacity: 0.8, scale: 1.02 }} className="group col-span-1 block overflow-hidden rounded-xl sm:col-span-2">
            <Card className="relative aspect-[16/9] overflow-hidden p-0">
              <img src={services[0].image} alt={services[0].title} className="absolute inset-0 h-full w-full object-cover" />
              <CardContent className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="pr-4 text-2xl font-bold text-white">{services[0].title}</div>
              </CardContent>
              {/* <ArrowUpRight className="absolute right-8 top-8 h-8 w-8 text-white transition-transform group-hover:scale-110" /> */}
            </Card>
          </motion.a>

          {/* Mobile App Development */}
          <motion.a whileHover={{ opacity: 0.8, scale: 1.02 }} className="group block overflow-hidden rounded-xl">
            <Card className="relative aspect-[4/5] overflow-hidden p-0">
              <img src={services[1].image} alt={services[1].title} className="absolute inset-0 h-full w-full object-cover" />
              <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="pr-4 text-2xl font-semibold text-white">{services[1].title}</div>
              </CardContent>
              {/* <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-110" /> */}
            </Card>
          </motion.a>

          {/* UI/UX Design */}
          <motion.a whileHover={{ opacity: 0.8, scale: 1.02 }} className="group block overflow-hidden rounded-xl">
            <Card className="relative aspect-[4/5] overflow-hidden p-0">
              <img src={services[2].image} alt={services[2].title} className="absolute inset-0 h-full w-full object-cover" />
              <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="pr-4 text-2xl font-semibold text-white">{services[2].title}</div>
              </CardContent>
              {/* <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-110" /> */}
            </Card>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export { Feat };
