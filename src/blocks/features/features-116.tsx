import type { BlockProps } from "@/blocks/types";
import { Check, X, Minus } from "lucide-react";

export default function Features116(props: BlockProps) {
  const {
    theme,
    heading = "How We Stack Up",
    subheading = "An honest look at us versus competitors",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Ease of use", value: "yes", label: "partial", icon: "no" },
      { title: "AI content generation", value: "yes", label: "no", icon: "no" },
      { title: "Mobile editing", value: "yes", label: "no", icon: "partial" },
      { title: "Free SSL certificate", value: "yes", label: "yes", icon: "yes" },
      { title: "Custom code injection", value: "yes", label: "partial", icon: "yes" },
    ],
  } = props;

  const competitors = ["Us", "Competitor A", "Competitor B"];

  const renderIcon = (val: string | undefined, highlight: boolean) => {
    if (val === "yes") return <Check size={16} className={highlight ? "text-white" : "text-green-500"} />;
    if (val === "partial") return <Minus size={16} className="text-yellow-500" />;
    return <X size={16} className="text-red-400" />;
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-3 text-left text-sm font-medium opacity-60">Feature</th>
                {competitors.map((c, i) => (
                  <th key={i} className={`p-3 text-center text-sm font-bold ${i === 0 ? "text-white rounded-t-lg" : ""}`} style={i === 0 ? { backgroundColor: theme?.primary || "#6366f1" } : {}}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => {
                const vals: Array<"value" | "label" | "icon"> = ["value", "label", "icon"];
                return (
                  <tr key={i} className="border-t" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                    <td className="p-3 text-sm">{item.title}</td>
                    {vals.map((key, j) => (
                      <td key={j} className={`p-3 text-center ${j === 0 ? "bg-opacity-10" : ""}`} style={j === 0 ? { backgroundColor: `${theme?.primary || "#6366f1"}20` } : {}}>
                        <span className="inline-flex justify-center">{renderIcon(item[key] as string | undefined, j === 0)}</span>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
