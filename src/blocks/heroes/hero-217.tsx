import type { BlockProps } from "@/blocks/types";
import { Trophy, Star, ArrowRight } from "lucide-react";

export default function Hero217(props: BlockProps) {
  const {
    theme,
    heading = "1,000,000",
    subheading = "One Million Lives Changed",
    bodyText = "We reached an incredible milestone. One million people across the globe have used our platform to transform their careers, build new skills, and unlock opportunities they never thought possible.",
    buttonText = "Join the Movement",
    buttonUrl = "#",
    secondaryButtonText = "Read Stories",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-20 sm:px-8 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0f0a1e",
        color: theme?.foreground ?? "#eee8ff",
      }}
    >
      <style>{`
        @keyframes hero217NumberPop {
          0% { opacity: 0; transform: scale(0.3) translateY(40px); letter-spacing: 0.3em; }
          60% { opacity: 1; transform: scale(1.05) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); letter-spacing: 0.05em; }
        }
        @keyframes hero217Glow {
          0%, 100% { text-shadow: 0 0 40px ${theme?.primary ?? "#a855f7"}40, 0 0 80px ${theme?.primary ?? "#a855f7"}20; }
          50% { text-shadow: 0 0 60px ${theme?.primary ?? "#a855f7"}60, 0 0 120px ${theme?.primary ?? "#a855f7"}30; }
        }
        @keyframes hero217FadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero217StarSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hero217RingPulse {
          0% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.1; transform: scale(1.1); }
          100% { opacity: 0.3; transform: scale(0.8); }
        }
        .hero217-number {
          animation: hero217NumberPop 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both,
                     hero217Glow 3s ease-in-out 1.5s infinite;
        }
        .hero217-subtitle { animation: hero217FadeUp 0.6s ease-out 1s both; }
        .hero217-body { animation: hero217FadeUp 0.6s ease-out 1.3s both; }
        .hero217-cta { animation: hero217FadeUp 0.6s ease-out 1.6s both; }
        .hero217-star { animation: hero217StarSpin 20s linear infinite; }
        .hero217-ring {
          animation: hero217RingPulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative rings */}
      <div
        className="hero217-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full border"
        style={{ borderColor: `${theme?.primary ?? "#a855f7"}20` }}
      />
      <div
        className="hero217-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] rounded-full border"
        style={{ borderColor: `${theme?.primary ?? "#a855f7"}10`, animationDelay: "1s" }}
      />

      {/* Star decorations */}
      <div
        className="hero217-star absolute top-16 right-16 opacity-10"
        style={{ color: theme?.primary ?? "#a855f7" }}
      >
        <Star className="w-16 h-16 fill-current" />
      </div>
      <div
        className="hero217-star absolute bottom-20 left-12 opacity-5"
        style={{ color: theme?.primary ?? "#a855f7", animationDirection: "reverse" }}
      >
        <Star className="w-24 h-24 fill-current" />
      </div>

      <div className="w-full max-w-3xl mx-auto relative z-10 text-center">
        {/* Trophy icon */}
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: `${theme?.primary ?? "#a855f7"}20`,
              color: theme?.primary ?? "#a855f7",
            }}
          >
            <Trophy className="w-8 h-8" />
          </div>
        </div>

        {/* Large animated number */}
        <div
          className="hero217-number text-6xl sm:text-8xl lg:text-[10rem] font-black leading-none tracking-wide mb-6"
          style={{ color: theme?.primary ?? "#a855f7" }}
        >
          {heading}
        </div>

        {/* Subtitle */}
        <h2 className="hero217-subtitle text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
          {subheading}
        </h2>

        {/* Body */}
        <p className="hero217-body text-sm sm:text-base opacity-50 leading-relaxed max-w-xl mx-auto mb-10">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="hero217-cta flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-full transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#a855f7",
              color: "#fff",
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-full border-2 transition-opacity hover:opacity-80"
            style={{
              borderColor: `${theme?.primary ?? "#a855f7"}50`,
              color: theme?.primary ?? "#a855f7",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
