import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Starter", value: "$0", description: "Free forever", items: "1 workspace,3 members,Basic features" },
  { title: "Team", value: "$15", description: "Per user/month", items: "5 workspaces,Unlimited members,Advanced features,API access" },
  { title: "Business", value: "$35", description: "Per user/month", items: "Unlimited workspaces,Unlimited members,All features,API access,SSO,Dedicated support" },
];

export default function Pricing028(props: BlockProps) {
  const { theme, heading = "Pricing that scales with you", subheading = "Start free, upgrade when you need more power.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold max-w-lg">{heading}</h2>
          <p className="mt-4 text-lg opacity-60 max-w-md">{subheading}</p>
        </div>
        <div className="space-y-4">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            return (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border p-6 sm:p-8 hover:shadow-lg transition-shadow" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{tier.title}</h3>
                  <p className="text-sm opacity-50 mt-1">{tier.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 flex-1">
                  {features.map((f: string, j: number) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>{f.trim()}</span>
                  ))}
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="text-3xl font-extrabold">{tier.value}</span>
                  <a href="#" className="inline-flex items-center gap-1 font-semibold text-sm" style={{ color: theme?.primary ?? "#6366f1" }}>
                    Choose <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
