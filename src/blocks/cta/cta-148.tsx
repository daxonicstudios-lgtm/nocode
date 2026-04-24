import type { BlockProps } from "@/blocks/types";
import { Lock, BadgeCheck, RotateCcw, HeartHandshake } from "lucide-react";

export default function Cta148(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by 50,000+ Businesses",
    buttonText = "Join Them Now",
    buttonUrl = "#",
    items = [
      { title: "Bank-Level Security" },
      { title: "SOC 2 Certified" },
      { title: "Money-Back Guarantee" },
      { title: "Dedicated Support" },
    ],
  } = props;

  const icons = [Lock, BadgeCheck, RotateCcw, HeartHandshake];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {items.slice(0, 4).map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl border text-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme?.primary || "#2563eb"}15` }}>
                  <Icon className="w-5 h-5" style={{ color: theme?.primary || "#2563eb" }} />
                </div>
                <span className="text-xs font-medium">{item.title}</span>
              </div>
            );
          })}
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
