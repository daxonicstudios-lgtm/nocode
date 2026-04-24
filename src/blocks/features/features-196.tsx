import type { BlockProps } from "@/blocks/types";
import { Sprout, CloudSun, ShoppingCart } from "lucide-react";

const icons = [Sprout, CloudSun, ShoppingCart];

export default function Features196(props: BlockProps) {
  const {
    theme,
    heading = "Smart Farming Solutions",
    subheading = "Technology that helps your crops thrive",
    bodyText,
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Crop Monitoring", description: "Satellite and sensor data tracks soil moisture, growth stages, and pest risks in real time." },
      { title: "Weather Intelligence", description: "Hyperlocal forecasts and alerts help you plan planting, irrigation, and harvest windows." },
      { title: "Market Prices", description: "Live commodity prices and demand trends so you sell at the right time for best returns." },
    ],
  } = props;

  const primary = theme?.primary || "#16a34a";

  return (
    <section style={{ backgroundColor: theme?.background || "#f0fdf4", color: theme?.foreground || "#14532d" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-8 bg-white shadow-sm border border-green-100">
                <Icon size={28} className="mb-5" style={{ color: primary }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
