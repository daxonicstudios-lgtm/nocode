import type { BlockProps } from "@/blocks/types";
import { Check, X, Sparkles } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0", label: "forever free", value: "1 Project:yes,500MB Storage:yes,Basic Templates:yes,Community Support:yes,Custom Domain:no,Analytics:no,Priority Support:no,Remove Branding:no" },
  { title: "Pro", description: "$24/mo", label: "billed monthly", value: "Unlimited Projects:yes,10GB Storage:yes,All Templates:yes,Email Support:yes,Custom Domain:yes,Analytics:yes,Priority Support:yes,Remove Branding:yes" },
];

export default function Pricing061(props: BlockProps) {
  const {
    theme,
    heading = "Start Free, Upgrade When Ready",
    subheading = "No credit card required for the free plan",
    buttonText = "Upgrade to Pro",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Sparkles size={28} className="mx-auto mb-3" style={{ color: theme?.primary || "#f59e0b" }} />
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isFree = item.description === "$0";
          return (
            <div key={i} className="rounded-2xl p-8 flex flex-col" style={{ border: `2px solid ${isFree ? theme?.accent || "#e5e7eb" : theme?.primary || "#f59e0b"}`, backgroundColor: isFree ? "transparent" : (theme?.primary || "#f59e0b") + "08" }}>
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-5xl font-black mb-1" style={{ color: isFree ? undefined : theme?.primary || "#f59e0b" }}>{item.description}</p>
              <p className="text-sm opacity-50 mb-6">{item.label}</p>
              <ul className="flex-1 space-y-3 mb-8">
                {features.map((f, j) => {
                  const [name, included] = f.split(":");
                  const isIncluded = included?.trim() === "yes";
                  return (
                    <li key={j} className={`flex items-center gap-2 text-sm ${!isIncluded ? "opacity-40 line-through" : ""}`}>
                      {isIncluded ? <Check size={15} className="text-green-500" /> : <X size={15} className="text-red-400" />}
                      {name.trim()}
                    </li>
                  );
                })}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: isFree ? theme?.foreground || "#374151" : theme?.primary || "#f59e0b" }}>
                {isFree ? "Start Free" : buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
