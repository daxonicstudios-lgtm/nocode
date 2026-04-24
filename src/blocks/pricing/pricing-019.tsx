import type { BlockProps } from "@/blocks/types";
import { Calendar, CalendarDays } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$11/mo", label: "$8/mo yearly", value: "5 users,10GB,Standard support" },
  { title: "Growth", description: "$33/mo", label: "$25/mo yearly", value: "25 users,100GB,Priority support,Automations" },
  { title: "Scale", description: "$79/mo", label: "$59/mo yearly", value: "Unlimited users,1TB,Dedicated support,SLA,Custom integrations" },
];

export default function Pricing019(props: BlockProps) {
  const {
    theme,
    heading = "Flexible Billing Options",
    subheading = "Switch between monthly and annual anytime",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
        <div className="flex items-center justify-center gap-6 mt-6 text-sm">
          <span className="flex items-center gap-1 opacity-70"><Calendar className="w-4 h-4" /> Monthly</span>
          <span className="flex items-center gap-1 font-semibold" style={{ color: theme?.primary || "#2563eb" }}><CalendarDays className="w-4 h-4" /> Annual (save ~25%)</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-xl border p-8 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="font-bold text-lg mb-4">{item.title}</h3>
              <div className="space-y-1 mb-6">
                <p className="text-3xl font-black">{item.description}</p>
                <p className="text-sm" style={{ color: theme?.primary || "#2563eb" }}>{item.label}</p>
              </div>
              <ul className="space-y-2 flex-1 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-70">• {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold border-2" style={{ borderColor: theme?.primary || "#2563eb", color: theme?.primary || "#2563eb" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
