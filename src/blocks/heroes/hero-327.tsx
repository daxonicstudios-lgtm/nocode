"use client";

import type { BlockProps } from "@/blocks/types";
import { TreePine, Leaf, Sun, Droplets, ArrowRight, Star, Scissors, Flower2 } from "lucide-react";

export default function Hero327(props: BlockProps) {
  const {
    theme,
    heading = "Transform Your Outdoor Space Into a Living Masterpiece",
    subheading = "Professional Landscaping & Garden Design",
    bodyText = "From lush garden installations to year-round lawn maintenance, our certified landscapers bring your vision to life. Serving the community for over 15 years with award-winning designs.",
    buttonText = "Free Estimate",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lawn Care", description: "Mowing, fertilizing, weed control", icon: "scissors" },
      { title: "Garden Design", description: "Custom planting & hardscaping", icon: "flower" },
      { title: "Irrigation", description: "Smart sprinkler installation", icon: "water" },
      { title: "Tree Service", description: "Pruning, removal & stump grinding", icon: "tree" },
    ],
  } = props;

  const iconMap: Record<string, typeof TreePine> = {
    scissors: Scissors,
    flower: Flower2,
    water: Droplets,
    tree: TreePine,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0f7f0", color: theme?.foreground ?? "#1a2e1a" }}
      className="min-h-screen px-5 py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Subtle decorative leaves */}
      <Leaf className="absolute top-12 right-8 w-20 h-20 opacity-[0.04] rotate-45" style={{ color: theme?.primary ?? "#16a34a" }} />
      <Leaf className="absolute bottom-20 left-8 w-16 h-16 opacity-[0.04] -rotate-12" style={{ color: theme?.primary ?? "#16a34a" }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Seasonal offer banner */}
        <div
          className="rounded-xl px-5 py-3 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ backgroundColor: `${theme?.primary ?? "#16a34a"}10`, border: `1px solid ${theme?.primary ?? "#16a34a"}20` }}
        >
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4" style={{ color: theme?.primary ?? "#16a34a" }} />
            <span className="text-sm font-bold">Spring Special</span>
            <span className="text-sm opacity-60">20% off all new landscaping projects through May</span>
          </div>
          <a
            href={buttonUrl}
            className="text-sm font-bold hover:opacity-70 transition-opacity"
            style={{ color: theme?.primary ?? "#16a34a" }}
          >
            Claim Offer →
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <TreePine className="w-5 h-5" style={{ color: theme?.primary ?? "#16a34a" }} />
              <span className="text-xs font-bold uppercase tracking-wider opacity-50">
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-base opacity-55 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#16a34a", color: "#ffffff" }}
              >
                <Leaf className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-colors hover:opacity-80"
                style={{ borderColor: `${theme?.foreground ?? "#1a2e1a"}12` }}
              >
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" style={{ color: "#facc15" }} />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9/5</span>
              <span className="text-xs opacity-40">from 680+ happy homeowners</span>
            </div>
          </div>

          {/* Right — image + service cards */}
          <div>
            <div
              className="rounded-3xl overflow-hidden aspect-[4/3] mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#16a34a"}08` }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <TreePine className="w-16 h-16 opacity-10" style={{ color: theme?.primary ?? "#16a34a" }} />
                  <p className="text-sm opacity-20 mt-3">Beautiful landscapes start here</p>
                </div>
              )}
            </div>

            {/* Service cards grid */}
            <div className="grid grid-cols-2 gap-3">
              {items.slice(0, 4).map((item, i) => {
                const Icon = iconMap[item.icon ?? "tree"] ?? TreePine;
                return (
                  <div
                    key={i}
                    className="rounded-xl p-4 border transition-colors hover:border-opacity-30"
                    style={{
                      borderColor: `${theme?.primary ?? "#16a34a"}15`,
                      backgroundColor: `${theme?.primary ?? "#16a34a"}04`,
                    }}
                  >
                    <Icon className="w-4 h-4 mb-2" style={{ color: theme?.primary ?? "#16a34a" }} />
                    <h3 className="text-xs font-bold mb-0.5">{item.title}</h3>
                    <p className="text-[10px] opacity-40">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
