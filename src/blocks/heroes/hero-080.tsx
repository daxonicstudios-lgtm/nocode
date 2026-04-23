import type { BlockProps } from "@/blocks/types";
import { Globe, BookOpen, ArrowRight, Languages, Trophy, MessageCircle } from "lucide-react";

export default function Hero080(props: BlockProps) {
  const {
    theme,
    heading = "Learn Any Language, Anywhere",
    subheading = "Master a new language with bite-sized lessons designed for busy people",
    bodyText = "Join 2 million learners worldwide. Our AI-powered platform adapts to your pace and style for the fastest path to fluency.",
    buttonText = "Start Free",
    buttonUrl = "#",
    secondaryButtonText = "See Languages",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Spanish", value: "85" },
      { title: "French", value: "62" },
      { title: "Japanese", value: "41" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf5ff", color: theme?.foreground ?? "#1e1b4b" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          {/* Text Side (right on desktop) */}
          <div className="flex-1 text-center md:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{
                backgroundColor: theme?.primary ? `${theme.primary}15` : "#7c3aed15",
                color: theme?.primary ?? "#7c3aed",
              }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Language Learning Platform
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {heading}
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg mx-auto md:mx-0">
              {subheading}
            </p>
            <p className="mt-3 text-sm opacity-50 max-w-md mx-auto md:mx-0">
              {bodyText}
            </p>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start text-sm">
              {[
                { icon: Globe, label: "30+ Languages" },
                { icon: Trophy, label: "2M+ Learners" },
                { icon: MessageCircle, label: "Live Practice" },
              ].map(({ icon: Icon, label }, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 opacity-60">
                  <Icon className="w-4 h-4" style={{ color: theme?.primary ?? "#7c3aed" }} />
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base border-2 hover:opacity-80 transition-opacity"
                style={{ borderColor: theme?.primary ?? "#7c3aed", color: theme?.primary ?? "#7c3aed" }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Globe / Language Icons Side (left on desktop) */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Language learning"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
            ) : (
              <div
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl flex flex-col items-center justify-center gap-8 relative overflow-hidden"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "#7c3aed08" }}
              >
                {/* Globe icon */}
                <Globe className="w-28 h-28 opacity-15" style={{ color: theme?.primary ?? "#7c3aed" }} />

                {/* Floating language badges */}
                <div className="absolute top-8 left-8 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
                >
                  <Languages className="w-3.5 h-3.5" />
                  Hola
                </div>
                <div className="absolute top-16 right-6 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-white opacity-80"
                  style={{ backgroundColor: theme?.accent ?? "#a78bfa" }}
                >
                  Bonjour
                </div>
                <div className="absolute bottom-20 left-12 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-white opacity-70"
                  style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
                >
                  Konnichiwa
                </div>

                {/* Progress bars */}
                <div className="w-[80%] space-y-4">
                  {items.map((item, i) => {
                    const pct = parseInt(item.value ?? "50", 10);
                    return (
                      <div key={i}>
                        <div className="flex justify-between text-xs font-semibold mb-1.5 opacity-60">
                          <span>{item.title}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#7c3aed15" }}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${pct}%`,
                              backgroundColor: theme?.primary ?? "#7c3aed",
                              opacity: 1 - i * 0.2,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
