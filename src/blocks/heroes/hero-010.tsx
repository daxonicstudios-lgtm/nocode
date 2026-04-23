import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Rocket } from "lucide-react";

export default function Hero010(props: BlockProps) {
  const {
    theme,
    heading = "The smarter way to build online",
    subheading = "Everything you need to create, launch, and grow your website — packed into one beautifully simple platform.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    secondaryButtonText = "See How It Works",
    secondaryButtonUrl = "#",
    bodyText = "Just launched v2.0",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[90vh] flex items-center justify-center px-5 py-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <a
          href={secondaryButtonUrl}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border border-current/10 hover:border-current/20 transition-colors mb-8"
          style={{
            backgroundColor: theme?.accent ? `${theme.accent}10` : "#fef3c7",
            color: theme?.accent || "#92400e",
          }}
        >
          <Rocket className="w-3.5 h-3.5" />
          {bodyText}
          <ArrowRight className="w-3 h-3" />
        </a>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl opacity-60 leading-relaxed max-w-2xl mx-auto">
          {subheading}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base bg-indigo-600 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border border-current/15 hover:border-current/30 transition-colors w-full sm:w-auto justify-center"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
