import type { BlockProps } from "@/blocks/types";
import { Database, Lock, RefreshCcw, Zap, Cloud, Settings } from "lucide-react";

const icons = [Database, Lock, RefreshCcw, Zap, Cloud, Settings];

export default function Features275(props: BlockProps) {
  const {
    theme,
    heading = "Infrastructure That Scales",
    subheading = "Built on battle-tested foundations trusted by thousands of companies",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Auto-Scaling DB", description: "Databases that grow with your traffic automatically." },
      { title: "Encrypted Storage", description: "All data encrypted at rest with customer-managed keys." },
      { title: "Auto Backups", description: "Continuous backups with one-click point-in-time restore." },
      { title: "Fast Queries", description: "Optimized query engine delivers results in milliseconds." },
      { title: "Multi-Cloud", description: "Deploy across AWS, GCP, and Azure from one dashboard." },
      { title: "Custom Config", description: "Fine-tune every parameter to match your workload." },
    ],
  } = props;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: theme?.background || "#0c0a09", color: theme?.foreground || "#fafaf9" }}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-3 p-4">
                <Icon size={20} className="mt-0.5 flex-shrink-0" style={{ color: theme?.primary || "#a78bfa" }} />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-50">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
