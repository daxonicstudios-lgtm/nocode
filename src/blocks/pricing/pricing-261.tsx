import type { BlockProps } from "@/blocks/types";
import { Check, X, Minus } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$12/mo", label: "per month", value: "yes:5 projects,yes:Email support,no:Priority support,no:Custom domain,na:API access" },
  { title: "Pro", description: "$36/mo", label: "per month", value: "yes:25 projects,yes:Email support,yes:Priority support,yes:Custom domain,no:API access" },
  { title: "Enterprise", description: "$99/mo", label: "per month", value: "yes:Unlimited projects,yes:Email support,yes:Priority support,yes:Custom domain,yes:API access" },
];

export default function Pricing261(props: BlockProps) {
  const {
    theme,
    heading = "Compare Plans Side by Side",
    subheading = "Find the right fit for your needs",
    buttonText = "Choose Plan",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const getIcon = (status: string) => {
    if (status === "yes") return <Check className="w-4 h-4 text-green-500" />;
    if (status === "no") return <X className="w-4 h-4 text-red-400" />;
    return <Minus className="w-4 h-4 opacity-40" />;
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-xl border p-8 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-3xl font-extrabold mb-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => {
                  const [status, text] = f.includes(":") ? [f.split(":")[0], f.split(":").slice(1).join(":")] : ["na", f];
                  return (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      {getIcon(status)}<span className={status === "no" ? "opacity-40 line-through" : ""}>{text.trim()}</span>
                    </li>
                  );
                })}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
