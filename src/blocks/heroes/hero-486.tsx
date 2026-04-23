"use client";

import type { BlockProps } from "@/blocks/types";
import { Star, Blocks, Rocket, Baby, Gamepad2, TrendingUp } from "lucide-react";

export default function Hero486(props: BlockProps) {
  const {
    theme,
    heading = "Where Imagination Comes to Play",
    subheading = "Educational & Fun Toys for Every Age",
    bodyText = "Discover our hand-picked collection of toys that spark creativity, encourage learning, and deliver endless hours of fun. Safety-tested and parent-approved.",
    buttonText = "Shop by Age",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "0-2 Years", description: "Sensory toys, soft blocks, rattles", value: "85 toys" },
      { title: "3-5 Years", description: "Building sets, pretend play, puzzles", value: "142 toys" },
      { title: "6-9 Years", description: "STEM kits, board games, craft sets", value: "118 toys" },
      { title: "10+ Years", description: "Robotics, strategy games, models", value: "96 toys" },
    ],
  } = props;

  const bestsellers = [
    { name: "Magnetic Building Tiles", price: "$34", rating: "4.9" },
    { name: "Junior Science Lab Kit", price: "$42", rating: "4.8" },
    { name: "Wooden Train Adventure", price: "$55", rating: "4.9" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fffdf5", color: theme?.foreground ?? "#2a1f3d" }}
      className="relative overflow-hidden"
    >
      {/* Playful background dots */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full opacity-10" style={{ backgroundColor: "#ff6b6b" }} />
      <div className="absolute top-32 right-20 w-12 h-12 rounded-full opacity-10" style={{ backgroundColor: "#4ecdc4" }} />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full opacity-10" style={{ backgroundColor: "#ffe66d" }} />
      <div className="absolute bottom-40 right-10 w-14 h-14 rounded-full opacity-10" style={{ backgroundColor: theme?.primary ?? "#7c5cfc" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: `${theme?.primary ?? "#7c5cfc"}15`, color: theme?.primary ?? "#7c5cfc" }}>
              <Blocks className="w-4 h-4" />
              Wonder Toy Shop
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4">
              {heading}
            </h1>
            <p className="text-lg sm:text-xl font-semibold mb-3" style={{ color: theme?.primary ?? "#7c5cfc" }}>
              {subheading}
            </p>
            <p className="text-base opacity-70 mb-8 max-w-lg leading-relaxed">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-lg transition-transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: theme?.primary ?? "#7c5cfc" }}
              >
                <Rocket className="w-5 h-5" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg border-2 transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#7c5cfc", color: theme?.primary ?? "#7c5cfc" }}
              >
                <Star className="w-5 h-5" />
                Bestsellers
              </a>
            </div>

            {/* Age categories */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {items.map((age, i) => {
                const icons = [Baby, Blocks, Gamepad2, Rocket];
                const Icon = icons[i % icons.length];
                const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", theme?.primary ?? "#7c5cfc"];
                return (
                  <div key={i} className="text-center p-4 rounded-2xl border border-black/5 cursor-pointer transition-shadow hover:shadow-md" style={{ backgroundColor: `${colors[i]}10` }}>
                    <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: colors[i] }} />
                    <p className="font-bold text-sm">{age.title}</p>
                    <p className="text-[10px] opacity-50 mt-0.5 leading-tight">{age.description}</p>
                    <p className="text-xs font-semibold mt-2" style={{ color: theme?.primary ?? "#7c5cfc" }}>{age.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — image + bestsellers */}
          <div>
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-3xl mb-6 object-cover max-h-64 shadow-xl" />
            ) : (
              <div className="w-full h-52 rounded-3xl mb-6 flex items-center justify-center shadow-inner" style={{ backgroundColor: `${theme?.primary ?? "#7c5cfc"}10` }}>
                <Blocks className="w-20 h-20 opacity-15" style={{ color: theme?.primary ?? "#7c5cfc" }} />
              </div>
            )}

            <div className="rounded-3xl p-6 border border-black/5 shadow-sm" style={{ backgroundColor: "rgba(255,255,255,0.8)" }}>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5" style={{ color: theme?.primary ?? "#7c5cfc" }} />
                <h3 className="font-bold text-lg">Top Picks This Week</h3>
              </div>
              <div className="space-y-3">
                {bestsellers.map((toy, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: `${theme?.primary ?? "#7c5cfc"}06` }}>
                    <div>
                      <p className="font-semibold text-sm">{toy.name}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Star className="w-3 h-3 fill-current" style={{ color: "#ffe66d" }} />
                        <span className="text-xs opacity-60">{toy.rating}</span>
                      </div>
                    </div>
                    <span className="font-bold" style={{ color: theme?.primary ?? "#7c5cfc" }}>{toy.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs mt-4 opacity-40">Free gift wrapping on all orders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
