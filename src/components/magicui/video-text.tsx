"use client";

import { cn } from "@/lib/utils";
import React, { ElementType, ReactNode, useEffect, useState } from "react";

export interface VideoTextProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
  children: ReactNode;
  fontSize?: string | number;
  fontWeight?: string | number;
  textAnchor?: string;
  dominantBaseline?: string;
  fontFamily?: string;
  as?: ElementType;
}

export function VideoText({
  src,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 20,
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  as: Component = "div",
}: VideoTextProps) {
  const [svgMask, setSvgMask] = useState("");

  // Convert children to plain string safely
  const content = typeof children === "string" ? children : String(children);

  useEffect(() => {
    const updateSvgMask = () => {
      const responsiveFontSize = typeof fontSize === "number" ? `${fontSize}vw` : fontSize;

      const lines = content
        .split("\n")
        .map((line, i) => {
          const dy = i === 0 ? "0" : "1.2em";
          return `<tspan x="50%" dy="${dy}">${line}</tspan>`;
        })
        .join("");

      const newSvgMask = `
  <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
    <text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}'
      text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}'
      font-family='${fontFamily}'>
      ${lines}
    </text>
  </svg>
`;

      setSvgMask(newSvgMask.trim());
    };

    updateSvgMask();
    window.addEventListener("resize", updateSvgMask);
    return () => window.removeEventListener("resize", updateSvgMask);
  }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`;

  return (
    <Component className={cn("relative size-full", className)}>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          maskSize: "cover", // ubah ini
          WebkitMaskSize: "cover", // ubah ini
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <video className="w-full h-full object-cover" autoPlay={autoPlay} muted={muted} loop={loop} preload={preload} playsInline>
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Backup text for accessibility */}
      <span className="sr-only">{content}</span>
    </Component>
  );
}
