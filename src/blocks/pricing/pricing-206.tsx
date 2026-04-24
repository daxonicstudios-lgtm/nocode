import type { BlockProps } from "@/blocks/types";
import { Check, Sparkles } from "lucide-react";

const defaultItems = [
  { title: "Lite", description: "$10", label: "per month", value: "2 projects,5GB,Basic support" },
  { title: "Plus", description: "$35", label: "per month", value: "20 projects,100GB,Priority support,Custom domain,Webhooks,Team access" },
  { title: "Max", description: "$70", label: "per month", value: "Unlimited,500GB,24/7 support,Dedicated manager" },
];

export default function Pricing206(props: BlockProps) {
  const { theme, heading = "Supercharge Your Workflow", subheading = "Pick a plan and start building today", buttonText = "Subscribe", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const rec = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`relative rounded-2xl p-8 flex flex-col border ${rec ? "overflow-hidden" : ""}`} style={{ borderColor: rec ? "transparent" : (theme?.accent || "#e5e7eb") }}>
              {rec && (
                <>
                  <div className="absolute inset-0 rounded-2xl animate-pulse" style={{ background: `linear-gradient(135deg, ${theme?.primary || "#6366f1"}, ${theme?.accent || "#ec4899"})`, padding: "2px" }}>
                    <div className="w-full h-full rounded-2xl" style={{ backgroundColor: theme?.background || "#fff" }} />
                  </div>
                  <div className="absolute inset-0 rounded-2xl opacity-20 blur-xl" style={{ background: `linear-gradient(135deg, ${theme?.primary || "#6366f1"}, ${theme?.accent || "#ec4899"})` }} />
                </>
              )}
              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  {rec && <Sparkles className="w-4 h-4" style={{ color: theme?.primary || "#6366f1" }} />}
                </div>
                <p className="text-4xl font-extrabold mb-1" style={{ color: theme?.primary || "#6366f1" }}>{item.description}<span className="text-sm font-normal opacity-50">/{item.label?.replace("per ", "")}</span></p>
                <ul className="space-y-2 my-6 flex-1">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm opacity-80"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#6366f1" }} />{f.trim()}</li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
