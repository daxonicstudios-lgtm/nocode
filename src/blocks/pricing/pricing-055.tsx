import type { BlockProps } from "@/blocks/types";
import { Layers, Check } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$8/mo", label: "monthly", value: "1 Project:$3,500MB Storage:$1,Standard Theme:$2,Community Support:$2" },
  { title: "Pro", description: "$28/mo", label: "monthly", value: "10 Projects:$8,5GB Storage:$4,All Themes:$5,Email Support:$3,CDN:$4,Backups:$4" },
  { title: "Max", description: "$55/mo", label: "monthly", value: "50 Projects:$12,50GB Storage:$8,All Themes:$5,Priority Support:$8,CDN:$4,Backups:$4,Custom CSS:$7,Staging:$7" },
];

export default function Pricing055(props: BlockProps) {
  const {
    theme,
    heading = "Build Your Perfect Plan",
    subheading = "Each feature adds a specific cost — total is always clear",
    buttonText = "Start Now",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <Layers size={32} className="mx-auto mb-4" style={{ color: theme?.primary || "#0ea5e9" }} />
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 max-w-lg mx-auto">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="relative rounded-2xl overflow-hidden flex flex-col" style={{ border: `2px solid ${i === 2 ? theme?.primary || "#0ea5e9" : theme?.accent || "#e5e7eb"}` }}>
              {i === 2 && (
                <div className="text-center text-xs font-bold uppercase tracking-widest py-1 text-white" style={{ backgroundColor: theme?.primary || "#0ea5e9" }}>Best Value</div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-black" style={{ color: theme?.primary || "#0ea5e9" }}>{item.description}</span>
                </div>
                <p className="text-xs opacity-50 mb-5">{item.label}</p>
                <div className="flex-1 divide-y" style={{ borderColor: theme?.accent || "#f3f4f6" }}>
                  {features.map((f, j) => {
                    const [name, price] = f.split(":");
                    return (
                      <div key={j} className="flex items-center justify-between py-2 text-sm">
                        <span className="flex items-center gap-1.5"><Check size={13} style={{ color: theme?.primary || "#0ea5e9" }} />{name.trim()}</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: (theme?.primary || "#0ea5e9") + "15", color: theme?.primary || "#0ea5e9" }}>{price?.trim()}</span>
                      </div>
                    );
                  })}
                </div>
                <a href={buttonUrl} className="mt-6 block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: theme?.primary || "#0ea5e9" }}>{buttonText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
