"use client";

import type { BlockProps } from "@/blocks/types";
import { Gamepad2, Zap, Trophy, Swords } from "lucide-react";

export default function Hero261(props: BlockProps) {
  const {
    theme,
    heading = "Level Up Your Game",
    subheading = "Next-Gen Gaming Experience",
    bodyText = "Immerse yourself in stunning worlds, compete with players globally, and unlock achievements that matter. Your next adventure starts here.",
    buttonText = "Play Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "500K+", description: "Active Players" },
      { title: "120+", description: "Game Titles" },
      { title: "99.9%", description: "Uptime" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#0a0a0f",
        color: theme?.foreground ?? "#e2e2ef",
      }}
      className="relative overflow-hidden"
    >
      {/* Neon grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${theme?.primary ?? "#8b5cf6"}22 1px, transparent 1px), linear-gradient(90deg, ${theme?.primary ?? "#8b5cf6"}22 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Neon glow orbs */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-[120px] opacity-30"
        style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[140px] opacity-20"
        style={{ backgroundColor: theme?.accent ?? "#06b6d4" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Gamepad2
                className="w-5 h-5"
                style={{ color: theme?.primary ?? "#8b5cf6" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border"
                style={{
                  color: theme?.primary ?? "#8b5cf6",
                  borderColor: `${theme?.primary ?? "#8b5cf6"}44`,
                  backgroundColor: `${theme?.primary ?? "#8b5cf6"}11`,
                }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] mb-6 tracking-tight">
              {heading.split(" ").map((word, i) => (
                <span
                  key={i}
                  style={
                    i % 2 === 0
                      ? {
                          WebkitTextStroke: `1px ${theme?.primary ?? "#8b5cf6"}`,
                          color: "transparent",
                        }
                      : { color: theme?.foreground ?? "#e2e2ef" }
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            <p className="text-base sm:text-lg opacity-70 mb-8 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#8b5cf6",
                  color: "#fff",
                  boxShadow: `0 0 30px ${theme?.primary ?? "#8b5cf6"}66`,
                }}
              >
                <Zap className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider border transition-all hover:scale-105"
                style={{
                  borderColor: `${theme?.primary ?? "#8b5cf6"}44`,
                  color: theme?.foreground ?? "#e2e2ef",
                }}
              >
                <Trophy className="w-4 h-4" />
                Leaderboard
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {items.map((item, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-black"
                    style={{ color: theme?.primary ?? "#8b5cf6" }}
                  >
                    {item.title}
                  </div>
                  <div className="text-xs opacity-50 uppercase tracking-wider mt-1">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - image or controller graphic */}
          <div className="relative flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="w-full max-w-md rounded-2xl"
                style={{
                  boxShadow: `0 0 60px ${theme?.primary ?? "#8b5cf6"}33`,
                }}
              />
            ) : (
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                {/* Rotating border */}
                <div
                  className="absolute inset-0 rounded-full animate-spin"
                  style={{
                    animationDuration: "8s",
                    background: `conic-gradient(from 0deg, ${theme?.primary ?? "#8b5cf6"}, transparent, ${theme?.accent ?? "#06b6d4"}, transparent, ${theme?.primary ?? "#8b5cf6"})`,
                    padding: "2px",
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{ backgroundColor: theme?.background ?? "#0a0a0f" }}
                  />
                </div>
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Swords
                    className="w-24 h-24 sm:w-32 sm:h-32"
                    style={{ color: theme?.primary ?? "#8b5cf6" }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
