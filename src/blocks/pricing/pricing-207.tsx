import type { BlockProps } from "@/blocks/types";
import { Check, Flame } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$15", label: "per month", value: "5 users,10GB,Standard support" },
  { title: "Advanced", description: "$45", label: "per month", value: "25 users,100GB,Priority support,API access,Custom workflows,Audit logs" },
  { title: "Premium", description: "$95", label: "per month", value: "Unlimited users,1TB,24/7 support,SSO,Compliance tools" },
];

export default function Pricing207(props: BlockProps) {
  const { theme, heading = "Find Your Fit", subheading = "Every plan includes core features", buttonText = "Choose Plan", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#ef4444";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const hot = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl p-8 flex flex-col border-2 transition-all duration-300 hover:shadow-lg" style={{ borderColor: hot ? primary : (theme?.accent || "#e5e7eb"), boxShadow: hot ? `0 0 30px ${primary}33, 0 0 60px ${primary}11` : "none" }}>
              <div className="flex items-center gap-2 mb-4">
                {hot && <Flame className="w-5 h-5" style={{ color: primary }} />}
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-4xl font-black mb-1" style={{ color: primary }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: primary }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white transition-transform hover:scale-105" style={{ backgroundColor: primary }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
