import type { BlockProps } from "@/blocks/types";
import { CircleDot } from "lucide-react";

const statusMap: Record<string, { color: string; label: string }> = {
  green: { color: "#22c55e", label: "Operational" },
  yellow: { color: "#f59e0b", label: "Degraded" },
  red: { color: "#ef4444", label: "Outage" },
};

export default function Features342(props: BlockProps) {
  const {
    theme,
    heading = "System Status",
    subheading = "Real-time health of all platform features",
    items = [
      { title: "API Gateway", description: "All endpoints responding within normal latency.", value: "green" },
      { title: "Authentication", description: "Login and SSO services fully operational.", value: "green" },
      { title: "File Storage", description: "Uploads processing with minor delays in EU region.", value: "yellow" },
      { title: "Search Index", description: "Full-text search returning results normally.", value: "green" },
      { title: "Email Service", description: "Transactional emails sending with expected delivery times.", value: "green" },
      { title: "Webhook Delivery", description: "Investigating delayed webhook delivery for some accounts.", value: "red" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10">{subheading}</p>
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: theme?.primary ? `${theme.primary}15` : "#e5e7eb" }}>
          {items.map((item, i) => {
            const status = statusMap[item.value || "green"] || statusMap.green;
            return (
              <div key={i} className="flex items-center justify-between px-5 py-4 border-b last:border-b-0" style={{ borderColor: theme?.primary ? `${theme.primary}08` : "#f3f4f6" }}>
                <div className="flex items-center gap-3">
                  <CircleDot size={16} style={{ color: status.color }} />
                  <div>
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-xs opacity-40">{item.description}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: `${status.color}15`, color: status.color }}>
                  {status.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
