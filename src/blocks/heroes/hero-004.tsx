import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Users, Shield, Headphones } from "lucide-react";

export default function Hero004(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by teams everywhere",
    subheading = "We provide the tools and infrastructure you need to scale your business with confidence.",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = [
      { icon: "users", value: "10k+", label: "Active Users" },
      { icon: "shield", value: "99.9%", label: "Uptime" },
      { icon: "headphones", value: "24/7", label: "Support" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    users: <Users className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
    headphones: <Headphones className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl opacity-60 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>
        <div className="mt-10">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-base bg-black hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-current/10">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full mb-1"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#f0f0f0" }}
              >
                <span style={{ color: theme?.primary || "#000" }}>
                  {iconMap[item.icon || ""] || <Users className="w-5 h-5" />}
                </span>
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold">{item.value}</span>
              <span className="text-sm opacity-50 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
