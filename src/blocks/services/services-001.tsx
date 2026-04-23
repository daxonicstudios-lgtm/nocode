import type { BlockProps } from "@/blocks/types";
import { Palette, Code, TrendingUp } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Brand design", description: "Logos, color systems, typography, and guidelines that scale with your business." },
  { title: "Web development", description: "Fast, accessible websites and web apps built on modern frameworks." },
  { title: "Growth marketing", description: "Data-driven campaigns across search, social, and email to hit your KPIs." },
];

const ICONS = [Palette, Code, TrendingUp];

export default function Services001(props: BlockProps) {
  const { theme, heading = "What we do", subheading = "A full-service studio for growing brands.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-base opacity-70">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((it, i) => {
            const Icon = ICONS[i % 3];
            return (
              <div key={i} className="p-8 rounded-2xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <Icon className="w-8 h-8 mb-5" style={{ color: theme?.primary }} />
                <h3 className="text-xl font-semibold">{it.title}</h3>
                <p className="mt-3 text-sm opacity-70 leading-relaxed">{it.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
