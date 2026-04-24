import type { BlockProps } from "@/blocks/types";
import { Zap, Crown, Rocket } from "lucide-react";

const icons = [Zap, Crown, Rocket];

export default function Pricing111(props: BlockProps) {
  const {
    theme,
    heading = "Plans Built for Growth",
    subheading = "Upgrade anytime as you scale",
    bodyText,
    buttonText = "Select Plan",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Starter", value: "$9", description: "Essential tools to launch fast" },
      { title: "Pro", value: "$29", description: "Advanced features for professionals" },
      { title: "Turbo", value: "$59", description: "Maximum power and support" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl border p-6 sm:p-8 text-center" style={{ borderColor: theme?.accent }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme?.accent }}>
                  <Icon className="w-6 h-6" style={{ color: theme?.primary }} />
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60 mb-4">{item.description}</p>
                <p className="text-4xl font-extrabold mb-1" style={{ color: theme?.primary }}>{item.value}</p>
                <p className="text-sm opacity-50 mb-6">per month</p>
                <a href={buttonUrl} className="block rounded-lg py-3 font-semibold text-white" style={{ backgroundColor: theme?.primary }}>
                  {buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
