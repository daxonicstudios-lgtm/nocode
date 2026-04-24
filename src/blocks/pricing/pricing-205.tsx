import type { BlockProps } from "@/blocks/types";
import { Check, ArrowRight } from "lucide-react";

const defaultItems = [
  { title: "Personal", description: "$8", label: "per month", value: "1 user,5GB,Basic features,Email support" },
  { title: "Team", description: "$32", label: "per month", value: "10 users,50GB,All features,Priority support,Collaboration tools,Admin panel" },
  { title: "Corporate", description: "$89", label: "per month", value: "Unlimited users,1TB,Enterprise features,Dedicated support,SSO" },
];

export default function Pricing205(props: BlockProps) {
  const { theme, heading = "Choose Your Plan", subheading = "Flexible pricing that adapts to your needs", buttonText = "Get Started", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
        {items.map((item, i) => {
          const mid = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`p-8 flex flex-col ${mid ? "md:rounded-2xl md:shadow-2xl md:-my-4 md:z-10 border-2" : "md:first:rounded-l-2xl md:last:rounded-r-2xl border"}`} style={{ borderColor: mid ? (theme?.primary || "#059669") : (theme?.accent || "#e5e7eb"), backgroundColor: mid ? (theme?.primary || "#059669") : "transparent" }}>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${mid ? "text-white/80" : "opacity-50"}`}>{item.title}</h3>
              <div className="mb-6">
                <span className={`text-5xl font-black ${mid ? "text-white" : ""}`} style={{ color: mid ? "#fff" : (theme?.primary || "#059669") }}>{item.description}</span>
                <span className={`text-sm ml-1 ${mid ? "text-white/60" : "opacity-50"}`}>/{item.label?.replace("per ", "")}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm ${mid ? "text-white/90" : "opacity-70"}`}><Check className="w-4 h-4 shrink-0" />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className={`flex items-center justify-center gap-2 py-3 rounded-lg font-semibold ${mid ? "bg-white" : "text-white"}`} style={{ backgroundColor: mid ? "#fff" : (theme?.primary || "#059669"), color: mid ? (theme?.primary || "#059669") : "#fff" }}>{buttonText} <ArrowRight className="w-4 h-4" /></a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
