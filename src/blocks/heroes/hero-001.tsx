import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Hero001(props: BlockProps) {
  const {
    theme,
    heading = "Build something amazing today",
    subheading = "The simplest way to bring your ideas to life. No coding required, no complexity — just results.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          {heading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl opacity-70 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>
        <div className="mt-10">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-base bg-black hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
