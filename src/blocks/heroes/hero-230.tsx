import type { BlockProps } from "@/blocks/types";
import { Wand2, ArrowRight } from "lucide-react";

export default function Hero230(props: BlockProps) {
  const {
    theme,
    heading = "Design Without Limits",
    subheading = "Creative Studio",
    bodyText = "We blend art and technology to create brand identities, digital products, and experiences that resonate deeply with your audience.",
    buttonText = "See Our Portfolio",
    buttonUrl = "#",
    secondaryButtonText = "Start a Project",
    secondaryButtonUrl = "#",
  } = props;

  // Split heading into individual characters for animation
  const headingChars = heading.split("");

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1a2e", color: theme?.foreground ?? "#eaeaea" }}
      className="min-h-screen flex items-center justify-center px-6 py-20 md:px-12 overflow-hidden"
    >
      <style>{`
        @keyframes spreadOut {
          0% { opacity: 0; transform: translateX(0) translateY(0) rotate(0deg) scale(0.5); letter-spacing: 0; }
          30% { opacity: 0.6; transform: translateX(var(--spread-x)) translateY(var(--spread-y)) rotate(var(--spread-rot)) scale(0.8); }
          100% { opacity: 1; transform: translateX(0) translateY(0) rotate(0deg) scale(1); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .hero230-char {
          display: inline-block;
          animation: spreadOut 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        .hero230-sub { animation: fadeSlideUp 0.7s ease-out 1.3s forwards; opacity: 0; }
        .hero230-body { animation: fadeSlideUp 0.7s ease-out 1.5s forwards; opacity: 0; }
        .hero230-btns { animation: fadeSlideUp 0.7s ease-out 1.7s forwards; opacity: 0; }
        .hero230-line { animation: lineExpand 0.8s ease-out 1.9s forwards; transform: scaleX(0); transform-origin: left; }
        .hero230-footer { animation: fadeSlideUp 0.6s ease-out 2.1s forwards; opacity: 0; }
      `}</style>

      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Subheading */}
        <div className="hero230-sub flex items-center justify-center gap-2 mb-8">
          <Wand2 className="w-4 h-4" style={{ color: theme?.accent ?? "#e040fb" }} />
          <span className="text-sm tracking-[0.2em] uppercase font-medium" style={{ color: theme?.accent ?? "#e040fb" }}>
            {subheading}
          </span>
        </div>

        {/* Animated heading */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.05] mb-8" aria-label={heading}>
          {headingChars.map((char, i) => {
            if (char === " ") {
              return <span key={i}>&nbsp;</span>;
            }
            // Pseudo-random spread values based on character index
            const spreadX = ((i * 37) % 80) - 40;
            const spreadY = ((i * 53) % 60) - 30;
            const spreadRot = ((i * 29) % 40) - 20;
            const delay = 0.05 * i;

            return (
              <span
                key={i}
                className="hero230-char"
                style={{
                  animationDelay: `${delay}s`,
                  "--spread-x": `${spreadX}px`,
                  "--spread-y": `${spreadY}px`,
                  "--spread-rot": `${spreadRot}deg`,
                } as React.CSSProperties}
              >
                {char}
              </span>
            );
          })}
        </h1>

        {/* Body text */}
        <p className="hero230-body text-base md:text-lg opacity-55 max-w-xl mx-auto mb-10 leading-relaxed">
          {bodyText}
        </p>

        {/* Buttons */}
        <div className="hero230-btns flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.accent ?? "#e040fb", color: "#fff" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium border border-white/15 hover:border-white/35 transition-colors"
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Decorative line */}
        <div
          className="hero230-line w-32 h-px mx-auto mb-8"
          style={{ backgroundColor: theme?.accent ?? "#e040fb" }}
        />

        {/* Footer tagline */}
        <p className="hero230-footer text-xs tracking-[0.15em] uppercase opacity-35">
          Brand Identity &bull; Web Design &bull; Motion &bull; 3D
        </p>
      </div>
    </section>
  );
}
