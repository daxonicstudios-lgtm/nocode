import type { BlockProps } from "@/blocks/types";
import { Check, X, Gift } from "lucide-react";

const defaultItems = [
  { title: "Free Forever", description: "$0", label: "no credit card needed", value: "3 Pages:yes,Basic Editor:yes,Mobile Responsive:yes,Subdomain Only:yes,Analytics:no,Custom CSS:no,Form Builder:no,SEO Tools:no,Support:no" },
  { title: "Starter", description: "$12/mo", label: "billed monthly", value: "10 Pages:yes,Full Editor:yes,Mobile Responsive:yes,Custom Domain:yes,Basic Analytics:yes,Custom CSS:no,Form Builder:yes,SEO Tools:no,Email Support:yes" },
  { title: "Premium", description: "$39/mo", label: "billed monthly", value: "Unlimited Pages:yes,Full Editor:yes,Mobile Responsive:yes,Custom Domain:yes,Advanced Analytics:yes,Custom CSS:yes,Form Builder:yes,SEO Tools:yes,Priority Support:yes" },
];

export default function Pricing062(props: BlockProps) {
  const {
    theme,
    heading = "Free to Start, Easy to Grow",
    subheading = "Compare plans side by side",
    buttonText = "Choose Plan",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-sm" style={{ backgroundColor: (theme?.primary || "#10b981") + "15", color: theme?.primary || "#10b981" }}>
          <Gift size={14} /> Free plan available
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isFree = item.description === "$0";
          return (
            <div key={i} className="rounded-xl border p-6 flex flex-col" style={{ borderColor: i === 2 ? theme?.primary || "#10b981" : theme?.accent || "#e5e7eb", borderWidth: i === 2 ? 2 : 1 }}>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-4xl font-black my-2" style={{ color: theme?.primary || "#10b981" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-5">{item.label}</p>
              <ul className="flex-1 space-y-2 mb-6">
                {features.map((f, j) => {
                  const [name, included] = f.split(":");
                  const on = included?.trim() === "yes";
                  return (
                    <li key={j} className={`flex items-center gap-2 text-sm ${!on ? "opacity-35" : ""}`}>
                      {on ? <Check size={14} className="text-green-500" /> : <X size={14} className="text-gray-300" />}
                      {name.trim()}
                    </li>
                  );
                })}
              </ul>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-semibold text-sm" style={{ backgroundColor: isFree ? "transparent" : theme?.primary || "#10b981", color: isFree ? theme?.primary || "#10b981" : "#fff", border: isFree ? `2px solid ${theme?.primary || "#10b981"}` : "none" }}>
                {isFree ? "Start Free" : buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
