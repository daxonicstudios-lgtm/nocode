import type { BlockProps } from "@/blocks/types";
import { Compass, Flame, Anchor, Feather, Crown, Target } from "lucide-react";

const icons = [Compass, Flame, Anchor, Feather, Crown, Target];

export default function Features359(props: BlockProps) {
  const {
    theme,
    heading = "Core Capabilities",
    subheading = "Simple icons, powerful features",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Navigate" },
      { title: "Ignite" },
      { title: "Anchor" },
      { title: "Lightweight" },
      { title: "Premium" },
      { title: "Precise" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#e8e8e8", color: theme?.foreground || "#555" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: theme?.foreground || "#333" }}>{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: theme?.background || "#e8e8e8", boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff" }}>
                  <Icon size={26} style={{ color: theme?.primary || "#f59e0b" }} />
                </div>
                <span className="text-xs font-medium text-center">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
