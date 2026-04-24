import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const defaultItems = [
  { title: "Lite", description: "$8/mo", label: "Essential features", value: "1 seat,Basic reports,5 templates" },
  { title: "Core", description: "$22/mo", label: "Most popular", value: "5 seats,Advanced reports,50 templates,Automations" },
  { title: "Max", description: "$48/mo", label: "Full power", value: "Unlimited seats,Custom reports,All templates,Automations,Dedicated support" },
];

export default function Pricing157(props: BlockProps) {
  const { theme, heading = "Level Up Your Plan", subheading = "Each tier unlocks more power", buttonText = "Select", buttonUrl = "#", items = defaultItems } = props;
  const scales = ["scale-95 opacity-80", "scale-100", "scale-105 shadow-xl"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`rounded-2xl border p-6 flex flex-col transition-transform ${scales[i] || ""}`} style={{ borderColor: i === 2 ? (theme?.primary || "#2563eb") : (theme?.accent || "#e5e7eb"), borderWidth: i === 2 ? 2 : 1 }}>
              <span className="text-xs font-medium uppercase tracking-wider opacity-60">{item.label}</span>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <p className="text-3xl font-black my-3" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <ul className="space-y-1.5 flex-1 mb-6">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-80">+ {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                {buttonText} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
