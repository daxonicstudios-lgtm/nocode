import type { BlockProps } from "@/blocks/types";
import { Headphones, MessageSquare, LifeBuoy, PhoneCall } from "lucide-react";

const icons = [Headphones, MessageSquare, LifeBuoy, PhoneCall];

export default function Features265(props: BlockProps) {
  const {
    theme,
    heading = "Support That Actually Helps",
    subheading = "Reach a real person in under 60 seconds, any channel, anytime",
    bodyText,
    buttonText = "Contact Support",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Live Chat", description: "Instant answers from our support team with average response times under 30 seconds." },
      { title: "AI Chatbot", description: "24/7 automated assistance that resolves 80% of common questions instantly." },
      { title: "Help Center", description: "Searchable knowledge base with step-by-step guides and video tutorials." },
      { title: "Phone Support", description: "Dedicated phone lines with priority routing for business customers." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="lg:flex lg:items-start lg:gap-12">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
            <p className="text-lg opacity-70 mb-6">{subheading}</p>
            {buttonText && (
              <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>{buttonText}</a>
            )}
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="rounded-xl border p-5" style={{ borderColor: theme?.primary ? `${theme.primary}25` : "#e5e7eb" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: theme?.primary ? `${theme.primary}12` : "#f5f3ff", color: theme?.primary || "#7c3aed" }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
