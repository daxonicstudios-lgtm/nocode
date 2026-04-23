import type { BlockProps } from "@/blocks/types";
import { Play, Film, Award, Clock } from "lucide-react";

export default function Hero110(props: BlockProps) {
  const {
    theme,
    heading = "Stories That Move the World",
    subheading = "Award-winning film & media production",
    bodyText = "We bring visions to life through cinematic storytelling. From concept to screen, our team crafts narratives that resonate with global audiences.",
    buttonText = "View Our Reel",
    buttonUrl = "#",
    secondaryButtonText = "Work With Us",
    secondaryButtonUrl = "#",
    items = [
      { icon: "award", title: "12", description: "Festival Awards" },
      { icon: "film", title: "85+", description: "Productions" },
      { icon: "clock", title: "10", description: "Years Experience" },
    ],
  } = props;

  const primaryColor = theme?.primary ?? "#dc2626";
  const bgColor = theme?.background ?? "#0a0a0a";
  const fgColor = theme?.foreground ?? "#ffffff";

  const iconMap: Record<string, React.ReactNode> = {
    award: <Award className="w-4 h-4" />,
    film: <Film className="w-4 h-4" />,
    clock: <Clock className="w-4 h-4" />,
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      {/* Simulated video background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 hero110-videoBg"
          style={{
            background: `
              linear-gradient(180deg, ${bgColor}88 0%, ${bgColor}44 40%, ${bgColor}cc 100%),
              linear-gradient(135deg, ${primaryColor}11 0%, transparent 40%),
              radial-gradient(ellipse at 50% 50%, ${theme?.accent ?? "#451a1a"}33 0%, ${bgColor} 70%)
            `,
          }}
        />
        {/* Film grain effect */}
        <div className="absolute inset-0 opacity-[0.03] hero110-grain" />
        {/* Letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-12 sm:h-16" style={{ backgroundColor: bgColor }} />
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16" style={{ backgroundColor: bgColor }} />
      </div>

      {/* Central play button */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <a
          href={buttonUrl}
          className="pointer-events-auto group relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full transition-transform hover:scale-110 cursor-pointer"
          style={{
            backgroundColor: `${primaryColor}cc`,
          }}
          aria-label="Play reel"
        >
          <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-white" />
          {/* Pulse ring */}
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: primaryColor }}
          />
        </a>
      </div>

      {/* Content overlay - bottom */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 w-full mt-auto self-end pb-20 sm:pb-24">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
          {/* Text */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Film className="w-4 h-4" style={{ color: primaryColor }} />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: primaryColor }}
              >
                Production Studio
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
              {heading}
            </h1>

            <p className="text-lg sm:text-xl font-light mb-3 opacity-70">
              {subheading}
            </p>

            <p className="text-sm sm:text-base max-w-lg opacity-40 leading-relaxed mb-6">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: primaryColor,
                  color: "#ffffff",
                }}
              >
                <Play className="w-4 h-4" />
                {buttonText}
              </a>

              <a
                href={secondaryButtonUrl}
                className="px-6 py-3 text-sm font-semibold border transition-colors hover:bg-white/5"
                style={{
                  borderColor: `${fgColor}22`,
                  color: fgColor,
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex lg:flex-col gap-6 lg:gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-sm"
                style={{
                  backgroundColor: `${fgColor}08`,
                  border: `1px solid ${fgColor}0a`,
                }}
              >
                <div style={{ color: primaryColor }}>
                  {iconMap[item.icon ?? "film"] ?? <Film className="w-4 h-4" />}
                </div>
                <div>
                  <div className="text-lg font-bold leading-none">{item.title}</div>
                  <div className="text-[10px] opacity-40 mt-0.5">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero110-videoBg {
          animation: hero110Shift 15s ease-in-out infinite;
        }
        @keyframes hero110Shift {
          0%, 100% { filter: brightness(0.8); }
          50% { filter: brightness(1.1); }
        }
        .hero110-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
}
