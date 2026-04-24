import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Check } from "lucide-react";

const defaultItems = [
  { title: "Solo", description: "$11/mo", label: "For freelancers", value: "1 project,Export PDF,Basic templates" },
  { title: "Team", description: "$29/mo", label: "For small teams", value: "10 projects,Export all formats,Premium templates,Collaboration" },
  { title: "Agency", description: "$69/mo", label: "For agencies", value: "Unlimited projects,White-label exports,All templates,Client portal,Priority support" },
  { title: "Enterprise", description: "$149/mo", label: "For large orgs", value: "Everything unlimited,SLA guarantee,Dedicated CSM,Custom integrations,On-premise option" },
];

export default function Pricing159(props: BlockProps) {
  const { theme, heading = "Scale Without Limits", subheading = "Step up as your business grows", buttonText = "Choose Plan", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <TrendingUp className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary || "#2563eb" }} />
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const elevation = `${4 + i * 4}px`;
          return (
            <div key={i} className="rounded-xl border p-5 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb", boxShadow: `0 ${elevation} ${parseInt(elevation) * 2}px rgba(0,0,0,0.08)` }}>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-xs opacity-50">{item.label}</p>
              <p className="text-2xl font-black my-3" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <ul className="space-y-1 flex-1 mb-4">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-1.5 text-xs"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: theme?.primary || "#22c55e" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-2 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
