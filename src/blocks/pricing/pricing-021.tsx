import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const defaultItems = [
  { title: "Storage", description: "5GB", label: "50GB", value: "Unlimited" },
  { title: "Custom domain", description: "no", label: "yes", value: "yes" },
  { title: "Analytics", description: "no", label: "yes", value: "yes" },
  { title: "Priority support", description: "no", label: "no", value: "yes" },
  { title: "API access", description: "no", label: "yes", value: "yes" },
  { title: "White-label", description: "no", label: "no", value: "yes" },
];

export default function Pricing021(props: BlockProps) {
  const {
    theme,
    heading = "Compare Plans",
    subheading = "See which plan fits your needs",
    items = defaultItems,
  } = props;

  const plans = ["Free — $0", "Pro — $29/mo", "Business — $79/mo"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <th className="text-left py-4 px-3 font-semibold">Feature</th>
              {plans.map((p, i) => (
                <th key={i} className="py-4 px-3 font-semibold text-center">{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.slice(0, 6).map((item, i) => {
              const vals = [item.description, item.label, item.value];
              return (
                <tr key={i} className="border-b" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                  <td className="py-3 px-3 font-medium">{item.title}</td>
                  {vals.map((v, j) => (
                    <td key={j} className="py-3 px-3 text-center">
                      {v === "yes" ? <Check className="w-5 h-5 mx-auto" style={{ color: theme?.primary || "#16a34a" }} /> : v === "no" ? <X className="w-5 h-5 mx-auto opacity-30" /> : <span>{v}</span>}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
