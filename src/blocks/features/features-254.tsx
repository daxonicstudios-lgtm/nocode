import type { BlockProps } from "@/blocks/types";
import { BarChart3, PieChart, LineChart, TrendingUp } from "lucide-react";

const icons = [BarChart3, PieChart, LineChart, TrendingUp];
const chartBars = [[60, 80, 45, 90, 70], [40, 65, 85, 55, 75], [70, 50, 90, 60, 80], [55, 75, 65, 85, 95]];

export default function Features254(props: BlockProps) {
  const {
    theme,
    heading = "Analytics That Actually Help",
    subheading = "Turn raw data into actionable insights with zero setup",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Traffic Analysis", description: "Understand where visitors come from and what keeps them engaged." },
      { title: "Funnel Metrics", description: "Visualize drop-off points and optimize every conversion step." },
      { title: "Growth Trends", description: "Spot patterns early with predictive trend analysis and alerts." },
      { title: "Revenue Attribution", description: "Know exactly which channels drive the most revenue per dollar spent." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const bars = chartBars[i % chartBars.length];
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.primary ? `${theme.primary}25` : "#e5e7eb" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <div className="flex items-end gap-1 h-10 mb-3">
                  {bars.map((h, j) => (
                    <div key={j} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: theme?.primary ? `${theme.primary}${j === bars.length - 1 ? "ff" : "40"}` : j === bars.length - 1 ? "#6366f1" : "#6366f140" }} />
                  ))}
                </div>
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
