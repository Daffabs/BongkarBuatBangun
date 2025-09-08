// app/insights/page.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Artikel() {
  const articles = [
    {
      img: "/images/robot.jpg",
      tags: ["Concept", "Editorial"],
      title: "Frontend innovations and user journeys",
      desc: "",
    },
    {
      img: "/images/laptop.jpg",
      tags: ["UI/UX", "Development"],
      title: "Branding in creating digital experiences",
      desc: "",
    },
    {
      img: "/images/workshop.jpg",
      tags: ["News", "AI"],
      title: "Elevating digital workshops with engaging design",
      desc: "",
    },
  ];

  return (
    <main className="min-h-screen text-white px-6 md:px-20 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Recent insights</h2>
          <p className="mt-2 text-gray-400 max-w-xl">Inspiring ideas, creative insights, and the latest in design and tech. Fueling innovation for your digital journey.</p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0 rounded-full border-gray-600 text-white hover:bg-white hover:text-black">
          All Articles →
        </Button>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {articles.map((article, i) => (
          <Card key={i} className="overflow-hidden bg-[#111] border-0 rounded-2xl shadow-lg">
            <div className="relative h-60 w-full">
              <Image src={article.img} alt={article.title} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, t) => (
                  <Badge key={t} variant="outline" className="rounded-full border-gray-400 text-gray-300">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-lg font-semibold">{article.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
