import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

export default function Cta112(props: BlockProps) {
  const {
    theme,
    heading = "Professional Plan",
    subheading = "$29/mo",
    bodyText = "Best for growing teams and businesses.",
    buttonText = "Upgrade Now",
    buttonUrl = "#",
    items = [
      { title: "Unlimited projects" },
      { title: "Priority support" },
      { title: "Custom domain" },
      { title: "Advanced analytics" },
    ],
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-sm mx-auto rounded-2xl border-2 p-8" style={{ borderColor: theme?.primary || "#2563eb" }}>
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">{heading}</h2>
          <p className="text-3xl font-extrabold mt-2" style={{ color: theme?.primary || "#2563eb" }}>{subheading}</p>
          <p className="text-sm opacity-60 mt-1">{bodyText}</p>
        </div>
        <ul className="space-y-2 mb-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: theme?.primary || "#2563eb" }} />
              {item.title}
            </li>
          ))}
        </ul>
        <a href={buttonUrl} className="block text-center px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
