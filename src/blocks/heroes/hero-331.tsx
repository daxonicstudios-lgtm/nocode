"use client";

import type { BlockProps } from "@/blocks/types";
import { Heart, Shield, Clock, Star, Smile, Sun } from "lucide-react";

export default function Hero331(props: BlockProps) {
  const {
    theme,
    heading = "Where Little Ones Learn, Play & Grow",
    subheading = "Trusted Childcare Since 2012",
    bodyText = "A safe, nurturing environment where your child builds confidence, friendships, and a love for learning. Licensed caregivers, small class sizes, and a curriculum designed around joy.",
    buttonText = "Schedule a Tour",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Ages 6 Weeks – 5 Years", icon: "smile" },
      { title: "Licensed & CPR Certified Staff", icon: "shield" },
      { title: "Open 6:30 AM – 6:30 PM", icon: "clock" },
      { title: "4.9 Star Parent Rating", icon: "star" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    smile: <Smile className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
    clock: <Clock className="w-5 h-5" />,
    star: <Star className="w-5 h-5" />,
    heart: <Heart className="w-5 h-5" />,
    sun: <Sun className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#FFF9F0", color: theme?.foreground ?? "#3D2C1E" }}
      className="relative overflow-hidden"
    >
      {/* Playful floating shapes */}
      <div className="absolute top-8 left-6 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: theme?.primary ?? "#FF6B9D" }} />
      <div className="absolute top-32 right-10 w-14 h-14 rounded-2xl rotate-12 opacity-15" style={{ backgroundColor: theme?.accent ?? "#4ECDC4" }} />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full opacity-10" style={{ backgroundColor: theme?.primary ?? "#FF6B9D" }} />
      <div className="absolute bottom-10 right-1/3 w-10 h-10 rounded-xl rotate-45 opacity-15" style={{ backgroundColor: theme?.accent ?? "#4ECDC4" }} />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}20` : "#FF6B9D20", color: theme?.primary ?? "#FF6B9D" }}
            >
              {subheading}
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-base md:text-lg opacity-80 mb-8 leading-relaxed max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: theme?.primary ?? "#FF6B9D" }}
              >
                <Heart className="w-5 h-5" />
                {buttonText}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-2xl"
                  style={{ backgroundColor: theme?.background ? `${theme.background}` : "#FFF3E8" }}
                >
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-xl text-white shrink-0"
                    style={{ backgroundColor: theme?.primary ?? "#FF6B9D" }}
                  >
                    {iconMap[item.icon ?? "heart"] ?? <Heart className="w-5 h-5" />}
                  </span>
                  <span className="text-xs md:text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden shadow-2xl border-4"
              style={{ borderColor: theme?.primary ?? "#FF6B9D" }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="Happy children at daycare" className="w-full h-full object-cover" />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-4"
                  style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#FF6B9D15" }}
                >
                  <Sun className="w-16 h-16" style={{ color: theme?.primary ?? "#FF6B9D" }} />
                  <span className="text-lg font-bold opacity-60">Sunshine Daycare</span>
                </div>
              )}
            </div>
            {/* Decorative badge */}
            <div
              className="absolute -bottom-4 -left-4 md:left-4 px-5 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: theme?.accent ?? "#4ECDC4" }}
            >
              <div className="text-2xl font-extrabold">250+</div>
              <div className="text-xs font-medium opacity-90">Happy Families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
