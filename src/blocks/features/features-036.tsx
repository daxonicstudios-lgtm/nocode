import type { BlockProps } from "@/blocks/types";
import { Diamond, Crown, Star, Gem } from "lucide-react";

const iconMap = [Diamond, Crown, Star, Gem];

const defaultItems = [
  { title: "Bespoke Design", description: "Every element tailored to reflect your brand's unique identity and vision." },
  { title: "Premium Support", description: "White-glove onboarding with a dedicated account manager at your side." },
  { title: "Curated Templates", description: "Hand-selected layouts designed by world-class creative professionals." },
  { title: "Refined Details", description: "Pixel-perfect typography, spacing, and animations for a polished finish." },
];

export default function Features036(props: BlockProps) {
  const {
    theme,
    heading = "Crafted for Excellence",
    subheading = "Where attention to detail meets uncompromising quality",
    items = defaultItems,
  } = props;

  const accent = theme?.primary ?? "#a78bfa";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 opacity-50">{subheading}</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-14">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div
                key={i}
                className="rounded-xl p-6 text-center border transition-colors hover:shadow-lg"
                style={{ borderColor: `${accent}30` }}
              >
                <Icon className="w-6 h-6 mx-auto mb-4" style={{ color: accent }} />
                <h3 className="font-semibold mb-2 tracking-wide text-sm uppercase">{item.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
