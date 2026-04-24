import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

export default function Features112(props: BlockProps) {
  const {
    theme,
    heading = "Feature Comparison",
    subheading = "A detailed look at what each plan includes",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Unlimited pages", value: "yes", label: "yes", icon: "yes" },
      { title: "Custom domain", value: "no", label: "yes", icon: "yes" },
      { title: "Analytics dashboard", value: "basic", label: "advanced", icon: "advanced" },
      { title: "Priority support", value: "no", label: "no", icon: "yes" },
      { title: "Team collaboration", value: "no", label: "3 seats", icon: "unlimited" },
      { title: "API access", value: "no", label: "no", icon: "yes" },
    ],
  } = props;

  const plans = ["Starter", "Pro", "Enterprise"];
  const keys: Array<"value" | "label" | "icon"> = ["value", "label", "icon"];

  const renderCell = (val: string | undefined) => {
    if (val === "yes") return <Check size={18} className="mx-auto text-green-500" />;
    if (val === "no") return <X size={18} className="mx-auto text-red-400" />;
    return <span className="text-sm">{val}</span>;
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-3 text-sm font-semibold">Feature</th>
                {plans.map((plan, i) => (
                  <th key={i} className="p-3 text-sm font-semibold text-center">{plan}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-t" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                  <td className="p-3 text-sm">{item.title}</td>
                  {keys.map((key, j) => (
                    <td key={j} className="p-3 text-center">{renderCell(item[key] as string | undefined)}</td>
                  ))}
                </tr>
              ))}
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
