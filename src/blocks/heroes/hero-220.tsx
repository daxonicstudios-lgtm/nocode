import type { BlockProps } from "@/blocks/types";
import { Stethoscope, Heart, Activity, Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero220(props: BlockProps) {
  const {
    theme,
    heading = "Healthcare You Can Trust",
    subheading = "Leading Medical Excellence",
    bodyText = "Delivering compassionate, evidence-based care with outcomes that speak for themselves. Our commitment to patient health is reflected in every metric we track.",
    buttonText = "Book Appointment",
    buttonUrl = "#",
    secondaryButtonText = "Our Services",
    secondaryButtonUrl = "#",
    items = [
      { title: "Patient Satisfaction", value: "96", icon: "heart", label: "96%" },
      { title: "Successful Procedures", value: "88", icon: "activity", label: "24,500+" },
      { title: "Recovery Rate", value: "94", icon: "shield", label: "94%" },
      { title: "Specialist Doctors", value: "72", icon: "stethoscope", label: "180+" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    heart: <Heart className="w-5 h-5" />,
    activity: <Activity className="w-5 h-5" />,
    shield: <ShieldCheck className="w-5 h-5" />,
    stethoscope: <Stethoscope className="w-5 h-5" />,
  };

  const ringColors = ["#ef4444", "#3b82f6", "#22c55e", "#8b5cf6"];

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#f0fdf4",
        color: theme?.foreground ?? "#14532d",
      }}
    >
      <style>{`
        @keyframes hero220RingFill {
          from { stroke-dashoffset: 283; }
          to { stroke-dashoffset: var(--hero220-offset); }
        }
        @keyframes hero220FadeScale {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes hero220SlideUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero220-ring-0 svg circle:last-child { animation: hero220RingFill 1.2s ease-out 0.3s both; }
        .hero220-ring-1 svg circle:last-child { animation: hero220RingFill 1.2s ease-out 0.5s both; }
        .hero220-ring-2 svg circle:last-child { animation: hero220RingFill 1.2s ease-out 0.7s both; }
        .hero220-ring-3 svg circle:last-child { animation: hero220RingFill 1.2s ease-out 0.9s both; }
        .hero220-card-0 { animation: hero220FadeScale 0.6s ease-out 0.1s both; }
        .hero220-card-1 { animation: hero220FadeScale 0.6s ease-out 0.3s both; }
        .hero220-card-2 { animation: hero220FadeScale 0.6s ease-out 0.5s both; }
        .hero220-card-3 { animation: hero220FadeScale 0.6s ease-out 0.7s both; }
        .hero220-content { animation: hero220SlideUp 0.7s ease-out 0.2s both; }
      `}</style>

      {/* Soft gradient blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#22c55e" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-5"
        style={{ backgroundColor: "#3b82f6" }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="hero220-content space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                backgroundColor: `${theme?.primary ?? "#22c55e"}15`,
                color: theme?.primary ?? "#16a34a",
              }}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              {heading}
            </h1>

            <p className="text-sm sm:text-base opacity-60 leading-relaxed max-w-lg">
              {bodyText}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: ringColors[i],
                      borderColor: theme?.background ?? "#f0fdf4",
                      color: "#fff",
                    }}
                  >
                    {["Dr", "MD", "RN", "PA"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold">180+ Specialists</p>
                <p className="text-xs opacity-50">Board-certified experts</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-xl transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#22c55e",
                  color: "#fff",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-xl border-2 transition-opacity hover:opacity-80"
                style={{
                  borderColor: theme?.primary ?? "#22c55e",
                  color: theme?.primary ?? "#16a34a",
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right — Donut/ring charts */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {items.slice(0, 4).map((item, i) => {
              const pct = Number(item.value) || 50;
              const circumference = 283; // 2 * PI * 45
              const offset = circumference - (pct / 100) * circumference;
              const color = ringColors[i % ringColors.length];

              return (
                <div
                  key={i}
                  className={`hero220-card-${i} hero220-ring-${i} flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl`}
                  style={{
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 20px rgba(0,0,0,0.03)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  {/* SVG ring */}
                  <div className="relative">
                    <svg width="100" height="100" viewBox="0 0 100 100" className="sm:w-[120px] sm:h-[120px]">
                      {/* Background ring */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={`${color}15`}
                        strokeWidth="8"
                      />
                      {/* Progress ring */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        transform="rotate(-90 50 50)"
                        style={{ ["--hero220-offset" as string]: offset }}
                      />
                    </svg>
                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span style={{ color }}>{iconMap[item.icon as string] ?? <Heart className="w-5 h-5" />}</span>
                      <span className="text-lg sm:text-xl font-black mt-0.5" style={{ color }}>
                        {pct}%
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-lg font-black" style={{ color }}>
                      {item.label}
                    </p>
                    <p className="text-xs opacity-50 mt-0.5">{item.title}</p>
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
