import type { BlockProps } from "@/blocks/types";
import { Database, Globe, Lock, Mail, BarChart3, Users } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$14/mo", label: "per month", value: "Database,Email,Security" },
  { title: "Pro", description: "$39/mo", label: "per month", value: "Database,Email,Security,Analytics,Global CDN,Team" },
];

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-4 h-4" />,
  Email: <Mail className="w-4 h-4" />,
  Security: <Lock className="w-4 h-4" />,
  Analytics: <BarChart3 className="w-4 h-4" />,
  "Global CDN": <Globe className="w-4 h-4" />,
  Team: <Users className="w-4 h-4" />,
};

export default function Pricing166(props: BlockProps) {
  const { theme, heading = "Everything You Need", subheading = "Feature-packed plans at honest prices", buttonText = "Start Free", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-xl border p-6 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-3xl font-black my-2" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-5">{item.label}</p>
              <div className="grid grid-cols-3 gap-3 mb-6 flex-1">
                {features.map((f, j) => (
                  <div key={j} className="flex flex-col items-center gap-1 rounded-lg p-3 text-center" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                    <span style={{ color: theme?.primary || "#2563eb" }}>{iconMap[f.trim()] || <Globe className="w-4 h-4" />}</span>
                    <span className="text-xs font-medium">{f.trim()}</span>
                  </div>
                ))}
              </div>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
