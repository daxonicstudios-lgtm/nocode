import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta061(props: BlockProps) {
  const {
    theme,
    heading = "Take the next step",
    subheading = "Whether you're exploring or ready to commit, we have an option for you.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "Talk to Sales",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-60">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-sm border-2" style={{ borderColor: theme?.secondary ?? "#d1d5db" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
