import type { BlockProps } from "@/blocks/types";
import { Check, ShieldCheck, Award, Clock } from "lucide-react";

const defaultItems = [
  { title: "Essentials", description: "$16/mo", label: "per month", value: "5 projects,15GB,Community support,Templates" },
  { title: "Professional", description: "$46/mo", label: "per month", value: "30 projects,150GB,Priority support,All templates,Custom code" },
  { title: "Agency", description: "$96/mo", label: "per month", value: "Unlimited projects,1TB,Dedicated support,White-label,Reseller tools,Client portal" },
];

export default function Pricing269(props: BlockProps) {
  const {
    theme,
    heading = "Plans You Can Trust",
    subheading = "30-day money-back guarantee on all plans",
    buttonText = "Start Now",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
        <p className="text-lg opacity-60 mb-6">{subheading}</p>
        <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
          <span className="flex items-center gap-1 text-xs"><ShieldCheck className="w-4 h-4" style={{ color: theme?.primary || "#dc2626" }} /> Verified Secure</span>
          <span className="flex items-center gap-1 text-xs"><Award className="w-4 h-4" style={{ color: theme?.primary || "#dc2626" }} /> Award Winning</span>
          <span className="flex items-center gap-1 text-xs"><Clock className="w-4 h-4" style={{ color: theme?.primary || "#dc2626" }} /> 99.99% Uptime</span>
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl shadow-md p-8 flex flex-col border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-3xl font-extrabold mb-1" style={{ color: theme?.primary || "#dc2626" }}>{item.description}</p>
              <p className="text-xs opacity-40 mb-6">{item.label}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#dc2626" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: theme?.primary || "#dc2626" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
