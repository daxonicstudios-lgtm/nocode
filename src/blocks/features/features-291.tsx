import type { BlockProps } from "@/blocks/types";
import { Shield, Zap, Globe, Lock } from "lucide-react";

const icons = [Shield, Zap, Globe, Lock];

export default function Features291(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by Industry Leaders",
    subheading = "The same platform powering thousands of successful businesses",
    bodyText,
    buttonText = "Join Them",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Enterprise Security", description: "SOC 2 Type II certified with end-to-end encryption on all data." },
      { title: "Lightning Performance", description: "Sub-100ms response times with 99.99% uptime guaranteed." },
      { title: "Global Infrastructure", description: "Data centers in 12 regions for low-latency access worldwide." },
      { title: "Compliance Ready", description: "GDPR, HIPAA, and CCPA compliant out of the box." },
    ],
  } = props;

  const logos = ["Acme Corp", "TechFlow", "DataSync", "CloudBase", "NovaPay"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-12 py-6 border-y" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
          {logos.map((name, i) => (
            <span key={i} className="text-lg font-bold opacity-30">{name}</span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#ede9fe", color: theme?.primary || "#6366f1" }}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
