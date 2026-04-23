import type { BlockProps } from "@/blocks/types";
import { Zap, Leaf, Gauge, Clock, BatteryCharging } from "lucide-react";

export default function Hero169(props: BlockProps) {
  const {
    theme,
    heading = "Drive the Future",
    subheading = "Zero emissions. Maximum performance. Discover our lineup of all-electric vehicles engineered for tomorrow.",
    buttonText = "Schedule a Test Drive",
    buttonUrl = "#",
    secondaryButtonText = "View All EVs",
    secondaryButtonUrl = "#",
    items = [
      { title: "350+ mi", description: "EPA Range", icon: "gauge" },
      { title: "25 min", description: "Fast Charge 10-80%", icon: "clock" },
      { title: "0-60 mph", description: "In 3.2 Seconds", icon: "zap" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    gauge: <Gauge className="w-6 h-6" />,
    clock: <Clock className="w-6 h-6" />,
    zap: <Zap className="w-6 h-6" />,
  };

  return (
    <section
      className="relative min-h-screen flex items-center px-4 py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#f8fdf8", color: theme?.foreground ?? "#0f1f0f" }}
    >
      {/* Animated gradient orbs */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: theme?.primary ?? "#22c55e" }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full opacity-5 blur-3xl"
        style={{ backgroundColor: theme?.accent ?? "#06b6d4" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: theme?.primary ?? "#22c55e" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: theme?.primary ?? "#22c55e" }}
            >
              Electric Vehicle Showroom
            </span>
            <Leaf className="w-4 h-4" style={{ color: theme?.primary ?? "#22c55e" }} />
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6">
            {heading}
          </h1>

          <p className="text-base sm:text-lg max-w-xl mx-auto opacity-60 leading-relaxed mb-10">
            {subheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: theme?.primary ?? "#22c55e",
                color: "#ffffff",
                boxShadow: `0 8px 30px ${theme?.primary ?? "#22c55e"}40`,
              }}
            >
              <Zap className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border transition-opacity hover:opacity-80"
              style={{ borderColor: `${theme?.foreground ?? "#0f1f0f"}20`, color: theme?.foreground ?? "#0f1f0f" }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* EV Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="text-center rounded-2xl p-8"
              style={{
                backgroundColor: `${theme?.foreground ?? "#0f1f0f"}04`,
                border: `1px solid ${theme?.foreground ?? "#0f1f0f"}08`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${theme?.primary ?? "#22c55e"}12`, color: theme?.primary ?? "#22c55e" }}
              >
                {iconMap[item.icon ?? "zap"] ?? <BatteryCharging className="w-6 h-6" />}
              </div>
              <p
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: theme?.primary ?? "#22c55e" }}
              >
                {item.title}
              </p>
              <p className="text-sm opacity-50">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom eco note */}
        <div className="text-center mt-12 flex items-center justify-center gap-2 opacity-40 text-sm">
          <Leaf className="w-4 h-4" />
          <span>100% Electric. Zero Compromise.</span>
        </div>
      </div>
    </section>
  );
}
