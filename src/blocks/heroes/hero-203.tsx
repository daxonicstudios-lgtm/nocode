import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, Sparkles } from "lucide-react";

const rotatingWordsKeyframes = `
@keyframes rotateWord203 {
  0%, 16% { opacity: 1; transform: translateY(0) }
  20%, 36% { opacity: 0; transform: translateY(-100%) }
  40% { opacity: 0; transform: translateY(100%) }
  44%, 60% { opacity: 0; transform: translateY(100%) }
  64%, 80% { opacity: 0; transform: translateY(100%) }
  84% { opacity: 0; transform: translateY(100%) }
  88%, 100% { opacity: 1; transform: translateY(0) }
}
@keyframes rotateWord203b {
  0%, 16% { opacity: 0; transform: translateY(100%) }
  20% { opacity: 0; transform: translateY(100%) }
  24%, 40% { opacity: 1; transform: translateY(0) }
  44%, 60% { opacity: 0; transform: translateY(-100%) }
  64%, 100% { opacity: 0; transform: translateY(100%) }
}
@keyframes rotateWord203c {
  0%, 40% { opacity: 0; transform: translateY(100%) }
  44% { opacity: 0; transform: translateY(100%) }
  48%, 64% { opacity: 1; transform: translateY(0) }
  68%, 84% { opacity: 0; transform: translateY(-100%) }
  88%, 100% { opacity: 0; transform: translateY(100%) }
}
@keyframes heroFadeIn203 {
  from { opacity: 0; transform: translateY(30px) }
  to { opacity: 1; transform: translateY(0) }
}
`;

export default function Hero203(props: BlockProps) {
  const {
    theme,
    heading = "We build brands that",
    subheading = "A creative agency that turns bold ideas into unforgettable digital experiences.",
    bodyText = "Strategy. Design. Development. We do it all so you can focus on what matters most — your vision.",
    buttonText = "Start a Project",
    buttonUrl = "#",
    secondaryButtonText = "Our Work",
    secondaryButtonUrl = "#",
    items = [
      { title: "inspire." },
      { title: "convert." },
      { title: "dominate." },
    ],
  } = props;

  const wordAnimations = [
    "rotateWord203 6s ease-in-out infinite",
    "rotateWord203b 6s ease-in-out infinite",
    "rotateWord203c 6s ease-in-out infinite",
  ];

  return (
    <section
      className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#faf9f6",
        color: theme?.foreground ?? "#1a1a1a",
      }}
    >
      <style>{rotatingWordsKeyframes}</style>

      {/* Decorative circles */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: theme?.primary ?? "#e85d04" }}
      />
      <div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: theme?.accent ?? "#ff9e00" }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 uppercase tracking-widest"
          style={{
            backgroundColor: (theme?.primary ?? "#e85d04") + "15",
            color: theme?.primary ?? "#e85d04",
            animation: "heroFadeIn203 0.6s ease-out both",
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Creative Agency
        </div>

        <div style={{ animation: "heroFadeIn203 0.6s ease-out 0.2s both" }}>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight mb-2">
            {heading}
          </h1>
          <div className="relative h-[1.2em] overflow-hidden text-3xl sm:text-5xl md:text-7xl font-black mb-8">
            {items.slice(0, 3).map((item, i) => (
              <span
                key={i}
                className="absolute left-0 top-0"
                style={{
                  color: theme?.primary ?? "#e85d04",
                  animation: wordAnimations[i] ?? wordAnimations[0],
                  opacity: i === 0 ? 1 : 0,
                }}
              >
                {item.title}
              </span>
            ))}
          </div>
        </div>

        <p
          className="text-lg sm:text-xl opacity-70 max-w-2xl mb-3 leading-relaxed"
          style={{ animation: "heroFadeIn203 0.6s ease-out 0.4s both" }}
        >
          {subheading}
        </p>
        <p
          className="text-sm sm:text-base opacity-50 max-w-xl mb-10"
          style={{ animation: "heroFadeIn203 0.6s ease-out 0.5s both" }}
        >
          {bodyText}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: "heroFadeIn203 0.6s ease-out 0.6s both" }}
        >
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#e85d04",
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold border-2 transition-colors hover:opacity-80"
            style={{ borderColor: theme?.foreground ?? "#1a1a1a" }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
