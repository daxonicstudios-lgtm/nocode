import type { BlockProps } from "@/blocks/types";
import { Check, Minus } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$15/mo", label: "billed monthly", value: "Website Builder:$5,1 Page:$2,Basic Theme:$3,Community Forum:$2,SSL:$3" },
  { title: "Professional", description: "$45/mo", label: "billed monthly", value: "Website Builder:$5,10 Pages:$8,Premium Themes:$7,Email Support:$5,SSL:$3,Analytics:$7,Custom Domain:$5,Forms:$5" },
];

export default function Pricing052(props: BlockProps) {
  const {
    theme,
    heading = "Feature-Based Pricing",
    subheading = "See the cost breakdown for every feature included",
    buttonText = "Choose Plan",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl shadow-lg p-8 flex flex-col" style={{ background: theme?.background || "#fff" }}>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <span className="text-3xl font-extrabold" style={{ color: theme?.primary || "#7c3aed" }}>{item.description}</span>
              </div>
              <div className="space-y-2 flex-1 mb-6">
                {features.map((f, j) => {
                  const [name, price] = f.split(":");
                  return (
                    <div key={j} className="flex items-center justify-between py-2 border-b text-sm" style={{ borderColor: theme?.accent || "#f3f4f6" }}>
                      <span className="flex items-center gap-2"><Check size={14} className="text-green-500" />{name.trim()}</span>
                      <span className="font-mono font-semibold">{price?.trim()}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs opacity-50 mb-4">{item.label}</p>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
