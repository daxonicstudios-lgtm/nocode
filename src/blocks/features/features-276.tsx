import type { BlockProps } from "@/blocks/types";
import { Lightbulb, BarChart3, Users, Rocket } from "lucide-react";

const icons = [Lightbulb, BarChart3, Users, Rocket];

export default function Features276(props: BlockProps) {
  const {
    theme,
    heading = "Illuminate Your Workflow",
    subheading = "Features that shine a light on what matters most",
    bodyText,
    buttonText = "Explore Features",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Insights", description: "Surface the metrics that actually move the needle for your business." },
      { title: "Visual Reports", description: "Beautiful charts and graphs that make data easy to understand." },
      { title: "Team Overview", description: "See team capacity, workload, and performance at a glance." },
      { title: "Launch Tracker", description: "Track every launch with checklists, timelines, and go/no-go gates." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#18181b", color: theme?.foreground || "#fafafa" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 text-center" style={{ backgroundColor: "#27272a" }}>
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `radial-gradient(circle, ${theme?.primary || "#f59e0b"}30, transparent)`, color: theme?.primary || "#f59e0b" }}>
                  <Icon size={26} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg font-medium" style={{ backgroundColor: theme?.primary || "#f59e0b", color: "#18181b" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
