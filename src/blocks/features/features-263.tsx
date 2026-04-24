import type { BlockProps } from "@/blocks/types";
import { Truck, MapPin, Clock, PackageCheck } from "lucide-react";

const icons = [Truck, MapPin, Clock, PackageCheck];

export default function Features263(props: BlockProps) {
  const {
    theme,
    heading = "Fast, Reliable Delivery",
    subheading = "Get orders to your customers on time, every time",
    bodyText,
    buttonText = "Learn More",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Same-Day Shipping", description: "Orders placed before 2 PM ship the same day from our fulfillment centers." },
      { title: "Live Tracking", description: "Real-time GPS tracking from warehouse to doorstep with SMS updates." },
      { title: "Express Options", description: "Overnight and 2-day delivery available for priority orders nationwide." },
      { title: "Delivery Confirmation", description: "Photo proof of delivery and digital signatures for every package." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 opacity-20" style={{ backgroundColor: theme?.foreground || "#000" }} />
          <div className="space-y-8">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className={`sm:flex items-center gap-8 ${isLeft ? "" : "sm:flex-row-reverse"}`}>
                  <div className={`sm:w-1/2 ${isLeft ? "sm:text-right" : "sm:text-left"} mb-4 sm:mb-0`}>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-60">{item.description}</p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center relative z-10">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary || "#0d9488", color: "#fff" }}>
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="sm:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#0d9488" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
