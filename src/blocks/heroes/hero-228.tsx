import type { BlockProps } from "@/blocks/types";
import { Play, Film } from "lucide-react";

export default function Hero228(props: BlockProps) {
  const {
    theme,
    heading = "Where Stories Come Alive",
    subheading = "Independent Cinema",
    bodyText = "Award-winning films, documentaries, and shorts from visionary filmmakers pushing the boundaries of storytelling.",
    buttonText = "Watch Trailer",
    buttonUrl = "#",
    secondaryButtonText = "Browse Films",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Best Picture", description: "Sundance 2025" },
      { title: "Grand Prix", description: "Cannes Selection" },
      { title: "Critics Choice", description: "TIFF Official" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#f5f5f5" }}
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      <style>{`
        @keyframes clipReveal {
          from { clip-path: circle(0% at 50% 50%); }
          to { clip-path: circle(75% at 50% 50%); }
        }
        @keyframes fadeInSlow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .hero228-reveal {
          animation: clipReveal 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          clip-path: circle(0% at 50% 50%);
        }
        .hero228-overlay { animation: fadeInSlow 0.8s ease-out 1.0s forwards; opacity: 0; }
        .hero228-text-1 { animation: slideUp 0.7s ease-out 1.3s forwards; opacity: 0; }
        .hero228-text-2 { animation: slideUp 0.7s ease-out 1.5s forwards; opacity: 0; }
        .hero228-text-3 { animation: slideUp 0.7s ease-out 1.7s forwards; opacity: 0; }
        .hero228-text-4 { animation: slideUp 0.7s ease-out 1.9s forwards; opacity: 0; }
        .hero228-awards { animation: fadeInSlow 0.8s ease-out 2.1s forwards; opacity: 0; }
        .hero228-dot { animation: pulseDot 2s ease-in-out infinite; }
      `}</style>

      {/* Clip-path reveal background */}
      <div className="hero228-reveal absolute inset-0">
        {imageUrl ? (
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `radial-gradient(ellipse at center, ${theme?.primary ?? "#2a1a0a"} 0%, ${theme?.background ?? "#0a0a0a"} 70%)`,
            }}
          />
        )}
      </div>

      {/* Dark overlay */}
      <div className="hero228-overlay absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="hero228-text-1 flex items-center justify-center gap-2 mb-6">
            <div className="hero228-dot w-2 h-2 rounded-full" style={{ backgroundColor: theme?.accent ?? "#e63946" }} />
            <Film className="w-4 h-4 opacity-60" />
            <span className="text-xs tracking-[0.3em] uppercase font-medium opacity-70">
              {subheading}
            </span>
          </div>

          <h1
            className="hero228-text-2 text-4xl md:text-6xl lg:text-8xl font-bold leading-[1.05] mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {heading}
          </h1>

          <p className="hero228-text-3 text-base md:text-lg opacity-50 max-w-lg mx-auto mb-10 leading-relaxed">
            {bodyText}
          </p>

          <div className="hero228-text-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.accent ?? "#e63946", color: "#fff" }}
            >
              <Play className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center px-8 py-4 text-sm font-medium border-b border-white/30 hover:border-white/60 transition-colors pb-1"
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Awards strip */}
          <div className="hero228-awards mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-sm font-semibold" style={{ color: theme?.accent ?? "#e8c170" }}>
                  {item.title}
                </p>
                <p className="text-xs opacity-40 mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
