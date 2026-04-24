import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta280(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise Ready",
    subheading = "Security, compliance, and scale — built in from day one.",
    buttonText = "Talk to Sales",
    buttonUrl = "#",
    secondaryButtonText = "Read Docs",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="relative min-h-[420px] flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#1e1b4b"} 50%, ${theme?.accent ?? "#faf5ff"} 50%)` }} />
      <div className="relative w-full max-w-4xl mx-auto px-4 grid sm:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <h2 className="text-3xl sm:text-4xl font-black">{heading}</h2>
          <p className="mt-3 opacity-70">{subheading}</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full font-bold text-sm" style={{ color: theme?.primary ?? "#1e1b4b" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm border-2 border-white/30 text-white">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
