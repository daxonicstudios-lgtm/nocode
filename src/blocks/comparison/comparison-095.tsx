import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Speed", value: "Fast,Slow" },
  { title: "Support", value: "24/7,Business hours" },
  { title: "Customization", value: "Full,Limited" },
  { title: "Pricing", value: "Transparent,Hidden fees" },
  { title: "Uptime", value: "99.99%,99.5%" },
];

export default function Comparison095(props: BlockProps) {
  const { theme, heading = "Before & After", subheading = "Features that set us apart.", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
          <div className="grid grid-cols-3 gap-0 px-6 py-4 border-b border-white/10">
            <span className="text-sm opacity-50">Feature</span>
            <span className="text-sm font-bold text-center text-green-400">Our Platform</span>
            <span className="text-sm font-bold text-center opacity-50">Others</span>
          </div>
          {items.slice(0, 6).map((row, i) => {
            const vals = (row.value ?? "").split(",");
            return (
              <div key={i} className="grid grid-cols-3 gap-0 px-6 py-3 border-b border-white/5">
                <span className="text-sm">{row.title}</span>
                <span className="text-sm text-center text-green-400">{vals[0]?.trim()}</span>
                <span className="text-sm text-center opacity-40">{vals[1]?.trim()}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
