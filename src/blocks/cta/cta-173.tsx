import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta173(props: BlockProps) {
  const {
    theme,
    heading = "Ready to scale your business?",
    subheading = "Enterprise-grade tools at startup-friendly prices.",
    buttonText = "Talk to Sales",
    buttonUrl = "#",
    secondaryButtonText = "See Pricing",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-5 py-24" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="absolute top-0 right-0 w-1/2 h-full" style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)", backgroundColor: theme?.primary ?? "#2563eb", opacity: 0.06 }} />
      <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-70">{subheading}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
            <a href={secondaryButtonUrl} className="px-6 py-3 rounded-lg font-semibold text-sm border border-current opacity-60 hover:opacity-100 transition">
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
