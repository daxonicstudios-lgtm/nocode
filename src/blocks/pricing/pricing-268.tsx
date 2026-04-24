import type { BlockProps } from "@/blocks/types";
import { Check, Shield, Lock, Fingerprint, RefreshCw } from "lucide-react";

const defaultItems = [
  { title: "Personal", description: "$9/mo", label: "billed monthly", value: "1 site,5GB,SSL,Basic support" },
  { title: "Business", description: "$39/mo", label: "billed monthly", value: "10 sites,100GB,SSL,Priority support,Backup,Malware scan" },
];

export default function Pricing268(props: BlockProps) {
  const {
    theme,
    heading = "Security-First Pricing",
    subheading = "Every plan comes with our security guarantee",
    buttonText = "Subscribe",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const securityFeatures = [
    { icon: Shield, text: "DDoS Protection" },
    { icon: Lock, text: "End-to-End Encryption" },
    { icon: Fingerprint, text: "Two-Factor Auth" },
    { icon: RefreshCw, text: "Daily Backups" },
  ];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-xl border p-8 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-4xl font-extrabold mb-1" style={{ color: theme?.primary || "#6366f1" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#6366f1" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-sm font-semibold mb-4 opacity-70">Included in all plans:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {securityFeatures.map((sf, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg text-center" style={{ backgroundColor: `${theme?.primary || "#6366f1"}08` }}>
              <sf.icon className="w-6 h-6" style={{ color: theme?.primary || "#6366f1" }} />
              <span className="text-xs font-medium">{sf.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
