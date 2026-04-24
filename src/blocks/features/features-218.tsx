import type { BlockProps } from "@/blocks/types";
import { Layers, Globe, TrendingUp, Lock, Zap } from "lucide-react";

const icons = [Layers, Globe, TrendingUp, Lock, Zap];

export default function Features218(props: BlockProps) {
  const {
    theme,
    heading = "Built for Scale",
    subheading = "Enterprise features accessible to teams of every size",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Multi-Tenant Architecture", description: "Serve thousands of customers from a single, efficient deployment." },
      { title: "Global CDN", description: "Content delivered from the nearest edge node for blazing speed." },
      { title: "Growth Analytics", description: "Track MRR, churn, and expansion revenue in one place." },
      { title: "Zero-Trust Security", description: "Every request is verified, every connection is encrypted." },
      { title: "Instant Provisioning", description: "Spin up new environments in under 30 seconds." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-base opacity-70 mb-12 max-w-lg">{subheading}</p>
        <div className="space-y-5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${primary}15`, color: primary }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-10 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
