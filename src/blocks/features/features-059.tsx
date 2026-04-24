import type { BlockProps } from "@/blocks/types";
import { Sun, Moon, Wifi, Battery } from "lucide-react";

const icons = [Sun, Moon, Wifi, Battery];

export default function Features059(props: BlockProps) {
  const {
    theme,
    heading = "Designed for Every Scenario",
    subheading = "Light and dark, online and offline — we have you covered",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/520x360",
    items = [
      { title: "Day Mode Clarity", description: "A bright, clean interface optimized for readability and focus during work hours." },
      { title: "Night Mode Comfort", description: "Reduce eye strain with a carefully calibrated dark theme for late-night sessions." },
      { title: "Always Connected", description: "Real-time sync keeps your data current across browsers, tabs, and team members." },
      { title: "Offline Ready", description: "Keep working without internet. Changes sync automatically when you reconnect." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-0">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;
            const isDark = i % 2 === 1;
            return (
              <div key={i} className="py-12 px-4 sm:px-8" style={{ backgroundColor: isDark ? "#1a1a2e" : (theme?.background || "#ffffff"), color: isDark ? "#e0e0e0" : (theme?.foreground || "#1a1a1a") }}>
                <div className={`max-w-5xl mx-auto flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
                  <div className="w-full md:w-1/2">
                    <img src={imageUrl} alt={item.title || ""} className="w-full rounded-xl object-cover" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <Icon size={28} style={{ color: theme?.primary || "#6366f1" }} />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="opacity-60 leading-relaxed">{item.description}</p>
                  </div>
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
