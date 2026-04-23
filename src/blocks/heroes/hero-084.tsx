import type { BlockProps } from "@/blocks/types";
import { Mic, Play, Headphones, Radio, ArrowRight } from "lucide-react";

export default function Hero084(props: BlockProps) {
  const {
    theme,
    heading = "Stories That Move You Forward",
    subheading = "Tune in to weekly episodes featuring founders, creators, and thought leaders sharing lessons from the frontlines of building in Africa.",
    buttonText = "Listen Now",
    buttonUrl = "#",
    secondaryButtonText = "Browse Episodes",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { label: "Apple Podcasts", icon: "headphones" },
      { label: "Spotify", icon: "radio" },
      { label: "YouTube", icon: "play" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    headphones: <Headphones className="w-5 h-5" />,
    radio: <Radio className="w-5 h-5" />,
    play: <Play className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1625", color: theme?.foreground ?? "#ede9fe" }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
        {/* Text side (right on desktop) */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ backgroundColor: "rgba(168,85,247,0.15)", color: theme?.primary ?? "#c084fc" }}
          >
            <Mic className="w-4 h-4" />
            <span>New episode every Tuesday</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#a855f7" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Play className="w-4 h-4 fill-current" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 font-medium hover:border-white/40 transition-colors"
            >
              {secondaryButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Platform icons */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-wider opacity-40 mb-3">Available on</p>
            <div className="flex gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm"
                >
                  {iconMap[item.icon ?? "headphones"] ?? <Headphones className="w-5 h-5" />}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audio visual side (left on desktop) */}
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Podcast studio"
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover rounded-3xl"
            />
          ) : (
            <div
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] rounded-3xl flex flex-col items-center justify-center relative overflow-hidden"
              style={{ background: `linear-gradient(160deg, ${theme?.primary ?? "#a855f7"}22, ${theme?.accent ?? "#7c3aed"}33)` }}
            >
              {/* Decorative sound waves */}
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-20">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full"
                    style={{
                      backgroundColor: theme?.primary ?? "#a855f7",
                      height: `${30 + Math.sin(i * 0.6) * 60 + Math.random() * 40}px`,
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10 text-center">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                  style={{ backgroundColor: theme?.primary ?? "#a855f7" }}
                >
                  <Mic className="w-12 h-12 text-white" />
                </div>
                <p className="text-lg font-semibold opacity-80">The Forward Podcast</p>
                <p className="text-sm opacity-50 mt-1">Episode 142 — Live Now</p>
                <div className="mt-4 flex items-center gap-3 justify-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme?.primary ?? "#a855f7" }}
                  >
                    <Play className="w-4 h-4 text-white fill-current ml-0.5" />
                  </div>
                  <div className="w-40 h-1 rounded-full bg-white/20 relative">
                    <div className="absolute left-0 top-0 h-full w-1/3 rounded-full" style={{ backgroundColor: theme?.primary ?? "#a855f7" }} />
                  </div>
                  <span className="text-xs opacity-40">24:15</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
