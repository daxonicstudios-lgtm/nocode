import type { BlockProps } from "@/blocks/types";
import { Heart, Calendar, MapPin } from "lucide-react";

const weddingKeyframes = `
@keyframes elegantType208 {
  from { width: 0 }
  to { width: 100% }
}
@keyframes elegantCursor208 {
  0%, 100% { border-color: #c9a96e }
  50% { border-color: transparent }
}
@keyframes fadeInElegant208 {
  from { opacity: 0; transform: translateY(25px) }
  to { opacity: 1; transform: translateY(0) }
}
@keyframes floatHeart208 {
  0%, 100% { transform: translateY(0) rotate(-3deg) }
  50% { transform: translateY(-10px) rotate(3deg) }
}
@keyframes shimmer208 {
  0% { background-position: -200% center }
  100% { background-position: 200% center }
}
`;

export default function Hero208(props: BlockProps) {
  const {
    theme,
    heading = "Sarah & James",
    subheading = "We're getting married!",
    bodyText = "Together with their families, Sarah Mitchell and James Anderson invite you to celebrate their union of love and commitment.",
    buttonText = "RSVP Now",
    buttonUrl = "#",
    secondaryButtonText = "Gift Registry",
    secondaryButtonUrl = "#",
    items = [
      { icon: "calendar", title: "June 15, 2026", description: "Saturday, 4:00 PM" },
      { icon: "mappin", title: "The Grand Estate", description: "Napa Valley, California" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    calendar: <Calendar className="w-5 h-5" />,
    mappin: <MapPin className="w-5 h-5" />,
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#faf7f2",
        color: theme?.foreground ?? "#3d2e1e",
      }}
    >
      <style>{weddingKeyframes}</style>

      {/* Decorative corners */}
      <div
        className="absolute top-0 left-0 w-32 h-32 opacity-20"
        style={{
          borderTop: `2px solid ${theme?.accent ?? "#c9a96e"}`,
          borderLeft: `2px solid ${theme?.accent ?? "#c9a96e"}`,
          margin: "2rem",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-32 h-32 opacity-20"
        style={{
          borderBottom: `2px solid ${theme?.accent ?? "#c9a96e"}`,
          borderRight: `2px solid ${theme?.accent ?? "#c9a96e"}`,
          margin: "2rem",
        }}
      />

      {/* Floating hearts */}
      <Heart
        className="absolute top-1/4 right-[15%] w-6 h-6 opacity-10"
        style={{ color: theme?.primary ?? "#c9a96e", animation: "floatHeart208 4s ease-in-out infinite" }}
      />
      <Heart
        className="absolute bottom-1/3 left-[10%] w-4 h-4 opacity-10"
        style={{ color: theme?.primary ?? "#c9a96e", animation: "floatHeart208 5s ease-in-out infinite 1s" }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Small ornament */}
        <div
          className="flex items-center justify-center gap-3 mb-6"
          style={{ animation: "fadeInElegant208 0.8s ease-out both" }}
        >
          <div className="w-12 h-px" style={{ backgroundColor: theme?.accent ?? "#c9a96e" }} />
          <Heart className="w-4 h-4" style={{ color: theme?.accent ?? "#c9a96e", animation: "floatHeart208 3s ease-in-out infinite" }} />
          <div className="w-12 h-px" style={{ backgroundColor: theme?.accent ?? "#c9a96e" }} />
        </div>

        {/* Subheading */}
        <p
          className="text-sm uppercase tracking-[0.3em] mb-4 opacity-60"
          style={{
            fontFamily: "serif",
            animation: "fadeInElegant208 0.8s ease-out 0.2s both",
          }}
        >
          {subheading}
        </p>

        {/* Typewriter heading — cursive style */}
        <div className="inline-block mb-8">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-light overflow-hidden whitespace-nowrap italic"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              borderRight: "2px solid",
              borderColor: theme?.accent ?? "#c9a96e",
              width: "0",
              animation: "elegantType208 3s steps(15) 1s forwards, elegantCursor208 0.8s step-end infinite",
              color: theme?.foreground ?? "#3d2e1e",
            }}
          >
            {heading}
          </h1>
        </div>

        {/* Divider */}
        <div
          className="flex items-center justify-center gap-2 mb-6"
          style={{ animation: "fadeInElegant208 0.8s ease-out 4.2s both" }}
        >
          <div className="w-16 h-px" style={{ backgroundColor: theme?.accent ?? "#c9a96e", opacity: 0.4 }} />
          <span className="text-xs tracking-widest opacity-40" style={{ fontFamily: "serif" }}>&#10047;</span>
          <div className="w-16 h-px" style={{ backgroundColor: theme?.accent ?? "#c9a96e", opacity: 0.4 }} />
        </div>

        {/* Body */}
        <p
          className="text-sm sm:text-base leading-relaxed opacity-60 max-w-md mx-auto mb-10"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            animation: "fadeInElegant208 1s ease-out 4.5s both",
          }}
        >
          {bodyText}
        </p>

        {/* Event details */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-10"
          style={{ animation: "fadeInElegant208 1s ease-out 5s both" }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div style={{ color: theme?.accent ?? "#c9a96e" }}>
                {iconMap[item.icon ?? ""] ?? <Calendar className="w-5 h-5" />}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs opacity-50">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "fadeInElegant208 1s ease-out 5.3s both" }}
        >
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center px-10 py-3.5 text-sm font-semibold uppercase tracking-widest transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#c9a96e",
              color: "#ffffff",
              fontFamily: "serif",
            }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center px-10 py-3.5 text-sm font-semibold uppercase tracking-widest border transition-opacity hover:opacity-100 opacity-60"
            style={{
              borderColor: theme?.accent ?? "#c9a96e",
              color: theme?.accent ?? "#c9a96e",
              fontFamily: "serif",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
