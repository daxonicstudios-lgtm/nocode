import type { BlockProps } from "@/blocks/types";
import { Wifi, HardDrive, CloudUpload } from "lucide-react";

const icons = [Wifi, HardDrive, CloudUpload];
const percentages = [92, 87, 95];

export default function Features313(props: BlockProps) {
  const {
    theme,
    heading = "Performance at a Glance",
    subheading = "Our features deliver measurable results",
    items = [
      { title: "Network Uptime", description: "Consistently reliable connectivity across all regions.", value: "92" },
      { title: "Storage Efficiency", description: "Intelligent compression reduces costs without sacrificing quality.", value: "87" },
      { title: "Sync Speed", description: "Files propagate to all nodes in under 200 milliseconds.", value: "95" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-12 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const pct = Number(item.value) || percentages[i % percentages.length];
            const primary = theme?.primary || "#6366f1";
            const circumference = 2 * Math.PI * 40;
            const offset = circumference - (pct / 100) * circumference;
            return (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-28 h-28 mb-4">
                  <svg width="112" height="112" className="transform -rotate-90">
                    <circle cx="56" cy="56" r="40" fill="none" stroke={`${primary}20`} strokeWidth="6" />
                    <circle cx="56" cy="56" r="40" fill="none" stroke={primary} strokeWidth="6" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={24} style={{ color: primary }} />
                  </div>
                </div>
                <span className="text-2xl font-bold mb-1">{pct}%</span>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed max-w-xs">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
