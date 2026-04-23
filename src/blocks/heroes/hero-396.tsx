"use client";

import type { BlockProps } from "@/blocks/types";
import { Glasses, Users, Globe, Sparkles, ArrowRight, Gamepad2 } from "lucide-react";

export default function Hero396(props: BlockProps) {
  const {
    theme,
    heading = "Step Into the Metaverse",
    subheading = "Your Virtual World Awaits",
    bodyText = "Explore immersive 3D environments, connect with a global community, own digital assets, and build the experiences of tomorrow.",
    buttonText = "Enter World",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Worlds Created", value: "14,200+" },
      { title: "Active Explorers", value: "2.8M" },
      { title: "Digital Assets", value: "890K" },
    ],
  } = props;

  const features = [
    { icon: Glasses, title: "VR Ready", desc: "Full headset compatibility with Meta Quest, PSVR, and more" },
    { icon: Users, title: "Social Spaces", desc: "Host events for up to 10,000 concurrent users" },
    { icon: Globe, title: "Open World", desc: "Seamlessly traverse user-created worlds" },
    { icon: Gamepad2, title: "Play to Earn", desc: "Earn rewards through gameplay and creation" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#050510", color: theme?.foreground ?? "#f0e6ff" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Perspective grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{ perspective: "800px" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(${theme?.primary ?? "#7c3aed"}30 1px, transparent 1px),
              linear-gradient(90deg, ${theme?.primary ?? "#7c3aed"}30 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "rotateX(60deg) translateY(-50%)",
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div
        className="absolute top-20 right-10 h-80 w-80 rounded-full blur-[100px] opacity-30 pointer-events-none"
        style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
      />
      <div
        className="absolute bottom-20 left-10 h-60 w-60 rounded-full blur-[80px] opacity-20 pointer-events-none"
        style={{ backgroundColor: theme?.accent ?? "#06b6d4" }}
      />

      <div className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Top stats bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {items.map((stat) => (
              <div key={stat.title} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold" style={{ color: theme?.primary ?? "#7c3aed" }}>
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wider opacity-40 mt-1">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Hero content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium mb-8"
              style={{
                background: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"}30, ${theme?.accent ?? "#06b6d4"}30)`,
                color: theme?.primary ?? "#7c3aed",
              }}
            >
              <Sparkles className="h-4 w-4" />
              {subheading}
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl mb-8">
              <span
                style={{
                  background: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"}, ${theme?.accent ?? "#06b6d4"})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {heading}
              </span>
            </h1>

            <p className="text-lg sm:text-xl opacity-50 mb-12 max-w-2xl mx-auto leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href={buttonUrl}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"}, ${theme?.accent ?? "#06b6d4"})`,
                  boxShadow: `0 12px 40px ${theme?.primary ?? "#7c3aed"}50`,
                }}
              >
                <Glasses className="h-6 w-6" />
                {buttonText}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold backdrop-blur-sm transition-all hover:border-white/20"
              >
                Watch Trailer
              </a>
            </div>
          </div>

          {/* 3D-esque feature cards with perspective */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="group rounded-2xl border p-6 transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer backdrop-blur-sm"
                style={{
                  borderColor: `${theme?.primary ?? "#7c3aed"}20`,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  transform: `perspective(600px) rotateY(${i < 2 ? 2 : -2}deg)`,
                }}
              >
                <feat.icon
                  className="h-8 w-8 mb-4"
                  style={{ color: theme?.primary ?? "#7c3aed" }}
                />
                <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
                <p className="text-sm opacity-40 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
