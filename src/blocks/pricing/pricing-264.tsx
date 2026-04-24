import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$15/mo", label: "Basic essentials", value: "yes:5 Users,yes:10GB Storage,yes:Email Support,no:Phone Support,no:Dedicated Manager" },
  { title: "Growth", description: "$45/mo", label: "For scaling teams", value: "yes:25 Users,yes:100GB Storage,yes:Email Support,yes:Phone Support,no:Dedicated Manager" },
];

export default function Pricing264(props: BlockProps) {
  const {
    theme,
    heading = "Two Plans, Zero Complexity",
    subheading = "Pick what works and go",
    buttonText = "Sign Up",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl p-8 flex flex-col shadow-lg" style={{ backgroundColor: i === 1 ? theme?.primary || "#0f172a" : theme?.background || "#fff", color: i === 1 ? "#fff" : theme?.foreground }}>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-xs opacity-60 mb-4">{item.label}</p>
              <p className="text-5xl font-black mb-8">{item.description}</p>
              <ul className="space-y-4 mb-8 flex-1">
                {features.map((f, j) => {
                  const [status, text] = f.includes(":") ? [f.split(":")[0], f.split(":").slice(1).join(":")] : ["yes", f];
                  return (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      {status === "yes" ? <Check className="w-5 h-5 shrink-0 text-green-400" /> : <X className="w-5 h-5 shrink-0 text-red-400 opacity-50" />}
                      <span className={status === "no" ? "opacity-40" : ""}>{text.trim()}</span>
                    </li>
                  );
                })}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold" style={{ backgroundColor: i === 1 ? "#fff" : theme?.primary || "#0f172a", color: i === 1 ? theme?.primary || "#0f172a" : "#fff" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
