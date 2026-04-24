import type { BlockProps } from "@/blocks/types";
import { Award, Check } from "lucide-react";

const defaultItems = [
  { title: "Hobby", description: "$7/mo", label: "per month", value: "2 sites,1GB storage,Basic SSL" },
  { title: "Startup", description: "$22/mo", label: "per month", value: "10 sites,20GB storage,Wildcard SSL,CDN" },
  { title: "Scale", description: "$49/mo", label: "per month", value: "50 sites,100GB storage,DDoS protection,Custom SSL,API" },
];

export default function Pricing155(props: BlockProps) {
  const { theme, heading = "Pricing That Works For You", subheading = "Backed by our iron-clad refund policy", buttonText = "Try It Free", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-xl border p-6 flex flex-col text-center" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-4xl font-black my-3" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-5">{item.label}</p>
              <ul className="space-y-2 text-left flex-1 mb-6">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#22c55e" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
      <div className="max-w-md mx-auto mt-10 flex items-center justify-center gap-3 rounded-xl p-4" style={{ backgroundColor: theme?.accent || "#fffbeb" }}>
        <Award className="w-8 h-8 shrink-0" style={{ color: theme?.primary || "#f59e0b" }} />
        <p className="text-sm"><strong>Satisfaction Guaranteed:</strong> If you&apos;re not happy within 45 days, we&apos;ll refund every cent.</p>
      </div>
    </section>
  );
}
