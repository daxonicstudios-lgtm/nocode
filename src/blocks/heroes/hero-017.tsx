import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Hero017(props: BlockProps) {
  const {
    theme,
    heading = "Design with intention.",
    subheading = "Simple tools for people who value clarity over clutter.",
    buttonText = "Explore the platform",
    buttonUrl = "#explore",
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#ffffff",
        color: theme?.foreground ?? "#1a1a1a",
      }}
      className="min-h-screen flex items-center justify-center px-6 py-32"
    >
      <div className="max-w-xl w-full text-center">
        {/* Heading — large and clean */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-[1.1]">
          {heading}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg opacity-40 max-w-sm mx-auto mb-16 leading-relaxed">
          {subheading}
        </p>

        {/* Single text link CTA */}
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 text-sm sm:text-base font-medium tracking-wide transition-opacity hover:opacity-60 group"
          style={{ color: theme?.primary ?? "#1a1a1a" }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Subtle divider */}
        <div
          className="w-10 h-px mx-auto mt-16 opacity-20"
          style={{ backgroundColor: theme?.foreground ?? "#1a1a1a" }}
        />
      </div>
    </section>
  );
}
