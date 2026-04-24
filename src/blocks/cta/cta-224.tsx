import type { BlockProps } from "@/blocks/types";
import { Bot, Sparkles } from "lucide-react";

export default function Cta224(props: BlockProps) {
  const {
    theme,
    heading = "Meet your AI assistant",
    subheading = "Get instant answers about our products, pricing, and features.",
    buttonText = "Chat with AI",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-md mx-auto">
        <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: theme?.muted ?? "#f0f9ff" }}>
          <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: theme?.primary ?? "#0ea5e9", color: "#fff" }}>
            <Bot className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold">{heading}</h3>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
          <div className="mt-5 space-y-2">
            {["What does your product do?", "How much does it cost?", "Can I get a demo?"].map((q, i) => (
              <button key={i} className="w-full text-left px-4 py-2.5 rounded-lg text-sm border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
                {q}
              </button>
            ))}
          </div>
          <a href={buttonUrl} className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-lg text-white text-sm font-medium w-full justify-center" style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}>
            <Sparkles className="w-4 h-4" /> {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
