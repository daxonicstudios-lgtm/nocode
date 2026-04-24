import type { BlockProps } from "@/blocks/types";
import { Smartphone, Wifi, BatteryCharging, Bell } from "lucide-react";

const icons = [Smartphone, Wifi, BatteryCharging, Bell];

export default function Features259(props: BlockProps) {
  const {
    theme,
    heading = "Mobile-First by Design",
    subheading = "Every feature works beautifully on screens of all sizes",
    bodyText,
    buttonText = "Try on Mobile",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Responsive Layouts", description: "Pixel-perfect interfaces that adapt from 320px to 4K displays." },
      { title: "Offline Mode", description: "Keep working without internet — syncs automatically when reconnected." },
      { title: "Optimized Performance", description: "Lightweight bundles and lazy loading for fast mobile experiences." },
      { title: "Push Notifications", description: "Engage users with timely, personalized push notifications." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/3 mb-10 lg:mb-0 flex justify-center">
            <div className="w-48 h-80 rounded-3xl border-4 p-3 relative" style={{ borderColor: theme?.primary || "#6366f1" }}>
              <div className="w-16 h-1 rounded-full mx-auto mb-2" style={{ backgroundColor: theme?.primary ? `${theme.primary}50` : "#a5b4fc" }} />
              <div className="space-y-2 mt-4">
                {[70, 50, 85, 60].map((w, j) => (
                  <div key={j} className="h-3 rounded-full" style={{ width: `${w}%`, backgroundColor: theme?.primary ? `${theme.primary}30` : "#e0e7ff" }} />
                ))}
              </div>
              <div className="absolute bottom-4 left-3 right-3 h-10 rounded-lg" style={{ backgroundColor: theme?.primary ? `${theme.primary}20` : "#ede9fe" }} />
            </div>
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
            <p className="text-lg opacity-70 mb-8">{subheading}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon size={20} className="mt-1 flex-shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-60">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {buttonText && (
              <a href={buttonUrl} className="inline-block mt-8 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
