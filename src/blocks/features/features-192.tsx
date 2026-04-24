import type { BlockProps } from "@/blocks/types";
import { Car, Banknote, Wrench } from "lucide-react";

const icons = [Car, Banknote, Wrench];

export default function Features192(props: BlockProps) {
  const {
    theme,
    heading = "Your Dealership, Digitized",
    subheading = "Modern tools for the automotive industry",
    bodyText,
    buttonText = "Explore Inventory",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Vehicle Inventory", description: "Showcase your entire fleet with filters for make, model, year, and price range." },
      { title: "Financing Calculator", description: "Let buyers estimate monthly payments with adjustable terms and down payments." },
      { title: "Service Scheduling", description: "Online booking for maintenance, repairs, and inspections with automated reminders." },
    ],
  } = props;

  const primary = theme?.primary || "#1e40af";

  return (
    <section style={{ backgroundColor: theme?.background || "#f8fafc", color: theme?.foreground || "#0f172a" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-8 bg-white shadow-md">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: primary }}>
                  <Icon size={24} className="text-white" />
                </div>
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
