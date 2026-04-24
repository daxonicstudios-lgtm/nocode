import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

export default function Cta250(props: BlockProps) {
  const {
    theme,
    heading = "The smarter way to grow",
    subheading = "Stop guessing. Start growing with data-driven tools.",
    buttonText = "Start Growing",
    buttonUrl = "#",
    items = [
      { title: "Lightning fast", icon: "zap" },
      { title: "Enterprise secure", icon: "shield" },
      { title: "Always available", icon: "clock" },
    ],
  } = props;

  const icons: Record<string, React.ReactNode> = {
    zap: <Zap className="w-4 h-4" />,
    shield: <Shield className="w-4 h-4" />,
    clock: <Clock className="w-4 h-4" />,
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {items.map((item, i) => (
            <span key={i} className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all duration-300 hover:scale-105 hover:shadow-md" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
              <span className="transition-colors duration-300" style={{ color: theme?.primary ?? "#10b981" }}>
                {icons[item.icon ?? "zap"]}
              </span>
              {item.title}
            </span>
          ))}
        </div>
        <a href={buttonUrl} className="group inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:gap-4" style={{ backgroundColor: theme?.primary ?? "#10b981" }}>
          {buttonText}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
