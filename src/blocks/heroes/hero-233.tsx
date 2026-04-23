import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const revealStyles = `
.reveal-btn-233 {
  position: relative;
  overflow: hidden;
  z-index: 10;
}
.reveal-img-233 {
  position: absolute;
  inset: 0;
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1;
  pointer-events: none;
}
.reveal-btn-233:hover ~ .reveal-img-233,
.reveal-group-233:hover .reveal-img-233 {
  clip-path: circle(75% at 50% 50%);
}
.editorial-line-233 {
  width: 0;
  transition: width 0.6s ease;
}
.reveal-group-233:hover .editorial-line-233 {
  width: 60px;
}
`;

export default function Hero233(props: BlockProps) {
  const {
    theme,
    heading = "Autumn Winter 2026",
    subheading = "New Collection",
    bodyText = "Where bold silhouettes meet delicate textures. A celebration of contrasts — structured yet flowing, minimal yet statement-making.",
    buttonText = "Shop the Collection",
    buttonUrl = "#",
    secondaryButtonText = "View Lookbook",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#1a1a1a",
        color: theme?.foreground ?? "#e8e4de",
      }}
      className="min-h-screen relative flex items-center px-4 py-20 overflow-hidden"
    >
      <style>{revealStyles}</style>

      {/* Background image that reveals on hover */}
      <div
        className="reveal-img-233"
        style={{
          backgroundImage: imageUrl
            ? `url(${imageUrl})`
            : "linear-gradient(135deg, #2a2420 0%, #3d2e24 50%, #1a1a1a 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${theme?.background ?? "#1a1a1a"}88` }}
        />
      </div>

      <div className="reveal-group-233 max-w-5xl mx-auto w-full relative z-10">
        <div className="max-w-2xl">
          <p
            className="text-xs tracking-[0.4em] uppercase font-light mb-8 flex items-center gap-4"
            style={{ color: theme?.accent ?? "#c4a882" }}
          >
            <span
              className="editorial-line-233 h-px inline-block"
              style={{ backgroundColor: theme?.accent ?? "#c4a882" }}
            />
            {subheading}
          </p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight leading-none mb-8 tracking-tight">
            {heading.split(" ").map((word, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <em className="italic font-light" style={{ color: theme?.accent ?? "#c4a882" }}>
                    {word}
                  </em>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          <p className="text-sm sm:text-base opacity-50 mb-12 max-w-md leading-relaxed font-light">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <a
              href={buttonUrl}
              className="reveal-btn-233 group inline-flex items-center gap-4 text-sm tracking-widest uppercase font-medium transition-all duration-500"
              style={{ color: theme?.foreground ?? "#e8e4de" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme?.accent ?? "#c4a882";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme?.foreground ?? "#e8e4de";
              }}
            >
              {buttonText}
              <span
                className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{ borderColor: theme?.accent ?? "#c4a882" }}
              >
                <ArrowRight className="w-4 h-4" style={{ color: theme?.accent ?? "#c4a882" }} />
              </span>
            </a>
            <a
              href={secondaryButtonUrl}
              className="text-sm tracking-widest uppercase font-light opacity-40 transition-opacity duration-300 hover:opacity-100 pt-3"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative editorial element */}
      <div className="absolute bottom-8 right-8 hidden lg:block z-10">
        <p
          className="text-xs tracking-widest uppercase opacity-30"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll to explore
        </p>
      </div>
    </section>
  );
}
