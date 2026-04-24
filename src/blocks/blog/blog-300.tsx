import type { BlockProps } from "@/blocks/types";
import { Terminal, ChevronRight, Wifi } from "lucide-react";

const DEFAULTS = [
  { title: "SYSTEM_UPDATE: Platform v4.0 Deployed", description: "Major release includes AI-powered layout engine, real-time collaboration, and edge rendering. All systems nominal.", label: "PRIORITY_HIGH", value: "00:42:17" },
  { title: "DATA_STREAM: User Growth Analytics", description: "Exponential trajectory confirmed. Growth rate exceeding all projections by factor of 2.3x.", label: "ANALYTICS", value: "01:15:33" },
  { title: "SIGNAL_BOOST: Developer Community Pulse", description: "Network activity surge detected. New builder registrations up 340 percent month over month.", label: "COMMUNITY", value: "02:08:51" },
  { title: "PATCH_NOTES: Security Hardening Complete", description: "All endpoints secured. Row-level security policies updated. Zero vulnerabilities in latest audit.", label: "SECURITY", value: "03:22:04" },
];

export default function Blog300(props: BlockProps) {
  const { theme, heading = "// FEED", items = DEFAULTS } = props;
  const glow = theme?.primary ?? "#00ffcc";

  return (
    <section style={{ backgroundColor: theme?.background ?? "#050505", color: theme?.foreground ?? "#b0b0b0" }} className="px-4 py-16 font-mono">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-5 h-5" style={{ color: glow }} />
          <h2 className="text-2xl font-bold tracking-wider" style={{ color: glow }}>{heading}</h2>
          <div className="flex-1" />
          <Wifi className="w-4 h-4 animate-pulse" style={{ color: glow, opacity: 0.5 }} />
          <span className="text-xs opacity-30">LIVE</span>
        </div>
        <div className="space-y-3">
          {items.map((post, i) => (
            <article key={i} className="rounded-lg p-4 cursor-pointer group border transition-all" style={{ borderColor: `${glow}22`, backgroundColor: `${glow}05` }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: glow }} />
                <span className="text-xs tracking-wider" style={{ color: glow }}>{String(post.label ?? "")}</span>
                <span className="text-xs opacity-20 ml-auto">[{String(post.value ?? "")}]</span>
              </div>
              <h3 className="font-bold text-sm group-hover:pl-1 transition-all" style={{ color: theme?.foreground ?? "#e0e0e0" }}>{post.title}</h3>
              <p className="text-xs opacity-40 mt-1 leading-relaxed">{post.description}</p>
              <div className="flex items-center gap-1 mt-2 text-xs opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: glow }}>
                <span>ACCESS</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 pt-4 border-t text-xs opacity-20 text-center" style={{ borderColor: `${glow}15` }}>
          END_OF_TRANSMISSION
        </div>
      </div>
    </section>
  );
}
