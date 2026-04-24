import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Star, CheckCircle, Users, Zap, Shield, Clock } from "lucide-react";

export default function Cta296(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need to Succeed",
    subheading = "The complete platform for modern teams. Start building today.",
    bodyText = "Join 50,000+ teams already using our platform to ship faster, collaborate better, and grow without limits.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "Schedule Demo",
    secondaryButtonUrl = "#",
    items = [
      { title: "Unlimited Projects", icon: "zap" },
      { title: "Team Collaboration", icon: "users" },
      { title: "Enterprise Security", icon: "shield" },
      { title: "24/7 Support", icon: "clock" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    zap: <Zap className="w-5 h-5" />, users: <Users className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />, clock: <Clock className="w-5 h-5" />,
  };

  return (
    <section className="px-4 py-20 sm:py-28" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />)}
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight">{heading}</h2>
          <p className="mt-4 text-xl opacity-70 max-w-2xl mx-auto">{subheading}</p>
          <p className="mt-3 opacity-40 max-w-lg mx-auto">{bodyText}</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div style={{ color: theme?.accent ?? "#fbbf24" }}>{iconMap[item.icon ?? "zap"]}</div>
              <span className="text-sm font-semibold text-center">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-black text-base" style={{ backgroundColor: theme?.accent ?? "#fbbf24", color: theme?.primary ?? "#0f172a" }}>
            {buttonText} <ArrowRight className="w-5 h-5" />
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-sm border-2 border-white/20">
            {secondaryButtonText}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-xs opacity-50">
          {["No credit card required", "14-day free trial", "Cancel anytime"].map((t, i) => (
            <span key={i} className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> {t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
