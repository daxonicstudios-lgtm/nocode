import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta286(props: BlockProps) {
  const {
    theme,
    heading = "The Art of Building",
    subheading = "A new chapter in digital creation begins here.",
    buttonText = "Subscribe",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-24 sm:py-32" style={{ backgroundColor: theme?.background ?? "#faf9f6", color: theme?.foreground ?? "#1c1917" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-40 mb-4">Editorial</p>
        <h2 className="text-5xl sm:text-7xl font-serif font-bold italic leading-tight">{heading}</h2>
        <div className="w-16 h-px mx-auto mt-6 mb-6" style={{ backgroundColor: theme?.primary ?? "#b45309" }} />
        <p className="text-lg sm:text-xl font-light opacity-60 max-w-lg mx-auto leading-relaxed">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest" style={{ color: theme?.primary ?? "#b45309" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
