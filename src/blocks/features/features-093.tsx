import type { BlockProps } from "@/blocks/types";
import { UtensilsCrossed, CalendarCheck, Truck, Star, Clock, MapPin } from "lucide-react";

const icons = [UtensilsCrossed, CalendarCheck, Truck, Star, Clock, MapPin];

export default function Features093(props: BlockProps) {
  const {
    theme,
    heading = "Restaurant Solutions",
    subheading = "Manage your restaurant from a single platform",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Digital Menu", description: "QR-code menus with photos, allergen info, and real-time price updates customers love." },
      { title: "Table Reservations", description: "Online booking with waitlist management, party size handling, and automatic confirmations." },
      { title: "Delivery & Takeout", description: "Integrated ordering system with driver tracking, delivery zones, and estimated wait times." },
      { title: "Reviews & Ratings", description: "Collect and display customer reviews to build trust and improve your reputation." },
      { title: "Order Scheduling", description: "Let customers pre-order for specific times, reducing kitchen rush and improving service." },
      { title: "Multi-Location", description: "Manage multiple restaurant locations from one dashboard with location-specific menus." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 text-white" style={{ backgroundColor: theme?.primary || "#ef4444" }}>Restaurant</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: theme?.accent || "#fef2f2" }}>
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary || "#ef4444" }}>
                  <Icon size={20} color="#fff" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#ef4444" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
