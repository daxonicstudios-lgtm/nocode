import type { BlockProps } from "@/blocks/types";
import { Sparkles, Gem, Crown, Flower2 } from "lucide-react";

const icons = [Sparkles, Gem, Crown, Flower2];

export default function Features374(props: BlockProps) {
  const {
    theme,
    heading = "Exquisite Craftsmanship",
    subheading = "Where artistry meets technology",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Bespoke Design", description: "Every template custom-tailored to your brand identity." },
      { title: "Precious Details", description: "Micro-interactions that delight at every touchpoint." },
      { title: "Royal Treatment", description: "Priority support with dedicated account managers." },
      { title: "Natural Beauty", description: "Organic layouts that feel effortless and inviting." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fdf8f0", color: theme?.foreground || "#3d2b1f" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] mb-2 opacity-50">Est. 2024</p>
          <h2 className="text-3xl sm:text-5xl mb-3" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>{heading}</h2>
          <div className="flex items-center justify-center gap-3">
            <span className="block w-12 h-px" style={{ backgroundColor: theme?.primary || "#8b6914" }} />
            <span style={{ color: theme?.primary || "#8b6914" }}>&#9830;</span>
            <span className="block w-12 h-px" style={{ backgroundColor: theme?.primary || "#8b6914" }} />
          </div>
          <p className="text-base mt-3 opacity-60" style={{ fontFamily: "Georgia, serif" }}>{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center p-6">
                <Icon size={28} className="mx-auto mb-3" style={{ color: theme?.primary || "#8b6914" }} />
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
