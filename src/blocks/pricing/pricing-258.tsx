import type { BlockProps } from "@/blocks/types";
import { Check, Sparkles } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$14/mo", label: "Individuals", value: "3 projects,10GB,Email support,Basic templates" },
  { title: "Pro", description: "$42/mo", label: "Professionals", value: "20 projects,100GB,Live chat,Premium templates,Custom branding" },
  { title: "Business", description: "$99/mo", label: "Organizations", value: "Unlimited projects,1TB,Phone support,All templates,Full branding,Audit logs" },
];

export default function Pricing258(props: BlockProps) {
  const {
    theme,
    heading = "Simple, Powerful Pricing",
    subheading = "Switch plans or cancel anytime — no lock-in",
    buttonText = "Try It Free",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="space-y-0">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isDark = i % 2 === 1;
          return (
            <div key={i} className="w-full py-14 px-4" style={{ backgroundColor: isDark ? theme?.primary || "#1e293b" : "transparent", color: isDark ? "#fff" : theme?.foreground }}>
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-xs opacity-60">{item.label}</p>
                </div>
                <div className="md:w-1/4">
                  <p className="text-5xl font-black">{item.description}</p>
                </div>
                <div className="md:w-1/3">
                  <ul className="grid grid-cols-2 gap-2">
                    {features.map((f, j) => (
                      <li key={j} className="flex items-center gap-1.5 text-sm"><Check className="w-3.5 h-3.5 shrink-0" />{f.trim()}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/6">
                  <a href={buttonUrl} className="block text-center px-6 py-3 rounded-lg font-semibold" style={{ backgroundColor: isDark ? "#fff" : theme?.primary || "#1e293b", color: isDark ? theme?.primary || "#1e293b" : "#fff" }}>{buttonText}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
