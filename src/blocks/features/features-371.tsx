import type { BlockProps } from "@/blocks/types";
import { MapPin, Compass, Mountain, TreePine } from "lucide-react";

const icons = [MapPin, Compass, Mountain, TreePine];

export default function Features371(props: BlockProps) {
  const {
    theme,
    heading = "Timeless Features",
    subheading = "Crafted with care and built to last",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Local First", description: "Data stays on your device until you choose to sync." },
      { title: "True North", description: "Navigation so intuitive you never feel lost." },
      { title: "Rock Solid", description: "Infrastructure built on battle-tested foundations." },
      { title: "Evergreen", description: "Updates that enhance without breaking your workflow." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#f5f0e8", color: theme?.foreground || "#5c4a32" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <p className="text-lg opacity-70" style={{ fontFamily: "Georgia, serif" }}>{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-lg p-6 border" style={{ backgroundColor: "#faf6ee", borderColor: "#d4c5a9" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border-2" style={{ borderColor: theme?.primary || "#8b7355", color: theme?.primary || "#8b7355" }}>
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
