"use client";

import type { BlockProps } from "@/blocks/types";
import { Heart, Clock, MapPin, BookOpen, Users, ArrowRight } from "lucide-react";

export default function Hero298(props: BlockProps) {
  const {
    theme,
    heading = "You Are Welcome Here",
    subheading = "Grace Community Church",
    bodyText = "A place where faith comes alive, relationships are real, and everyone belongs. Join us this Sunday as we grow together in love, hope, and purpose.",
    buttonText = "Plan Your Visit",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Sunday Worship", description: "9:00 AM & 11:00 AM", icon: "clock" },
      { title: "Bible Study", description: "Wednesday 7:00 PM", icon: "book" },
      { title: "Youth Group", description: "Friday 6:30 PM", icon: "users" },
    ],
  } = props;

  const iconMap: Record<string, typeof Clock> = {
    clock: Clock,
    book: BookOpen,
    users: Users,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f8f5f0", color: theme?.foreground ?? "#2c2417" }}
      className="min-h-screen px-5 py-20 lg:py-28"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Cross / Heart accent */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ backgroundColor: `${theme?.primary ?? "#7c5c3e"}15` }}
        >
          <Heart className="w-5 h-5" style={{ color: theme?.primary ?? "#7c5c3e" }} />
        </div>

        <p
          className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
          style={{ color: theme?.primary ?? "#7c5c3e" }}
        >
          {subheading}
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6 tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
          {heading}
        </h1>

        <p className="text-base sm:text-lg opacity-60 leading-relaxed max-w-2xl mx-auto mb-10">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#7c5c3e",
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-2 text-xs opacity-50">
            <MapPin className="w-3.5 h-3.5" />
            <span>1240 Maple Avenue, Springfield</span>
          </div>
        </div>

        {/* Image */}
        {imageUrl && (
          <div className="aspect-[16/7] rounded-3xl overflow-hidden mb-16">
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Service times */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {items.slice(0, 3).map((item, i) => {
            const IconComp = iconMap[item.icon ?? "clock"] ?? Clock;
            return (
              <div
                key={i}
                className="rounded-2xl p-6 border text-center"
                style={{
                  borderColor: `${theme?.primary ?? "#7c5c3e"}15`,
                  backgroundColor: `${theme?.primary ?? "#7c5c3e"}05`,
                }}
              >
                <IconComp
                  className="w-6 h-6 mx-auto mb-4"
                  style={{ color: theme?.primary ?? "#7c5c3e" }}
                />
                <h3 className="text-base font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-50">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Welcoming message */}
        <div
          className="mt-16 pt-10 border-t max-w-lg mx-auto"
          style={{ borderColor: `${theme?.foreground ?? "#2c2417"}10` }}
        >
          <p className="text-sm italic opacity-50 leading-relaxed">
            &ldquo;Come as you are. There is no perfect way to start — just start.
            We are here for you, wherever you are on your journey.&rdquo;
          </p>
          <p className="text-xs font-semibold mt-3 opacity-40">— Pastor David & Rachel Thompson</p>
        </div>
      </div>
    </section>
  );
}
