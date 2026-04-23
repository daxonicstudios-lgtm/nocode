import type { BlockProps } from "@/blocks/types";
import { Layers, PenTool, CloudUpload } from "lucide-react";

const iconMap = [Layers, PenTool, CloudUpload];

const defaultItems = [
  { title: "Modular Design", description: "Build with reusable components that snap together like building blocks for rapid development." },
  { title: "Creative Tools", description: "Professional-grade editing suite with real-time collaboration and version history." },
  { title: "Cloud Sync", description: "Your work is automatically saved and synced across all your devices seamlessly." },
];

export default function Features033(props: BlockProps) {
  const {
    theme,
    heading = "Simplicity at Scale",
    subheading = "Thoughtfully designed tools that get out of your way",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:py-28">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg opacity-60 mb-20 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="flex flex-col items-center text-center gap-5">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}15` }}>
                  <Icon className="w-6 h-6" style={{ color: theme?.primary ?? "#8b5cf6" }} />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="opacity-55 text-sm leading-relaxed max-w-xs">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
