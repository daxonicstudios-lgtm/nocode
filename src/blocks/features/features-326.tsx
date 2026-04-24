import type { BlockProps } from "@/blocks/types";
import { Code2, Megaphone, Wallet, HeadphonesIcon } from "lucide-react";

const departments = [
  { icon: Code2, dept: "Engineering" },
  { icon: Megaphone, dept: "Marketing" },
  { icon: Wallet, dept: "Finance" },
  { icon: HeadphonesIcon, dept: "Support" },
];

export default function Features326(props: BlockProps) {
  const {
    theme,
    heading = "Features by Department",
    subheading = "Every team gets the tools they need",
    items = [
      { title: "CI/CD Pipelines", description: "Automated testing and deployment for every code change.", label: "Engineering" },
      { title: "Campaign Analytics", description: "Measure ROI across channels with multi-touch attribution.", label: "Marketing" },
      { title: "Budget Tracking", description: "Real-time expense monitoring with forecasting models.", label: "Finance" },
      { title: "Ticket Management", description: "Organize, prioritize, and resolve support requests efficiently.", label: "Support" },
    ],
  } = props;

  const primary = theme?.primary || "#475569";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-60 text-center mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const dept = departments[i % departments.length];
            const Icon = dept.icon;
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: `${primary}12` }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: `${primary}10` }}>
                    <Icon size={16} style={{ color: primary }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-40">{item.label || dept.dept}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
