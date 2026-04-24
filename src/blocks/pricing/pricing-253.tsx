import type { BlockProps } from "@/blocks/types";
import { Check, Award } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$15/mo", label: "Billed monthly", value: "5 users,10GB storage,Basic analytics" },
  { title: "Professional", description: "$45/mo", label: "Billed monthly", value: "25 users,100GB storage,Advanced analytics,Priority support,Integrations" },
  { title: "Ultimate", description: "$120/mo", label: "Billed monthly", value: "Unlimited users,1TB storage,Custom analytics,Dedicated support,All integrations,SLA guarantee" },
];

export default function Pricing253(props: BlockProps) {
  const {
    theme,
    heading = "Pricing Made Simple",
    subheading = "Pick a plan and start building today",
    buttonText = "Subscribe Now",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isFeatured = i === 2;
          return (
            <div key={i} className="relative overflow-hidden rounded-lg border p-8 flex flex-col" style={{ borderColor: isFeatured ? theme?.primary || "#7c3aed" : theme?.accent || "#e5e7eb" }}>
              {isFeatured && (
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className="absolute top-3 -right-6 rotate-45 px-8 py-1 text-xs font-bold text-white" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>
                    POPULAR
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5" style={{ color: theme?.primary || "#7c3aed" }} />
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <p className="text-4xl font-extrabold mb-1" style={{ color: theme?.primary || "#7c3aed" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#7c3aed" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-md font-medium text-white" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
