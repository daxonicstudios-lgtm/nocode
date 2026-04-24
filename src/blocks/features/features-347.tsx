import type { BlockProps } from "@/blocks/types";
import { ChevronRight, Home, Settings, Database, Shield } from "lucide-react";

const icons = [Home, Settings, Database, Shield];

export default function Features347(props: BlockProps) {
  const {
    theme,
    heading = "Feature Hierarchy",
    subheading = "Organized capabilities in a clear structure",
    items = [
      { title: "Platform Core", description: "The foundational layer that powers everything else.", label: "Platform > Core" },
      { title: "Configuration", description: "Flexible settings for teams, roles, and permissions.", label: "Platform > Settings" },
      { title: "Data Layer", description: "Managed database with real-time sync and backups.", label: "Platform > Data" },
      { title: "Security Layer", description: "Authentication, authorization, and encryption services.", label: "Platform > Security" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10">{subheading}</p>
        <div className="space-y-3">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const crumbs = (item.label || "").split(" > ");
            return (
              <div key={i} className="rounded-xl p-5 border" style={{ borderColor: `${primary}10` }}>
                <div className="flex items-center gap-1 text-xs opacity-40 mb-2">
                  {crumbs.map((crumb, j) => (
                    <span key={j} className="flex items-center gap-1">
                      {j > 0 && <ChevronRight size={10} />}
                      <span>{crumb}</span>
                    </span>
                  ))}
                </div>
                <div className="flex items-start gap-3">
                  <Icon size={18} style={{ color: primary }} className="mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
