import type { BlockProps } from "@/blocks/types";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero138(props: BlockProps) {
  const {
    theme,
    heading = "Elevate Every Experience",
    subheading = "Premium services for those who expect more",
    bodyText = "From dedicated account management to priority support around the clock, our premium tier delivers the white-glove treatment your business deserves. Results guaranteed.",
    buttonText = "Upgrade to Premium",
    buttonUrl = "#",
    secondaryButtonText = "Compare Plans",
    secondaryButtonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#7c3aed";
  const accent = theme?.accent ?? "#06b6d4";
  const bg = theme?.background ?? "#030712";
  const fg = theme?.foreground ?? "#f0f0f0";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      <style>{`
        @keyframes hero138-aurora {
          0% { transform: translateX(-25%) translateY(0%) rotate(-5deg); }
          33% { transform: translateX(10%) translateY(-10%) rotate(2deg); }
          66% { transform: translateX(-15%) translateY(5%) rotate(-3deg); }
          100% { transform: translateX(-25%) translateY(0%) rotate(-5deg); }
        }
        @keyframes hero138-aurora2 {
          0% { transform: translateX(20%) translateY(5%) rotate(3deg); }
          33% { transform: translateX(-10%) translateY(-5%) rotate(-2deg); }
          66% { transform: translateX(15%) translateY(10%) rotate(5deg); }
          100% { transform: translateX(20%) translateY(5%) rotate(3deg); }
        }
      `}</style>

      {/* Aurora borealis gradient layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/4 w-[150%] h-[80%] blur-3xl opacity-20"
          style={{
            background: `linear-gradient(120deg, transparent 20%, ${accent}66 35%, ${primary}66 50%, transparent 70%)`,
            animation: "hero138-aurora 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -top-1/3 -right-1/4 w-[120%] h-[60%] blur-3xl opacity-15"
          style={{
            background: `linear-gradient(240deg, transparent 20%, ${primary}44 40%, ${accent}44 55%, transparent 75%)`,
            animation: "hero138-aurora2 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-0 left-1/4 w-[60%] h-[40%] blur-3xl opacity-10"
          style={{
            background: `linear-gradient(180deg, ${accent}33, ${primary}22, transparent)`,
            animation: "hero138-aurora 18s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Star field */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] rounded-full"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              backgroundColor: fg,
              opacity: 0.1 + (i % 5) * 0.08,
              width: i % 7 === 0 ? "2px" : "1px",
              height: i % 7 === 0 ? "2px" : "1px",
            }}
          />
        ))}
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 z-[1]"
        style={{
          background: `linear-gradient(to top, ${bg}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-semibold mb-8"
          style={{
            background: `linear-gradient(135deg, ${primary}22, ${accent}22)`,
            border: `1px solid ${primary}33`,
            color: accent,
          }}
        >
          <Sparkles className="w-4 h-4" />
          <span>Premium Tier</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-tight mb-6">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${fg}, ${accent}cc, ${primary}cc, ${fg})`,
              WebkitBackgroundClip: "text",
            }}
          >
            {heading}
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl font-light mb-4"
          style={{ color: `${fg}77` }}
        >
          {subheading}
        </p>

        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-12 opacity-40 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-semibold transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${primary}, ${accent})`,
              color: "#ffffff",
              boxShadow: `0 0 40px ${primary}33, 0 0 80px ${accent}11`,
            }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-semibold border transition-colors hover:opacity-80"
            style={{
              borderColor: `${fg}15`,
              color: `${fg}aa`,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
