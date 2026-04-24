import type { BlockProps } from "@/blocks/types";
import { Check, MoveRight } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0", label: "Always free", value: "1 project,Community forum,500MB" },
  { title: "Grow", description: "$18/mo", label: "Most popular", value: "10 projects,Email support,15GB,Custom domain,Analytics" },
  { title: "Pro", description: "$48/mo", label: "For power users", value: "Unlimited projects,Priority support,100GB,White-label,Webhooks,API" },
];

export default function Pricing260(props: BlockProps) {
  const {
    theme,
    heading = "One Platform, Three Plans",
    subheading = "All plans include core features at no extra cost",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16">
      <div className="max-w-4xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      {items.map((item, i) => {
        const features = (item.value || "").split(",").filter(Boolean);
        const bg = i % 2 === 0 ? theme?.background || "#fff" : theme?.primary || "#4f46e5";
        const fg = i % 2 === 0 ? theme?.foreground || "#111" : "#fff";
        return (
          <div key={i} className="w-full" style={{ backgroundColor: bg, color: fg }}>
            <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider opacity-60">{item.label}</span>
                <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
              </div>
              <p className="text-5xl font-black">{item.description}</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 flex-1 md:justify-center">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-1.5 text-sm"><Check className="w-4 h-4 shrink-0" />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shrink-0" style={{ backgroundColor: i % 2 === 0 ? theme?.primary || "#4f46e5" : "#fff", color: i % 2 === 0 ? "#fff" : theme?.primary || "#4f46e5" }}>{buttonText} <MoveRight className="w-4 h-4" /></a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
