import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

export default function Cta049(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise-ready platform",
    subheading = "Custom solutions for teams that demand the best. Talk to our team today.",
    buttonText = "Contact Sales",
    buttonUrl = "#",
    secondaryButtonText = "View Documentation",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24 relative overflow-hidden" style={{ backgroundColor: "#0c0a09", color: "#fafaf9" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: theme?.primary ?? "#f97316" }} />
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-4 opacity-40">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#f97316", color: "#fff" }}>
            {buttonText} <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="px-8 py-4 rounded-lg font-medium text-sm border border-stone-700 text-stone-300 hover:bg-stone-900 transition-colors text-center">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
