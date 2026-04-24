import type { BlockProps } from "@/blocks/types";
import { Building2, Scale, Briefcase, TrendingUp } from "lucide-react";

const icons = [Building2, Scale, Briefcase, TrendingUp];

export default function Features321(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise-Grade Platform",
    subheading = "Trusted by Fortune 500 companies to run mission-critical operations",
    items = [
      { title: "Governance & Compliance", description: "Meet regulatory requirements with built-in audit trails and policy enforcement." },
      { title: "SLA Guarantees", description: "99.99% uptime backed by financial commitments and dedicated support." },
      { title: "Executive Reporting", description: "Board-ready dashboards with real-time data and exportable reports." },
      { title: "Predictive Analytics", description: "Machine learning models surface trends before they become problems." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="border-b pb-8 mb-12" style={{ borderColor: theme?.primary ? `${theme.primary}15` : "#e5e7eb" }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-60 max-w-2xl text-lg">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#f3f4f6" }}>
                  <Icon size={20} style={{ color: theme?.primary || "#475569" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
