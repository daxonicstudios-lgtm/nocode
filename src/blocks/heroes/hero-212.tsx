import type { BlockProps } from "@/blocks/types";
import { Flame, Dumbbell, Heart, Timer, ArrowRight } from "lucide-react";

export default function Hero212(props: BlockProps) {
  const {
    theme,
    heading = "Track Your Fitness Progress",
    subheading = "Real-time performance metrics",
    bodyText = "Monitor your workout intensity, calories burned, and heart rate zones. Push your limits with data-driven training insights.",
    buttonText = "Start Training",
    buttonUrl = "#",
    secondaryButtonText = "View Plans",
    secondaryButtonUrl = "#",
    items = [
      { title: "Calories Burned", value: "78", label: "2,340 kcal", icon: "flame" },
      { title: "Heart Rate Zone", value: "85", label: "156 BPM", icon: "heart" },
      { title: "Workout Duration", value: "62", label: "48 min", icon: "timer" },
      { title: "Strength Score", value: "91", label: "91/100", icon: "dumbbell" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    flame: <Flame className="w-5 h-5" />,
    heart: <Heart className="w-5 h-5" />,
    timer: <Timer className="w-5 h-5" />,
    dumbbell: <Dumbbell className="w-5 h-5" />,
  };

  const colors = ["#ef4444", "#f97316", "#22c55e", "#3b82f6"];

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0a0a0a",
        color: theme?.foreground ?? "#f5f5f5",
      }}
    >
      <style>{`
        @keyframes hero212Fill0 {
          from { --hero212-pct: 0; }
          to { --hero212-pct: ${items[0]?.value ?? 78}; }
        }
        @keyframes hero212Fill1 {
          from { --hero212-pct: 0; }
          to { --hero212-pct: ${items[1]?.value ?? 85}; }
        }
        @keyframes hero212Fill2 {
          from { --hero212-pct: 0; }
          to { --hero212-pct: ${items[2]?.value ?? 62}; }
        }
        @keyframes hero212Fill3 {
          from { --hero212-pct: 0; }
          to { --hero212-pct: ${items[3]?.value ?? 91}; }
        }
        @keyframes hero212FadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero212-ring {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          position: relative;
        }
        @media (min-width: 640px) {
          .hero212-ring { width: 140px; height: 140px; }
        }
        .hero212-card-0 { animation: hero212FadeUp 0.6s ease-out 0.1s both; }
        .hero212-card-1 { animation: hero212FadeUp 0.6s ease-out 0.3s both; }
        .hero212-card-2 { animation: hero212FadeUp 0.6s ease-out 0.5s both; }
        .hero212-card-3 { animation: hero212FadeUp 0.6s ease-out 0.7s both; }
      `}</style>

      {/* Diagonal accent */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rotate-45 opacity-5"
        style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: `${theme?.primary ?? "#ef4444"}20`,
                color: theme?.primary ?? "#ef4444",
              }}
            >
              <Flame className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 max-w-md leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold rounded-full transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#ef4444",
                  color: "#fff",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold rounded-full border-2 transition-opacity hover:opacity-80"
                style={{
                  borderColor: theme?.primary ?? "#ef4444",
                  color: theme?.primary ?? "#ef4444",
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right — circular progress indicators */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {items.slice(0, 4).map((item, i) => {
              const pct = Number(item.value) || 50;
              const ringColor = colors[i % colors.length];
              return (
                <div
                  key={i}
                  className={`hero212-card-${i} flex flex-col items-center gap-3 p-4 sm:p-6 rounded-2xl`}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="hero212-ring flex items-center justify-center"
                    style={{
                      background: `conic-gradient(${ringColor} ${pct * 3.6}deg, rgba(255,255,255,0.08) ${pct * 3.6}deg)`,
                    }}
                  >
                    <div
                      className="w-[85%] h-[85%] rounded-full flex flex-col items-center justify-center"
                      style={{ backgroundColor: theme?.background ?? "#0a0a0a" }}
                    >
                      <span className="text-xl sm:text-2xl font-black" style={{ color: ringColor }}>
                        {pct}%
                      </span>
                      <span className="text-[10px] opacity-40 mt-0.5">
                        {iconMap[item.icon as string] ?? <Flame className="w-4 h-4" />}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold" style={{ color: ringColor }}>{item.label}</p>
                    <p className="text-xs opacity-40 mt-0.5">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
