import type { BlockProps } from "@/blocks/types";
import { Bell, MessageSquare, Mail, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const notifTypes = [
  { icon: Bell, color: "#6366f1" },
  { icon: MessageSquare, color: "#3b82f6" },
  { icon: Mail, color: "#22c55e" },
  { icon: AlertTriangle, color: "#f59e0b" },
  { icon: CheckCircle2, color: "#10b981" },
  { icon: Clock, color: "#8b5cf6" },
];

export default function Features348(props: BlockProps) {
  const {
    theme,
    heading = "Smart Notifications",
    subheading = "Stay informed with contextual alerts",
    items = [
      { title: "Push Alerts", description: "Browser and mobile push notifications for urgent updates.", value: "3" },
      { title: "In-App Messages", description: "Contextual messages that appear right where you need them.", value: "12" },
      { title: "Email Digests", description: "Daily or weekly summaries delivered to your inbox.", value: "1" },
      { title: "Warning System", description: "Proactive alerts when metrics approach critical thresholds.", value: "2" },
      { title: "Success Updates", description: "Celebrate wins with automated milestone notifications.", value: "5" },
      { title: "Scheduled Reminders", description: "Set custom reminders for deadlines and follow-ups.", value: "8" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const nt = notifTypes[i % notifTypes.length];
            const Icon = nt.icon;
            const count = item.value || "0";
            return (
              <div key={i} className="relative rounded-xl p-5 text-left border" style={{ borderColor: `${nt.color}15` }}>
                {Number(count) > 0 && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: nt.color }}>
                    {count}
                  </span>
                )}
                <Icon size={22} style={{ color: nt.color }} className="mb-3" />
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
