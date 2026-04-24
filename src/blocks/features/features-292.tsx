import type { BlockProps } from "@/blocks/types";
import { Play, MonitorPlay, Video, Film } from "lucide-react";

const icons = [Play, MonitorPlay, Video, Film];

export default function Features292(props: BlockProps) {
  const {
    theme,
    heading = "See It in Action",
    subheading = "Watch quick demos of every feature before you commit",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Dashboard Tour", description: "A 2-minute walkthrough of the main dashboard and key metrics." },
      { title: "Workflow Builder", description: "See how to create automated workflows in under 60 seconds." },
      { title: "Team Collaboration", description: "Watch real-time collaboration features in a live demo." },
      { title: "Reporting Suite", description: "Learn how to build custom reports with drag-and-drop fields." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <div className="h-36 flex items-center justify-center relative" style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "#f5f3ff" }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white cursor-pointer" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                    <Play size={24} fill="currentColor" />
                  </div>
                  <Icon size={60} className="absolute bottom-2 right-3 opacity-5" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
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
