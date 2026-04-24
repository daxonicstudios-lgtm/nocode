import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$9/mo", label: "#3b82f6", value: "3 projects,5GB storage,Email support" },
  { title: "Growth", description: "$29/mo", label: "#8b5cf6", value: "15 projects,50GB storage,Chat support,API access" },
  { title: "Business", description: "$59/mo", label: "#ec4899", value: "Unlimited projects,200GB storage,Phone support,API access,Analytics,SSO" },
];

export default function Pricing161(props: BlockProps) {
  const { theme, heading = "Simple Plans, Clear Pricing", subheading = "No hidden fees, no surprises", buttonText = "Get Started", buttonUrl = "#", items = defaultItems } = props;
  const colors = ["#3b82f6", "#8b5cf6", "#ec4899"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const color = theme?.primary || colors[i % colors.length];
          return (
            <div key={i} className="rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="py-4 px-6 text-white font-bold text-lg" style={{ backgroundColor: color }}>
                {item.title}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-3xl font-extrabold mb-1" style={{ color }}>{item.description}</p>
                <p className="text-xs opacity-50 mb-5">per month</p>
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
