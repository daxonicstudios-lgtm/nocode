import type { BlockProps } from "@/blocks/types";
import { Puzzle, Layers, Wand2, Share2, Bell, BookOpen } from "lucide-react";

const icons = [Puzzle, Layers, Wand2, Share2, Bell, BookOpen];

export default function Features067(props: BlockProps) {
  const {
    theme,
    heading = "Discover What We Offer",
    subheading = "Hover over each card to learn more",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Integrations", description: "Connect with Slack, Zapier, HubSpot, and 200+ tools your team already uses." },
      { title: "Version Control", description: "Roll back any change with full version history and branch-based editing." },
      { title: "Smart Assist", description: "AI-powered suggestions help you write better copy and choose better layouts." },
      { title: "Social Sharing", description: "One-click sharing to every major social platform with optimized previews." },
      { title: "Notifications", description: "Stay in the loop with customizable alerts for traffic spikes and form submissions." },
      { title: "Knowledge Base", description: "Built-in help center lets your customers find answers without waiting for support." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="group rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                <Icon size={28} className="mb-4" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="opacity-0 group-hover:opacity-60 text-sm leading-relaxed transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                  {item.description}
                </p>
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
