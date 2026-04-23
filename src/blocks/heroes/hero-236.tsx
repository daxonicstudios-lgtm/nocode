import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, Github, Dribbble, Linkedin } from "lucide-react";

const drawStyles = `
.draw-underline-236 {
  position: relative;
  text-decoration: none;
}
.draw-underline-236::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}
.draw-underline-236:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
.scale-cta-236 {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
}
.scale-cta-236:hover {
  transform: scale(1.08);
}
.social-icon-236 {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.social-icon-236:hover {
  transform: translateY(-3px);
  opacity: 1 !important;
}
`;

export default function Hero236(props: BlockProps) {
  const {
    theme,
    heading = "Creative Developer & Visual Designer",
    subheading = "Alex Rivera",
    bodyText = "I craft digital experiences at the intersection of design and code. Currently available for freelance projects and creative collaborations.",
    buttonText = "View My Work",
    buttonUrl = "#",
    secondaryButtonText = "Get in Touch",
    secondaryButtonUrl = "#",
    navLinks = [
      { label: "Projects", url: "#projects" },
      { label: "About", url: "#about" },
      { label: "Journal", url: "#journal" },
      { label: "Contact", url: "#contact" },
    ],
  } = props;

  const accent = theme?.accent ?? "#f59e0b";
  const fg = theme?.foreground ?? "#fafafa";

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#171717",
        color: fg,
      }}
      className="min-h-screen flex flex-col px-6 sm:px-10 py-8"
    >
      <style>{drawStyles}</style>

      {/* Nav with draw-underline links */}
      <nav className="flex flex-wrap items-center justify-between mb-auto">
        <span className="text-lg font-bold tracking-tight">{subheading}</span>
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="draw-underline-236 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
              style={{
                "--underline-color": accent,
              } as React.CSSProperties}
            >
              <style>{`.draw-underline-236:nth-child(${i + 1})::after { background-color: ${accent}; }`}</style>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#22c55e" }}
            />
            <span className="text-xs tracking-widest uppercase opacity-50">Available for work</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            {heading.split("&").map((part, i) => (
              <span key={i}>
                {i > 0 && (
                  <span style={{ color: accent }}>&amp; </span>
                )}
                {part.trim()}{" "}
              </span>
            ))}
          </h1>

          <p className="text-base sm:text-lg opacity-50 max-w-lg mb-12 leading-relaxed font-light">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <a
              href={buttonUrl}
              className="scale-cta-236 inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider"
              style={{
                backgroundColor: accent,
                color: theme?.background ?? "#171717",
                boxShadow: `0 4px 20px ${accent}33`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 30px ${accent}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 20px ${accent}33`;
              }}
            >
              {buttonText}
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="scale-cta-236 inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider border"
              style={{ borderColor: `${fg}25` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent;
                e.currentTarget.style.color = accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${fg}25`;
                e.currentTarget.style.color = fg;
              }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>

      {/* Footer with social icons */}
      <div className="mt-auto flex items-center justify-between pt-8">
        <p className="text-xs opacity-30">Based in Lagos, working globally</p>
        <div className="flex items-center gap-5">
          {[Github, Dribbble, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="social-icon-236 opacity-40">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
