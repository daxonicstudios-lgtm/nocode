import type { BlockProps } from "@/blocks/types";
import { Check, Award } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$11", label: "per month", value: "3 seats,15GB,Email support" },
  { title: "Business", description: "$39", label: "per month", value: "15 seats,150GB,Chat support,Advanced reports,Integrations,Custom branding" },
  { title: "Enterprise", description: "$99", label: "per month", value: "Unlimited seats,2TB,Phone support,SLA,Onboarding" },
];

export default function Pricing208(props: BlockProps) {
  const { theme, heading = "Scale Without Limits", subheading = "30-day money-back guarantee on all plans", buttonText = "Start Now", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#0ea5e9";
  const accent = theme?.accent || "#f97316";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const best = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-3xl p-[2px] flex flex-col" style={{ background: best ? `linear-gradient(135deg, ${primary}, ${accent})` : (theme?.accent || "#e5e7eb") }}>
              <div className="rounded-3xl p-8 flex flex-col flex-1 h-full" style={{ backgroundColor: theme?.background || "#fff" }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  {best && <Award className="w-5 h-5" style={{ color: accent }} />}
                </div>
                <p className="text-4xl font-extrabold mb-1" style={{ color: primary }}>{item.description}<span className="text-base font-normal opacity-40">/{item.label?.replace("per ", "")}</span></p>
                <ul className="space-y-2 my-6 flex-1">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm opacity-80"><Check className="w-4 h-4 shrink-0" style={{ color: primary }} />{f.trim()}</li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ background: best ? `linear-gradient(135deg, ${primary}, ${accent})` : primary }}>{buttonText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
