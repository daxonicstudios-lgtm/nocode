import type { BlockProps } from "@/blocks/types";
import { Check, Crown } from "lucide-react";

const defaultItems = [
  { title: "Essential", description: "$10/mo", label: "Billed annually", value: "2 projects,5GB,Email support" },
  { title: "Business", description: "$35/mo", label: "Billed annually", value: "15 projects,50GB,Priority support,Analytics,Collaboration" },
  { title: "Agency", description: "$89/mo", label: "Billed annually", value: "Unlimited projects,500GB,Dedicated manager,White-label,API,Custom training" },
];

export default function Pricing255(props: BlockProps) {
  const {
    theme,
    heading = "Invest in Your Growth",
    subheading = "Every plan includes a 14-day free trial",
    buttonText = "Start Trial",
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
          const isBest = i === 1;
          return (
            <div key={i} className={`relative rounded-2xl p-8 flex flex-col overflow-hidden ${isBest ? "ring-2 shadow-xl" : "border"}`} style={{ borderColor: theme?.accent || "#e5e7eb", }}>
              {isBest && (
                <div className="absolute top-4 -right-8 rotate-45 px-10 py-1 text-xs font-bold text-white" style={{ backgroundColor: theme?.primary || "#10b981" }}>
                  <Crown className="w-3 h-3 inline mr-1" />TOP PICK
                </div>
              )}
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-3xl font-extrabold mb-1" style={{ color: theme?.primary || "#10b981" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#10b981" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className={`block text-center py-3 rounded-lg font-semibold ${isBest ? "text-white" : ""}`} style={{ backgroundColor: isBest ? theme?.primary || "#10b981" : "transparent", color: isBest ? "#fff" : theme?.primary || "#10b981", border: isBest ? "none" : `2px solid ${theme?.primary || "#10b981"}` }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
