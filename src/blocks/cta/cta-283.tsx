import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta283(props: BlockProps) {
  const {
    theme,
    heading = "Radiate Success",
    subheading = "Build something extraordinary with our platform.",
    buttonText = "Start Free",
    buttonUrl = "#",
    secondaryButtonText = "Book a Demo",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-4 py-24" style={{ background: `radial-gradient(circle at center, ${theme?.accent ?? "#ede9fe"} 0%, ${theme?.background ?? "#ffffff"} 70%)`, color: theme?.foreground ?? "#1e1b4b" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[500, 400, 300].map((s, i) => (
          <div key={i} className="absolute rounded-full" style={{ width: s, height: s, border: `1px dashed ${theme?.primary ?? "#8b5cf6"}22` }} />
        ))}
      </div>
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-4 opacity-60 text-lg">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm border-2" style={{ borderColor: theme?.primary ?? "#8b5cf6", color: theme?.primary ?? "#8b5cf6" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
