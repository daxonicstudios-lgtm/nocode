import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, Target, Flame } from "lucide-react";

const icons = [Zap, Shield, Target, Flame];
const bgColors = ["#ff5733", "#3333ff", "#33cc33", "#ffcc00"];

export default function Features364(props: BlockProps) {
  const {
    theme,
    heading = "SOLID BLOCKS",
    subheading = "Each feature stands on its own",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "SPEED", description: "Pages load before you blink." },
      { title: "DEFENSE", description: "Attacks blocked at the edge." },
      { title: "FOCUS", description: "Laser precision on what matters." },
      { title: "ENERGY", description: "Power that never runs out." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#111", color: theme?.foreground || "#fff" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-black uppercase mb-2">{heading}</h2>
        <p className="text-sm uppercase tracking-widest mb-10 opacity-60">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const bg = bgColors[i % bgColors.length];
            return (
              <div key={i} className="p-6" style={{ backgroundColor: theme?.primary ? theme.primary : bg, color: "#fff" }}>
                <Icon size={32} strokeWidth={3} className="mb-4" />
                <h3 className="text-xl font-black uppercase mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
