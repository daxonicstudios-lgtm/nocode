import type { BlockProps } from "@/blocks/types";
import { BadgeCheck, CircleCheck } from "lucide-react";

const defaultItems = [
  { title: "Personal", description: "$9/mo", label: "Cancel anytime", value: "1 site,5GB bandwidth,Community support" },
  { title: "Professional", description: "$24/mo", label: "Cancel anytime", value: "5 sites,50GB bandwidth,Live chat support,Analytics" },
  { title: "Business", description: "$59/mo", label: "Cancel anytime", value: "Unlimited sites,Unlimited bandwidth,Phone support,White-label,Team access" },
];

export default function Pricing153(props: BlockProps) {
  const { theme, heading = "Choose With Confidence", subheading = "Every plan includes our satisfaction guarantee", buttonText = "Get Started", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const featured = i === 1;
          return (
            <div key={i} className={`rounded-xl p-6 flex flex-col ${featured ? "ring-2 shadow-lg scale-[1.02]" : "border"}`} style={{ borderColor: theme?.accent || "#e5e7eb", }}>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-3xl font-bold my-2" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-4">{item.label}</p>
              <ul className="space-y-2 flex-1 mb-6">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><CircleCheck className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#22c55e" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
              <div className="flex items-center justify-center gap-1 mt-3 text-xs opacity-60">
                <BadgeCheck className="w-3.5 h-3.5" /> 60-day money-back guarantee
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
