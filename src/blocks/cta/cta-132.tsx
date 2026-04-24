import type { BlockProps } from "@/blocks/types";
import { Cpu } from "lucide-react";

export default function Cta132(props: BlockProps) {
  const {
    theme,
    heading = "Powered by AI",
    bodyText = "Let machine intelligence handle the heavy lifting while you focus on creating.",
    buttonText = "Try AI Builder",
    buttonUrl = "#",
    secondaryButtonText = "See How It Works",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#e2e8f0" }}>
      <div className="max-w-lg mx-auto p-8 rounded-2xl border" style={{ borderColor: theme?.primary || "#8b5cf6", boxShadow: `0 0 40px ${theme?.primary || "#8b5cf6"}20` }}>
        <Cpu className="w-8 h-8 mb-4" style={{ color: theme?.primary || "#8b5cf6" }} />
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
        <p className="text-sm opacity-60 mb-6">{bodyText}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={buttonUrl} className="px-6 py-3 rounded-lg text-white font-semibold text-center hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#8b5cf6" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-6 py-3 rounded-lg font-semibold text-center border hover:bg-white/5 transition" style={{ borderColor: theme?.primary || "#8b5cf6", color: theme?.primary || "#8b5cf6" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
