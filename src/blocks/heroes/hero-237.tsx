import type { BlockProps } from "@/blocks/types";
import { Music, Ticket, MapPin, Calendar, ArrowRight } from "lucide-react";

const neonStyles = `
@keyframes neonPulse237 {
  0%, 100% { text-shadow: 0 0 10px var(--neon-color), 0 0 20px var(--neon-color), 0 0 40px var(--neon-color); }
  50% { text-shadow: 0 0 5px var(--neon-color), 0 0 10px var(--neon-color), 0 0 20px var(--neon-color); }
}
.neon-heading-237 {
  animation: neonPulse237 3s ease-in-out infinite;
}
.neon-btn-237 {
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 0 10px var(--neon-color), inset 0 0 10px transparent;
}
.neon-btn-237:hover {
  box-shadow: 0 0 20px var(--neon-color), 0 0 40px var(--neon-color), inset 0 0 20px var(--neon-color);
  text-shadow: 0 0 8px var(--neon-color);
  transform: scale(1.05);
}
.neon-btn-237::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: inherit;
  background: linear-gradient(45deg, transparent, var(--neon-color), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
  filter: blur(8px);
}
.neon-btn-237:hover::before {
  opacity: 0.6;
}
.neon-card-237 {
  transition: all 0.4s ease;
  border: 1px solid transparent;
}
.neon-card-237:hover {
  border-color: var(--neon-color);
  box-shadow: 0 0 15px var(--neon-color), inset 0 0 15px color-mix(in srgb, var(--neon-color) 10%, transparent);
}
.neon-icon-237 {
  transition: all 0.4s ease;
}
.neon-card-237:hover .neon-icon-237 {
  filter: drop-shadow(0 0 8px var(--neon-color));
  transform: scale(1.15);
}
`;

export default function Hero237(props: BlockProps) {
  const {
    theme,
    heading = "NEON NIGHTS",
    subheading = "The Ultimate Club Experience",
    bodyText = "Where the city comes alive. World-class DJs, immersive light shows, and unforgettable nights every weekend.",
    buttonText = "Get Tickets",
    buttonUrl = "#",
    secondaryButtonText = "See Lineup",
    secondaryButtonUrl = "#",
    items = [
      { title: "This Friday", description: "DJ Pulse — Deep House & Techno", icon: "music", label: "10 PM" },
      { title: "Saturday", description: "Neon Rave — Multi-room Event", icon: "ticket", label: "9 PM" },
      { title: "Next Week", description: "International Guest: Kai Noir", icon: "calendar", label: "11 PM" },
    ],
  } = props;

  const neonColor = theme?.primary ?? "#e040fb";
  const neonSecondary = theme?.accent ?? "#00e5ff";

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#0a0a0a",
        color: theme?.foreground ?? "#ffffff",
        "--neon-color": neonColor,
      } as React.CSSProperties}
      className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden"
    >
      <style>{neonStyles}</style>

      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
        style={{ backgroundColor: neonColor }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
        style={{ backgroundColor: neonSecondary }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-4 h-4" style={{ color: neonSecondary }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: neonSecondary }}>
              {subheading}
            </span>
          </div>

          <h1
            className="neon-heading-237 text-6xl sm:text-8xl lg:text-9xl font-black mb-6 tracking-widest"
            style={{
              color: neonColor,
              "--neon-color": neonColor,
            } as React.CSSProperties}
          >
            {heading}
          </h1>

          <p className="text-sm sm:text-base opacity-50 max-w-lg mx-auto mb-10 font-light">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="neon-btn-237 inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
              style={{
                border: `2px solid ${neonColor}`,
                color: neonColor,
                "--neon-color": neonColor,
              } as React.CSSProperties}
            >
              <Ticket className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="neon-btn-237 inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
              style={{
                border: `2px solid ${neonSecondary}`,
                color: neonSecondary,
                "--neon-color": neonSecondary,
              } as React.CSSProperties}
            >
              {secondaryButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Event cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {items.slice(0, 3).map((item, i) => {
            const cardNeon = i % 2 === 0 ? neonColor : neonSecondary;
            return (
              <div
                key={i}
                className="neon-card-237 p-6 rounded-xl text-center cursor-default"
                style={{
                  backgroundColor: `${theme?.foreground ?? "#ffffff"}05`,
                  "--neon-color": cardNeon,
                } as React.CSSProperties}
              >
                <div className="neon-icon-237 inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                  style={{ border: `1px solid ${cardNeon}44` }}
                >
                  <Music className="w-5 h-5" style={{ color: cardNeon }} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: cardNeon }}>
                  {item.title}
                </h3>
                <p className="text-sm opacity-60 mb-3">{item.description}</p>
                <span className="text-xs font-mono opacity-40">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
