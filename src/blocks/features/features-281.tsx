import type { BlockProps } from "@/blocks/types";
import { Feather, Cloud, Leaf, Droplets } from "lucide-react";

const icons = [Feather, Cloud, Leaf, Droplets];
const pastelBgs = ["#fce7f3", "#dbeafe", "#dcfce7", "#fef3c7"];
const pastelColors = ["#ec4899", "#3b82f6", "#22c55e", "#f59e0b"];

export default function Features281(props: BlockProps) {
  const {
    theme,
    heading = "Thoughtfully Designed",
    subheading = "Beautiful tools that bring joy to your daily workflow",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lightweight", description: "Minimal footprint means faster load times and happier users." },
      { title: "Cloud Sync", description: "Your work follows you across every device, always up to date." },
      { title: "Eco-Friendly", description: "Carbon-neutral hosting powered by 100% renewable energy." },
      { title: "Fluid Updates", description: "Seamless updates roll out without disrupting your workflow." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fefefe", color: theme?.foreground || "#1f2937" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : pastelBgs[i % pastelBgs.length] }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#fff", color: theme?.primary || pastelColors[i % pastelColors.length] }}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-full text-white font-medium" style={{ backgroundColor: theme?.primary || "#ec4899" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
