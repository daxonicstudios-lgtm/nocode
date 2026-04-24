import type { BlockProps } from "@/blocks/types";
import { Plane, MapPin, Star } from "lucide-react";

const icons = [Plane, MapPin, Star];

export default function Features191(props: BlockProps) {
  const {
    theme,
    heading = "Travel Made Simple",
    subheading = "Plan, book, and explore with confidence",
    bodyText,
    buttonText = "Start Planning",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Bookings", description: "Search and book flights, hotels, and experiences in one place with real-time availability." },
      { title: "Curated Destinations", description: "Handpicked travel guides with local tips, hidden gems, and seasonal recommendations." },
      { title: "Traveler Reviews", description: "Honest reviews from verified travelers help you make informed decisions." },
    ],
  } = props;

  const primary = theme?.primary || "#0ea5e9";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-8 border" style={{ borderColor: `${primary}20` }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: `${primary}15` }}>
                  <Icon size={22} style={{ color: primary }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-full text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
