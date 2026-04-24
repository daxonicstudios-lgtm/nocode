import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0", label: "forever", value: "3 projects,1GB,Community support" },
  { title: "Pro", description: "$19/mo", label: "billed monthly", value: "Unlimited projects,50GB,Priority support,Analytics" },
  { title: "Team", description: "$49/mo", label: "per team", value: "Everything in Pro,Team billing,Admin panel,SSO,Audit logs" },
];

export default function Pricing212(props: BlockProps) {
  const { theme, heading = "Compare Plans", subheading = "Find the right fit for your workflow", buttonText = "Get Started", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#8b5cf6";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto divide-y" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isTop = i === 1;
          return (
            <div key={i} className={`flex flex-col md:flex-row md:items-center gap-4 py-6 px-4 ${isTop ? "rounded-lg" : ""}`} style={{ backgroundColor: isTop ? `${primary}08` : "transparent" }}>
              <div className="md:w-40 shrink-0">
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <p className="md:w-32 shrink-0 text-3xl font-extrabold" style={{ color: primary }}>{item.description}</p>
              <div className="flex items-center gap-4 flex-1 flex-wrap">
                {features.map((f, j) => (
                  <span key={j} className="inline-flex items-center gap-1 text-sm"><Check className="w-3.5 h-3.5" style={{ color: primary }} />{f.trim()}</span>
                ))}
              </div>
              <a href={buttonUrl} className="shrink-0 px-6 py-2.5 rounded-lg font-medium text-sm text-white" style={{ backgroundColor: primary }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
