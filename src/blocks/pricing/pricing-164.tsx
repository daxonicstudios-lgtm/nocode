import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const defaultItems = [
  { title: "Hobby", description: "$0", label: "#64748b", value: "1 deployment,100GB bandwidth,Community" },
  { title: "Pro", description: "$20/mo", label: "#2563eb", value: "10 deployments,1TB bandwidth,Email support,Preview URLs" },
  { title: "Enterprise", description: "$99/mo", label: "#7c3aed", value: "Unlimited deployments,Unlimited bandwidth,SLA,SAML,Dedicated infra" },
];

export default function Pricing164(props: BlockProps) {
  const { theme, heading = "Deploy With Confidence", subheading = "From hobby project to enterprise scale", buttonText = "Start Building", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-2xl border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const color = item.label || "#2563eb";
          return (
            <div key={i} className="flex flex-col border-b md:border-b-0 md:border-r last:border-0" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="h-1.5" style={{ backgroundColor: color }} />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg" style={{ color }}>{item.title}</h3>
                <p className="text-3xl font-black my-2">{item.description}</p>
                <p className="text-xs opacity-50 mb-5">per month</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color }} />{f.trim()}</li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium" style={{ backgroundColor: color, color: "#fff" }}>{buttonText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
