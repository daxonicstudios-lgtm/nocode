"use client";

import type { BlockProps } from "@/blocks/types";
import { Sofa, Truck, ArrowRight, Palette, BadgeCheck, Ruler, Sparkles } from "lucide-react";

export default function Hero363(props: BlockProps) {
  const {
    theme,
    heading = "Furniture That Feels Like Home",
    subheading = "Artisan Living Co.",
    bodyText = "Thoughtfully designed pieces built with sustainable materials. From contemporary minimalism to warm mid-century style, find furniture that fits your life.",
    buttonText = "Take the Style Quiz",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Living Room", description: "Sofas, chairs, coffee tables & media units", imageUrl: "" },
      { title: "Bedroom", description: "Beds, nightstands, dressers & wardrobes", imageUrl: "" },
      { title: "Dining", description: "Tables, chairs, sideboards & bar carts", imageUrl: "" },
      { title: "Home Office", description: "Desks, shelving & ergonomic seating", imageUrl: "" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf8f5", color: theme?.foreground ?? "#292524" }}
      className="min-h-screen px-5 py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Warm ambient */}
      <div
        className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full blur-[180px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#a3764a" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header area */}
        <div className="flex flex-wrap items-start justify-between gap-6 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#a3764a"}12`, color: theme?.primary ?? "#a3764a" }}
            >
              <Sofa className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 tracking-tight max-w-2xl">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed max-w-lg">
              {bodyText}
            </p>
          </div>

          {/* Free delivery badge */}
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-2xl border shrink-0"
            style={{
              borderColor: `${theme?.primary ?? "#a3764a"}20`,
              backgroundColor: `${theme?.primary ?? "#a3764a"}06`,
            }}
          >
            <Truck className="w-6 h-6" style={{ color: theme?.primary ?? "#a3764a" }} />
            <div>
              <div className="text-sm font-bold">Free Delivery</div>
              <div className="text-xs opacity-40">On orders over $500</div>
            </div>
            <BadgeCheck className="w-5 h-5 ml-2" style={{ color: theme?.primary ?? "#a3764a" }} />
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-transform hover:scale-105 text-white"
            style={{ backgroundColor: theme?.primary ?? "#a3764a" }}
          >
            <Palette className="w-4 h-4" />
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border-2 transition-colors"
            style={{ borderColor: theme?.primary ?? "#a3764a", color: theme?.primary ?? "#a3764a" }}
          >
            <Sparkles className="w-4 h-4" />
            Shop New Arrivals
          </a>
        </div>

        {/* Main showcase */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Large image */}
          <div className="lg:col-span-2">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Room showcase"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
              />
            ) : (
              <div
                className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${theme?.primary ?? "#a3764a"}08` }}
              >
                <Sofa className="w-20 h-20 opacity-15" style={{ color: theme?.primary ?? "#a3764a" }} />
              </div>
            )}
          </div>

          {/* Style quiz card */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{ backgroundColor: `${theme?.primary ?? "#a3764a"}08` }}
          >
            <div>
              <Palette className="w-10 h-10 mb-4" style={{ color: theme?.primary ?? "#a3764a" }} />
              <h3 className="text-xl font-bold mb-2">Not Sure Where to Start?</h3>
              <p className="text-sm opacity-50 leading-relaxed mb-6">
                Take our 2-minute style quiz and get a personalized room plan with handpicked pieces that match your taste and budget.
              </p>
            </div>
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#a3764a" }}
            >
              Start Quiz
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Room categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.slice(0, 4).map((room, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="group p-5 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-1"
              style={{ borderColor: `${theme?.primary ?? "#a3764a"}12` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${theme?.primary ?? "#a3764a"}10` }}
              >
                {i === 0 ? <Sofa className="w-5 h-5" style={{ color: theme?.primary ?? "#a3764a" }} /> :
                 i === 1 ? <Ruler className="w-5 h-5" style={{ color: theme?.primary ?? "#a3764a" }} /> :
                 i === 2 ? <Sparkles className="w-5 h-5" style={{ color: theme?.primary ?? "#a3764a" }} /> :
                 <Palette className="w-5 h-5" style={{ color: theme?.primary ?? "#a3764a" }} />}
              </div>
              <h4 className="font-bold text-sm mb-1">{room.title}</h4>
              <p className="text-xs opacity-40 leading-relaxed">{room.description}</p>
              <div className="flex items-center gap-1 mt-3 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: theme?.primary ?? "#a3764a" }}>
                Shop Now <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
