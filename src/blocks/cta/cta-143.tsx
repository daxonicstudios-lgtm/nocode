import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

export default function Cta143(props: BlockProps) {
  const {
    theme,
    heading = "Choose Your Path",
    buttonText = "Start Free",
    buttonUrl = "#",
    secondaryButtonText = "Go Premium",
    secondaryButtonUrl = "#",
    items = [
      { title: "3 projects" },
      { title: "Basic analytics" },
      { title: "Community support" },
    ],
  } = props;

  const proFeatures = ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domain"];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border">
            <h3 className="font-bold text-lg mb-4">Free</h3>
            <ul className="space-y-2 mb-6">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm opacity-70"><Check className="w-4 h-4" />{item.title}</li>
              ))}
            </ul>
            <a href={buttonUrl} className="block text-center px-6 py-3 rounded-lg border-2 font-semibold hover:opacity-80 transition" style={{ borderColor: theme?.primary || "#2563eb", color: theme?.primary || "#2563eb" }}>
              {buttonText}
            </a>
          </div>
          <div className="p-6 rounded-xl border-2 relative" style={{ borderColor: theme?.primary || "#2563eb" }}>
            <span className="absolute -top-3 right-4 px-3 py-0.5 rounded-full text-white text-xs font-bold" style={{ backgroundColor: theme?.primary || "#2563eb" }}>Popular</span>
            <h3 className="font-bold text-lg mb-4">Premium</h3>
            <ul className="space-y-2 mb-6">
              {proFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4" style={{ color: theme?.primary || "#2563eb" }} />{f}</li>
              ))}
            </ul>
            <a href={secondaryButtonUrl} className="block text-center px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
