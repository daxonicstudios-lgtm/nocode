import type { BlockProps } from "@/blocks/types";
import { Check, X, ArrowRight } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0", label: "always free", value: "2 Projects:yes,1GB Storage:yes,Basic Themes:yes,Watermark:yes,Email Support:no,Custom Domain:no,Export:no" },
  { title: "Plus", description: "$19/mo", label: "cancel anytime", value: "Unlimited Projects:yes,20GB Storage:yes,All Themes:yes,No Watermark:yes,Email Support:yes,Custom Domain:yes,Export:yes" },
];

export default function Pricing063(props: BlockProps) {
  const {
    theme,
    heading = "Free vs Plus",
    subheading = "See what you unlock when you upgrade",
    buttonText = "Upgrade Now",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div />
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-3xl font-black" style={{ color: i > 0 ? theme?.primary || "#8b5cf6" : undefined }}>{item.description}</p>
              <p className="text-xs opacity-50">{item.label}</p>
            </div>
          ))}
        </div>
        {(() => {
          const freeFeatures = (items[0]?.value || "").split(",").filter(Boolean);
          const paidFeatures = (items[1]?.value || "").split(",").filter(Boolean);
          const allNames = freeFeatures.map(f => f.split(":")[0].trim());
          return (
            <div className="space-y-0">
              {allNames.map((name, j) => {
                const freeOn = freeFeatures[j]?.split(":")[1]?.trim() === "yes";
                const paidOn = paidFeatures[j]?.split(":")[1]?.trim() === "yes";
                return (
                  <div key={j} className="grid grid-cols-3 gap-4 py-3 border-b text-sm" style={{ borderColor: theme?.accent || "#f3f4f6" }}>
                    <span className="font-medium">{name}</span>
                    <span className="text-center">{freeOn ? <Check size={16} className="mx-auto text-green-500" /> : <X size={16} className="mx-auto text-red-300" />}</span>
                    <span className="text-center">{paidOn ? <Check size={16} className="mx-auto text-green-500" /> : <X size={16} className="mx-auto text-red-300" />}</span>
                  </div>
                );
              })}
            </div>
          );
        })()}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div />
          <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-sm border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>Start Free</a>
          <a href={buttonUrl} className="flex items-center justify-center gap-1 py-2.5 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: theme?.primary || "#8b5cf6" }}>{buttonText} <ArrowRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}
