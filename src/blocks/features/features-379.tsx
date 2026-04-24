import type { BlockProps } from "@/blocks/types";
import { Swords, Gem, Heart, Coins } from "lucide-react";

const icons = [Swords, Gem, Heart, Coins];

export default function Features379(props: BlockProps) {
  const {
    theme,
    heading = "SELECT YOUR POWER",
    subheading = "Insert coin to continue",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "ATTACK", description: "Aggressive marketing tools that capture attention.", value: "ATK +50" },
      { title: "MAGIC", description: "AI-powered automation that works like sorcery.", value: "MP +80" },
      { title: "HEAL", description: "Customer recovery flows that save churning users.", value: "HP +100" },
      { title: "LOOT", description: "Revenue optimization that maximizes every transaction.", value: "GOLD +200" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#0d0d1a", color: theme?.foreground || "#00ff41" }} className="py-16 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider">{heading}</h2>
          <p className="text-sm mt-2 opacity-50 animate-pulse">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="border-2 p-5" style={{ borderColor: theme?.primary || "#00ff41", backgroundColor: "rgba(0,255,65,0.03)" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Icon size={18} />
                    <h3 className="font-bold uppercase text-sm">{item.title}</h3>
                  </div>
                  <span className="text-xs px-2 py-1 border" style={{ borderColor: theme?.accent || "#ffcc00", color: theme?.accent || "#ffcc00" }}>{item.value || `LVL ${i + 1}`}</span>
                </div>
                <p className="text-xs opacity-60 leading-relaxed">{item.description}</p>
                <div className="mt-3 h-2 border" style={{ borderColor: theme?.primary || "#00ff41" }}>
                  <div className="h-full" style={{ width: `${60 + i * 10}%`, backgroundColor: theme?.primary || "#00ff41" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
