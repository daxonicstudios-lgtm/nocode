import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

export default function Cta004(props: BlockProps) {
  const {
    theme,
    heading = "The smarter way to grow",
    subheading = "Simple pricing. Powerful features. Built for teams of all sizes.",
    buttonText = "Try It Free",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: theme?.primary ?? "#10b981" }}>
          No credit card needed
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="text-base opacity-60 max-w-md mx-auto">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-1 px-8 py-3.5 rounded-md text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          style={{ backgroundColor: theme?.primary ?? "#10b981" }}
        >
          {buttonText}
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
