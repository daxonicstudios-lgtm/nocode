import type { BlockProps } from "@/blocks/types";
import { Zap, ArrowRight, Shield, Cpu } from "lucide-react";

export default function Hero076(props: BlockProps) {
  const {
    theme,
    heading = "The Future of Productivity Is Here",
    subheading = "AI-powered tools that 10x your workflow",
    bodyText = "Join 50,000+ teams already using our platform to automate repetitive tasks, collaborate in real time, and ship faster than ever.",
    buttonText = "Get Early Access",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      className="min-h-[80vh] flex items-center relative overflow-hidden"
      style={{
        background: theme?.background
          ? theme.background
          : `linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)`,
        color: theme?.foreground ?? "#e2e8f0",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-5 py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text Side */}
          <div className="flex-1 text-center md:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{
                borderColor: theme?.primary ? `${theme.primary}50` : "#818cf850",
                color: theme?.primary ?? "#818cf8",
              }}
            >
              <Zap className="w-3.5 h-3.5" />
              Now in Public Beta
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {heading}
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg mx-auto md:mx-0">
              {subheading}
            </p>
            <p className="mt-3 text-sm opacity-40 max-w-md mx-auto md:mx-0">
              {bodyText}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-bold text-base hover:opacity-90 transition-opacity"
                style={{
                  background: theme?.primary
                    ? theme.primary
                    : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-base border border-white/20 hover:border-white/40 transition-colors"
              >
                {secondaryButtonText}
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-3 justify-center md:justify-start">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{
                      borderColor: theme?.background ?? "#0f172a",
                      backgroundColor: theme?.primary ?? "#6366f1",
                      color: "#fff",
                      opacity: 1 - i * 0.15,
                    }}
                  >
                    {["A", "K", "M", "J"][i]}
                  </div>
                ))}
              </div>
              <span className="text-sm opacity-50">50k+ teams trust us</span>
            </div>
          </div>

          {/* 3D-style Product Mockup (CSS shapes) */}
          <div className="flex-1 w-full max-w-md md:max-w-none flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Product"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
            ) : (
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Main card */}
                <div
                  className="absolute w-[70%] h-[65%] rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-4 border border-white/10"
                  style={{
                    backgroundColor: theme?.primary ? `${theme.primary}20` : "#6366f120",
                    transform: "perspective(800px) rotateY(-8deg) rotateX(4deg)",
                  }}
                >
                  <Cpu className="w-12 h-12 opacity-50" style={{ color: theme?.primary ?? "#818cf8" }} />
                  <div className="text-sm font-semibold opacity-60">Dashboard</div>
                  <div className="flex gap-3">
                    <div className="w-16 h-2 rounded-full opacity-30" style={{ backgroundColor: theme?.primary ?? "#818cf8" }} />
                    <div className="w-10 h-2 rounded-full opacity-20" style={{ backgroundColor: theme?.accent ?? "#a78bfa" }} />
                  </div>
                </div>

                {/* Floating card behind */}
                <div
                  className="absolute w-[55%] h-[50%] rounded-xl border border-white/5 -right-2 -top-2"
                  style={{
                    backgroundColor: theme?.accent ? `${theme.accent}10` : "#a78bfa10",
                    transform: "perspective(800px) rotateY(-12deg) rotateX(6deg) translateZ(-30px)",
                  }}
                />

                {/* Floating badge */}
                <div
                  className="absolute bottom-8 left-4 sm:left-8 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg border border-white/10"
                  style={{ backgroundColor: theme?.primary ? `${theme.primary}30` : "#6366f130" }}
                >
                  <Shield className="w-6 h-6" style={{ color: theme?.primary ?? "#818cf8" }} />
                  <div>
                    <div className="text-xs font-bold">Enterprise Ready</div>
                    <div className="text-xs opacity-50">SOC 2 Compliant</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
