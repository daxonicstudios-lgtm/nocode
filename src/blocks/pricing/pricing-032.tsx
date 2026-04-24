import type { BlockProps } from "@/blocks/types";
import { Check, BarChart3 } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "API Calls", value: "$0.001", description: "per request", items: "First 10K free,Rate limiting included,99.9% uptime" },
  { title: "Storage", value: "$0.02", description: "per GB/month", items: "First 5GB free,Auto-scaling,CDN included" },
  { title: "Compute", value: "$0.05", description: "per hour", items: "First 100h free,Auto-scaling,Global regions" },
];

export default function Pricing032(props: BlockProps) {
  const { theme, heading = "Usage-based pricing", subheading = "Pay only for what you use. No minimums, no commitments.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <BarChart3 className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary }} />
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            return (
              <div key={i} className="rounded-2xl border p-7 text-center" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <h3 className="font-bold text-lg">{tier.title}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-black" style={{ color: theme?.primary }}>{tier.value}</span>
                </div>
                <p className="text-sm opacity-50 mt-1">{tier.description}</p>
                <div className="h-px my-6" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
                <ul className="space-y-2 text-left">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary }} /> {f.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="inline-block px-8 py-3 rounded-full font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            Calculate Your Cost
          </a>
        </div>
      </div>
    </section>
  );
}
