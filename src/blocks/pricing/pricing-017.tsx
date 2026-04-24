import type { BlockProps } from "@/blocks/types";
import { Tag } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$12/mo", label: "$9/mo annually (save 25%)", value: "3 sites,5GB bandwidth,SSL included" },
  { title: "Business", description: "$36/mo", label: "$27/mo annually (save 25%)", value: "15 sites,50GB bandwidth,Custom domain,Analytics" },
  { title: "Agency", description: "$89/mo", label: "$67/mo annually (save 25%)", value: "Unlimited sites,Unlimited bandwidth,White-label,Priority support" },
];

export default function Pricing017(props: BlockProps) {
  const {
    theme,
    heading = "Monthly or Annual — You Choose",
    subheading = "Save 25% when you pay annually",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60 flex items-center justify-center gap-2">
          <Tag className="w-4 h-4" style={{ color: theme?.primary || "#16a34a" }} />
          {subheading}
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl shadow-lg p-8 flex flex-col">
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <div className="mb-2">
                <span className="text-3xl font-black">{item.description}</span>
                <span className="text-sm opacity-50 ml-1">monthly</span>
              </div>
              <div className="text-sm font-medium px-3 py-1.5 rounded-full inline-block self-start mb-6" style={{ backgroundColor: (theme?.primary || "#16a34a") + "15", color: theme?.primary || "#16a34a" }}>
                {item.label}
              </div>
              <ul className="space-y-2 flex-1 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-70">✓ {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: theme?.primary || "#16a34a" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
