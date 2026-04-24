import type { BlockProps } from "@/blocks/types";
import { Braces, ArrowRight } from "lucide-react";

export default function Cta209(props: BlockProps) {
  const {
    theme,
    heading = "Open-source and extensible",
    subheading = "Fork, customize, and contribute. Our codebase is yours to explore.",
    buttonText = "View on GitHub",
    buttonUrl = "#",
    secondaryButtonText = "Star the Repo",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#111827", color: theme?.foreground ?? "#f3f4f6" }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Braces className="w-12 h-12 mx-auto mb-5" style={{ color: theme?.primary ?? "#a78bfa" }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-60 max-w-lg mx-auto">{subheading}</p>
        <div className="mt-6 inline-flex items-center gap-3 rounded-lg px-4 py-2 font-mono text-sm" style={{ backgroundColor: "#1f2937" }}>
          <span className="text-green-400">git clone</span>
          <span className="opacity-70">https://github.com/acme/framework.git</span>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#a78bfa" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="px-6 py-3 rounded-lg font-medium text-sm border border-white/20">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
