import type { BlockProps } from "@/blocks/types";
import { Bookmark, Flag, Tag, Pin } from "lucide-react";

const icons = [Bookmark, Flag, Tag, Pin];
const colors = ["#ef4444", "#f59e0b", "#10b981", "#6366f1"];

export default function Features396(props: BlockProps) {
  const {
    theme,
    heading = "Bookmarked Features",
    subheading = "Flagged as essential by thousands of teams",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Quick Access", description: "Pin your most-used tools to the top of every screen." },
      { title: "Priority Flags", description: "Color-coded urgency levels for tasks and notifications." },
      { title: "Smart Tags", description: "Auto-categorize content based on context and keywords." },
      { title: "Board Pins", description: "Pin important updates so they never get buried." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#1f2937" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const flagColor = theme?.primary || colors[i % colors.length];
            return (
              <div key={i} className="relative rounded-lg p-6 border" style={{ borderColor: `${theme?.foreground || "#1f2937"}11` }}>
                <div className="absolute top-0 left-6 -translate-y-1">
                  <div className="w-6 h-10 flex items-start justify-center pt-1.5" style={{ backgroundColor: flagColor, clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }}>
                    <Icon size={12} color="#fff" />
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
