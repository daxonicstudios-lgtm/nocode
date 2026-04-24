import type { BlockProps } from "@/blocks/types";
import { Activity, FileText, Bell, Workflow } from "lucide-react";

const iconMap = [Activity, FileText, Bell, Workflow];

const defaultItems = [
  { title: "Live Monitoring", description: "Watch your metrics update in real time with zero refresh needed." },
  { title: "Smart Documents", description: "Auto-generate reports and proposals from your project data instantly." },
  { title: "Alert System", description: "Get notified the moment something needs your attention across any channel." },
  { title: "Automation Flows", description: "Connect your tools and trigger actions without writing a single line of code." },
];

export default function Features038(props: BlockProps) {
  const {
    theme,
    heading = "Powerful Features, Zero Clutter",
    subheading = "Everything is just one click away",
    items = defaultItems,
  } = props;

  const accent = theme?.primary ?? "#10b981";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="rounded-xl p-5 hover:bg-black/5 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-5 h-5 flex-shrink-0" style={{ color: accent }} />
                  <h3 className="font-semibold text-base">{item.title}</h3>
                </div>
                <p className="opacity-50 text-sm leading-relaxed pl-8">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
