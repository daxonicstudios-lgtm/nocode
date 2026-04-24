import type { BlockProps } from "@/blocks/types";
import { Check, Star } from "lucide-react";

const defaultItems = [
  { title: "Hobby", description: "$0/mo", label: "Free forever", value: "1 project,1GB storage,Community support" },
  { title: "Growth", description: "$25/mo", label: "per month", value: "10 projects,25GB storage,Live chat,Custom domain,SSL certificates" },
  { title: "Business", description: "$79/mo", label: "per month", value: "Unlimited projects,200GB storage,Phone support,White-label,Team collaboration" },
];

export default function Pricing252(props: BlockProps) {
  const {
    theme,
    heading = "Plans That Fit Your Budget",
    subheading = "No hidden fees, cancel anytime",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isBest = i === 1;
          return (
            <div key={i} className={`relative rounded-2xl p-8 flex flex-col ${isBest ? "shadow-2xl scale-105" : "shadow-md"}`} style={{ backgroundColor: isBest ? theme?.primary || "#2563eb" : theme?.background || "#fff", color: isBest ? "#fff" : theme?.foreground }}>
              {isBest && (
                <div className="absolute -top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-black">
                  <Star className="w-3 h-3" /> BEST VALUE
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-4xl font-extrabold mb-1">{item.description}</p>
              <p className="text-sm opacity-70 mb-6">{item.label}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className={`block text-center py-3 rounded-lg font-semibold ${isBest ? "bg-white" : "text-white"}`} style={{ backgroundColor: isBest ? "#fff" : theme?.primary || "#2563eb", color: isBest ? theme?.primary || "#2563eb" : "#fff" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
