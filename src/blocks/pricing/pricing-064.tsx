import type { BlockProps } from "@/blocks/types";
import { Check, X, Crown } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0", label: "no card required", value: "5 Documents:yes,Basic Formatting:yes,Share via Link:yes,Real-time Collab:no,Version History:no,Templates:no,Offline Mode:no,API Access:no" },
  { title: "Personal", description: "$9/mo", label: "billed monthly", value: "50 Documents:yes,Rich Formatting:yes,Share via Link:yes,Real-time Collab:yes,30-day History:yes,50 Templates:yes,Offline Mode:no,API Access:no" },
  { title: "Team", description: "$25/mo", label: "per user / month", value: "Unlimited Docs:yes,Rich Formatting:yes,Advanced Sharing:yes,Real-time Collab:yes,Unlimited History:yes,All Templates:yes,Offline Mode:yes,API Access:yes" },
];

export default function Pricing064(props: BlockProps) {
  const {
    theme,
    heading = "Choose Your Plan",
    subheading = "Free forever with generous limits — upgrade for more power",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60 max-w-lg mx-auto">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isFree = item.description === "$0";
          const isPremium = i === 2;
          return (
            <div key={i} className="rounded-xl p-6 flex flex-col relative" style={{ backgroundColor: isPremium ? theme?.primary || "#6366f1" : theme?.accent || "#f8fafc", color: isPremium ? "#fff" : undefined }}>
              {isPremium && <Crown size={20} className="absolute top-4 right-4 text-yellow-300" />}
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-4xl font-black mb-1">{item.description}</p>
              <p className="text-xs opacity-60 mb-5">{item.label}</p>
              <ul className="flex-1 space-y-2.5 mb-6">
                {features.map((f, j) => {
                  const [name, val] = f.split(":");
                  const on = val?.trim() === "yes";
                  return (
                    <li key={j} className={`flex items-center gap-2 text-sm ${!on ? "opacity-40" : ""}`}>
                      {on ? <Check size={14} className={isPremium ? "text-green-300" : "text-green-500"} /> : <X size={14} />}
                      {name.trim()}
                    </li>
                  );
                })}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: isPremium ? "#fff" : theme?.primary || "#6366f1", color: isPremium ? theme?.primary || "#6366f1" : "#fff" }}>
                {isFree ? "Start Free" : buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
