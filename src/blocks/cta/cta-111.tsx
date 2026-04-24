import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta111(props: BlockProps) {
  const {
    theme,
    heading = "Start Growing Your Business",
    subheading = "Starting at $9/mo",
    bodyText = "Everything included. No hidden fees. Cancel anytime.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: theme?.primary || "#2563eb" }}>{subheading}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-70 mb-8">{bodyText}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
