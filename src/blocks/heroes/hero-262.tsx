"use client";

import type { BlockProps } from "@/blocks/types";
import { PawPrint, Heart, Star, Shield } from "lucide-react";

export default function Hero262(props: BlockProps) {
  const {
    theme,
    heading = "Happy Pets, Happy Life",
    subheading = "Premium Pet Care Services",
    bodyText = "From grooming to training, veterinary care to boarding — we treat your furry family members with the love and attention they deserve.",
    buttonText = "Book a Visit",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Grooming", description: "Full spa treatment for your pet", icon: "star" },
      { title: "Training", description: "Positive reinforcement methods", icon: "shield" },
      { title: "Boarding", description: "Home-away-from-home comfort", icon: "heart" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    star: <Star className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
    heart: <Heart className="w-5 h-5" />,
  };

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#fef7f0",
        color: theme?.foreground ?? "#3d2c1e",
      }}
      className="relative overflow-hidden"
    >
      {/* Scattered paw prints background */}
      <div className="absolute inset-0 opacity-[0.04]">
        {[...Array(12)].map((_, i) => (
          <PawPrint
            key={i}
            className="absolute"
            style={{
              width: `${20 + (i % 4) * 10}px`,
              height: `${20 + (i % 4) * 10}px`,
              top: `${(i * 17) % 90}%`,
              left: `${(i * 23 + 5) % 95}%`,
              transform: `rotate(${i * 30}deg)`,
              color: theme?.foreground ?? "#3d2c1e",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="w-full max-w-lg rounded-[2rem] shadow-xl"
              />
            ) : (
              <div
                className="w-full max-w-sm aspect-square rounded-[2rem] flex items-center justify-center"
                style={{
                  backgroundColor: `${theme?.primary ?? "#f59e0b"}15`,
                  border: `3px dashed ${theme?.primary ?? "#f59e0b"}44`,
                }}
              >
                <PawPrint
                  className="w-32 h-32 opacity-30"
                  style={{ color: theme?.primary ?? "#f59e0b" }}
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: `${theme?.primary ?? "#f59e0b"}18`,
                color: theme?.primary ?? "#f59e0b",
              }}
            >
              <PawPrint className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-70 mb-8 leading-relaxed max-w-xl">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base transition-transform hover:scale-105 shadow-lg"
              style={{
                backgroundColor: theme?.primary ?? "#f59e0b",
                color: "#fff",
              }}
            >
              <Heart className="w-4 h-4" />
              {buttonText}
            </a>

            {/* Service cards */}
            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl text-center"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#f59e0b"}0a`,
                    border: `1px solid ${theme?.primary ?? "#f59e0b"}1a`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#f59e0b"}20`,
                      color: theme?.primary ?? "#f59e0b",
                    }}
                  >
                    {iconMap[item.icon ?? "heart"] ?? <Heart className="w-5 h-5" />}
                  </div>
                  <div className="font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-xs opacity-60">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
