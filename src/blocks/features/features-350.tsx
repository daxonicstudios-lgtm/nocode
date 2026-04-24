import type { BlockProps } from "@/blocks/types";
import { Globe, Smartphone, Monitor, TabletSmartphone, CheckCircle2, Minus } from "lucide-react";

const platforms = [
  { icon: Globe, label: "Web" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Monitor, label: "Desktop" },
  { icon: TabletSmartphone, label: "Tablet" },
];

export default function Features350(props: BlockProps) {
  const {
    theme,
    heading = "Available Everywhere",
    subheading = "Features that work across all your devices",
    items = [
      { title: "Real-Time Sync", description: "Changes propagate instantly across all connected devices.", value: "web,mobile,desktop,tablet" },
      { title: "Offline Mode", description: "Keep working without internet — changes sync when you reconnect.", value: "mobile,desktop" },
      { title: "Push Notifications", description: "Stay updated with native push alerts on every platform.", value: "web,mobile,desktop,tablet" },
      { title: "Biometric Login", description: "Sign in with Face ID, fingerprint, or Windows Hello.", value: "mobile,desktop" },
      { title: "Drag & Drop Editor", description: "Visual editing with full drag and drop support.", value: "web,desktop,tablet" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10">{subheading}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: `${primary}15` }}>
                <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                {platforms.map((p, i) => (
                  <th key={i} className="text-center py-3 px-3">
                    <div className="flex flex-col items-center gap-1">
                      <p.icon size={18} style={{ color: primary }} />
                      <span className="text-xs opacity-50">{p.label}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => {
                const available = (item.value || "").split(",").map((s) => s.trim().toLowerCase());
                return (
                  <tr key={i} className="border-b" style={{ borderColor: `${primary}08` }}>
                    <td className="py-4 pr-4">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-xs opacity-40">{item.description}</p>
                    </td>
                    {platforms.map((p, j) => (
                      <td key={j} className="text-center py-4 px-3">
                        {available.includes(p.label.toLowerCase()) ? (
                          <CheckCircle2 size={18} className="mx-auto text-green-500" />
                        ) : (
                          <Minus size={18} className="mx-auto opacity-20" />
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
