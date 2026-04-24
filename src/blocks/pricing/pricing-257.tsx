import type { BlockProps } from "@/blocks/types";
import { Check, ChevronRight } from "lucide-react";

const defaultItems = [
  { title: "Personal", description: "$7/mo", label: "Best for side projects", value: "1 site,2GB storage,SSL included" },
  { title: "Professional", description: "$24/mo", label: "Best for freelancers", value: "10 sites,30GB storage,Custom domains,Analytics dashboard" },
  { title: "Enterprise", description: "$69/mo", label: "Best for agencies", value: "Unlimited sites,300GB storage,White-label,Dedicated support,SLA" },
];

export default function Pricing257(props: BlockProps) {
  const {
    theme,
    heading = "Plans for Every Stage",
    subheading = "Start free, scale when ready",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const bgColors = [theme?.background || "#fff", theme?.primary || "#6366f1", theme?.accent || "#f1f5f9"];
  const fgColors = [theme?.foreground || "#1e293b", "#fff", theme?.foreground || "#1e293b"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20">
      <div className="max-w-4xl mx-auto text-center mb-14 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
        <p className="opacity-60 text-lg">{subheading}</p>
      </div>
      {items.map((item, i) => {
        const features = (item.value || "").split(",").filter(Boolean);
        return (
          <div key={i} className="w-full py-10 px-4" style={{ backgroundColor: bgColors[i % 3], color: fgColors[i % 3] }}>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm opacity-70">{item.label}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-3xl font-extrabold">{item.description}</p>
              </div>
              <div className="md:col-span-5">
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-1 text-sm"><Check className="w-3.5 h-3.5" />{f.trim()}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <a href={buttonUrl} className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg font-medium text-sm border-2 border-current">{buttonText} <ChevronRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
