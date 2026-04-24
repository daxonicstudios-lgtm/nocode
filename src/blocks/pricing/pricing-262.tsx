import type { BlockProps } from "@/blocks/types";
import { Check, X, Minus } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0", label: "forever", value: "yes:3 pages,yes:Basic templates,no:Custom CSS,no:Analytics,na:Collaboration" },
  { title: "Plus", description: "$19/mo", label: "per month", value: "yes:50 pages,yes:All templates,yes:Custom CSS,no:Analytics,yes:Collaboration" },
  { title: "Premium", description: "$49/mo", label: "per month", value: "yes:Unlimited pages,yes:All templates,yes:Custom CSS,yes:Analytics,yes:Collaboration" },
];

export default function Pricing262(props: BlockProps) {
  const {
    theme,
    heading = "Feature Comparison",
    subheading = "See exactly what each plan includes",
    buttonText = "Select",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const getIcon = (s: string) => {
    if (s === "yes") return <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-100"><Check className="w-3.5 h-3.5 text-green-600" /></div>;
    if (s === "no") return <div className="w-6 h-6 rounded-full flex items-center justify-center bg-red-50"><X className="w-3.5 h-3.5 text-red-400" /></div>;
    return <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100"><Minus className="w-3.5 h-3.5 text-gray-400" /></div>;
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isMiddle = i === 1;
          return (
            <div key={i} className={`rounded-2xl p-8 flex flex-col ${isMiddle ? "shadow-xl ring-2" : "shadow-sm border"}`} style={{ borderColor: theme?.accent || "#e5e7eb", }}>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="flex items-baseline gap-1 mt-2 mb-6">
                <span className="text-4xl font-black" style={{ color: theme?.primary || "#8b5cf6" }}>{item.description}</span>
                <span className="text-sm opacity-40">/{item.label}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {features.map((f, j) => {
                  const [status, text] = f.includes(":") ? [f.split(":")[0], f.split(":").slice(1).join(":")] : ["na", f];
                  return <li key={j} className="flex items-center gap-3 text-sm">{getIcon(status)}{text.trim()}</li>;
                })}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: theme?.primary || "#8b5cf6" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
