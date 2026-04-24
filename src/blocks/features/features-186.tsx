import type { BlockProps } from "@/blocks/types";
import { Truck, Store, Briefcase } from "lucide-react";

const icons = [Truck, Store, Briefcase];

export default function Features186(props: BlockProps) {
  const {
    theme,
    heading = "Commerce Tools",
    subheading = "Sell online with confidence",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Order Fulfillment", description: "Automated shipping labels, tracking, and delivery updates." },
      { title: "Storefront Builder", description: "Beautiful product pages that convert browsers to buyers." },
      { title: "Business Dashboard", description: "Revenue, expenses, and profit at a glance." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative rounded-xl p-8 pt-10 shadow-sm" style={{ backgroundColor: theme?.foreground ? `${theme.foreground}05` : "#f9fafb" }}>
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-lg flex items-center justify-center shadow-md" style={{ backgroundColor: primary }}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 mt-2">{item.title}</h3>
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
