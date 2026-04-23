"use client";

import type { BlockProps } from "@/blocks/types";
import { PawPrint, Fish, Bird, TreePine, Ticket, MapPin, Clock } from "lucide-react";

export default function Hero455(props: BlockProps) {
  const {
    theme,
    heading = "Discover the Animal Kingdom",
    subheading = "Coastal Wildlife Zoo & Aquarium",
    bodyText = "Home to over 5,000 animals across 400 species. Explore immersive habitats from African savannas to coral reefs, all in one extraordinary destination.",
    buttonText = "Plan Your Visit",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "African Safari", description: "Lions, elephants, giraffes", icon: "paw" },
      { title: "Ocean Pavilion", description: "Sharks, rays, seahorses", icon: "fish" },
      { title: "Aviary Walk", description: "200+ tropical birds", icon: "bird" },
      { title: "Rainforest Trail", description: "Primates & reptiles", icon: "tree" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    paw: <PawPrint className="w-7 h-7" />,
    fish: <Fish className="w-7 h-7" />,
    bird: <Bird className="w-7 h-7" />,
    tree: <TreePine className="w-7 h-7" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0d2818", color: theme?.foreground ?? "#e6f2ec" }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Animal silhouette decorations */}
      <div className="absolute inset-0 opacity-5 flex items-end justify-around px-8">
        <PawPrint className="w-40 h-40 transform -rotate-12" />
        <Fish className="w-32 h-32 transform rotate-6" />
        <Bird className="w-36 h-36" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <PawPrint className="w-8 h-8" style={{ color: theme?.primary ?? "#34d399" }} />
              <div>
                <p className="text-sm font-bold tracking-widest uppercase" style={{ color: theme?.primary ?? "#34d399" }}>
                  {subheading}
                </p>
                <div className="flex items-center gap-4 text-xs opacity-60 mt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Open 9 AM - 6 PM
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Coastal Drive
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-lg opacity-70 mb-10 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#34d399", color: theme?.background ?? "#0d2818" }}
            >
              <Ticket className="w-5 h-5 mr-2" />
              {buttonText}
            </a>

            {/* Family pricing */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { label: "Adult", price: "$34" },
                { label: "Child (3-12)", price: "$22" },
                { label: "Family Pack", price: "$99" },
              ].map((tier, i) => (
                <div
                  key={i}
                  className="text-center p-3 rounded-xl"
                  style={{ backgroundColor: `${theme?.primary ?? "#34d399"}12` }}
                >
                  <p className="text-xl font-bold" style={{ color: theme?.primary ?? "#34d399" }}>
                    {tier.price}
                  </p>
                  <p className="text-xs opacity-60">{tier.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Exhibit highlights */}
          <div className="grid grid-cols-2 gap-4">
            {items.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl border transition-transform hover:scale-105 cursor-pointer"
                style={{
                  borderColor: `${theme?.primary ?? "#34d399"}25`,
                  backgroundColor: `${theme?.primary ?? "#34d399"}08`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${theme?.primary ?? "#34d399"}20`, color: theme?.primary ?? "#34d399" }}
                >
                  {iconMap[item.icon ?? "paw"] ?? <PawPrint className="w-7 h-7" />}
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm opacity-60 leading-snug">{item.description}</p>
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme?.primary ?? "#34d399" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
          {[
            { num: "5,000+", label: "Animals" },
            { num: "400+", label: "Species" },
            { num: "50", label: "Acres" },
            { num: "1.2M", label: "Annual Visitors" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-black" style={{ color: theme?.primary ?? "#34d399" }}>{stat.num}</p>
              <p className="text-sm opacity-60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
