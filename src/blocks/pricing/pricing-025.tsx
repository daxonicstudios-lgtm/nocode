import type { BlockProps } from "@/blocks/types";
import { Check, Zap } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Hobby", value: "$0", description: "Perfect for trying things out", items: "1 site,500 visits/mo,Basic templates" },
  { title: "Pro", value: "$24", description: "For professional creators", items: "5 sites,50K visits/mo,Premium templates,Priority support,Custom domain" },
  { title: "Scale", value: "$79", description: "For high-growth businesses", items: "Unlimited sites,1M visits/mo,All templates,24/7 support,Custom domain,API access,Analytics" },
];

export default function Pricing025(props: BlockProps) {
  const { theme, heading = "Pick your plan", subheading = "All plans include a 14-day free trial", buttonText = "Start Trial", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full mb-4" style={{ backgroundColor: theme?.accent, color: theme?.primary }}>
            <Zap className="w-3.5 h-3.5" /> Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            const highlighted = i === 1;
            return (
              <div key={i} className="rounded-2xl p-7 flex flex-col" style={{ backgroundColor: highlighted ? theme?.primary ?? "#4f46e5" : theme?.accent ?? "#f9fafb", color: highlighted ? "#fff" : undefined }}>
                <h3 className="font-semibold text-lg">{tier.title}</h3>
                <p className={`text-sm mt-1 ${highlighted ? "opacity-80" : "opacity-60"}`}>{tier.description}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold">{tier.value}</span>
                  <span className={`text-sm ${highlighted ? "opacity-70" : "opacity-50"}`}>/mo</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" /> {f.trim()}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-8 block text-center py-3 rounded-xl font-semibold text-sm" style={{ backgroundColor: highlighted ? "#fff" : theme?.primary ?? "#4f46e5", color: highlighted ? theme?.primary ?? "#4f46e5" : "#fff" }}>
                  {buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
