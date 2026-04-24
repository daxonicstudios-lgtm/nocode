import type { BlockProps } from "@/blocks/types";
import { Gauge, Bell, Calendar, MessageSquare } from "lucide-react";

const icons = [Gauge, Bell, Calendar, MessageSquare];

export default function Features309(props: BlockProps) {
  const {
    theme,
    heading = "Two Sides of Every Feature",
    subheading = "See the benefit and the how, side by side",
    items = [
      { title: "Performance Dashboard", description: "Real-time metrics so you always know exactly where you stand." },
      { title: "Smart Notifications", description: "Get alerted about what matters, silence everything else." },
      { title: "Calendar Sync", description: "Integrates with Google, Outlook, and Apple Calendar seamlessly." },
      { title: "Team Chat", description: "Threaded conversations, reactions, and file sharing built right in." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-12 max-w-xl mx-auto">{subheading}</p>
        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex flex-col md:flex-row rounded-xl overflow-hidden min-h-[10rem]">
                <div className="md:w-1/2 p-8 flex items-center justify-center" style={{ backgroundColor: theme?.primary || "#6366f1", color: "#fff" }}>
                  <div className="flex items-center gap-4">
                    <Icon size={36} />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex items-center" style={{ backgroundColor: theme?.accent ? `${theme.accent}10` : "#f9fafb" }}>
                  <p className="opacity-70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
