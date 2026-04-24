import type { BlockProps } from "@/blocks/types";
import { Check, X, Zap } from "lucide-react";

const defaultItems = [
  { title: "Hobby", description: "$0", label: "free forever", value: "1 Site,100 Visitors/mo,Basic SSL,Community Forum" },
  { title: "Launch", description: "$15/mo", label: "billed yearly at $144", value: "3 Sites,10K Visitors/mo,Premium SSL,Email Support,Custom Domain,Analytics,No Branding" },
  { title: "Grow", description: "$45/mo", label: "billed yearly at $432", value: "Unlimited Sites,100K Visitors/mo,Premium SSL,Priority Support,Custom Domain,Advanced Analytics,No Branding,A/B Testing,Webhooks" },
];

export default function Pricing065(props: BlockProps) {
  const {
    theme,
    heading = "Launch for Free",
    subheading = "Your first website is always free. Upgrade as your business grows.",
    buttonText = "Select Plan",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-md mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const features = (item.value || "").split(",").filter(Boolean);
            const isFree = item.description === "$0";
            return (
              <div key={i} className="rounded-2xl border p-7 flex flex-col relative overflow-hidden" style={{ borderColor: i === 1 ? theme?.primary || "#ec4899" : theme?.accent || "#e5e7eb" }}>
                {i === 1 && (
                  <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white rounded-bl-lg flex items-center gap-1" style={{ backgroundColor: theme?.primary || "#ec4899" }}>
                    <Zap size={12} /> Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="mb-1">
                  <span className="text-4xl font-black" style={{ color: isFree ? undefined : theme?.primary || "#ec4899" }}>{item.description}</span>
                </div>
                <p className="text-xs opacity-50 mb-6">{item.label}</p>
                <ul className="flex-1 space-y-2.5 mb-6">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check size={14} style={{ color: theme?.primary || "#ec4899" }} />{f.trim()}</li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-sm" style={{ backgroundColor: i === 1 ? theme?.primary || "#ec4899" : "transparent", color: i === 1 ? "#fff" : theme?.primary || "#ec4899", border: i !== 1 ? `2px solid ${theme?.primary || "#ec4899"}` : "none" }}>
                  {isFree ? "Start Free" : buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
