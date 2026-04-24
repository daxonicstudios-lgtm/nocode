import type { BlockProps } from "@/blocks/types";
import { BarChart3, Globe, Shield, Zap } from "lucide-react";

export default function Cta106(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need in One Platform",
    buttonText = "Start Now",
    buttonUrl = "#",
    items = [
      { title: "Analytics", icon: "chart" },
      { title: "Global CDN", icon: "globe" },
      { title: "Security", icon: "shield" },
      { title: "Speed", icon: "zap" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    chart: <BarChart3 className="w-6 h-6" />,
    globe: <Globe className="w-6 h-6" />,
    shield: <Shield className="w-6 h-6" />,
    zap: <Zap className="w-6 h-6" />,
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-black/5">
              <div style={{ color: theme?.primary || "#2563eb" }}>{iconMap[item.icon || "zap"] || <Zap className="w-6 h-6" />}</div>
              <span className="text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
