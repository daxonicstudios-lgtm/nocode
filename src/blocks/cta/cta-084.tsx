import type { BlockProps } from "@/blocks/types";
import { Smartphone, Tablet, Bell, Wifi, Battery } from "lucide-react";

export default function Cta084(props: BlockProps) {
  const {
    theme,
    heading = "Your business in your pocket",
    bodyText = "Track sales, manage inventory, and respond to customers — all from your phone.",
    buttonText = "Download for iOS",
    secondaryButtonText = "Download for Android",
    buttonUrl = "#",
    secondaryButtonUrl = "#",
    items = [
      { icon: "Bell", title: "Instant notifications" },
      { icon: "Wifi", title: "Works offline" },
      { icon: "Battery", title: "Battery-friendly" },
    ],
  } = props;

  const icons: Record<string, React.ReactNode> = {
    Bell: <Bell className="w-4 h-4" />,
    Wifi: <Wifi className="w-4 h-4" />,
    Battery: <Battery className="w-4 h-4" />,
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60 max-w-lg mx-auto">{bodyText}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: theme?.muted ?? "#f1f5f9" }}>
              {icons[item.icon ?? ""] ?? <Bell className="w-4 h-4" />}
              {item.title}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#000" }}>
            <Smartphone className="w-5 h-5" />
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#000" }}>
            <Tablet className="w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
