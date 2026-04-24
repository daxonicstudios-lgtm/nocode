import type { BlockProps } from "@/blocks/types";
import { Gem } from "lucide-react";

export default function Cta194(props: BlockProps) {
  const {
    theme,
    heading = "Where excellence meets simplicity",
    subheading = "A curated experience for professionals who value quality above all.",
    buttonText = "Get Premium Access",
    buttonUrl = "#",
    secondaryButtonText = "View Features",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: "#0d0d0d", color: "#f0ead6" }}>
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 text-amber-400 text-xs uppercase tracking-widest mb-6">
          <Gem className="w-3 h-3" /> Premium
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2>
        <p className="mt-4 opacity-50 text-lg">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#b8860b", color: "#0d0d0d" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-8 py-3 rounded-full font-semibold text-sm border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
