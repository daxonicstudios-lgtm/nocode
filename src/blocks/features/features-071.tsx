import type { BlockProps } from "@/blocks/types";
import { Smartphone, Bell, MessageCircle } from "lucide-react";

const icons = [Smartphone, Bell, MessageCircle];

export default function Features071(props: BlockProps) {
  const {
    theme,
    heading = "Designed for Mobile",
    subheading = "Every interaction feels native on any device",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/280x560",
    items = [
      { title: "Touch Optimized", description: "Large tap targets and gesture-based navigation for effortless mobile use." },
      { title: "Push Notifications", description: "Engage users with timely, personalized alerts that drive action." },
      { title: "In-App Messaging", description: "Built-in chat lets customers reach you without leaving your app." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <div className="inline-block mx-auto mb-6 relative">
                  <div className="w-48 h-80 rounded-[2rem] border-4 border-gray-800 overflow-hidden mx-auto" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                    <div className="w-20 h-1.5 bg-gray-800 rounded-full mx-auto mt-2" />
                    <img src={imageUrl} alt={item.title || ""} className="w-full h-full object-cover mt-2" />
                  </div>
                </div>
                <Icon size={24} className="mx-auto mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm max-w-xs mx-auto">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
