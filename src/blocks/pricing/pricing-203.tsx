import type { BlockProps } from "@/blocks/types";
import { Check, Zap } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0", label: "forever", value: "2 projects,1GB storage,Community support" },
  { title: "Premium", description: "$24", label: "per month", value: "Unlimited projects,50GB storage,Priority support,Custom branding,Webhooks,Advanced security" },
  { title: "Enterprise", description: "$99", label: "per month", value: "Everything in Premium,Dedicated server,SLA guarantee,Custom integrations" },
];

export default function Pricing203(props: BlockProps) {
  const { theme, heading = "Start Free, Scale Fast", subheading = "Trusted by 10,000+ businesses worldwide", buttonText = "Select Plan", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const mid = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`rounded-2xl p-8 flex flex-col relative ${mid ? "bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 ring-2" : "border"}`} style={{ borderColor: theme?.accent || "#e5e7eb", ...(mid ? { ["--tw-ring-color" as string]: theme?.primary || "#2563eb" } : {}) }}>
              {mid && <div className="absolute -top-3 right-6 flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}><Zap className="w-3 h-3" /> Recommended</div>}
              <h3 className="text-lg font-bold mb-4">{item.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</span>
                <span className="text-sm opacity-50 ml-1">/{item.label}</span>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme?.primary || "#2563eb" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className={`block text-center py-3 rounded-xl font-medium ${mid ? "text-white" : ""}`} style={{ backgroundColor: mid ? (theme?.primary || "#2563eb") : "transparent", border: mid ? "none" : `2px solid ${theme?.primary || "#2563eb"}`, color: mid ? "#fff" : (theme?.primary || "#2563eb") }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
