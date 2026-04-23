import type { BlockProps } from "@/blocks/types";
import { Heart, Target, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function Hero127(props: BlockProps) {
  const {
    theme,
    heading = "Unlock Your Full Potential With Expert Guidance",
    subheading = "Personalized coaching programs designed to help you break through barriers, build confidence, and create the life you deserve.",
    buttonText = "Book a Free Session",
    buttonUrl = "#",
    secondaryButtonText = "Explore Programs",
    secondaryButtonUrl = "#",
    items = [
      { title: "Career Transition", description: "Navigate change with clarity" },
      { title: "Leadership Development", description: "Lead with authenticity and impact" },
      { title: "Life Balance", description: "Align your priorities and purpose" },
    ],
  } = props;

  const warmColor = theme?.primary ?? "#f97316";
  const coolColor = theme?.accent ?? "#6366f1";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ color: theme?.foreground ?? "#ffffff" }}
    >
      {/* Split gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${warmColor}dd 0%, ${warmColor}99 30%, ${coolColor}99 70%, ${coolColor}dd 100%)`,
        }}
      />

      {/* Soft overlay for depth */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
        style={{ backgroundColor: warmColor }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-15"
        style={{ backgroundColor: coolColor }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: main content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-white/15 backdrop-blur-sm">
              <Heart className="w-4 h-4" />
              Transform Your Journey
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              {heading}
            </h1>

            <p className="mt-6 text-lg opacity-80 leading-relaxed max-w-lg">
              {subheading}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-white hover:opacity-90 transition-opacity"
                style={{ color: warmColor }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white/40 hover:border-white/80 transition-colors"
              >
                {secondaryButtonText}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm opacity-70">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                5,000+ Clients
              </span>
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                94% Goal Achievement
              </span>
            </div>
          </div>

          {/* Right: program cards */}
          <div className="flex flex-col gap-4">
            {items.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/15 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 opacity-80" />
                  <div>
                    <div className="text-lg font-bold">{item.title}</div>
                    <div className="text-sm opacity-60 mt-1">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom motivational note */}
            <div className="mt-2 p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-sm opacity-60 italic">
                &ldquo;The best time to start is now. The second best time is also now.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
