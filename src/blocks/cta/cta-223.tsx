import type { BlockProps } from "@/blocks/types";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function Cta223(props: BlockProps) {
  const {
    theme,
    heading = "Join the conversation",
    subheading = "Connect with 10,000+ members in our community chat. Share ideas, get help, and grow together.",
    buttonText = "Join Community",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#fafafa" }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="shrink-0 relative">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#22c55e" }}>
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 flex items-center justify-center text-white text-xs" style={{ borderColor: theme?.background ?? "#18181b" }}>✓</span>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
            <p className="mt-2 text-sm opacity-60">{subheading}</p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center sm:justify-start">
              <a href={buttonUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#22c55e" }}>
                {buttonText} <ArrowRight className="w-4 h-4" />
              </a>
              <a href={secondaryButtonUrl} className="px-5 py-2.5 rounded-lg text-sm font-medium border border-white/20">
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
