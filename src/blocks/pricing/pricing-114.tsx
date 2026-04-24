import type { BlockProps } from "@/blocks/types";
import { Award, Star, Diamond } from "lucide-react";

const icons = [Award, Star, Diamond];

export default function Pricing114(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Fit",
    subheading = "Transparent pricing for every budget",
    bodyText,
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Bronze", value: "$11/mo", description: "Core features, email support" },
      { title: "Silver", value: "$27/mo", description: "Plus analytics and integrations" },
      { title: "Gold", value: "$53/mo", description: "Everything plus API and SLA" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative rounded-2xl border-2 p-8 flex flex-col items-center" style={{ borderColor: i === 2 ? theme?.primary : theme?.accent }}>
                <div className="absolute -top-5 w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xl mt-2 mb-1">{item.title}</h3>
                <p className="text-sm opacity-60 mb-4 text-center">{item.description}</p>
                <p className="text-3xl font-extrabold mb-6" style={{ color: theme?.primary }}>{item.value}</p>
                <a href={buttonUrl} className="w-full text-center rounded-xl py-3 font-semibold text-white" style={{ backgroundColor: theme?.primary }}>
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
