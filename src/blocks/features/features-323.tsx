import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const icons = [TrendingUp, Users, Clock, DollarSign];
const barWidths = ["85%", "72%", "90%", "65%"];

export default function Features323(props: BlockProps) {
  const {
    theme,
    heading = "Measurable Impact",
    subheading = "Our features deliver results you can track",
    items = [
      { title: "Revenue Growth", description: "Average 35% increase in first quarter after adoption.", value: "85" },
      { title: "Team Productivity", description: "Teams report saving 12 hours per week on average.", value: "72" },
      { title: "Time to Market", description: "Launch products 3x faster with streamlined workflows.", value: "90" },
      { title: "Cost Reduction", description: "Cut operational costs by up to 40% through automation.", value: "65" },
    ],
  } = props;

  const primary = theme?.primary || "#475569";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-60 text-center mb-12">{subheading}</p>
        <div className="space-y-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const width = item.value ? `${item.value}%` : barWidths[i % barWidths.length];
            return (
              <div key={i}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={18} style={{ color: primary }} />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: `${primary}12` }}>
                  <div className="h-full rounded-full" style={{ width, backgroundColor: primary, transition: "width 1s ease" }} />
                </div>
                <p className="text-xs opacity-50 mt-1">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
