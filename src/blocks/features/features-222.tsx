import type { BlockProps } from "@/blocks/types";
import { Rocket, Target, Puzzle, Sparkles } from "lucide-react";

const icons = [Target, Puzzle, Sparkles];

export default function Features222(props: BlockProps) {
  const {
    theme,
    heading = "Launch Faster, Grow Smarter",
    subheading = "Our flagship product and the features that support it",
    bodyText = "Deploy production-ready applications in minutes, not months. Our launch platform handles infrastructure, scaling, and monitoring so you can focus on building.",
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Goal Tracking", description: "Set OKRs and track progress across teams." },
      { title: "Integration Hub", description: "Connect 200+ tools without writing code." },
      { title: "AI Copilot", description: "Intelligent suggestions that accelerate every task." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 rounded-2xl p-8 sm:p-10 border-2 flex flex-col justify-center" style={{ borderColor: theme?.primary || "#6366f1" }}>
            <Rocket size={36} className="mb-4" style={{ color: theme?.primary || "#6366f1" }} />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">{heading}</h2>
            <p className="opacity-60 leading-relaxed">{bodyText}</p>
            {buttonText && (
              <a href={buttonUrl} className="inline-block mt-6 px-6 py-3 rounded-lg text-white font-medium self-start" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                {buttonText}
              </a>
            )}
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: theme?.primary ? `${theme.primary}06` : "#f9fafb" }}>
                  <div className="flex items-start gap-3">
                    <Icon size={20} className="mt-0.5 shrink-0" style={{ color: theme?.accent || "#f59e0b" }} />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-60">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
