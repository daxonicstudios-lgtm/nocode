import type { BlockProps } from "@/blocks/types";
import { TrendingUp, BarChart3, Target } from "lucide-react";

const highlightKeyframes = `
@keyframes wordHighlight209_1 {
  0%, 10% { color: inherit }
  15%, 100% { color: var(--accent209) }
}
@keyframes wordHighlight209_2 {
  0%, 25% { color: inherit }
  30%, 100% { color: var(--accent209) }
}
@keyframes wordHighlight209_3 {
  0%, 40% { color: inherit }
  45%, 100% { color: var(--accent209) }
}
@keyframes wordHighlight209_4 {
  0%, 55% { color: inherit }
  60%, 100% { color: var(--accent209) }
}
@keyframes wordHighlight209_5 {
  0%, 70% { color: inherit }
  75%, 100% { color: var(--accent209) }
}
@keyframes typeHeading209 {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blinkCursor209 {
  0%, 100% { border-color: var(--accent209) }
  50% { border-color: transparent }
}
@keyframes riseIn209 {
  from { opacity: 0; transform: translateY(30px) }
  to { opacity: 1; transform: translateY(0) }
}
@keyframes underlineGrow209 {
  from { width: 0 }
  to { width: 100% }
}
`;

export default function Hero209(props: BlockProps) {
  const {
    theme,
    heading = "Grow your brand with data-driven marketing",
    subheading = "We turn clicks into customers and impressions into revenue.",
    bodyText = "Our full-stack marketing team combines creative strategy with advanced analytics to deliver campaigns that measurably move the needle. No fluff, just results.",
    buttonText = "Get Your Free Audit",
    buttonUrl = "#",
    secondaryButtonText = "Case Studies",
    secondaryButtonUrl = "#",
    items = [
      { icon: "trending", title: "312%", description: "Average ROI increase" },
      { icon: "bar", title: "50M+", description: "Ad spend managed" },
      { icon: "target", title: "1,200+", description: "Campaigns launched" },
    ],
  } = props;

  const accentColor = theme?.primary ?? "#f43f5e";

  const headingWords = heading.split(" ");
  const wordAnims = [
    "wordHighlight209_1",
    "wordHighlight209_2",
    "wordHighlight209_3",
    "wordHighlight209_4",
    "wordHighlight209_5",
  ];

  const iconMap: Record<string, React.ReactNode> = {
    trending: <TrendingUp className="w-6 h-6" />,
    bar: <BarChart3 className="w-6 h-6" />,
    target: <Target className="w-6 h-6" />,
  };

  return (
    <section
      className="min-h-screen flex items-center px-4 py-20"
      style={{
        backgroundColor: theme?.background ?? "#ffffff",
        color: theme?.foreground ?? "#111827",
        // CSS custom property for animations
        "--accent209": accentColor,
      } as React.CSSProperties}
    >
      <style>{highlightKeyframes}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left content — 3 cols */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8"
              style={{
                backgroundColor: accentColor + "12",
                color: accentColor,
                animation: "riseIn209 0.6s ease-out both",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Performance Marketing
            </div>

            {/* Heading with progressive word highlight */}
            <div className="overflow-hidden mb-4">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight overflow-hidden whitespace-nowrap"
                style={{
                  borderRight: `3px solid ${accentColor}`,
                  width: "0",
                  animation: "typeHeading209 3s steps(45) 0.5s forwards, blinkCursor209 0.7s step-end infinite",
                }}
              >
                {heading}
              </h1>
            </div>

            {/* Duplicate heading for word-by-word highlight (visible after type finishes) */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 flex flex-wrap gap-x-3"
              style={{ animation: "riseIn209 0.1s ease-out 3.8s both", opacity: 0 }}
            >
              {headingWords.map((word, i) => (
                <span
                  key={i}
                  className="font-extrabold transition-colors"
                  style={{
                    animation: `${wordAnims[i % wordAnims.length]} 4s ease-out ${4 + i * 0.3}s both`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              className="text-base sm:text-lg font-medium mb-2 opacity-80"
              style={{ animation: "riseIn209 0.6s ease-out 4s both" }}
            >
              {subheading}
            </p>

            <p
              className="text-sm sm:text-base opacity-50 max-w-xl mb-10 leading-relaxed"
              style={{ animation: "riseIn209 0.6s ease-out 4.3s both" }}
            >
              {bodyText}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: "riseIn209 0.6s ease-out 4.5s both" }}
            >
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold transition-transform hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: accentColor,
                  color: "#ffffff",
                  boxShadow: `0 8px 30px ${accentColor}40`,
                }}
              >
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold border-2 transition-opacity hover:opacity-100 opacity-60"
                style={{ borderColor: theme?.foreground ?? "#111827" }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right stats — 2 cols */}
          <div
            className="lg:col-span-2 space-y-6"
            style={{ animation: "riseIn209 0.7s ease-out 0.5s both" }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border relative overflow-hidden"
                style={{
                  borderColor: "rgba(0,0,0,0.08)",
                  backgroundColor: theme?.background ?? "#ffffff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                }}
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 h-1 rounded-full"
                  style={{
                    backgroundColor: accentColor,
                    animation: `underlineGrow209 1s ease-out ${1 + i * 0.4}s both`,
                  }}
                />
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: accentColor + "12",
                      color: accentColor,
                    }}
                  >
                    {iconMap[item.icon ?? ""] ?? <TrendingUp className="w-6 h-6" />}
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black">{item.title}</p>
                    <p className="text-sm opacity-50">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
