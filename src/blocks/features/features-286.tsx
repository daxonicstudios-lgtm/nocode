import type { BlockProps } from "@/blocks/types";
import { Smile, ThumbsUp, Award, Sparkles } from "lucide-react";

const icons = [Smile, ThumbsUp, Award, Sparkles];

export default function Features286(props: BlockProps) {
  const {
    theme,
    heading = "Delightful at Every Step",
    subheading = "Features designed to make you smile while getting things done",
    bodyText,
    buttonText = "See It in Action",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Friendly Onboarding", description: "Interactive walkthrough gets you productive in under five minutes." },
      { title: "Easy Approvals", description: "One-click approval workflows keep projects moving without bottlenecks." },
      { title: "Recognition", description: "Built-in kudos and shoutouts celebrate great work across your team." },
      { title: "Magic Shortcuts", description: "Smart keyboard shortcuts learn your habits and adapt to your style." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fefefe", color: theme?.foreground || "#1f2937" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: theme?.background || "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#f3e8ff", color: theme?.primary || "#9333ea" }}>
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
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-full text-white font-medium" style={{ backgroundColor: theme?.primary || "#9333ea" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
