import type { BlockProps } from "@/blocks/types";
import { BarChart3, Users, Workflow, Target } from "lucide-react";

const icons = [BarChart3, Users, Workflow, Target];

export default function Features303(props: BlockProps) {
  const {
    theme,
    heading = "Built for Growth",
    subheading = "Tools that scale with your ambitions",
    buttonText = "Learn More",
    buttonUrl = "#",
    items = [
      { title: "Advanced Analytics", description: "Deep insights into user behavior, conversion funnels, and revenue trends." },
      { title: "Team Collaboration", description: "Real-time editing, comments, and approvals in one shared workspace." },
      { title: "Workflow Automation", description: "Design custom workflows that run on autopilot and save hours every week." },
      { title: "Goal Tracking", description: "Set OKRs, track milestones, and celebrate wins together." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-12 max-w-xl mx-auto">{subheading}</p>
        <div className="space-y-12">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col md:flex-row gap-6 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                <div className="flex-1 rounded-xl p-8" style={{ backgroundColor: theme?.accent ? `${theme.accent}10` : "#f9fafb" }}>
                  <Icon size={32} style={{ color: theme?.primary || "#6366f1" }} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="opacity-60 mb-4 leading-relaxed">{item.description}</p>
                  <a href={buttonUrl} className="inline-block text-sm font-medium underline" style={{ color: theme?.primary || "#6366f1" }}>
                    {buttonText}
                  </a>
                </div>
                <div className="flex-1 h-48 md:h-56 rounded-xl" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#eef2ff" }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
