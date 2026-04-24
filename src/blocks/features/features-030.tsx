import type { BlockProps } from "@/blocks/types";
import { Box, Repeat, FileText, Bell } from "lucide-react";

const iconMap = [Box, Repeat, FileText, Bell];

const defaults = [
  { title: "Modular Components", description: "Mix and match building blocks to create any layout." },
  { title: "Sync Everywhere", description: "Changes propagate instantly across all connected devices." },
  { title: "Version History", description: "Roll back to any previous version with a single click." },
  { title: "Smart Alerts", description: "Get notified about the things that matter, nothing else." },
];

export default function Features030(props: BlockProps) {
  const {
    theme,
    heading = "Clean, Simple, Powerful",
    subheading = "No clutter. Just the features you actually use, done right.",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-md mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0">
          {items.slice(0, 4).map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div
                key={i}
                className="py-6"
                style={{ borderBottom: "2px dotted", borderColor: theme?.accent ?? "#d1d5db" }}
              >
                <Icon size={24} className="mb-3" style={{ color: theme?.primary ?? "#6366f1" }} />
                <h3 className="text-base font-semibold mb-1">{item.title ?? defaults[i]?.title}</h3>
                <p className="text-sm opacity-55 leading-relaxed">{item.description ?? defaults[i]?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
