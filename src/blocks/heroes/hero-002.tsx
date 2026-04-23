import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Play } from "lucide-react";

export default function Hero002(props: BlockProps) {
  const {
    theme,
    heading = "Design without limits",
    subheading = "Create stunning websites in minutes with our powerful drag-and-drop builder. Trusted by over 50,000 creators worldwide.",
    buttonText = "Start Building Free",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[90vh] flex items-center justify-center px-5 py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
          <span
            style={
              theme?.primary && theme?.accent
                ? {
                    backgroundImage: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }
                : undefined
            }
            className={
              !(theme?.primary && theme?.accent)
                ? "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
                : undefined
            }
          >
            {heading}
          </span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl md:text-2xl opacity-60 leading-relaxed max-w-2xl mx-auto">
          {subheading}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg bg-violet-600 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border-2 border-current opacity-70 hover:opacity-100 transition-opacity w-full sm:w-auto justify-center"
          >
            <Play className="w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
