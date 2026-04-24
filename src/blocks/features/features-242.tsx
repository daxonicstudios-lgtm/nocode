import type { BlockProps } from "@/blocks/types";
import { Circle } from "lucide-react";

const columnTitles = ["To Explore", "In Progress", "Completed"];
const columnColors = ["#3b82f6", "#f59e0b", "#10b981"];

export default function Features242(props: BlockProps) {
  const {
    theme,
    heading = "Feature Board",
    subheading = "Track our feature pipeline in real time",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "AI Copilot", description: "Intelligent suggestions for every task.", label: "explore" },
      { title: "Plugin Marketplace", description: "Third-party extensions ecosystem.", label: "explore" },
      { title: "Mobile App", description: "Native iOS and Android experience.", label: "progress" },
      { title: "Team Chat", description: "Built-in messaging for quick decisions.", label: "progress" },
      { title: "SSO Integration", description: "Single sign-on with major providers.", label: "done" },
      { title: "API v2", description: "Faster, more flexible endpoints.", label: "done" },
    ],
  } = props;

  const columns = [
    items.filter((it) => it.label === "explore"),
    items.filter((it) => it.label === "progress"),
    items.filter((it) => it.label === "done"),
  ];

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-base opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {columns.map((col, ci) => (
            <div key={ci}>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2" style={{ borderColor: columnColors[ci] }}>
                <Circle size={10} fill={columnColors[ci]} style={{ color: columnColors[ci] }} />
                <h3 className="font-bold text-sm uppercase tracking-wide">{columnTitles[ci]}</h3>
                <span className="ml-auto text-xs opacity-40">{col.length}</span>
              </div>
              <div className="space-y-3">
                {col.map((item, i) => (
                  <div key={i} className="rounded-lg border p-4" style={{ borderColor: `${primary}15` }}>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs opacity-60">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
