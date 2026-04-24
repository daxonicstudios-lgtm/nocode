import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const defaultItems = [
  { title: "Users", description: "1", label: "5", value: "Unlimited" },
  { title: "Projects", description: "3", label: "20", value: "Unlimited" },
  { title: "Integrations", description: "no", label: "yes", value: "yes" },
  { title: "Custom branding", description: "no", label: "no", value: "yes" },
  { title: "Export to PDF", description: "no", label: "yes", value: "yes" },
  { title: "Dedicated support", description: "no", label: "no", value: "yes" },
];

export default function Pricing024(props: BlockProps) {
  const {
    theme,
    heading = "Side-by-Side Comparison",
    subheading = "Every feature, at a glance",
    buttonText = "Choose Plan",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const plans = [
    { name: "Starter", price: "$0" },
    { name: "Growth", price: "$24/mo" },
    { name: "Scale", price: "$69/mo" },
  ];
  const primary = theme?.primary || "#0d9488";
  const border = theme?.accent || "#e5e7eb";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto rounded-2xl border overflow-hidden" style={{ borderColor: border }}>
        <div className="grid grid-cols-4 text-sm font-bold" style={{ backgroundColor: theme?.accent || "#f9fafb" }}>
          <div className="p-4">Features</div>
          {plans.map((p, i) => (
            <div key={i} className="p-4 text-center">
              <div>{p.name}</div>
              <div className="text-lg" style={{ color: primary }}>{p.price}</div>
            </div>
          ))}
        </div>
        {items.slice(0, 6).map((item, i) => {
          const vals = [item.description || "", item.label || "", item.value || ""];
          return (
            <div key={i} className="grid grid-cols-4 text-sm border-t" style={{ borderColor: border }}>
              <div className="p-4 font-medium">{item.title}</div>
              {vals.map((v, j) => (
                <div key={j} className="p-4 text-center">
                  {v === "yes" ? <Check className="w-4 h-4 mx-auto" style={{ color: primary }} /> : v === "no" ? <X className="w-4 h-4 mx-auto opacity-25" /> : v}
                </div>
              ))}
            </div>
          );
        })}
        <div className="grid grid-cols-4 border-t p-4" style={{ borderColor: border }}>
          <div />
          {plans.map((_, i) => (
            <div key={i} className="text-center">
              <a href={buttonUrl} className="inline-block px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: primary }}>
                {buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
