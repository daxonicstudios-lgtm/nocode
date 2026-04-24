import type { BlockProps } from "@/blocks/types";
import { Send, Bookmark, Bell, Search } from "lucide-react";

const icons = [Send, Bookmark, Bell, Search];

export default function Features357(props: BlockProps) {
  const {
    theme,
    heading = "Elevate Your Workflow",
    subheading = "Tools that float above the competition",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Deploy", description: "Push to production in one click with zero downtime." },
      { title: "Save Anything", description: "Bookmark configs, templates, and workflows." },
      { title: "Smart Alerts", description: "Get notified about what matters, ignore the noise." },
      { title: "Universal Search", description: "Find any resource across all projects instantly." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#e2e2e2", color: theme?.foreground || "#333" }} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const offset = i % 2 === 0 ? "-translate-y-2" : "translate-y-2";
            return (
              <div key={i} className={`rounded-3xl p-6 ${offset}`} style={{ background: theme?.background || "#e2e2e2", boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 -mt-10 ml-4" style={{ background: theme?.primary || "#6366f1", boxShadow: "6px 6px 12px #bebebe, -6px -6px 12px #ffffff" }}>
                  <Icon size={24} color="#fff" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
