import type { BlockProps } from "@/blocks/types";
import { ToggleRight, ToggleLeft } from "lucide-react";

export default function Features341(props: BlockProps) {
  const {
    theme,
    heading = "Toggle Features On & Off",
    subheading = "Customize your experience by enabling what you need",
    items = [
      { title: "Dark Mode", description: "Switch to a dark interface that's easier on the eyes.", value: "on" },
      { title: "Auto-Save", description: "Changes are saved automatically as you work.", value: "on" },
      { title: "Email Notifications", description: "Get notified about important updates via email.", value: "off" },
      { title: "Two-Factor Auth", description: "Add an extra layer of security to your account.", value: "on" },
      { title: "Public Profile", description: "Allow others to view your profile and portfolio.", value: "off" },
      { title: "Analytics Tracking", description: "Help us improve by sharing anonymous usage data.", value: "on" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10">{subheading}</p>
        <div className="space-y-2">
          {items.map((item, i) => {
            const isOn = item.value === "on";
            return (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border" style={{ borderColor: `${primary}10` }}>
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs opacity-50">{item.description}</p>
                </div>
                <div className="shrink-0 ml-4" style={{ color: isOn ? primary : "#9ca3af" }}>
                  {isOn ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
