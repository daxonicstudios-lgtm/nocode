import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

const icons = [TrendingUp, Users, DollarSign, Activity];

export default function Features251(props: BlockProps) {
  const {
    theme,
    heading = "Your SaaS Dashboard, Supercharged",
    subheading = "Real-time metrics that drive smarter decisions",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Revenue Tracking", description: "Monitor MRR, ARR, and churn rate with live dashboards updated every minute.", value: "$48.2K" },
      { title: "Active Users", description: "See who's online, what they're doing, and where they drop off.", value: "3,291" },
      { title: "Conversion Rate", description: "Track trial-to-paid conversions across every plan and cohort.", value: "12.4%" },
      { title: "Health Score", description: "AI-generated account health scores predict churn before it happens.", value: "94/100" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#e5e7eb" }}>
                <div className="flex items-center justify-between mb-4">
                  <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                  <span className="text-2xl font-bold" style={{ color: theme?.primary || "#6366f1" }}>{item.value}</span>
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
