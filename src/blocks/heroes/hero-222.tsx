import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero222(props: BlockProps) {
  const {
    theme,
    heading = "We Build Brands That Move People",
    subheading = "Creative Agency",
    bodyText = "From strategy to execution, we craft digital experiences that captivate audiences and drive real business results.",
    buttonText = "View Our Work",
    buttonUrl = "#",
    secondaryButtonText = "Let's Talk",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f0f0f", color: theme?.foreground ?? "#f5f5f5" }}
      className="min-h-screen flex items-center overflow-hidden"
    >
      <style>{`
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hero222-left-1 { animation: slideFromLeft 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; opacity: 0; }
        .hero222-left-2 { animation: slideFromLeft 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s forwards; opacity: 0; }
        .hero222-left-3 { animation: slideFromLeft 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards; opacity: 0; }
        .hero222-left-4 { animation: slideFromLeft 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.45s forwards; opacity: 0; }
        .hero222-right { animation: slideFromRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards; opacity: 0; }
      `}</style>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        {/* Text Side */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16 xl:px-24">
          <div className="hero222-left-1 flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4" style={{ color: theme?.accent ?? "#ff6b35" }} />
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: theme?.accent ?? "#ff6b35" }}>
              {subheading}
            </span>
          </div>

          <h1 className="hero222-left-2 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            {heading}
          </h1>

          <p className="hero222-left-3 text-base md:text-lg opacity-60 leading-relaxed mb-10 max-w-lg">
            {bodyText}
          </p>

          <div className="hero222-left-4 flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.accent ?? "#ff6b35", color: "#fff" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold border border-white/20 hover:border-white/40 transition-colors"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="hero222-right relative flex items-center justify-center px-6 lg:px-0">
          <div className="relative w-full max-w-lg lg:max-w-none lg:h-screen">
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full h-full object-cover lg:absolute lg:inset-0" />
            ) : (
              <div
                className="w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-2xl lg:rounded-none flex items-center justify-center"
                style={{ backgroundColor: theme?.accent ?? "#ff6b35" }}
              >
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-white/30 flex items-center justify-center mb-4">
                    <Sparkles className="w-10 h-10 text-white/80" />
                  </div>
                  <p className="text-white/70 text-lg font-medium">Your Vision Here</p>
                </div>
              </div>
            )}
            {/* Overlay accent bar */}
            <div
              className="hidden lg:block absolute bottom-0 left-0 w-full h-1"
              style={{ backgroundColor: theme?.accent ?? "#ff6b35" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
