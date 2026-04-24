import type { BlockProps } from "@/blocks/types";
import { Play, BookOpen } from "lucide-react";

export default function Cta062(props: BlockProps) {
  const {
    theme,
    heading = "See it in action",
    subheading = "Watch a 2-minute walkthrough or dive into our documentation.",
    buttonText = "Watch Demo",
    buttonUrl = "#",
    secondaryButtonText = "Read Docs",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#ffffff" }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-70">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm" style={{ backgroundColor: theme?.accent ?? "#f59e0b", color: "#000" }}>
            <Play className="w-4 h-4" />
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors">
            <BookOpen className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
