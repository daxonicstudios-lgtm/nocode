import type { BlockProps } from "@/blocks/types";
import { Send, Inbox, Archive } from "lucide-react";

const icons = [Send, Inbox, Archive];

export default function Features316(props: BlockProps) {
  const {
    theme,
    heading = "How It Works",
    subheading = "Three simple steps to get started",
    items = [
      { title: "Submit Your Idea", description: "Describe what you want to build and our AI takes care of the rest." },
      { title: "Review the Draft", description: "Get a complete website draft in minutes, ready for your feedback." },
      { title: "Publish & Share", description: "Go live with one click and share your site with the world." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-12 max-w-xl mx-auto">{subheading}</p>
        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const primary = theme?.primary || "#6366f1";
            return (
              <div
                key={i}
                className="flex items-center gap-6 p-6 rounded-xl"
                style={{
                  backgroundColor: `${primary}08`,
                  animation: `slideInLeft 0.6s ease-out ${i * 0.15}s both`,
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: primary, color: "#fff" }}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
