import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$12/mo", label: "#0ea5e9", value: "5 pages,SEO basics,SSL certificate" },
  { title: "Standard", description: "$28/mo", label: "#a855f7", value: "25 pages,Advanced SEO,SSL,Analytics,Blog" },
  { title: "Premium", description: "$56/mo", label: "#ef4444", value: "Unlimited pages,Full SEO suite,SSL,Analytics,Blog,E-commerce,Priority support" },
];

export default function Pricing163(props: BlockProps) {
  const { theme, heading = "Website Plans", subheading = "Everything you need to get online", buttonText = "Choose", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const color = item.label || "#2563eb";
          const allFeatures = ["5 pages", "SEO basics", "SSL certificate", "Analytics", "Blog", "E-commerce", "Priority support"];
          return (
            <div key={i} className="rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="py-5 px-6 text-center text-white" style={{ backgroundColor: color }}>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-3xl font-black mt-1">{item.description}</p>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <ul className="space-y-2 flex-1 mb-6">
                  {allFeatures.map((f, j) => {
                    const has = features.some(feat => feat.trim().toLowerCase().includes(f.split(" ").pop()?.toLowerCase() || ""));
                    return (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        {has ? <Check className="w-4 h-4 shrink-0" style={{ color }} /> : <X className="w-4 h-4 shrink-0 opacity-30" />}
                        <span className={has ? "" : "opacity-40"}>{f}</span>
                      </li>
                    );
                  })}
                </ul>
                <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: color }}>{buttonText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
