import type { BlockProps } from "@/blocks/types";
import { Server, Activity, Database, ShieldCheck } from "lucide-react";

const icons = [Server, Activity, Database, ShieldCheck];

export default function Features308(props: BlockProps) {
  const {
    theme,
    heading = "Platform Capabilities",
    items = [
      { title: "Edge Computing", description: "Process data closer to your users for sub-millisecond response times. Our edge network spans every continent." },
      { title: "Health Monitoring", description: "Continuous uptime checks, latency graphs, and incident history — all accessible from one screen." },
      { title: "Managed Database", description: "Automatic backups, point-in-time recovery, and read replicas with zero operational overhead." },
      { title: "Security Suite", description: "WAF, DDoS protection, and vulnerability scanning are active by default on every deployment." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      {items.map((item, i) => {
        const Icon = icons[i % icons.length];
        const bg = i % 2 === 0 ? (theme?.accent ? `${theme.accent}08` : "#fafafa") : "transparent";
        return (
          <div key={i} className="py-16 px-4" style={{ backgroundColor: bg }}>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: theme?.primary || "#6366f1", color: "#fff" }}>
                <Icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
