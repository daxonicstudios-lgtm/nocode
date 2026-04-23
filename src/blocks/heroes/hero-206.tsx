import type { BlockProps } from "@/blocks/types";
import { Heart, ArrowRight, Star } from "lucide-react";

const coachingKeyframes = `
@keyframes typeCoach206 {
  from { width: 0 }
  to { width: 100% }
}
@keyframes coachCursor206 {
  0%, 100% { border-color: currentColor }
  50% { border-color: transparent }
}
@keyframes fadeInBody206 {
  from { opacity: 0; transform: translateY(15px) }
  to { opacity: 1; transform: translateY(0) }
}
@keyframes gentlePulse206 {
  0%, 100% { transform: scale(1) }
  50% { transform: scale(1.05) }
}
`;

export default function Hero206(props: BlockProps) {
  const {
    theme,
    heading = "Unlock your full potential.",
    subheading = "Life & Executive Coaching",
    bodyText = "You already have everything you need to succeed. Together, we'll remove the barriers holding you back and create a roadmap to the life you deserve. Over 500 clients transformed.",
    buttonText = "Book a Free Discovery Call",
    buttonUrl = "#",
    secondaryButtonText = "Success Stories",
    secondaryButtonUrl = "#",
    items = [
      { title: "500+", description: "Clients Coached" },
      { title: "98%", description: "Satisfaction Rate" },
      { title: "12yr", description: "Experience" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-20"
      style={{
        backgroundColor: theme?.background ?? "#fdf8f4",
        color: theme?.foreground ?? "#2d2019",
      }}
    >
      <style>{coachingKeyframes}</style>
      <div className="max-w-5xl mx-auto w-full">
        {/* Subheading label */}
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-6 px-4 py-2 rounded-full"
          style={{
            backgroundColor: (theme?.primary ?? "#c47a5a") + "18",
            color: theme?.primary ?? "#c47a5a",
          }}
        >
          <Heart className="w-3.5 h-3.5" style={{ animation: "gentlePulse206 2s ease-in-out infinite" }} />
          {subheading}
        </div>

        {/* Typewriter heading */}
        <div className="overflow-hidden mb-8">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight overflow-hidden whitespace-nowrap"
            style={{
              borderRight: "3px solid",
              borderColor: theme?.primary ?? "#c47a5a",
              width: "0",
              animation: "typeCoach206 2.5s steps(30) 0.5s forwards, coachCursor206 0.8s step-end infinite",
            }}
          >
            {heading}
          </h1>
        </div>

        {/* Body text — fades in after typewriter completes */}
        <div style={{ animation: "fadeInBody206 1s ease-out 3.5s both" }}>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mb-10 opacity-70">
            {bodyText}
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          style={{ animation: "fadeInBody206 1s ease-out 4s both" }}
        >
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: theme?.primary ?? "#c47a5a",
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border-2 transition-opacity hover:opacity-100 opacity-60"
            style={{ borderColor: theme?.primary ?? "#c47a5a", color: theme?.primary ?? "#c47a5a" }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-6 max-w-md"
          style={{ animation: "fadeInBody206 1s ease-out 4.3s both" }}
        >
          {items.map((item, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                <Star className="w-3 h-3" style={{ color: theme?.primary ?? "#c47a5a" }} />
                <span className="text-2xl sm:text-3xl font-serif font-bold">{item.title}</span>
              </div>
              <p className="text-xs opacity-50">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
