import type { BlockProps } from "@/blocks/types";
import { Check, Shield } from "lucide-react";

const defaultItems = [
  { title: "Essential", description: "$14", label: "per month", value: "2 users,10GB,Shared workspace" },
  { title: "Professional", description: "$42", label: "per month", value: "10 users,100GB,Private workspace,Role management,Version history,Priority support" },
  { title: "Organization", description: "$84", label: "per month", value: "50 users,500GB,SSO,Audit trail,Custom contracts" },
];

export default function Pricing209(props: BlockProps) {
  const { theme, heading = "Pricing Built for Teams", subheading = "Switch plans or cancel anytime", buttonText = "Try Free", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#7c3aed";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const rec = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`relative rounded-2xl p-8 flex flex-col border overflow-hidden ${rec ? "ring-2" : ""}`} style={{ borderColor: theme?.accent || "#e5e7eb", ...(rec ? { ["--tw-ring-color" as string]: primary } : {}) }}>
              {rec && <div className="absolute top-0 left-0 right-0 h-1 animate-pulse" style={{ background: `linear-gradient(90deg, transparent, ${primary}, transparent)` }} />}
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5" style={{ color: primary }} />
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <p className="text-5xl font-black mb-1" style={{ color: primary }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-6 uppercase tracking-wide">{item.label}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm opacity-80"><Check className="w-4 h-4 shrink-0" style={{ color: primary }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className={`block text-center py-3 rounded-xl font-semibold ${rec ? "text-white" : ""}`} style={{ backgroundColor: rec ? primary : "transparent", color: rec ? "#fff" : primary, border: rec ? "none" : `2px solid ${primary}` }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
