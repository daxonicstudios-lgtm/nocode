import type { BlockProps } from "@/blocks/types";
import { Cloud, Shield, Cpu, HardDrive, Headphones, Rocket } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$16/mo", label: "per month", value: "Hosting,Security,1 vCPU" },
  { title: "Advanced", description: "$42/mo", label: "per month", value: "Hosting,Security,4 vCPU,50GB SSD,Support" },
  { title: "Premium", description: "$89/mo", label: "per month", value: "Hosting,Security,8 vCPU,200GB SSD,Support,Auto-scaling" },
];

const featureIcons: Record<string, React.ReactNode> = {
  Hosting: <Cloud className="w-5 h-5" />,
  Security: <Shield className="w-5 h-5" />,
  "1 vCPU": <Cpu className="w-5 h-5" />,
  "4 vCPU": <Cpu className="w-5 h-5" />,
  "8 vCPU": <Cpu className="w-5 h-5" />,
  "50GB SSD": <HardDrive className="w-5 h-5" />,
  "200GB SSD": <HardDrive className="w-5 h-5" />,
  Support: <Headphones className="w-5 h-5" />,
  "Auto-scaling": <Rocket className="w-5 h-5" />,
};

export default function Pricing168(props: BlockProps) {
  const { theme, heading = "Cloud Hosting Plans", subheading = "Performance meets simplicity", buttonText = "Deploy Now", buttonUrl = "#", items = defaultItems } = props;

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
            <div key={i} className="rounded-2xl border p-6 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-3xl font-black mb-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-5">{item.label}</p>
              <div className="grid grid-cols-2 gap-2 flex-1 mb-6">
                {features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 rounded-lg p-2.5" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                    <span style={{ color: theme?.primary || "#2563eb" }}>{featureIcons[f.trim()] || <Cloud className="w-5 h-5" />}</span>
                    <span className="text-xs font-medium">{f.trim()}</span>
                  </div>
                ))}
              </div>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
