import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const defaultItems = [
  { title: "Projects", description: "3", label: "Unlimited" },
  { title: "Team members", description: "1", label: "10" },
  { title: "Storage", description: "1GB", label: "100GB" },
  { title: "Custom domain", description: "no", label: "yes" },
  { title: "Analytics dashboard", description: "no", label: "yes" },
  { title: "Priority support", description: "no", label: "yes" },
];

export default function Pricing022(props: BlockProps) {
  const {
    theme,
    heading = "Free vs Pro",
    subheading = "Everything you need to know",
    buttonText = "Upgrade to Pro",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto rounded-xl border overflow-hidden" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
        <div className="grid grid-cols-3 p-4 font-bold text-sm" style={{ backgroundColor: theme?.accent || "#f9fafb" }}>
          <span>Feature</span>
          <span className="text-center">Free — $0</span>
          <span className="text-center" style={{ color: theme?.primary || "#2563eb" }}>Pro — $19/mo</span>
        </div>
        {items.slice(0, 6).map((item, i) => (
          <div key={i} className="grid grid-cols-3 p-4 text-sm border-t" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
            <span className="font-medium">{item.title}</span>
            <span className="text-center">
              {item.description === "yes" ? <Check className="w-4 h-4 mx-auto" style={{ color: theme?.primary || "#2563eb" }} /> : item.description === "no" ? <X className="w-4 h-4 mx-auto opacity-30" /> : item.description}
            </span>
            <span className="text-center">
              {item.label === "yes" ? <Check className="w-4 h-4 mx-auto" style={{ color: theme?.primary || "#2563eb" }} /> : item.label === "no" ? <X className="w-4 h-4 mx-auto opacity-30" /> : item.label}
            </span>
          </div>
        ))}
        <div className="p-4 text-center border-t" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
          <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
