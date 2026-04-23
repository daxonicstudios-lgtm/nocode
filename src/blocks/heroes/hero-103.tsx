import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero103(props: BlockProps) {
  const {
    theme,
    heading = "Ship Products 10x Faster",
    subheading = "The modern platform for ambitious teams",
    bodyText = "Automate your workflow, collaborate in real-time, and deploy with confidence. Trusted by over 5,000 high-growth companies worldwide.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "Book a Demo",
    secondaryButtonUrl = "#",
    items = [
      { title: "99.9%", description: "Uptime SLA" },
      { title: "50M+", description: "API Calls Daily" },
      { title: "150+", description: "Countries Served" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0f0f23", color: theme?.foreground ?? "#ffffff" }}
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
        />
        <div
          className="absolute top-[20%] right-[-15%] w-[50%] h-[50%] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: theme?.accent ?? "#ec4899" }}
        />
        <div
          className="absolute bottom-[-10%] left-[30%] w-[40%] h-[40%] rounded-full blur-3xl opacity-25"
          style={{ backgroundColor: theme?.primary ?? "#06b6d4" }}
        />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          style={{
            backgroundColor: `${theme?.primary ?? "#6366f1"}22`,
            color: theme?.primary ?? "#a78bfa",
            border: `1px solid ${theme?.primary ?? "#6366f1"}33`,
          }}
        >
          <Zap className="w-3.5 h-3.5" />
          SaaS Platform
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-3 opacity-70">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 opacity-40 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"}, ${theme?.accent ?? "#ec4899"})`,
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={secondaryButtonUrl}
            className="px-8 py-4 rounded-xl text-base font-semibold border backdrop-blur-sm transition-colors hover:bg-white/5"
            style={{
              borderColor: `${theme?.foreground ?? "#ffffff"}22`,
              color: theme?.foreground ?? "#ffffff",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: theme?.primary ?? "#a78bfa" }}
              >
                {item.title}
              </div>
              <div className="text-sm opacity-50">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
