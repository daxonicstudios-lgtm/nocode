import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, Rocket } from "lucide-react";

export default function Hero104(props: BlockProps) {
  const {
    theme,
    heading = "Where Ideas Become Startups",
    subheading = "Launch faster. Scale smarter. Grow bigger.",
    bodyText = "From concept to customers in weeks, not months. Our platform gives founders the tools to validate, build, and scale with confidence.",
    buttonText = "Join the Waitlist",
    buttonUrl = "#",
    secondaryButtonText = "See How It Works",
    secondaryButtonUrl = "#",
  } = props;

  const primaryColor = theme?.primary ?? "#f97316";
  const accentColor = theme?.accent ?? "#8b5cf6";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ffffff" }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 hero104-bg" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${theme?.foreground ?? "#ffffff"} 1px, transparent 1px), linear-gradient(90deg, ${theme?.foreground ?? "#ffffff"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}22, ${accentColor}22)`,
            border: `1px solid ${primaryColor}44`,
            color: primaryColor,
          }}
        >
          <Rocket className="w-4 h-4" />
          For Ambitious Founders
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
          <span>{heading.split(" ").slice(0, -1).join(" ")} </span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
            }}
          >
            {heading.split(" ").slice(-1)}
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-4 opacity-80">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-xl mx-auto mb-10 opacity-40 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold transition-all hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
              color: "#ffffff",
              boxShadow: `0 8px 32px ${primaryColor}44`,
            }}
          >
            {buttonText}
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href={secondaryButtonUrl}
            className="px-8 py-4 rounded-2xl text-base font-semibold transition-colors hover:bg-white/5"
            style={{
              color: theme?.foreground ?? "#ffffff",
              border: `1px solid ${theme?.foreground ?? "#ffffff"}1a`,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Trusted by */}
        <div className="mt-16 opacity-30">
          <p className="text-sm font-medium mb-4 tracking-widest uppercase">Trusted by 2,000+ startups</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["TechCo", "LaunchPad", "ScaleUp", "GrowthIO"].map((name) => (
              <span key={name} className="text-lg font-bold tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero104-bg {
          background: linear-gradient(
            -45deg,
            ${theme?.background ?? "#0a0a0a"},
            ${primaryColor}15,
            ${theme?.background ?? "#0a0a0a"},
            ${accentColor}15
          );
          background-size: 400% 400%;
          animation: hero104Gradient 12s ease infinite;
        }
        @keyframes hero104Gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
