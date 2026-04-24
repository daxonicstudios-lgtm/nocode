import type { BlockProps } from "@/blocks/types";
import { Check, TrendingUp } from "lucide-react";

const defaultItems = [
  { title: "Solo", description: "$7", label: "per month", value: "1 user,2GB,Core features" },
  { title: "Team", description: "$28", label: "per month", value: "10 users,50GB,All features,Collaboration,Analytics,Integrations" },
  { title: "Business", description: "$69", label: "per month", value: "Unlimited,200GB,Admin tools,SSO,Dedicated support" },
];

export default function Pricing210(props: BlockProps) {
  const { theme, heading = "Invest in Growth", subheading = "All plans include a 7-day free trial", buttonText = "Start Trial", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#10b981";
  const accent = theme?.accent || "#34d399";

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
            <div key={i} className={`rounded-2xl p-8 flex flex-col border-2 relative ${hot ? "shadow-xl" : ""}`} style={{ borderColor: hot ? accent : (theme?.accent || "#e5e7eb") }}>
              {hot && (
                <>
                  <div className="absolute -inset-[1px] rounded-2xl opacity-30 blur-md" style={{ backgroundColor: accent }} />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs font-bold px-4 py-1 rounded-full text-white" style={{ backgroundColor: primary }}><TrendingUp className="w-3 h-3" /> Best Value</div>
                </>
              )}
              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-4xl font-extrabold mb-1" style={{ color: primary }}>{item.description}<span className="text-sm font-normal opacity-50">/{item.label?.replace("per ", "")}</span></p>
                <ul className="space-y-2 my-6 flex-1">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm opacity-80"><Check className="w-4 h-4 shrink-0" style={{ color: primary }} />{f.trim()}</li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: primary }}>{buttonText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
