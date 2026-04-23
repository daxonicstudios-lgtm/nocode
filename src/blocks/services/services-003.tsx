import type { BlockProps } from "@/blocks/types";
import { Camera, Edit3, Megaphone } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Photography", description: "Product shoots, brand photography, and lifestyle imagery.", value: "From $400" },
  { title: "Copywriting", description: "Website copy, email sequences, and long-form content.", value: "From $250" },
  { title: "PR & outreach", description: "Press releases, influencer partnerships, and media placement.", value: "From $800" },
];

const ICONS = [Camera, Edit3, Megaphone];

export default function Services003(props: BlockProps) {
  const { theme, heading = "Pick a service. Get a quote.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.foreground ?? "#0a0a0a", color: theme?.background ?? "#fff" }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-14">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.slice(0, 3).map((it, i) => {
            const Icon = ICONS[i % 3];
            return (
              <div key={i} className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Icon className="w-7 h-7 mb-4" style={{ color: theme?.accent ?? "#fbbf24" }} />
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm opacity-70">{it.description}</p>
                <p className="mt-4 text-sm font-medium" style={{ color: theme?.accent ?? "#fbbf24" }}>{it.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
