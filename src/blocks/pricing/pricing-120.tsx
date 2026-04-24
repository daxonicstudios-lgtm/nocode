import type { BlockProps } from "@/blocks/types";
import { Cpu } from "lucide-react";

export default function Pricing120(props: BlockProps) {
  const {
    theme,
    heading = "Compute Pricing",
    subheading = "Scale compute resources on demand",
    bodyText,
    buttonText = "Deploy Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "1 vCPU / 1GB RAM", value: "$5/mo", label: "10" },
      { title: "2 vCPU / 4GB RAM", value: "$20/mo", label: "40" },
      { title: "4 vCPU / 16GB RAM", value: "$60/mo", label: "65" },
      { title: "8 vCPU / 32GB RAM", value: "$120/mo", label: "90" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <Cpu className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary }} />
          <h2 className="text-3xl font-bold mb-2">{heading}</h2>
          <p className="opacity-60 text-sm">{subheading}</p>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => {
            const pct = parseInt(item.label || "0", 10);
            return (
              <div key={i} className="rounded-xl p-4 border flex flex-col sm:flex-row sm:items-center gap-3" style={{ borderColor: theme?.accent }}>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <div className="w-full h-1.5 rounded-full mt-2 overflow-hidden" style={{ backgroundColor: theme?.accent }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: theme?.primary }} />
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-bold" style={{ color: theme?.primary }}>{item.value}</span>
                  <a href={buttonUrl} className="rounded-lg px-3 py-1.5 text-xs font-medium text-white" style={{ backgroundColor: theme?.primary }}>{buttonText}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
