import type { BlockProps } from "@/blocks/types";
import { Monitor, Smartphone, ArrowRight } from "lucide-react";

const iconMap = [Monitor, Smartphone];

const defaults = [
  {
    title: "Desktop Dashboard",
    description: "A full-featured control panel with drag-and-drop widgets, live graphs, and team activity feeds. Manage everything from a single screen.",
  },
  {
    title: "Mobile Companion App",
    description: "Stay connected on the go. Approve requests, check metrics, and respond to alerts right from your phone with push notifications.",
  },
];

export default function Features028(props: BlockProps) {
  const {
    theme,
    heading = "Works Where You Work",
    subheading = "Powerful on desktop, seamless on mobile.",
    buttonText = "Learn More",
    buttonUrl = "#",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.slice(0, 2).map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i}>
                <div
                  className="w-full h-44 rounded-xl mb-5 flex items-center justify-center"
                  style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}
                >
                  <Icon size={48} className="opacity-30" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title ?? defaults[i]?.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-3">{item.description ?? defaults[i]?.description}</p>
                <a href={buttonUrl} className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#2563eb" }}>
                  {buttonText} <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
