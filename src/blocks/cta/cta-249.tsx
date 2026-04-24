import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

export default function Cta249(props: BlockProps) {
  const {
    theme,
    heading = "Your success starts here",
    subheading = "Thousands of teams trust us to power their most critical workflows.",
    buttonText = "Get Started",
    buttonUrl = "#",
    secondaryButtonText = "Contact Sales",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="group rounded-2xl p-8 sm:p-12 text-center border-2 transition-all duration-500 hover:shadow-2xl" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
          <h2 className="text-2xl sm:text-4xl font-bold transition-transform duration-300 group-hover:scale-105">{heading}</h2>
          <p className="mt-4 opacity-60 transition-opacity duration-300 group-hover:opacity-80">{subheading}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={buttonUrl} className="inline-flex items-center justify-center gap-1 px-6 py-3 rounded-lg text-white font-medium text-sm transition-all duration-300 hover:gap-3" style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}>
              {buttonText} <ChevronRight className="w-4 h-4 transition-transform duration-300" />
            </a>
            <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm border transition-all duration-300 hover:border-2" style={{ borderColor: theme?.primary ?? "#3b82f6", color: theme?.primary ?? "#3b82f6" }}>
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
