import type { BlockProps } from "@/blocks/types";
import { Terminal, ChevronRight } from "lucide-react";

export default function Hero039(props: BlockProps) {
  const {
    theme,
    heading = "Build. Deploy. Scale.",
    subheading = "npx create-awesome-app@latest",
    bodyText = "The developer platform that gets out of your way. Ship production-ready apps in minutes, not months.",
    buttonText = "Start Building",
    buttonUrl = "#",
    secondaryButtonText = "Read the Docs",
    secondaryButtonUrl = "#",
  } = props;

  const primaryColor = theme?.primary || "#22c55e";
  const bgColor = theme?.background || "#0a0a0a";
  const fgColor = theme?.foreground || "#e5e5e5";

  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-4 py-16 sm:py-24"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      <div className="max-w-2xl mx-auto text-center w-full">
        {/* Terminal-style badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md mb-8 border border-gray-700 bg-gray-900">
          <Terminal className="w-3.5 h-3.5" style={{ color: primaryColor }} />
          <span className="text-xs font-mono opacity-70">v2.0 released</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[0.95]">
          {heading.split(".").map((word, i, arr) => (
            <span key={i}>
              {word.trim()}
              {i < arr.length - 1 && (
                <span style={{ color: primaryColor }}>.</span>
              )}
              {i < arr.length - 2 && " "}
            </span>
          ))}
        </h1>

        {/* Command-style subheading */}
        <div className="max-w-md mx-auto mb-6 rounded-lg border border-gray-700 bg-gray-900 overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-gray-800">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-70" />
          </div>
          <div className="px-4 py-3 text-left font-mono text-sm sm:text-base flex items-center gap-2">
            <ChevronRight className="w-4 h-4 shrink-0" style={{ color: primaryColor }} />
            <span className="opacity-80">{subheading}</span>
            <span
              className="w-2 h-5 animate-pulse ml-0.5"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
        </div>

        <p className="text-sm sm:text-base opacity-60 mb-10 max-w-md mx-auto leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-transform hover:scale-105"
            style={{ backgroundColor: primaryColor, color: bgColor }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base border border-gray-600 transition-colors hover:border-gray-400"
            style={{ color: fgColor }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
