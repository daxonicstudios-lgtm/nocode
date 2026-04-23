import type { BlockProps } from "@/blocks/types";
import { Camera, ArrowUpRight, Eye } from "lucide-react";

const invertStyles = `
.invert-btn-239 {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}
.invert-btn-239::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--invert-fg);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 0;
}
.invert-btn-239:hover::before {
  transform: scaleY(1);
}
.invert-btn-239 > * {
  position: relative;
  z-index: 1;
}
.invert-btn-239:hover {
  color: var(--invert-bg) !important;
  border-color: var(--invert-fg) !important;
}
.zoom-img-239 {
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.zoom-container-239:hover .zoom-img-239 {
  transform: scale(1.1);
}
.zoom-overlay-239 {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.zoom-container-239:hover .zoom-overlay-239 {
  opacity: 1;
}
`;

export default function Hero239(props: BlockProps) {
  const {
    theme,
    heading = "Capturing Moments That Matter",
    subheading = "Photography Studio",
    bodyText = "Documentary and portrait photography rooted in authenticity. Every frame is an honest moment, every project a collaboration between subject and lens.",
    buttonText = "View Portfolio",
    buttonUrl = "#",
    secondaryButtonText = "Book a Session",
    secondaryButtonUrl = "#",
    items = [
      { title: "Portraits", imageUrl: "", description: "Intimate character studies" },
      { title: "Editorial", imageUrl: "", description: "Stories through imagery" },
      { title: "Documentary", imageUrl: "", description: "Truth in every frame" },
    ],
  } = props;

  const bg = theme?.background ?? "#fafaf9";
  const fg = theme?.foreground ?? "#1c1917";
  const primary = theme?.primary ?? "#1c1917";

  return (
    <section
      style={{
        backgroundColor: bg,
        color: fg,
        "--invert-fg": fg,
        "--invert-bg": bg,
      } as React.CSSProperties}
      className="min-h-screen flex items-center px-4 py-20"
    >
      <style>{invertStyles}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-5 h-5 opacity-40" />
              <span className="text-xs tracking-[0.3em] uppercase opacity-40 font-medium">
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-sm sm:text-base opacity-50 mb-10 max-w-md leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="invert-btn-239 inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase border-2"
                style={{
                  borderColor: fg,
                  color: fg,
                }}
              >
                <span>{buttonText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="invert-btn-239 inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase border-2"
                style={{
                  borderColor: `${fg}30`,
                  color: fg,
                }}
              >
                <span>{secondaryButtonText}</span>
              </a>
            </div>
          </div>

          {/* Image grid with zoom */}
          <div className="grid grid-cols-2 gap-3">
            {items.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className={`zoom-container-239 relative overflow-hidden cursor-pointer ${
                  i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
                style={{ backgroundColor: `${fg}10` }}
              >
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="zoom-img-239 w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="zoom-img-239 w-full h-full flex items-center justify-center"
                    style={{
                      background: i === 0
                        ? `linear-gradient(135deg, ${fg}15, ${fg}08)`
                        : i === 1
                        ? `linear-gradient(225deg, ${fg}12, ${fg}05)`
                        : `linear-gradient(45deg, ${fg}10, ${fg}06)`,
                    }}
                  >
                    <Camera className="w-8 h-8 opacity-20" />
                  </div>
                )}
                {/* Hover overlay */}
                <div
                  className="zoom-overlay-239 absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: `${fg}cc` }}
                >
                  <div className="text-center" style={{ color: bg }}>
                    <Eye className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs opacity-70">{item.description}</p>
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
