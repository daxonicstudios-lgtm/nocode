import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Layers, Zap, Shield } from "lucide-react";

export default function Hero038(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need in One Place",
    subheading = "A powerful platform that brings your ideas to life with speed, security, and simplicity.",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = [
      { title: "Lightning Fast", description: "Sub-second load times", icon: "zap" },
      { title: "Fully Modular", description: "Mix and match components", icon: "layers" },
      { title: "Enterprise Secure", description: "Bank-grade encryption", icon: "shield" },
    ],
  } = props;

  const primaryColor = theme?.primary || "#6366f1";

  const iconMap: Record<string, React.ReactNode> = {
    zap: <Zap className="w-5 h-5" />,
    layers: <Layers className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
  };

  const defaultIcons = [
    <Zap key="z" className="w-5 h-5" />,
    <Layers key="l" className="w-5 h-5" />,
    <Shield key="s" className="w-5 h-5" />,
  ];

  // Positions for floating cards: top-left, top-right, bottom-center
  const cardPositions = [
    "absolute -top-2 -left-4 sm:top-0 sm:-left-16 lg:-left-28",
    "absolute -top-2 -right-4 sm:top-0 sm:-right-16 lg:-right-28",
    "absolute -bottom-6 left-1/2 -translate-x-1/2",
  ];

  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-4 py-20 sm:py-28"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-16 sm:mb-24">
          {/* Center text */}
          <div className="max-w-xl mx-auto px-8 sm:px-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
              {heading}
            </h1>
            <p className="text-base sm:text-lg opacity-70 mb-8 max-w-md mx-auto">
              {subheading}
            </p>
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: primaryColor }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Floating feature cards */}
          <div className="hidden sm:block">
            {items.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className={`${cardPositions[i]} w-48 lg:w-56 p-4 rounded-xl shadow-xl border transition-transform hover:scale-105`}
                style={{
                  backgroundColor: theme?.background || "#ffffff",
                  borderColor: theme?.accent || "#e5e7eb",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  {(item.icon && iconMap[item.icon]) || defaultIcons[i]}
                </div>
                <p className="text-sm font-semibold mb-0.5">{item.title}</p>
                <p className="text-xs opacity-60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: show cards in a row */}
        <div className="flex sm:hidden flex-col gap-3 mt-4">
          {items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg border"
              style={{
                backgroundColor: theme?.background || "#ffffff",
                borderColor: theme?.accent || "#e5e7eb",
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white"
                style={{ backgroundColor: primaryColor }}
              >
                {(item.icon && iconMap[item.icon]) || defaultIcons[i]}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs opacity-60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
