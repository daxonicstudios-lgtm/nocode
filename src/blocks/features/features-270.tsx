import type { BlockProps } from "@/blocks/types";
import { Heart, Bookmark, Bell, Share2 } from "lucide-react";

const icons = [Heart, Bookmark, Bell, Share2];

export default function Features270(props: BlockProps) {
  const {
    theme,
    heading = "Save What You Love",
    subheading = "Wishlists that turn browsing into buying",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "One-Tap Save", description: "Customers save products to wishlists with a single heart tap." },
      { title: "Collections", description: "Organize saved items into named collections for easy browsing later." },
      { title: "Price Alerts", description: "Get notified when a wishlisted item drops in price or goes on sale." },
      { title: "Share Lists", description: "Share wishlists with friends and family for birthdays and holidays." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fff1f2", color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ backgroundColor: theme?.background || "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#ffe4e6", color: theme?.primary || "#e11d48" }}>
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
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#e11d48" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
