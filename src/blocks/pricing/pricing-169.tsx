import type { BlockProps } from "@/blocks/types";
import { CircleCheck, CircleMinus } from "lucide-react";

const allFeatures = ["Storage", "Bandwidth", "Users", "Support", "Backups", "API"];

const defaultItems = [
  { title: "Lite", description: "$10/mo", label: "per month", value: "5GB,50GB,1,Email,Weekly,-" },
  { title: "Standard", description: "$30/mo", label: "per month", value: "50GB,500GB,10,Chat,Daily,Basic" },
  { title: "Enterprise", description: "$80/mo", label: "per month", value: "Unlimited,Unlimited,Unlimited,Phone 24/7,Real-time,Full" },
];

export default function Pricing169(props: BlockProps) {
  const { theme, heading = "Transparent Feature Grid", subheading = "Know exactly what you get", buttonText = "Subscribe", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const vals = (item.value || "").split(",");
          return (
            <div key={i} className="rounded-xl border p-6 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="text-center mb-5">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-3xl font-black my-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
                <p className="text-xs opacity-50">{item.label}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 flex-1 mb-6">
                {allFeatures.map((f, j) => {
                  const v = vals[j]?.trim() || "-";
                  const available = v !== "-";
                  return (
                    <div key={j} className="rounded-lg p-2 text-center" style={{ backgroundColor: theme?.accent || "#f8fafc" }}>
                      {available ? <CircleCheck className="w-4 h-4 mx-auto mb-1" style={{ color: theme?.primary || "#22c55e" }} /> : <CircleMinus className="w-4 h-4 mx-auto mb-1 opacity-30" />}
                      <p className="text-[10px] opacity-60">{f}</p>
                      <p className={`text-xs font-semibold ${available ? "" : "opacity-30"}`}>{v}</p>
                    </div>
                  );
                })}
              </div>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
