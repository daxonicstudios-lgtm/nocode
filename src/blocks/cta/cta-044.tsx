import type { BlockProps } from "@/blocks/types";
import { Check, ArrowRight } from "lucide-react";

export default function Cta044(props: BlockProps) {
  const {
    theme,
    heading = "Why switch to us?",
    subheading = "See the difference from day one.",
    buttonText = "Switch Now",
    buttonUrl = "#",
    secondaryButtonText = "Compare Plans",
    secondaryButtonUrl = "#",
    items = [
      { title: "Save 10+ hours per week" },
      { title: "Reduce costs by 40%" },
      { title: "Go live 5x faster" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60">{subheading}</p>
        <div className="mt-8 inline-flex flex-col gap-3 text-left">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="w-5 h-5 shrink-0" style={{ color: theme?.primary ?? "#7c3aed" }} />
              <span className="font-medium">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="px-7 py-3.5 rounded-lg font-medium text-sm border" style={{ borderColor: theme?.secondary ?? "#d1d5db" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
