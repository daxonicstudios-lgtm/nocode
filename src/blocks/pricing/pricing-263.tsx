import type { BlockProps } from "@/blocks/types";
import { Check, X, Minus } from "lucide-react";

const defaultFeatures = ["Projects", "Storage", "Support", "Custom domain", "API access", "SSO"];
const defaultItems = [
  { title: "Solo", description: "$8/mo", label: "monthly", value: "yes,yes,na,no,no,no" },
  { title: "Team", description: "$28/mo", label: "monthly", value: "yes,yes,yes,yes,no,no" },
  { title: "Business", description: "$68/mo", label: "monthly", value: "yes,yes,yes,yes,yes,yes" },
];

export default function Pricing263(props: BlockProps) {
  const {
    theme,
    heading = "Full Feature Matrix",
    subheading = "Every feature at a glance",
    buttonText = "Start Now",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const icon = (s: string) => {
    if (s === "yes") return <Check className="w-5 h-5 text-green-500" />;
    if (s === "no") return <X className="w-5 h-5 text-red-400" />;
    return <Minus className="w-5 h-5 opacity-30" />;
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 font-medium opacity-50">Feature</th>
              {items.map((item, i) => (
                <th key={i} className="text-center py-3 px-4">
                  <span className="block font-bold text-lg">{item.title}</span>
                  <span className="block text-xl font-extrabold mt-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {defaultFeatures.map((feat, fi) => (
              <tr key={fi} className={fi % 2 === 0 ? "" : "bg-black/5"}>
                <td className="py-3 px-4 font-medium">{feat}</td>
                {items.map((item, ii) => {
                  const statuses = (item.value || "").split(",");
                  return <td key={ii} className="text-center py-3 px-4">{icon(statuses[fi]?.trim() || "na")}</td>;
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td />
              {items.map((_, i) => (
                <td key={i} className="text-center py-4 px-4">
                  <a href={buttonUrl} className="inline-block px-6 py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
