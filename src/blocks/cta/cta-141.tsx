import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

export default function Cta141(props: BlockProps) {
  const {
    theme,
    heading = "Free vs Pro",
    buttonText = "Go Pro Today",
    buttonUrl = "#",
    items = [
      { title: "5 Projects", description: "Unlimited Projects" },
      { title: "Basic Support", description: "Priority Support" },
      { title: "Community Templates", description: "Premium Templates" },
    ],
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{heading}</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-center font-semibold text-sm opacity-50 pb-2 border-b">Free</div>
          <div className="text-center font-semibold text-sm pb-2 border-b" style={{ color: theme?.primary || "#2563eb" }}>Pro</div>
          {items.map((item, i) => (
            <div key={i} className="contents">
              <div className="flex items-center gap-2 py-2 text-sm opacity-60">
                <X className="w-4 h-4 text-red-400 flex-shrink-0" />{item.title}
              </div>
              <div className="flex items-center gap-2 py-2 text-sm font-medium">
                <Check className="w-4 h-4 flex-shrink-0" style={{ color: theme?.primary || "#2563eb" }} />{item.description}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
