import type { BlockProps } from "@/blocks/types";
import { MessageCircle, MessageSquare, MessagesSquare, Reply } from "lucide-react";

const icons = [MessageCircle, MessageSquare, MessagesSquare, Reply];

export default function Features395(props: BlockProps) {
  const {
    theme,
    heading = "Let Our Features Speak",
    subheading = "Each one has something important to say",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Real-Time Chat", description: "Instant messaging with rich media support and threading." },
      { title: "Team Channels", description: "Organized conversations by project, topic, or department." },
      { title: "Group Threads", description: "Focused discussions that keep context without clutter." },
      { title: "Quick Replies", description: "Templated responses that save time on repetitive answers." },
    ],
  } = props;

  const accent = theme?.primary || "#8b5cf6";

  return (
    <section style={{ backgroundColor: theme?.background || "#f5f3ff", color: theme?.foreground || "#1e1b4b" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                <div className="relative max-w-sm">
                  <div className="rounded-2xl p-5" style={{ backgroundColor: isLeft ? (theme?.background || "#fff") : accent, color: isLeft ? (theme?.foreground || "#1e1b4b") : "#fff", border: isLeft ? `1px solid ${accent}22` : "none" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} />
                      <h3 className="font-bold text-sm">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ opacity: isLeft ? 0.6 : 0.85 }}>{item.description}</p>
                  </div>
                  <div className={`absolute -bottom-2 ${isLeft ? "left-4" : "right-4"} w-4 h-4 rotate-45`} style={{ backgroundColor: isLeft ? (theme?.background || "#fff") : accent, borderRight: isLeft ? `1px solid ${accent}22` : "none", borderBottom: isLeft ? `1px solid ${accent}22` : "none" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
