import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta251(props: BlockProps) {
  const {
    theme,
    heading = "Start Building Today",
    subheading = "Join thousands of creators who ship faster with our platform.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20 sm:py-28" style={{ backgroundColor: theme?.background ?? "#e0e5ec", color: theme?.foreground ?? "#333" }}>
      <div
        className="max-w-2xl mx-auto text-center rounded-3xl px-8 py-14 sm:px-14"
        style={{
          background: theme?.background ?? "#e0e5ec",
          boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
        }}
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{heading}</h2>
        <p className="mt-4 text-base sm:text-lg opacity-70 max-w-lg mx-auto">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-white"
            style={{
              backgroundColor: theme?.primary ?? "#6366f1",
              boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
            }}
          >
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-sm"
            style={{
              boxShadow: "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
