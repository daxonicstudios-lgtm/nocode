import type { BlockProps } from "@/blocks/types";
import { Bolt, Layers, Server } from "lucide-react";

const icons = [Bolt, Layers, Server];

export default function Pricing115(props: BlockProps) {
  const {
    theme,
    heading = "Power Up Your Workflow",
    subheading,
    bodyText = "Each plan comes with the tools you need to move faster and build smarter.",
    buttonText = "Choose Plan",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Launch", value: "$13", description: "Quick setup, basic hosting" },
      { title: "Grow", value: "$33", description: "Custom domains, CDN, backups" },
      { title: "Dominate", value: "$69", description: "Multi-region, load balancing, 24/7" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">{heading}</h2>
        <p className="text-center opacity-60 max-w-md mx-auto mb-12">{bodyText}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6 flex flex-col" style={{ borderColor: theme?.accent }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme?.primary }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-sm opacity-60 mb-4 flex-1">{item.description}</p>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-black" style={{ color: theme?.primary }}>{item.value}<span className="text-sm font-normal opacity-50">/mo</span></span>
                  <a href={buttonUrl} className="text-sm font-medium underline" style={{ color: theme?.primary }}>{buttonText}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
