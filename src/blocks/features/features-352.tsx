import type { BlockProps } from "@/blocks/types";
import { Globe, Lock, Cpu, Cloud } from "lucide-react";

const icons = [Globe, Lock, Cpu, Cloud];

export default function Features352(props: BlockProps) {
  const {
    theme,
    heading = "Built for Performance",
    subheading = "Every detail engineered for speed and reliability",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Global CDN", description: "Content delivered from 200+ edge locations worldwide." },
      { title: "Zero Trust Auth", description: "Multi-factor authentication with biometric support." },
      { title: "Smart Processing", description: "AI-powered workload distribution across clusters." },
      { title: "Cloud Native", description: "Kubernetes-ready containers with auto-scaling." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#e0e5ec", color: theme?.foreground || "#44476a" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6" style={{ background: theme?.background || "#e0e5ec", boxShadow: "9px 9px 16px #b8bec7, -9px -9px 16px #ffffff" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: theme?.background || "#e0e5ec", boxShadow: "inset 5px 5px 10px #b8bec7, inset -5px -5px 10px #ffffff" }}>
                  <Icon size={24} style={{ color: theme?.primary || "#6c63ff" }} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
