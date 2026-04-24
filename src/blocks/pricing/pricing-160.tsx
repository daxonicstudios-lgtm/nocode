import type { BlockProps } from "@/blocks/types";
import { Zap, Check } from "lucide-react";

const defaultItems = [
  { title: "Essential", description: "$13/mo", label: "Best for starters", value: "Core features,2GB storage,Email support" },
  { title: "Professional", description: "$33/mo", label: "Most chosen", value: "All Essential features,20GB storage,Priority support,Automations" },
  { title: "Ultimate", description: "$73/mo", label: "Maximum power", value: "All Professional features,Unlimited storage,24/7 support,Custom API,Dedicated server" },
];

export default function Pricing160(props: BlockProps) {
  const { theme, heading = "Power Up Your Workflow", subheading = "Each plan builds on the last", buttonText = "Upgrade", buttonUrl = "#", items = defaultItems } = props;
  const sizes = ["text-2xl", "text-3xl", "text-4xl"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-end gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="flex-1 w-full rounded-2xl overflow-hidden border flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="p-5 text-center" style={{ backgroundColor: i === 2 ? (theme?.primary || "#2563eb") : "transparent", color: i === 2 ? "#fff" : undefined }}>
                <Zap className="w-5 h-5 mx-auto mb-1" />
                <h3 className="font-bold">{item.title}</h3>
                <p className={`${sizes[i]} font-black my-1`}>{item.description}</p>
                <p className="text-xs opacity-70">{item.label}</p>
              </div>
              <div className={`p-5 flex flex-col flex-1 ${i === 2 ? "" : ""}`}>
                <ul className="space-y-1.5 flex-1 mb-5">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#22c55e" }} />{f.trim()}</li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
