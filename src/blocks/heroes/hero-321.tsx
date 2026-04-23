"use client";

import type { BlockProps } from "@/blocks/types";
import { Heart, ArrowRight, Users, Globe, HandHeart, TrendingUp } from "lucide-react";

export default function Hero321(props: BlockProps) {
  const {
    theme,
    heading = "Together, We Can End Child Hunger",
    subheading = "Hope Foundation",
    bodyText = "Every child deserves a full meal. Your donation provides nutritious food, clean water, and hope to children across 14 countries. We've fed 2.3 million children this year — help us reach 5 million.",
    buttonText = "Donate Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Meals Served", value: "2.3M", description: "Children fed this year" },
      { title: "Countries", value: "14", description: "Active regions" },
      { title: "Volunteers", value: "8,500+", description: "Dedicated helpers" },
    ],
  } = props;

  const goalPercent = 46;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fefcf3", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-screen px-5 py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                backgroundColor: `${theme?.primary ?? "#e85d3a"}12`,
                color: theme?.primary ?? "#e85d3a",
              }}
            >
              <HandHeart className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Progress toward goal */}
            <div className="mb-8 max-w-lg">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-sm font-semibold">Fundraising Goal</span>
                <span className="text-xs opacity-50">$2.3M of $5M raised</span>
              </div>
              <div
                className="w-full h-3 rounded-full overflow-hidden"
                style={{ backgroundColor: `${theme?.primary ?? "#e85d3a"}15` }}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${goalPercent}%`,
                    backgroundColor: theme?.primary ?? "#e85d3a",
                  }}
                />
              </div>
              <p className="text-xs opacity-40 mt-2">
                {goalPercent}% of our annual goal — every dollar counts
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#e85d3a", color: "#ffffff" }}
              >
                <Heart className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-colors hover:opacity-80"
                style={{ borderColor: `${theme?.foreground ?? "#1a1a1a"}20` }}
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Impact stats */}
            <div className="grid grid-cols-3 gap-6">
              {items.slice(0, 3).map((item, i) => {
                const icons = [TrendingUp, Globe, Users];
                const Icon = icons[i] ?? TrendingUp;
                return (
                  <div key={i}>
                    <Icon
                      className="w-4 h-4 mb-2"
                      style={{ color: theme?.primary ?? "#e85d3a" }}
                    />
                    <div className="text-xl sm:text-2xl font-bold mb-0.5">{item.value}</div>
                    <div className="text-[11px] opacity-40">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — emotional image / story card */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]"
              style={{ backgroundColor: `${theme?.primary ?? "#e85d3a"}08` }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <Heart
                    className="w-16 h-16 mb-6 opacity-20"
                    style={{ color: theme?.primary ?? "#e85d3a" }}
                  />
                  <p className="text-lg font-semibold opacity-30 mb-2">Every child matters</p>
                  <p className="text-sm opacity-20">Your generosity changes lives</p>
                </div>
              )}
            </div>

            {/* Floating testimonial card */}
            <div
              className="absolute -bottom-4 -left-4 sm:left-auto sm:-right-4 rounded-2xl p-5 shadow-xl max-w-[260px]"
              style={{
                backgroundColor: theme?.background ?? "#fefcf3",
                borderLeft: `3px solid ${theme?.primary ?? "#e85d3a"}`,
              }}
            >
              <p className="text-xs italic leading-relaxed opacity-60 mb-3">
                &ldquo;Because of your support, my daughter eats three meals a day and goes to school with energy and hope.&rdquo;
              </p>
              <p className="text-[10px] font-bold opacity-40">— Amina, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
