import type { BlockProps } from "@/blocks/types";
import { Newspaper, Clock, ArrowRight } from "lucide-react";

export default function Hero139(props: BlockProps) {
  const {
    theme,
    heading = "Stories That Shape the World",
    subheading = "Fearless journalism for a changing era",
    bodyText = "In-depth reporting, expert analysis, and investigative features from a team of award-winning journalists. Stay informed with stories that matter.",
    buttonText = "Subscribe Now",
    buttonUrl = "#",
    secondaryButtonText = "Read Today's Edition",
    secondaryButtonUrl = "#",
    items = [
      { title: "Global Economy", description: "Markets rally as trade agreements reach historic milestone across three continents" },
      { title: "Science & Tech", description: "Breakthrough in quantum computing promises to revolutionize drug discovery" },
      { title: "Culture", description: "How a new generation of filmmakers is redefining African cinema on the world stage" },
    ],
  } = props;

  const primary = theme?.primary ?? "#1a1a1a";
  const accent = theme?.accent ?? "#c0392b";
  const bg = theme?.background ?? "#faf7f2";
  const fg = theme?.foreground ?? "#1a1a1a";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Faint column lines */}
      <div className="absolute inset-0 z-0 hidden md:flex justify-center pointer-events-none">
        <div className="w-full max-w-5xl flex">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r opacity-[0.06]"
              style={{ borderColor: fg }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Masthead */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12" style={{ backgroundColor: fg }} />
            <Newspaper className="w-5 h-5" style={{ color: accent }} />
            <div className="h-[2px] w-12" style={{ backgroundColor: fg }} />
          </div>

          <p
            className="text-xs uppercase tracking-[0.3em] font-medium mb-4"
            style={{ color: accent }}
          >
            The Daily Chronicle
          </p>

          <div
            className="h-[1px] w-full max-w-xl mx-auto mb-4"
            style={{ backgroundColor: `${fg}22` }}
          />

          <div className="flex items-center justify-center gap-4 text-xs opacity-40 mb-6">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              April 23, 2026
            </span>
            <span>|</span>
            <span>Vol. XLII, No. 117</span>
            <span>|</span>
            <span>Morning Edition</span>
          </div>

          <div
            className="h-[3px] w-full max-w-3xl mx-auto mb-8"
            style={{ backgroundColor: fg }}
          />
        </div>

        {/* Main headline */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 font-serif">
            {heading}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light italic mb-4 opacity-60 font-serif">
            {subheading}
          </p>

          <p className="text-base max-w-2xl mx-auto mb-8 opacity-45 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm uppercase tracking-wider font-bold transition-transform hover:scale-105"
              style={{
                backgroundColor: fg,
                color: bg,
              }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm uppercase tracking-wider font-bold border-2 transition-colors hover:opacity-80"
              style={{
                borderColor: fg,
                color: fg,
              }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        <div
          className="h-[1px] w-full max-w-3xl mx-auto my-8"
          style={{ backgroundColor: `${fg}22` }}
        />

        {/* Sub-headlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="text-center md:text-left"
              style={{
                borderRight: i < 2 ? `1px solid ${fg}11` : "none",
                paddingRight: i < 2 ? "1.5rem" : "0",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest font-bold mb-2"
                style={{ color: accent }}
              >
                {item.title}
              </p>
              <p className="text-sm font-serif leading-relaxed opacity-60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
