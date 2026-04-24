import type { BlockProps } from "@/blocks/types";
import { Scissors, Stethoscope, Home } from "lucide-react";

const icons = [Scissors, Stethoscope, Home];

export default function Features198(props: BlockProps) {
  const {
    theme,
    heading = "Happy Pets, Happy Owners",
    subheading = "Complete care for your furry family members",
    bodyText,
    buttonText = "Book a Service",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Grooming Services", description: "Online booking for baths, haircuts, nail trims, and spa treatments with photo updates." },
      { title: "Veterinary Care", description: "Schedule checkups, vaccinations, and emergency visits with digital health records." },
      { title: "Pet Boarding", description: "Find trusted sitters and boarding facilities with live webcam access and daily reports." },
    ],
  } = props;

  const primary = theme?.primary || "#9333ea";

  return (
    <section style={{ backgroundColor: theme?.background || "#faf5ff", color: theme?.foreground || "#1c1917" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-8 bg-white shadow-sm text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${primary}15` }}>
                  <Icon size={24} style={{ color: primary }} />
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
