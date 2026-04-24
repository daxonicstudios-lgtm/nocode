import type { BlockProps } from "@/blocks/types";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const statusConfig = {
  done: { icon: CheckCircle2, color: "#22c55e", label: "Shipped" },
  progress: { icon: Clock, color: "#f59e0b", label: "In Progress" },
  planned: { icon: Circle, color: "#94a3b8", label: "Planned" },
};

export default function Features330(props: BlockProps) {
  const {
    theme,
    heading = "Product Roadmap",
    subheading = "Quarterly feature releases keep you ahead of the curve",
    items = [
      { title: "Advanced Reporting Dashboard", description: "Custom report builder with scheduled delivery and 50+ chart types.", value: "done", label: "Q1 2026" },
      { title: "AI Assistant V2", description: "Context-aware suggestions, automated summaries, and predictive insights.", value: "done", label: "Q1 2026" },
      { title: "Mobile SDK", description: "Native iOS and Android SDKs with offline-first architecture.", value: "progress", label: "Q2 2026" },
      { title: "Marketplace Platform", description: "Third-party integrations marketplace with revenue sharing for partners.", value: "planned", label: "Q3 2026" },
    ],
  } = props;

  const primary = theme?.primary || "#475569";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-60 text-center mb-12">{subheading}</p>
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5" style={{ backgroundColor: `${primary}15` }} />
          <div className="space-y-8">
            {items.map((item, i) => {
              const status = statusConfig[(item.value as keyof typeof statusConfig) || "planned"];
              const Icon = status.icon;
              return (
                <div key={i} className="flex gap-5 relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10" style={{ backgroundColor: theme?.background || "#fff" }}>
                    <Icon size={20} style={{ color: status.color }} />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: `${status.color}18`, color: status.color }}>{status.label}</span>
                      <span className="text-xs opacity-40 font-medium">{item.label}</span>
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
