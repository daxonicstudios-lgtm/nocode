import type { BlockProps } from "@/blocks/types";
import { Leaf, ArrowRight } from "lucide-react";

export default function Cta300(props: BlockProps) {
  const {
    theme,
    heading = "Grow Naturally",
    subheading = "Organic growth tools that respect your audience and your values.",
    buttonText = "Plant the Seed",
    buttonUrl = "#",
    secondaryButtonText = "Our Philosophy",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-24 sm:py-32" style={{ backgroundColor: theme?.background ?? "#fefce8", color: theme?.foreground ?? "#3f3f2e" }}>
      <div className="max-w-2xl mx-auto text-center">
        <Leaf className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary ?? "#65a30d" }} />
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-60 max-w-md mx-auto leading-relaxed">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#65a30d" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm border-2" style={{ borderColor: theme?.primary ?? "#65a30d", color: theme?.primary ?? "#65a30d" }}>
            {secondaryButtonText}
          </a>
        </div>
        <p className="mt-6 text-xs opacity-40">Sustainable. Ethical. Effective.</p>
      </div>
    </section>
  );
}
