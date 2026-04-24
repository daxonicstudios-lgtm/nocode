import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Feature", value: "us,them" },
  { title: "Unlimited Projects", value: "yes,no" },
  { title: "Custom Domains", value: "yes,yes" },
  { title: "Priority Support", value: "yes,no" },
  { title: "API Access", value: "yes,no" },
  { title: "Free SSL", value: "yes,yes" },
  { title: "Analytics", value: "Advanced,Basic" },
];

export default function Comparison114(props: BlockProps) {
  const { theme, heading = "Compare Solutions", subheading = "See how we compare to the competition.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <th className="text-left py-3 font-normal opacity-50">Feature</th>
                <th className="text-center py-3 font-bold" style={{ color: theme?.primary }}>Us</th>
                <th className="text-center py-3 font-bold opacity-50">Them</th>
              </tr>
            </thead>
            <tbody>
              {items.slice(1).map((row, i) => {
                const vals = (row.value ?? "").split(",");
                return (
                  <tr key={i} className="border-b" style={{ borderColor: theme?.secondary ?? "#f3f4f6" }}>
                    <td className="py-3 font-medium">{row.title}</td>
                    {vals.map((v, j) => (
                      <td key={j} className="text-center py-3">
                        {v.trim() === "yes" ? <Check className="w-5 h-5 mx-auto text-green-500" /> : v.trim() === "no" ? <X className="w-5 h-5 mx-auto opacity-30" /> : v.trim()}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
