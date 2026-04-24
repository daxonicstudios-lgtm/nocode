import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, Clock, Award } from "lucide-react";

export default function Cta147(props: BlockProps) {
  const {
    theme,
    heading = "Risk-Free. Guaranteed.",
    bodyText = "Try our platform for 30 days. If you're not satisfied, we'll refund every penny.",
    buttonText = "Start Your Free Trial",
    buttonUrl = "#",
    items = [
      { title: "SSL Secured", icon: "shield" },
      { title: "30-Day Guarantee", icon: "clock" },
      { title: "Award-Winning", icon: "award" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    shield: <ShieldCheck className="w-6 h-6" />,
    clock: <Clock className="w-6 h-6" />,
    award: <Award className="w-6 h-6" />,
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.accent || "#f0fdf4", color: theme?.foreground }}>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
        <p className="text-sm opacity-70 mb-6">{bodyText}</p>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition mb-8" style={{ backgroundColor: theme?.primary || "#16a34a" }}>
          {buttonText}
        </a>
        <div className="flex justify-center gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div style={{ color: theme?.primary || "#16a34a" }}>{iconMap[item.icon || "shield"] || <ShieldCheck className="w-6 h-6" />}</div>
              <span className="text-xs font-medium opacity-70">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
