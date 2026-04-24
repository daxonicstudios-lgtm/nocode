import type { BlockProps } from "@/blocks/types";
import { Sparkles, Bot, Mic, ScanEye, Clock, Wand2 } from "lucide-react";

const icons = [Sparkles, Bot, Mic, ScanEye, Clock, Wand2];

export default function Features295(props: BlockProps) {
  const {
    theme,
    heading = "What's on the Roadmap",
    subheading = "Features available today, plus exciting things coming soon",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "AI Assistant", description: "Natural language interface for every action in the platform.", value: "live" },
      { title: "Smart Bots", description: "Automated agents that handle routine tasks on your behalf.", value: "live" },
      { title: "Voice Commands", description: "Control the platform with voice commands on any device.", value: "soon" },
      { title: "Visual Search", description: "Find anything by describing what it looks like, not what it's called.", value: "soon" },
      { title: "Time Travel", description: "Rewind any project to any point in time with full state restoration.", value: "live" },
      { title: "Auto-Magic", description: "One-click optimization that tunes settings for peak performance.", value: "soon" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isSoon = item.value === "soon";
            return (
              <div key={i} className="rounded-xl border p-6 relative" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb", opacity: isSoon ? 0.75 : 1 }}>
                {isSoon && (
                  <span className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: theme?.accent || "#fbbf24", color: "#1f2937" }}>Coming Soon</span>
                )}
                <Icon size={24} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-semibold mb-1">{item.title}</h3>
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
