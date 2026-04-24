import type { BlockProps } from "@/blocks/types";
import { CircleCheck, Users, Briefcase, Rocket } from "lucide-react";

const defaultItems = [
  { title: "Individual", description: "$12/mo", label: "1 seat included", value: "5 projects,10GB,Basic analytics" },
  { title: "Small Team", description: "$36/mo", label: "5 seats included", value: "25 projects,100GB,Advanced analytics,Shared workspace" },
  { title: "Business", description: "$89/mo", label: "20 seats included", value: "Unlimited,500GB,Custom reports,API,Priority support" },
];

const icons = [Users, Briefcase, Rocket];

export default function Pricing213(props: BlockProps) {
  const { theme, heading = "Plans for Every Stage", subheading = "Upgrade or downgrade anytime", buttonText = "Choose", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#0891b2";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-3">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 rounded-2xl border p-5 hover:shadow-md transition-shadow" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="flex items-center gap-3 md:w-44 shrink-0">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${primary}15` }}>
                  <Icon className="w-5 h-5" style={{ color: primary }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                  <p className="text-xs opacity-50">{item.label}</p>
                </div>
              </div>
              <p className="md:w-28 shrink-0 text-2xl font-extrabold" style={{ color: primary }}>{item.description}</p>
              <div className="flex flex-wrap gap-2 flex-1">
                {features.map((f, j) => (
                  <span key={j} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${primary}10`, color: primary }}><CircleCheck className="w-3 h-3" />{f.trim()}</span>
                ))}
              </div>
              <a href={buttonUrl} className="shrink-0 px-5 py-2 rounded-lg font-medium text-sm text-white" style={{ backgroundColor: primary }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
