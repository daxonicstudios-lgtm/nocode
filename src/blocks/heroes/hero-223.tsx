import type { BlockProps } from "@/blocks/types";
import { Camera, Aperture } from "lucide-react";

export default function Hero223(props: BlockProps) {
  const {
    theme,
    heading = "Capturing Moments That Last Forever",
    subheading = "Photography Portfolio",
    bodyText = "Award-winning photography spanning landscapes, portraits, and editorial work across four continents.",
    buttonText = "Explore Gallery",
    buttonUrl = "#",
    secondaryButtonText = "Book a Session",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Landscapes", value: "240+" },
      { title: "Portraits", value: "180+" },
      { title: "Awards", value: "12" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#111111", color: theme?.foreground ?? "#e8e8e8" }}
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      <style>{`
        @keyframes scaleBlurIn {
          from { opacity: 0; transform: scale(1.15); filter: blur(12px); }
          to { opacity: 1; transform: scale(1); filter: blur(0px); }
        }
        @keyframes scaleUpFade {
          from { opacity: 0; transform: scale(0.85); filter: blur(6px); }
          to { opacity: 1; transform: scale(1); filter: blur(0px); }
        }
        @keyframes fadeOnly {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .hero223-bg { animation: scaleBlurIn 1.4s ease-out forwards; opacity: 0; }
        .hero223-content-1 { animation: scaleUpFade 0.9s ease-out 0.5s forwards; opacity: 0; }
        .hero223-content-2 { animation: scaleUpFade 0.9s ease-out 0.7s forwards; opacity: 0; }
        .hero223-content-3 { animation: scaleUpFade 0.9s ease-out 0.9s forwards; opacity: 0; }
        .hero223-content-4 { animation: fadeOnly 0.8s ease-out 1.1s forwards; opacity: 0; }
      `}</style>

      {/* Background image or gradient */}
      <div className="hero223-bg absolute inset-0">
        {imageUrl ? (
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, ${theme?.primary ?? "#2c1810"} 0%, ${theme?.background ?? "#111111"} 50%, ${theme?.accent ?? "#1a3a2a"} 100%)`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hero223-content-1 flex items-center justify-center gap-2 mb-6">
            <Aperture className="w-5 h-5" style={{ color: theme?.accent ?? "#c9a96e" }} />
            <span className="text-sm tracking-[0.25em] uppercase font-light" style={{ color: theme?.accent ?? "#c9a96e" }}>
              {subheading}
            </span>
          </div>

          <h1 className="hero223-content-2 text-4xl md:text-6xl lg:text-8xl font-light leading-tight mb-8 tracking-tight">
            {heading}
          </h1>

          <p className="hero223-content-3 text-base md:text-lg opacity-60 max-w-xl mx-auto mb-12 font-light leading-relaxed">
            {bodyText}
          </p>

          <div className="hero223-content-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.accent ?? "#c9a96e", color: "#111" }}
            >
              <Camera className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center px-8 py-3.5 text-sm font-medium tracking-wide border border-white/25 hover:border-white/50 transition-colors"
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Stats */}
          <div className="hero223-content-4 flex items-center justify-center gap-8 md:gap-16">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-light" style={{ color: theme?.accent ?? "#c9a96e" }}>
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-wider opacity-50 mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
