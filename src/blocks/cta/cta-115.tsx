import type { BlockProps } from "@/blocks/types";
import { CreditCard } from "lucide-react";

export default function Cta115(props: BlockProps) {
  const {
    theme,
    heading = "No Surprises, Just Value",
    subheading = "From $12/mo per user",
    bodyText = "Transparent pricing with no setup fees. Pay only for what you use.",
    buttonText = "View Pricing",
    buttonUrl = "#",
    secondaryButtonText = "Talk to Sales",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl border">
        <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          <CreditCard className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold mb-1" style={{ color: theme?.primary || "#2563eb" }}>{subheading}</p>
          <h2 className="text-xl md:text-2xl font-bold mb-1">{heading}</h2>
          <p className="text-sm opacity-70">{bodyText}</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href={buttonUrl} className="px-6 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition text-center" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="text-sm text-center underline opacity-70 hover:opacity-100">{secondaryButtonText}</a>
        </div>
      </div>
    </section>
  );
}
