import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta113(props: BlockProps) {
  const {
    theme,
    heading = "Affordable for Everyone",
    subheading = "Plans starting at just $5/mo",
    buttonText = "See All Plans",
    buttonUrl = "#",
    secondaryButtonText = "Start Free",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="py-20 px-4" style={{ backgroundColor: theme?.accent || "#f0fdf4", color: theme?.foreground }}>
      <div className="max-w-xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary || "#16a34a" }} />
        <h2 className="text-2xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="text-lg font-semibold mb-6" style={{ color: theme?.primary || "#16a34a" }}>{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#16a34a" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-8 py-3 rounded-lg border-2 font-semibold hover:opacity-80 transition" style={{ borderColor: theme?.primary || "#16a34a", color: theme?.primary || "#16a34a" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
