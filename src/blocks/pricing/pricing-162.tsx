import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0", label: "Forever", value: "1 user,500MB,Community support" },
  { title: "Pro", description: "$19/mo", label: "Billed monthly", value: "10 users,25GB,Priority support,Custom domain" },
  { title: "Team", description: "$49/mo", label: "Billed monthly", value: "50 users,100GB,Dedicated support,White-label,Admin panel" },
];

export default function Pricing162(props: BlockProps) {
  const { theme, heading = "Pick Your Plan", subheading = "Upgrade or downgrade anytime", buttonText = "Select Plan", buttonUrl = "#", items = defaultItems } = props;
  const colors = ["#10b981", "#6366f1", "#f97316"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const color = theme?.primary || colors[i % colors.length];
          return (
            <div key={i} className="rounded-2xl overflow-hidden flex flex-col shadow-sm" style={{ border: `1px solid ${theme?.accent || "#e5e7eb"}` }}>
              <div className="h-2" style={{ backgroundColor: color }} />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-1" style={{ color }}>{item.title}</h3>
                <p className="text-4xl font-black mb-1">{item.description}</p>
                <p className="text-sm opacity-50 mb-6">{item.label}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color }} />{f.trim()}</li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: color }}>{buttonText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
