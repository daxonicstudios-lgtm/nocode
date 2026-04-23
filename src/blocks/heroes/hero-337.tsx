"use client";

import type { BlockProps } from "@/blocks/types";
import { Shield, Award, Swords, ChevronRight, Users, Target } from "lucide-react";

export default function Hero337(props: BlockProps) {
  const {
    theme,
    heading = "Discipline. Strength. Respect.",
    subheading = "Premier Martial Arts Academy",
    bodyText = "Build confidence, self-defense skills, and mental toughness through expert-led training. Classes for kids, teens, and adults — from white belt to black belt and beyond.",
    buttonText = "Claim Your Free Trial Class",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "White", description: "Beginner" },
      { title: "Yellow", description: "Foundations" },
      { title: "Green", description: "Intermediate" },
      { title: "Brown", description: "Advanced" },
      { title: "Black", description: "Expert" },
    ],
  } = props;

  const beltColors: Record<string, string> = {
    White: "#FFFFFF",
    Yellow: "#FACC15",
    Green: "#22C55E",
    Brown: "#92400E",
    Black: "#1E1E1E",
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0C0C0C", color: theme?.foreground ?? "#FAFAFA" }}
      className="relative overflow-hidden"
    >
      {/* Bold accent bar left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: theme?.primary ?? "#EF4444" }} />

      {/* Martial arts pattern */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 rotate-45 opacity-5" style={{ borderColor: theme?.primary ?? "#EF4444" }} />
      <div className="absolute bottom-10 right-20 w-20 h-20 border-4 rotate-12 opacity-5" style={{ borderColor: theme?.primary ?? "#EF4444" }} />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#EF4444" }}>
                <Swords className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-black uppercase tracking-widest" style={{ color: theme?.primary ?? "#EF4444" }}>
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-none mb-6 uppercase tracking-tight">
              {heading}
            </h1>

            <p className="text-base opacity-50 mb-8 max-w-md leading-relaxed">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-black text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ backgroundColor: theme?.primary ?? "#EF4444" }}
            >
              <Target className="w-5 h-5" />
              {buttonText}
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2" style={{ color: theme?.primary ?? "#EF4444" }} />
                <div className="text-2xl font-black">500+</div>
                <div className="text-xs opacity-40 uppercase tracking-wider">Active Students</div>
              </div>
              <div className="text-center">
                <Award className="w-6 h-6 mx-auto mb-2" style={{ color: theme?.primary ?? "#EF4444" }} />
                <div className="text-2xl font-black">15</div>
                <div className="text-xs opacity-40 uppercase tracking-wider">Years Teaching</div>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 mx-auto mb-2" style={{ color: theme?.primary ?? "#EF4444" }} />
                <div className="text-2xl font-black">8</div>
                <div className="text-xs opacity-40 uppercase tracking-wider">Master Instructors</div>
              </div>
            </div>
          </div>

          {/* Belt progression */}
          <div className="relative">
            <h3 className="text-xs font-black uppercase tracking-widest opacity-40 mb-6 text-center">Belt Progression</h3>
            <div className="space-y-3">
              {items.map((item, i) => {
                const beltColor = beltColors[item.title ?? ""] ?? theme?.primary ?? "#EF4444";
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 border border-white/10 hover:border-white/25 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div
                        className="w-12 h-3 rounded-sm shadow-inner"
                        style={{ backgroundColor: beltColor, border: item.title === "White" ? "1px solid #444" : "none" }}
                      />
                      <div>
                        <span className="font-bold text-sm">{item.title} Belt</span>
                        <span className="text-xs opacity-40 ml-2">— {item.description}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-20" />
                  </div>
                );
              })}
            </div>

            <div
              className="mt-6 p-4 text-center border-2 border-dashed"
              style={{ borderColor: theme?.primary ? `${theme.primary}40` : "#EF444440" }}
            >
              <span className="text-sm font-bold" style={{ color: theme?.primary ?? "#EF4444" }}>
                Start your journey — No experience needed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
