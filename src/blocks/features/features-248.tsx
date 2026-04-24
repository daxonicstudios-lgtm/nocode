import type { BlockProps } from "@/blocks/types";
import { Ticket, Gift, Tag } from "lucide-react";

const icons = [Ticket, Gift, Tag];

export default function Features248(props: BlockProps) {
  const {
    theme,
    heading = "Feature Tickets",
    subheading = "Tear off a feature and take it for a spin",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Free Tier", description: "Up to 3 projects with full feature access and community support.", value: "ADMIT ONE" },
      { title: "Pro Bundle", description: "Unlimited projects, priority support, and advanced analytics.", value: "VIP PASS" },
      { title: "Enterprise", description: "Custom SLAs, dedicated infrastructure, and white-glove onboarding.", value: "ALL ACCESS" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-base opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex flex-col rounded-xl overflow-hidden border" style={{ borderColor: `${primary}30` }}>
                <div className="p-6 flex-1" style={{ backgroundColor: `${primary}08` }}>
                  <Icon size={24} className="mb-3" style={{ color: primary }} />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
                <div className="relative">
                  <div className="absolute left-0 right-0 top-0 flex justify-between px-0" style={{ marginTop: "-6px" }}>
                    {Array.from({ length: 20 }).map((_, j) => (
                      <div key={j} className="w-3 h-3 rounded-full" style={{ backgroundColor: theme?.background || "#ffffff" }} />
                    ))}
                  </div>
                  <div className="py-3 text-center" style={{ backgroundColor: primary }}>
                    <span className="text-xs font-bold tracking-widest text-white uppercase">{item.value}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
