import type { BlockProps } from "@/blocks/types";
import { TrendingUp, BarChart3, PieChart, LineChart } from "lucide-react";

const icons = [TrendingUp, BarChart3, PieChart, LineChart];

export default function Features387(props: BlockProps) {
  const {
    theme,
    heading = "Rich Returns",
    subheading = "Features that deliver measurable value",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Growth Engine", description: "Automated funnels that consistently convert leads to customers." },
      { title: "Revenue Insights", description: "Track every dollar with attribution across all channels." },
      { title: "Market Share", description: "Competitive analysis that identifies untapped opportunities." },
      { title: "Trend Lines", description: "Predictive analytics that forecast demand before it peaks." },
    ],
  } = props;

  const gold = theme?.primary || "#c9a84c";
  const darkGold = theme?.accent || "#8b6914";

  return (
    <section style={{ backgroundColor: theme?.background || "#0a0a0f", color: theme?.foreground || "#f0ece4" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "Georgia, serif", backgroundImage: `linear-gradient(135deg, ${gold}, ${darkGold}, ${gold})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{heading}</h2>
          <p className="text-sm opacity-40">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6 rounded-lg" style={{ background: `linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))`, border: `1px solid ${gold}22` }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${gold}, ${darkGold})` }}>
                    <Icon size={18} color="#0a0a0f" />
                  </div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                </div>
                <p className="text-sm opacity-40 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
