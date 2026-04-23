import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Layers, Lock } from "lucide-react";

export default function Hero224(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need to Scale",
    subheading = "All-in-One Platform",
    bodyText = "Powerful tools that grow with your business. From analytics to automation, we have you covered.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = [
      { title: "Lightning Fast", description: "Sub-100ms response times globally", icon: "Zap" },
      { title: "Enterprise Security", description: "SOC 2 Type II certified infrastructure", icon: "Shield" },
      { title: "Real-Time Analytics", description: "Track every metric that matters", icon: "BarChart3" },
      { title: "Global CDN", description: "Edge nodes in 190+ countries", icon: "Globe" },
      { title: "Easy Integrations", description: "Connect with 500+ tools you already use", icon: "Layers" },
      { title: "Data Privacy", description: "GDPR and CCPA compliant by default", icon: "Lock" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-5 h-5" />,
    Shield: <Shield className="w-5 h-5" />,
    BarChart3: <BarChart3 className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Lock: <Lock className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafbff", color: theme?.foreground ?? "#1e293b" }}
      className="min-h-screen flex flex-col justify-center px-6 py-20 md:px-12 lg:px-24 overflow-hidden"
    >
      <style>{`
        @keyframes cascadeUp {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero224-header { animation: fadeDown 0.7s ease-out forwards; opacity: 0; }
        .hero224-card-0 { animation: cascadeUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards; opacity: 0; }
        .hero224-card-1 { animation: cascadeUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s forwards; opacity: 0; }
        .hero224-card-2 { animation: cascadeUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards; opacity: 0; }
        .hero224-card-3 { animation: cascadeUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.75s forwards; opacity: 0; }
        .hero224-card-4 { animation: cascadeUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s forwards; opacity: 0; }
        .hero224-card-5 { animation: cascadeUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1.05s forwards; opacity: 0; }
      `}</style>

      {/* Header */}
      <div className="hero224-header text-center max-w-2xl mx-auto mb-14">
        <span
          className="inline-block text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5"
          style={{ backgroundColor: (theme?.primary ?? "#4f46e5") + "12", color: theme?.primary ?? "#4f46e5" }}
        >
          {subheading}
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          {heading}
        </h1>
        <p className="text-base md:text-lg opacity-60 mb-8">{bodyText}</p>
        <a
          href={buttonUrl}
          className="inline-flex items-center px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: theme?.primary ?? "#4f46e5" }}
        >
          {buttonText}
        </a>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto w-full">
        {items.slice(0, 6).map((item, i) => (
          <div
            key={i}
            className={`hero224-card-${i} p-6 rounded-2xl border transition-shadow hover:shadow-lg`}
            style={{
              backgroundColor: theme?.background ?? "#ffffff",
              borderColor: theme?.border ?? "#e2e8f0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: (theme?.primary ?? "#4f46e5") + "15", color: theme?.primary ?? "#4f46e5" }}
            >
              {iconMap[item.icon ?? "Zap"] ?? <Zap className="w-5 h-5" />}
            </div>
            <h3 className="font-semibold text-base mb-1.5">{item.title}</h3>
            <p className="text-sm opacity-55 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
