import type { BlockProps } from "@/blocks/types";
import { Check, Crown } from "lucide-react";

const defaultItems = [
  { title: "Hobby", description: "$0", label: "free", value: "1 site,500MB,Basic templates" },
  { title: "Professional", description: "$19", label: "per month", value: "10 sites,25GB,All templates,Custom domains,SSL certificates,Analytics dashboard" },
  { title: "Agency", description: "$49", label: "per month", value: "50 sites,100GB,White label,Client billing,Team seats" },
];

export default function Pricing204(props: BlockProps) {
  const { theme, heading = "Simple Pricing for Everyone", subheading = "All plans include a 14-day free trial", buttonText = "Start Trial", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-3">{heading}</h2>
        <p className="text-lg opacity-60 max-w-xl mx-auto">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-center">
        {items.map((item, i) => {
          const center = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`w-full md:w-80 rounded-3xl p-8 flex flex-col ${center ? "md:scale-110 shadow-2xl border-2" : "border shadow-sm"}`} style={{ borderColor: center ? (theme?.primary || "#8b5cf6") : (theme?.accent || "#e5e7eb") }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                {center && <Crown className="w-5 h-5" style={{ color: theme?.primary || "#8b5cf6" }} />}
              </div>
              <p className="text-5xl font-black mb-1" style={{ color: theme?.primary || "#8b5cf6" }}>{item.description}</p>
              <p className="text-xs uppercase tracking-widest opacity-50 mb-8">{item.label}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm opacity-80"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#8b5cf6" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-full font-semibold text-white transition-transform hover:scale-105" style={{ backgroundColor: theme?.primary || "#8b5cf6" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
