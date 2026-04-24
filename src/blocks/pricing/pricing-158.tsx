import type { BlockProps } from "@/blocks/types";
import { Star, Check } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$14/mo", label: "1 workspace", value: "Task management,Calendar view,Mobile app" },
  { title: "Team", description: "$34/mo", label: "5 workspaces", value: "Everything in Starter,Gantt charts,Time tracking,Guest access" },
  { title: "Organization", description: "$64/mo", label: "Unlimited workspaces", value: "Everything in Team,Audit log,SAML SSO,Admin controls,Custom branding" },
];

export default function Pricing158(props: BlockProps) {
  const { theme, heading = "Find Your Perfect Fit", subheading = "Ascending plans for every stage of growth", buttonText = "Start Now", buttonUrl = "#", items = defaultItems } = props;
  const paddings = ["py-6", "py-8", "py-10"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-end gap-4">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`flex-1 w-full rounded-xl px-6 ${paddings[i]} flex flex-col`} style={{ backgroundColor: theme?.accent || "#f8fafc", border: `1px solid ${theme?.accent || "#e2e8f0"}` }}>
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: i + 1 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-current" style={{ color: theme?.primary || "#f59e0b" }} />
                ))}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-xs opacity-50 mb-2">{item.label}</p>
              <p className="text-3xl font-extrabold mb-4" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <ul className="space-y-1.5 flex-1 mb-5">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#22c55e" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
