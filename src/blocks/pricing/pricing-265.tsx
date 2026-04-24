import type { BlockProps } from "@/blocks/types";
import { CircleCheck, CircleX, CircleMinus } from "lucide-react";

const defaultItems = [
  { title: "Individual", description: "$11/mo", label: "per month", value: "yes:Website builder,yes:5 pages,yes:Free SSL,no:E-commerce,no:Members area,na:Webhooks" },
  { title: "Creator", description: "$29/mo", label: "per month", value: "yes:Website builder,yes:50 pages,yes:Free SSL,yes:E-commerce,no:Members area,yes:Webhooks" },
  { title: "Business", description: "$59/mo", label: "per month", value: "yes:Website builder,yes:Unlimited pages,yes:Free SSL,yes:E-commerce,yes:Members area,yes:Webhooks" },
];

export default function Pricing265(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need",
    subheading = "Powerful features in every plan",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const icon = (s: string) => {
    if (s === "yes") return <CircleCheck className="w-5 h-5 shrink-0" style={{ color: theme?.primary || "#22c55e" }} />;
    if (s === "no") return <CircleX className="w-5 h-5 shrink-0 text-gray-300" />;
    return <CircleMinus className="w-5 h-5 shrink-0 text-gray-300" />;
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-lg border p-8 flex flex-col hover:shadow-lg transition-shadow" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-4xl font-black mt-2" style={{ color: theme?.primary || "#22c55e" }}>{item.description}</p>
                <p className="text-xs opacity-50 mt-1">{item.label}</p>
              </div>
              <div className="h-px mb-6" style={{ backgroundColor: `${theme?.foreground || "#000"}15` }} />
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => {
                  const [status, text] = f.includes(":") ? [f.split(":")[0], f.split(":").slice(1).join(":")] : ["na", f];
                  return <li key={j} className="flex items-center gap-3 text-sm">{icon(status)}{text.trim()}</li>;
                })}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#22c55e" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
