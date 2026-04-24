import type { BlockProps } from "@/blocks/types";
import { Calendar, Clock, CalendarCheck, Timer } from "lucide-react";

const icons = [Calendar, Clock, CalendarCheck, Timer];
const dates = ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"];

export default function Features398(props: BlockProps) {
  const {
    theme,
    heading = "Feature Timeline",
    subheading = "Our roadmap of delivered capabilities",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Core Platform", description: "Foundation with user auth, projects, and basic editor.", label: "Q1 2024" },
      { title: "Real-Time Sync", description: "Collaboration features with live cursors and presence.", label: "Q2 2024" },
      { title: "AI Assistant", description: "Smart suggestions, auto-layout, and content generation.", label: "Q3 2024" },
      { title: "App Store", description: "Third-party integrations and a plugin marketplace.", label: "Q4 2024" },
    ],
  } = props;

  const accent = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#f8fafc", color: theme?.foreground || "#1e293b" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px" style={{ backgroundColor: `${accent}33` }} />
          <div className="space-y-8">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              const date = item.label || dates[i % dates.length];
              return (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-3 top-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: accent }}>
                    <Icon size={12} color="#fff" />
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: accent }}>{date}</div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
