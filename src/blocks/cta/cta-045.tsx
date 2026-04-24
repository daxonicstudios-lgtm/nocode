import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, Headphones } from "lucide-react";

export default function Cta045(props: BlockProps) {
  const {
    theme,
    heading = "Power your growth",
    subheading = "All the tools you need in one platform.",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = [
      { title: "Instant setup", description: "Go live in under 5 minutes", icon: "zap" },
      { title: "Bank-grade security", description: "Your data is always safe", icon: "shield" },
      { title: "Human support", description: "Real people, real answers", icon: "headphones" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    zap: <Zap className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
    headphones: <Headphones className="w-5 h-5" />,
  };

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.primary ?? "#4f46e5", color: "#fff" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black">{heading}</h2>
        <p className="mt-2 opacity-70">{subheading}</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                {iconMap[item.icon ?? ""] ?? <Zap className="w-5 h-5" />}
              </div>
              <p className="font-bold text-sm">{item.title}</p>
              <p className="text-xs opacity-60 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-10 inline-block px-8 py-3.5 rounded-lg bg-white font-bold text-sm" style={{ color: theme?.primary ?? "#4f46e5" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
