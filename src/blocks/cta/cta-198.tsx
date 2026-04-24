import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta198(props: BlockProps) {
  const {
    theme,
    heading = "Power meets simplicity",
    subheading = "Enterprise-grade tools that anyone can use.",
    buttonText = "Start Building",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-5 py-24" style={{ color: "#fff" }}>
      <div className="absolute inset-0 animate-[sunsetGlow_6s_ease_infinite]" style={{ background: `linear-gradient(160deg, ${theme?.primary ?? "#7c3aed"}, #db2777, #f59e0b, ${theme?.primary ?? "#7c3aed"})`, backgroundSize: "200% 200%" }} />
      <style>{`@keyframes sunsetGlow{0%,100%{background-position:0% 0%}50%{background-position:100% 100%}}`}</style>
      <div className="relative max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 text-lg opacity-80">{subheading}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#7c3aed" }}>
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
            <a href={secondaryButtonUrl} className="px-7 py-3 rounded-full font-semibold text-sm border border-white/30 hover:bg-white/10 transition">
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
