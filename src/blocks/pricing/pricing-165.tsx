import type { BlockProps } from "@/blocks/types";
import { Check, Crown } from "lucide-react";

const defaultItems = [
  { title: "Personal", description: "$8/mo", label: "#14b8a6", value: "1 account,Basic dashboard,5 reports/mo" },
  { title: "Business", description: "$32/mo", label: "#f59e0b", value: "5 accounts,Full dashboard,Unlimited reports,Exports" },
  { title: "Elite", description: "$72/mo", label: "#dc2626", value: "Unlimited accounts,Custom dashboard,Unlimited reports,Exports,API,White-label" },
];

export default function Pricing165(props: BlockProps) {
  const { theme, heading = "Invest in Your Growth", subheading = "Color-coded plans to match your ambitions", buttonText = "Join Now", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const color = item.label || theme?.primary || "#2563eb";
          return (
            <div key={i} className="rounded-2xl overflow-hidden flex flex-col shadow" style={{ border: `2px solid ${color}` }}>
              <div className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: color, color: "#fff" }}>
                <h3 className="font-bold text-lg">{item.title}</h3>
                {i === items.length - 1 && <Crown className="w-5 h-5" />}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-4xl font-black mb-1" style={{ color }}>{item.description}</p>
                <p className="text-xs opacity-50 mb-6">per month, billed annually</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color }} />{f.trim()}</li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: color }}>{buttonText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
