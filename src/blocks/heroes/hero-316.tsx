"use client";

import type { BlockProps } from "@/blocks/types";
import { Heart, MessageCircle, Share2, Verified, Play, Users, TrendingUp } from "lucide-react";

export default function Hero316(props: BlockProps) {
  const {
    theme,
    heading = "Turn Your Audience Into a Business",
    subheading = "The Creator Economy Platform",
    bodyText = "Monetize your content, grow your community, and build a sustainable brand — all from one dashboard. Join 50,000+ creators already earning.",
    buttonText = "Start Creating",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary || "#ec4899";
  const bgColor = theme?.background || "#fafafa";
  const fgColor = theme?.foreground || "#18181b";

  const creators = items.length > 0 ? items : [
    { title: "Sarah Chen", description: "Fitness & Wellness", value: "248K", label: "followers" },
    { title: "Marcus Obi", description: "Tech Reviews", value: "512K", label: "followers" },
    { title: "Amara Diallo", description: "Fashion & Style", value: "183K", label: "followers" },
  ];

  return (
    <section
      style={{ backgroundColor: bgColor, color: fgColor }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: `linear-gradient(135deg, ${primaryColor}, #8b5cf6)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[100px] opacity-10"
        style={{ background: `linear-gradient(135deg, #3b82f6, ${primaryColor})` }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
              style={{ backgroundColor: `${primaryColor}10`, color: primaryColor }}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              {heading}
            </h1>

            <p className="text-base md:text-lg opacity-60 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white transition-transform hover:scale-105 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, #8b5cf6)`,
                  boxShadow: `0 8px 32px ${primaryColor}30`,
                }}
              >
                {buttonText}
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-70">
                <Play className="w-4 h-4" style={{ color: primaryColor }} />
                See How It Works
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{
                      borderColor: bgColor,
                      backgroundColor: `${primaryColor}${20 + i * 15}`,
                      color: primaryColor,
                    }}
                  >
                    <Users className="w-4 h-4" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold">50,000+ creators</div>
                <div className="text-xs opacity-50">earning on the platform</div>
              </div>
            </div>
          </div>

          {/* Right - social feed preview */}
          <div className="space-y-4">
            {creators.map((creator, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 border transition-transform hover:scale-[1.01]"
                style={{
                  backgroundColor: `${fgColor}03`,
                  borderColor: `${fgColor}08`,
                  boxShadow: `0 2px 12px ${fgColor}05`,
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor}, #8b5cf6)`,
                    }}
                  >
                    {creator.title?.charAt(0)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm">{creator.title}</span>
                      <Verified className="w-4 h-4" style={{ color: primaryColor }} />
                    </div>
                    <div className="text-xs opacity-50">{creator.description}</div>

                    {/* Mock post content */}
                    <div
                      className="mt-3 rounded-xl h-28 flex items-center justify-center"
                      style={{ backgroundColor: `${fgColor}05` }}
                    >
                      <Play
                        className="w-8 h-8 opacity-20"
                        style={{ color: primaryColor }}
                      />
                    </div>

                    {/* Engagement */}
                    <div className="flex items-center gap-5 mt-3">
                      <button className="flex items-center gap-1.5 text-xs opacity-50 hover:opacity-100 transition-opacity">
                        <Heart className="w-4 h-4" style={{ color: primaryColor }} />
                        <span>2.4K</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-xs opacity-50 hover:opacity-100 transition-opacity">
                        <MessageCircle className="w-4 h-4" />
                        <span>186</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-xs opacity-50 hover:opacity-100 transition-opacity">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                      <span className="ml-auto text-xs font-semibold" style={{ color: primaryColor }}>
                        {creator.value} {creator.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
