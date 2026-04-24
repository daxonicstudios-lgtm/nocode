import type { BlockProps } from "@/blocks/types";
import { Shield, Zap, Clock } from "lucide-react";

export default function Cta177(props: BlockProps) {
  const {
    theme,
    heading = "Why settle for less?",
    subheading = "Get more done with tools that work as hard as you do.",
    buttonText = "Upgrade Now",
    buttonUrl = "#",
  } = props;

  const features = [
    { icon: Shield, label: "Enterprise Security" },
    { icon: Zap, label: "Lightning Fast" },
    { icon: Clock, label: "24/7 Support" },
  ];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <div className="flex-1 rounded-2xl p-8 border border-gray-200" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
            <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
            <p className="mt-3 opacity-70">{subheading}</p>
            <a href={buttonUrl} className="mt-6 inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
              {buttonText}
            </a>
          </div>
          <div className="flex flex-col gap-3 md:w-56 -mt-2 md:mt-4">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 shadow-sm" style={{ backgroundColor: theme?.background ?? "#fff" }}>
                <f.icon className="w-5 h-5 shrink-0" style={{ color: theme?.primary ?? "#2563eb" }} />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
