import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Star, Box, Sparkles } from "lucide-react";

export default function Hero114(props: BlockProps) {
  const {
    theme,
    heading = "Beautifully Engineered Products",
    subheading = "Where minimal design meets maximum performance. Crafted with precision for those who appreciate the details.",
    buttonText = "Explore Products",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
    items = [
      { title: "AirPods Ultra", description: "Spatial audio redefined", value: "$299" },
      { title: "Pixel Watch 3", description: "Health meets elegance", value: "$399" },
      { title: "Studio Display", description: "5K Retina brilliance", value: "$1,599" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#09090b", color: theme?.foreground ?? "#fafafa" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-20"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-15"
        style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
      />

      {/* Floating cards */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Card 1 - top left */}
        <div
          className="absolute top-[12%] left-[8%] w-48 h-32 rounded-2xl border backdrop-blur-md p-4 rotate-[-8deg]"
          style={{
            borderColor: `${theme?.primary ?? "#6366f1"}25`,
            backgroundColor: `${theme?.primary ?? "#6366f1"}08`,
          }}
        >
          <Star className="w-5 h-5 mb-2" style={{ color: theme?.accent ?? "#f59e0b" }} />
          <div className="text-xs font-semibold">4.9 Rating</div>
          <div className="text-[10px] opacity-40 mt-0.5">12,000+ reviews</div>
        </div>

        {/* Card 2 - top right */}
        <div
          className="absolute top-[18%] right-[10%] w-44 h-28 rounded-2xl border backdrop-blur-md p-4 rotate-[6deg]"
          style={{
            borderColor: `${theme?.accent ?? "#f59e0b"}25`,
            backgroundColor: `${theme?.accent ?? "#f59e0b"}08`,
          }}
        >
          <Sparkles className="w-5 h-5 mb-2" style={{ color: theme?.primary ?? "#6366f1" }} />
          <div className="text-xs font-semibold">Award Winner</div>
          <div className="text-[10px] opacity-40 mt-0.5">Red Dot 2026</div>
        </div>

        {/* Card 3 - bottom left */}
        <div
          className="absolute bottom-[15%] left-[12%] w-52 h-36 rounded-2xl border backdrop-blur-md p-4 rotate-[5deg]"
          style={{
            borderColor: `${theme?.primary ?? "#6366f1"}20`,
            backgroundColor: `${theme?.primary ?? "#6366f1"}05`,
          }}
        >
          <Box className="w-5 h-5 mb-2 opacity-60" />
          <div className="text-xs font-semibold">Ships Worldwide</div>
          <div className="text-[10px] opacity-40 mt-0.5">Free 2-day delivery</div>
        </div>

        {/* Card 4 - bottom right */}
        <div
          className="absolute bottom-[20%] right-[6%] w-40 h-28 rounded-2xl border backdrop-blur-md p-4 rotate-[-4deg]"
          style={{
            borderColor: `${theme?.primary ?? "#6366f1"}20`,
            backgroundColor: `${theme?.primary ?? "#6366f1"}05`,
          }}
        >
          <div className="text-2xl font-bold" style={{ color: theme?.primary ?? "#6366f1" }}>50K+</div>
          <div className="text-[10px] opacity-40 mt-0.5">Happy customers</div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
          style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}15`, color: theme?.primary ?? "#6366f1" }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          New Collection 2026
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          {heading}
        </h1>

        <p className="mt-6 text-base sm:text-lg opacity-50 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/25 transition-colors"
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Product showcase strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border text-left hover:border-opacity-50 transition-colors cursor-pointer"
              style={{
                borderColor: `${theme?.primary ?? "#6366f1"}15`,
                backgroundColor: `${theme?.primary ?? "#6366f1"}05`,
              }}
            >
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="text-xs opacity-40 mt-1">{item.description}</div>
              <div
                className="text-lg font-bold mt-3"
                style={{ color: theme?.primary ?? "#6366f1" }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
