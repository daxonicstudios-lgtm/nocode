import type { BlockProps } from "@/blocks/types";
import { Headphones, MessageCircle, LifeBuoy } from "lucide-react";

const icons = [Headphones, MessageCircle, LifeBuoy];

export default function Features183(props: BlockProps) {
  const {
    theme,
    heading = "Customer Support",
    subheading = "Help your customers when they need it most",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Live Chat", description: "Instant messaging with smart routing to the right agent." },
      { title: "Ticket System", description: "Organize, prioritize, and track every customer request." },
      { title: "Help Center", description: "Self-service knowledge base that reduces support volume." },
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
              <div key={i} className="rounded-t-xl rounded-b-[2rem] p-8 shadow-sm" style={{ backgroundColor: theme?.foreground ? `${theme.foreground}05` : "#f9fafb" }}>
                <Icon size={24} className="mb-4" style={{ color: primary }} />
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
