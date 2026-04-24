import type { BlockProps } from "@/blocks/types";
import { Gauge } from "lucide-react";

export default function Pricing119(props: BlockProps) {
  const {
    theme,
    heading = "Bandwidth Plans",
    subheading = "High-performance delivery at every tier",
    bodyText,
    buttonText = "Select",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Starter", value: "$8", label: "20", description: "50 GB bandwidth" },
      { title: "Professional", value: "$28", label: "55", description: "500 GB bandwidth" },
      { title: "Enterprise", value: "$88", label: "90", description: "5 TB bandwidth" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const pct = parseInt(item.label || "0", 10);
            return (
              <div key={i} className="border rounded-xl p-6" style={{ borderColor: theme?.accent }}>
                <div className="flex items-center gap-2 mb-3">
                  <Gauge className="w-5 h-5" style={{ color: theme?.primary }} />
                  <h3 className="font-bold">{item.title}</h3>
                </div>
                <p className="text-sm opacity-60 mb-4">{item.description}</p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: theme?.accent }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: theme?.primary }} />
                  </div>
                  <span className="text-xs font-medium opacity-60">{pct}%</span>
                </div>
                <p className="text-xs opacity-40 mb-5">Average utilization</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: theme?.primary }}>{item.value}<span className="text-sm font-normal opacity-50">/mo</span></span>
                  <a href={buttonUrl} className="rounded-lg px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: theme?.primary }}>{buttonText}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
