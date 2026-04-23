"use client";

import type { BlockProps } from "@/blocks/types";
import { Box, ArrowRight } from "lucide-react";

export default function Hero406(props: BlockProps) {
  const {
    theme,
    heading = "Build in three dimensions",
    subheading = "Spatial Computing",
    bodyText = "Transform flat ideas into immersive spatial experiences. Our platform lets you design, prototype, and ship 3D interfaces at scale.",
    buttonText = "Enter the Space",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const bg = theme?.background ?? "#0c0e1a";
  const fg = theme?.foreground ?? "#e8eaf0";
  const primary = theme?.primary ?? "#6366f1";

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Isometric grid elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Cube 1 */}
        <div
          className="absolute top-[10%] right-[15%] w-24 h-24"
          style={{ transform: "rotateX(45deg) rotateZ(45deg)" }}
        >
          <div
            className="absolute inset-0 border-2 rounded-sm"
            style={{ borderColor: primary, transform: "translateZ(12px)" }}
          />
          <div
            className="absolute inset-0 border-2 rounded-sm"
            style={{ borderColor: primary, transform: "translateZ(-12px)", opacity: 0.4 }}
          />
        </div>

        {/* Cube 2 */}
        <div
          className="absolute bottom-[20%] left-[10%] w-32 h-32"
          style={{ transform: "rotateX(45deg) rotateZ(45deg)" }}
        >
          <div
            className="absolute inset-0 border rounded-sm"
            style={{ borderColor: primary, opacity: 0.6 }}
          />
        </div>

        {/* Floating diamonds */}
        <div
          className="absolute top-[30%] left-[25%] w-16 h-16 border rotate-45"
          style={{ borderColor: primary, opacity: 0.3 }}
        />
        <div
          className="absolute bottom-[35%] right-[20%] w-10 h-10 border rotate-45"
          style={{ borderColor: primary, opacity: 0.4 }}
        />
        <div
          className="absolute top-[55%] left-[50%] w-20 h-20 border rotate-45"
          style={{ borderColor: primary, opacity: 0.15 }}
        />

        {/* Iso grid lines */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40%]"
          style={{
            backgroundImage: `
              linear-gradient(30deg, ${primary}15 1px, transparent 1px),
              linear-gradient(-30deg, ${primary}15 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-md border"
              style={{ borderColor: `${primary}44`, color: primary }}
            >
              <Box className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-55 leading-relaxed max-w-lg mb-10">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-lg transition-transform hover:scale-105"
              style={{ backgroundColor: primary, color: "#fff" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full max-w-sm rounded-xl" />
            ) : (
              /* 3D isometric cube illustration */
              <div className="relative w-48 h-48 sm:w-64 sm:h-64" style={{ perspective: "800px" }}>
                <div
                  className="absolute inset-4 rounded-xl border-2"
                  style={{
                    borderColor: primary,
                    transform: "rotateX(20deg) rotateY(-25deg) rotateZ(5deg)",
                    boxShadow: `8px 8px 0 ${primary}33, 16px 16px 0 ${primary}11`,
                    backgroundColor: `${primary}08`,
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <Box className="w-16 h-16 sm:w-20 sm:h-20" style={{ color: primary }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {items.length > 0 && (
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-lg border text-center"
                style={{ borderColor: `${primary}22`, backgroundColor: `${primary}08` }}
              >
                <div className="text-xl font-bold" style={{ color: primary }}>
                  {item.value ?? "10x"}
                </div>
                <div className="text-xs opacity-45 mt-1">{item.label ?? "Faster"}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
