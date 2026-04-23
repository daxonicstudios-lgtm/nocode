import type { BlockProps } from "@/blocks/types";
import { Cpu, Orbit, BrainCircuit } from "lucide-react";

export default function Hero225(props: BlockProps) {
  const {
    theme,
    heading = "The Future of Intelligence Is Here",
    subheading = "Next-Gen AI Platform",
    bodyText = "Harness the power of advanced machine learning models trained on your own data. Deploy in minutes, scale without limits.",
    buttonText = "Request Access",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
    items = [
      { title: "99.9%", description: "Uptime SLA" },
      { title: "50ms", description: "Avg Response" },
      { title: "10B+", description: "Predictions Daily" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#07070a", color: theme?.foreground ?? "#e4e4e7" }}
      className="min-h-screen flex items-center justify-center overflow-hidden relative"
    >
      <style>{`
        @keyframes rotateIn3D {
          from { opacity: 0; transform: perspective(800px) rotateX(25deg) rotateY(-15deg) translateZ(-60px); }
          to { opacity: 1; transform: perspective(800px) rotateX(0) rotateY(0) translateZ(0); }
        }
        @keyframes rotateInCard {
          from { opacity: 0; transform: perspective(600px) rotateY(30deg) translateX(40px); }
          to { opacity: 1; transform: perspective(600px) rotateY(0) translateX(0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .hero225-main { animation: rotateIn3D 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards; opacity: 0; }
        .hero225-stat-0 { animation: rotateInCard 0.8s ease-out 0.6s forwards; opacity: 0; }
        .hero225-stat-1 { animation: rotateInCard 0.8s ease-out 0.8s forwards; opacity: 0; }
        .hero225-stat-2 { animation: rotateInCard 0.8s ease-out 1.0s forwards; opacity: 0; }
        .hero225-orbit { animation: spinSlow 20s linear infinite; }
        .hero225-glow { animation: pulseGlow 4s ease-in-out infinite; }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hero225-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: `radial-gradient(circle, ${theme?.primary ?? "#6d28d9"}30, transparent 70%)` }}
        />
        <div className="hero225-orbit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
        <div className="hero225-orbit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" style={{ animationDuration: "30s" }} />
      </div>

      <div className="relative z-10 w-full px-6 py-20 md:px-12">
        <div className="hero225-main max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BrainCircuit className="w-6 h-6" style={{ color: theme?.primary ?? "#a78bfa" }} />
            <span className="text-sm font-mono tracking-wider uppercase" style={{ color: theme?.primary ?? "#a78bfa" }}>
              {subheading}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 bg-clip-text"
            style={{ color: theme?.foreground ?? "#e4e4e7" }}
          >
            {heading}
          </h1>

          <p className="text-base md:text-lg opacity-50 max-w-xl mx-auto mb-10 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#6d28d9", color: "#fff" }}
            >
              <Cpu className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-medium border border-white/10 hover:border-white/25 transition-colors"
            >
              <Orbit className="w-4 h-4" />
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 max-w-2xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className={`hero225-stat-${i} text-center px-8 py-5 rounded-xl border border-white/[0.06]`}
              style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <p className="text-3xl md:text-4xl font-bold font-mono" style={{ color: theme?.primary ?? "#a78bfa" }}>
                {item.title}
              </p>
              <p className="text-xs uppercase tracking-wider opacity-40 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
