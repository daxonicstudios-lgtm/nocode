import type { BlockProps } from "@/blocks/types";
import { Layers, Palette, Gauge, Workflow, Bell, KeyRound } from "lucide-react";

const defaultItems = [
  { title: "Individual", description: "$15/mo", label: "per month", value: "Templates,Themes,Performance" },
  { title: "Team", description: "$45/mo", label: "per month", value: "Templates,Themes,Performance,Workflows,Notifications,Auth" },
];

const gridIcons: Record<string, React.ReactNode> = {
  Templates: <Layers className="w-5 h-5" />,
  Themes: <Palette className="w-5 h-5" />,
  Performance: <Gauge className="w-5 h-5" />,
  Workflows: <Workflow className="w-5 h-5" />,
  Notifications: <Bell className="w-5 h-5" />,
  Auth: <KeyRound className="w-5 h-5" />,
};

export default function Pricing170(props: BlockProps) {
  const { theme, heading = "Design Tools Pricing", subheading = "Professional tools for every creator", buttonText = "Start Creating", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const featured = i === 1;
          return (
            <div key={i} className={`rounded-2xl p-6 flex flex-col ${featured ? "ring-2" : "border"}`} style={{ borderColor: theme?.accent || "#e5e7eb", ...(featured ? { boxShadow: `0 0 0 2px ${theme?.primary || "#2563eb"}` } : {}) }}>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-2xl font-black" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              </div>
              <p className="text-xs opacity-50 mb-5">{item.label}</p>
              <div className="grid grid-cols-3 gap-3 flex-1 mb-6">
                {features.map((f, j) => (
                  <div key={j} className="flex flex-col items-center justify-center gap-2 rounded-xl p-4" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                    <span style={{ color: theme?.primary || "#2563eb" }}>{gridIcons[f.trim()] || <Layers className="w-5 h-5" />}</span>
                    <span className="text-xs font-medium text-center">{f.trim()}</span>
                  </div>
                ))}
              </div>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
