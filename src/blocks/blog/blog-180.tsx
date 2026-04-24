import type { BlockProps } from "@/blocks/types";
import { Crown, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Collector's Eye", description: "How discerning taste shapes extraordinary collections and curated experiences.", label: "Culture" },
  { title: "Bespoke Digital Journeys", description: "Tailoring every interaction to the individual, at scale.", label: "Experience" },
  { title: "The New Artisans", description: "A generation of digital craftspeople redefining what premium means online.", label: "Profile" },
];

export default function Blog180(props: BlockProps) {
  const { theme, heading = "Le Monde", subheading = "Quarterly", items = DEFAULT_ITEMS, buttonText = "Explore", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0a0a08", color: theme?.foreground ?? "#d4c8a8" }} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <Crown className="w-6 h-6 mb-4 opacity-40" />
          <h2 className="text-4xl sm:text-5xl font-light italic" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 mt-2" style={{ fontFamily: "Georgia, serif" }}>{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block">
              <div className="aspect-[4/5] rounded-sm mb-6" style={{ backgroundColor: theme?.secondary ?? "#1a1810" }} />
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40" style={{ fontFamily: "Georgia, serif" }}>{item.label}</span>
              <h3 className="mt-2 text-lg font-light" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
              <p className="mt-2 text-xs opacity-40 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-60 transition-opacity" style={{ fontFamily: "Georgia, serif" }}>
                {buttonText} <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
