import type { BlockProps } from "@/blocks/types";
import { BarChart3, PieChart, TrendingUp, Activity } from "lucide-react";

const icons = [BarChart3, PieChart, TrendingUp, Activity];

export default function Features288(props: BlockProps) {
  const {
    theme,
    heading = "Data-Driven Decisions",
    subheading = "Turn numbers into narratives with powerful reporting tools",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Custom Reports", description: "Build reports with drag-and-drop fields and save them for your team." },
      { title: "Visual Breakdowns", description: "Interactive charts that make complex data easy to understand." },
      { title: "Trend Detection", description: "Automatic alerts when metrics deviate from expected patterns." },
      { title: "Live Dashboards", description: "Real-time dashboards that update as new data flows in." },
    ],
  } = props;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: theme?.background || "#f8fafc", color: theme?.foreground || "#1e293b" }}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6 flex items-start gap-4" style={{ backgroundColor: theme?.background || "#fff", borderColor: "#e2e8f0" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme?.primary ? `${theme.primary}12` : "#ede9fe", color: theme?.primary || "#6366f1" }}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
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
