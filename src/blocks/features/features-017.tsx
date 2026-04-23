import type { BlockProps } from "@/blocks/types";
import { Terminal, Boxes, Sparkles } from "lucide-react";

const iconMap = [Terminal, Boxes, Sparkles];

const defaults = [
  { title: "Developer API", description: "RESTful and GraphQL endpoints with auto-generated documentation and SDKs." },
  { title: "Container Orchestration", description: "Deploy, scale, and manage containers with built-in health checks and rollbacks." },
  { title: "AI Copilot", description: "Context-aware suggestions that learn from your codebase and team patterns." },
];

export default function Features017(props: BlockProps) {
  const {
    theme,
    heading = "Built for Developers",
    subheading = "Power tools wrapped in a beautiful interface",
    items = defaults,
  } = props;

  const bg = theme?.background || "#0f172a";
  const fg = theme?.foreground || "#f1f5f9";
  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: bg, color: fg }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-50 mb-12 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div
                key={i}
                className="rounded-2xl p-8 text-left transition-shadow duration-300"
                style={{
                  backgroundColor: `${primary}10`,
                  border: `1px solid ${primary}40`,
                  boxShadow: `0 0 20px ${primary}15`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${primary}25`, color: primary }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
