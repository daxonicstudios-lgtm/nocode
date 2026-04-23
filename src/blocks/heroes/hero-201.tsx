import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const typewriterKeyframes = `
@keyframes typewriter {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink {
  0%, 100% { border-color: currentColor }
  50% { border-color: transparent }
}
`;

export default function Hero201(props: BlockProps) {
  const {
    theme,
    heading = "Build something extraordinary.",
    subheading = "We craft digital experiences that matter.",
    bodyText = "Minimalist design meets powerful technology. Let your ideas take center stage with tools built for the modern creator.",
    buttonText = "Get Started",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#0a0a0a",
        color: theme?.foreground ?? "#fafafa",
      }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <style>{typewriterKeyframes}</style>
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block mb-6">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold overflow-hidden whitespace-nowrap"
            style={{
              borderRight: "3px solid currentColor",
              animation: "typewriter 3s steps(35) 0.5s forwards, blink 0.75s step-end infinite",
              width: "0",
            }}
          >
            {heading}
          </h1>
        </div>
        <p className="text-lg sm:text-xl opacity-60 mb-4 max-w-xl mx-auto">
          {subheading}
        </p>
        <p className="text-sm sm:text-base opacity-40 mb-10 max-w-lg mx-auto leading-relaxed">
          {bodyText}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#ffffff",
              color: theme?.background ?? "#0a0a0a",
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold border border-current opacity-50 hover:opacity-100 transition-opacity"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
