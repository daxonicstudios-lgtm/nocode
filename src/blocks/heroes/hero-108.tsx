import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Terminal, Shield, Cpu } from "lucide-react";

export default function Hero108(props: BlockProps) {
  const {
    theme,
    heading = "Infrastructure for the AI Era",
    subheading = "Deploy, scale, and monitor intelligent systems with confidence",
    bodyText = "Built for engineering teams who demand reliability at scale. Our platform handles the complexity so you can focus on building what matters.",
    buttonText = "Get API Access",
    buttonUrl = "#",
    secondaryButtonText = "Read the Docs",
    secondaryButtonUrl = "#",
    items = [
      { icon: "terminal", title: "Developer First", description: "APIs and SDKs built for speed" },
      { icon: "shield", title: "Enterprise Security", description: "SOC 2 Type II certified" },
      { icon: "cpu", title: "Edge Computing", description: "200+ global edge nodes" },
    ],
  } = props;

  const primaryColor = theme?.primary ?? "#10b981";
  const bgColor = theme?.background ?? "#050a0e";

  const iconMap: Record<string, React.ReactNode> = {
    terminal: <Terminal className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
    cpu: <Cpu className="w-5 h-5" />,
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor, color: theme?.foreground ?? "#e2e8f0" }}
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, ${theme?.foreground ?? "#e2e8f0"} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Animated glow spots */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 hero108-glow1"
          style={{ backgroundColor: primaryColor }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-15 hero108-glow2"
          style={{ backgroundColor: theme?.accent ?? "#06b6d4" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Terminal-style badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono mb-8"
          style={{
            backgroundColor: `${primaryColor}12`,
            border: `1px solid ${primaryColor}33`,
            color: primaryColor,
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: primaryColor }} />
          npm install @platform/sdk
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl font-light mb-4 opacity-60 max-w-2xl mx-auto">
          {subheading}
        </p>

        <p className="text-base max-w-xl mx-auto mb-10 opacity-35 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all hover:scale-105"
            style={{
              backgroundColor: primaryColor,
              color: bgColor,
            }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold border transition-colors hover:bg-white/5"
            style={{
              borderColor: `${theme?.foreground ?? "#e2e8f0"}1a`,
              color: theme?.foreground ?? "#e2e8f0",
            }}
          >
            <Terminal className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl text-left backdrop-blur-sm"
              style={{
                backgroundColor: `${theme?.foreground ?? "#e2e8f0"}05`,
                border: `1px solid ${theme?.foreground ?? "#e2e8f0"}0a`,
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: `${primaryColor}15`,
                  color: primaryColor,
                }}
              >
                {iconMap[item.icon ?? "terminal"] ?? <Terminal className="w-5 h-5" />}
              </div>
              <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
              <p className="text-xs opacity-40">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero108-glow1 {
          animation: hero108Float1 10s ease-in-out infinite;
        }
        .hero108-glow2 {
          animation: hero108Float2 12s ease-in-out infinite;
        }
        @keyframes hero108Float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -30px); }
        }
        @keyframes hero108Float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 40px); }
        }
      `}</style>
    </section>
  );
}
