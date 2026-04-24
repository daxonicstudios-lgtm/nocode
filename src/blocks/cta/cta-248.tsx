import type { BlockProps } from "@/blocks/types";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Cta248(props: BlockProps) {
  const {
    theme,
    heading = "Start building today",
    subheading = "The tools you need to ship faster, all in one place.",
    buttonText = "Create Account",
    buttonUrl = "#",
    secondaryButtonText = "See Pricing",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-2xl" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
            <span className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0" style={{ backgroundColor: theme?.accent ?? "#d97706" }} />
            <span className="relative">{buttonText}</span>
            <ArrowRight className="w-4 h-4 relative" />
          </a>
          <a href={secondaryButtonUrl} className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm border transition-all duration-300 hover:bg-gray-50" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
