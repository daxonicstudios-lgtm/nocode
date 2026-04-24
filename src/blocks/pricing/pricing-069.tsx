import type { BlockProps } from "@/blocks/types";
import { Database, Check } from "lucide-react";

const defaultItems = [
  { title: "Hobby", description: "$0", label: "up to 500 records", value: "500 Records,1 Database,REST API,Community Support" },
  { title: "Pro", description: "$25", label: "up to 50K records", value: "50K Records,5 Databases,REST & GraphQL API,Email Support,Backups,Webhooks" },
  { title: "Business", description: "$99", label: "up to 500K records", value: "500K Records,Unlimited DBs,Full API Access,Priority Support,Real-time Sync,Webhooks,RBAC" },
  { title: "Enterprise", description: "$0.0002", label: "per record after 500K", value: "Unlimited Records,Unlimited DBs,Full API Access,Dedicated Support,Real-time Sync,Custom SLA,SOC 2" },
];

export default function Pricing069(props: BlockProps) {
  const {
    theme,
    heading = "Database Pricing",
    subheading = "Scales with your data — from hobby projects to production workloads",
    buttonText = "Start Free",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const tiers = ["0", "500", "50K", "500K", "1M+"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <Database size={28} className="mx-auto mb-3" style={{ color: theme?.primary || "#16a34a" }} />
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 max-w-lg mx-auto">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex items-center justify-between text-xs font-medium opacity-50 mb-2 px-2">
          {tiers.map((t, i) => <span key={i}>{t}</span>)}
        </div>
        <div className="h-4 rounded-full overflow-hidden flex" style={{ backgroundColor: (theme?.primary || "#16a34a") + "15" }}>
          {items.map((_, i) => (
            <div key={i} className="h-full" style={{ flex: 1, backgroundColor: theme?.primary || "#16a34a", opacity: 0.3 + i * 0.2, borderRight: i < items.length - 1 ? "2px solid white" : "none" }} />
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-xl border p-5 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-2xl font-black" style={{ color: theme?.primary || "#16a34a" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-4">{item.label}</p>
              <ul className="flex-1 space-y-1.5 mb-4">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-1.5 text-xs"><Check size={12} className="text-green-500" />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-2 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#16a34a" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
