import type { BlockProps } from "@/blocks/types";
import { Layers, PenTool, BarChart3, Users, Cloud, Smartphone } from "lucide-react";

const icons = [Layers, PenTool, BarChart3, Users, Cloud, Smartphone];

export default function Features124(props: BlockProps) {
  const {
    theme,
    heading = "All-In-One Platform",
    subheading = "Every feature labeled by the plan that includes it",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Visual Editor", description: "Build pages with drag-and-drop simplicity.", label: "All Plans" },
      { title: "Brand Kit", description: "Custom fonts, colors, and logo management.", label: "Starter+" },
      { title: "Analytics", description: "Track performance with real-time dashboards.", label: "Growth+" },
      { title: "Team Access", description: "Invite collaborators with role-based permissions.", label: "Growth+" },
      { title: "Cloud Storage", description: "50 GB of fast, secure file storage.", label: "Business" },
      { title: "Mobile App", description: "Edit and publish from your phone.", label: "All Plans" },
    ],
  } = props;

  const planColor = (label: string) => {
    if (label === "All Plans") return "#22c55e";
    if (label === "Starter+") return "#3b82f6";
    if (label === "Growth+") return "#f59e0b";
    return theme?.primary || "#6366f1";
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <div className="flex items-center justify-between mb-3">
                  <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: planColor(item.label || "") }}>
                    {item.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
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
