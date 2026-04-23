"use client";

import type { BlockProps } from "@/blocks/types";
import { Heart, Globe, Users, Droplets, ArrowRight, HandHeart } from "lucide-react";

export default function Hero299(props: BlockProps) {
  const {
    theme,
    heading = "Clean Water Changes Everything",
    subheading = "WaterBridge Foundation",
    bodyText = "Every $25 gives one person access to clean water for life. Together, we have reached 2.3 million people across 14 countries. Your generosity creates ripples that last generations.",
    buttonText = "Donate Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "2.3M", description: "Lives Changed", icon: "users" },
      { title: "14", description: "Countries Reached", icon: "globe" },
      { title: "8,400", description: "Wells Built", icon: "droplets" },
      { title: "$25", description: "Gives One Person Clean Water", icon: "heart" },
    ],
  } = props;

  const iconMap: Record<string, typeof Heart> = {
    users: Users,
    globe: Globe,
    droplets: Droplets,
    heart: Heart,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0f7f4", color: theme?.foreground ?? "#1a2e28" }}
      className="min-h-screen px-5 py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HandHeart className="w-5 h-5" style={{ color: theme?.primary ?? "#2d8659" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: theme?.primary ?? "#2d8659" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-10 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#2d8659",
                  color: "#ffffff",
                }}
              >
                <Heart className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold border-2 transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#2d8659", color: theme?.primary ?? "#2d8659" }}
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Impact stats */}
            <div className="grid grid-cols-2 gap-4">
              {items.slice(0, 4).map((item, i) => {
                const IconComp = iconMap[item.icon ?? "heart"] ?? Heart;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: `${theme?.primary ?? "#2d8659"}08` }}
                  >
                    <IconComp
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: theme?.primary ?? "#2d8659" }}
                    />
                    <div>
                      <div className="text-xl font-bold" style={{ color: theme?.primary ?? "#2d8659" }}>
                        {item.title}
                      </div>
                      <div className="text-xs opacity-50">{item.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-3xl overflow-hidden"
              style={{ backgroundColor: `${theme?.primary ?? "#2d8659"}10` }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Droplets className="w-20 h-20 opacity-15" style={{ color: theme?.primary ?? "#2d8659" }} />
                </div>
              )}
            </div>

            {/* Floating card */}
            <div
              className="absolute -bottom-6 -left-4 sm:left-auto sm:-right-6 rounded-2xl p-5 shadow-xl max-w-[220px]"
              style={{
                backgroundColor: theme?.background ?? "#f0f7f4",
                color: theme?.foreground ?? "#1a2e28",
              }}
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: theme?.primary ?? "#2d8659" }}
              >
                100%
              </div>
              <div className="text-xs opacity-60 leading-relaxed">
                of public donations go directly to water projects. Operations funded separately.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
