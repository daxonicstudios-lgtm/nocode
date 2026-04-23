"use client";

import type { BlockProps } from "@/blocks/types";
import { Leaf, Sun, Droplets, Sprout } from "lucide-react";

export default function Hero263(props: BlockProps) {
  const {
    theme,
    heading = "Grown with Care, Delivered with Purpose",
    subheading = "Sustainable Agriculture",
    bodyText = "We partner with local farmers to bring fresh, organic produce from field to table. Supporting communities, nourishing families, and protecting the earth.",
    buttonText = "Shop Fresh",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "100% Organic", description: "No chemicals, ever", icon: "leaf" },
      { title: "Farm to Table", description: "Harvested within 24 hours", icon: "sun" },
      { title: "Water Smart", description: "Drip irrigation systems", icon: "droplets" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#f5f0e8",
        color: theme?.foreground ?? "#2d3a2d",
      }}
      className="relative overflow-hidden"
    >
      {/* Organic curved background shape */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10 hidden lg:block"
        style={{
          backgroundColor: theme?.primary ?? "#4a7c59",
          borderRadius: "0 0 0 60%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Top badge */}
        <div className="flex items-center gap-2 mb-8">
          <Sprout className="w-5 h-5" style={{ color: theme?.primary ?? "#4a7c59" }} />
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: theme?.primary ?? "#4a7c59" }}
          >
            {subheading}
          </span>
          <div
            className="flex-1 h-px ml-4 max-w-[100px]"
            style={{ backgroundColor: `${theme?.primary ?? "#4a7c59"}33` }}
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Content - 3 cols */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-70 mb-10 max-w-xl leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base transition-all hover:opacity-90"
                style={{
                  backgroundColor: theme?.primary ?? "#4a7c59",
                  color: "#fff",
                }}
              >
                <Leaf className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base border-2 transition-all hover:opacity-80"
                style={{
                  borderColor: theme?.primary ?? "#4a7c59",
                  color: theme?.primary ?? "#4a7c59",
                }}
              >
                Our Story
              </a>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {items.map((item, i) => {
                const icons = [
                  <Leaf key="l" className="w-4 h-4" />,
                  <Sun key="s" className="w-4 h-4" />,
                  <Droplets key="d" className="w-4 h-4" />,
                ];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3 rounded-full"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#4a7c59"}10`,
                      border: `1px solid ${theme?.primary ?? "#4a7c59"}22`,
                    }}
                  >
                    <span style={{ color: theme?.primary ?? "#4a7c59" }}>
                      {icons[i % 3]}
                    </span>
                    <div>
                      <span className="font-bold text-sm">{item.title}</span>
                      <span className="text-xs opacity-60 ml-2">{item.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image - 2 cols */}
          <div className="lg:col-span-2">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="w-full rounded-3xl shadow-lg"
              />
            ) : (
              <div
                className="w-full aspect-[3/4] rounded-3xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${theme?.primary ?? "#4a7c59"}20, ${theme?.primary ?? "#4a7c59"}08)`,
                  border: `2px solid ${theme?.primary ?? "#4a7c59"}15`,
                }}
              >
                <Sprout
                  className="w-28 h-28 opacity-20"
                  style={{ color: theme?.primary ?? "#4a7c59" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
