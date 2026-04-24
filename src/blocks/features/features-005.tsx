import type { BlockProps } from "@/blocks/types";
import { Cloud, PenTool, Palette, Bell, Users, FileText } from "lucide-react";

const icons = [Cloud, PenTool, Palette, Bell, Users, FileText];

export default function Features005(props: BlockProps) {
  const {
    theme,
    heading = "Everything Included",
    subheading = "All the tools you need in one place",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Cloud Hosting" },
      { title: "Design Editor" },
      { title: "Custom Themes" },
      { title: "Notifications" },
      { title: "Team Management" },
      { title: "Content Library" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-10 max-w-md mx-auto">{subheading}</p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex flex-col items-center gap-2 cursor-default" title={item.description || item.title}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#f1f5f9" }}>
                  <Icon size={24} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <span className="text-xs font-medium opacity-70">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
