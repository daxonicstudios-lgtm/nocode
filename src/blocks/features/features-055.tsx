import type { BlockProps } from "@/blocks/types";
import { Quote } from "lucide-react";

export default function Features055(props: BlockProps) {
  const {
    theme,
    heading = "What Makes Us Different",
    subheading = "Real results backed by real feedback",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/520x360",
    items = [
      { title: "Automated Workflows", description: "Set up once and let the system handle repetitive tasks while you focus on growth.", label: "This saved our team 20 hours a week. Absolutely game-changing." },
      { title: "Smart Notifications", description: "Get alerted about what matters. Filter out the noise and focus on high-impact events.", label: "We never miss a critical update now. Our response time dropped by 60%." },
      { title: "Seamless Onboarding", description: "New team members are productive on day one with guided setup and interactive tutorials.", label: "Our new hires were up and running in half the time compared to our old tool." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-20">
          {items.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
                <div className="w-full md:w-1/2">
                  <img src={imageUrl} alt={item.title || ""} className="w-full rounded-xl object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="opacity-60 leading-relaxed">{item.description}</p>
                  {item.label && (
                    <blockquote className="border-l-4 pl-4 mt-4 italic opacity-70" style={{ borderColor: theme?.primary || "#6366f1" }}>
                      <Quote size={16} className="mb-1 opacity-40" />
                      <p className="text-sm">{item.label}</p>
                    </blockquote>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
