import type { BlockProps } from "@/blocks/types";
import { Anchor, Ship, Navigation, Waves } from "lucide-react";

const icons = [Anchor, Ship, Navigation, Waves];

export default function Features389(props: BlockProps) {
  const {
    theme,
    heading = "Naval Precision",
    subheading = "Commanding features for serious operations",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Deep Anchoring", description: "Stable connections that never drift or disconnect." },
      { title: "Fleet Command", description: "Manage multiple projects from a single dashboard." },
      { title: "Smart Navigation", description: "Intelligent routing that finds the shortest path." },
      { title: "Smooth Sailing", description: "Streamlined workflows with zero friction points." },
    ],
  } = props;

  const gold = theme?.accent || "#c9a84c";

  return (
    <section style={{ backgroundColor: theme?.background || "#0b1426", color: theme?.foreground || "#d4cfc4" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px" style={{ backgroundColor: gold }} />
            <Anchor size={16} style={{ color: gold }} />
            <div className="w-12 h-px" style={{ backgroundColor: gold }} />
          </div>
          <p className="text-sm mt-3 opacity-40">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6 rounded-sm border" style={{ borderColor: `${gold}22`, backgroundColor: "rgba(201,168,76,0.03)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ border: `1px solid ${gold}` }}>
                    <Icon size={14} style={{ color: gold }} />
                  </div>
                  <h3 className="font-medium tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                </div>
                <p className="text-sm opacity-40 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
