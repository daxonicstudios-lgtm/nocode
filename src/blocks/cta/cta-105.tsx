import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

export default function Cta105(props: BlockProps) {
  const {
    theme,
    heading = "Don't Miss Out",
    subheading = "Limited spots available for our beta program.",
    buttonText = "Claim Your Spot",
    buttonUrl = "#",
    secondaryButtonText = "See Pricing",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="py-20 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-sm mx-auto rounded-2xl shadow-xl p-8 text-center relative" style={{ backgroundColor: theme?.accent || "#fef9c3" }}>
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold" style={{ backgroundColor: theme?.primary || "#dc2626" }}>
          Limited Time
        </div>
        <h2 className="text-xl md:text-2xl font-bold mt-2 mb-2">{heading}</h2>
        <p className="text-sm opacity-70 mb-6">{subheading}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-1 px-6 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#dc2626" }}>
          {buttonText} <ArrowUpRight className="w-4 h-4" />
        </a>
        <div className="mt-3">
          <a href={secondaryButtonUrl} className="text-sm underline opacity-60 hover:opacity-100">{secondaryButtonText}</a>
        </div>
      </div>
    </section>
  );
}
