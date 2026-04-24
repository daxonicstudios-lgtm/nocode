import type { BlockProps } from "@/blocks/types";
import { MessagesSquare, Send } from "lucide-react";

export default function Cta222(props: BlockProps) {
  const {
    theme,
    heading = "Talk to our experts",
    subheading = "Get personalized advice for your business needs.",
    buttonText = "Send Message",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-md mx-auto">
        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
          <div className="p-4 flex items-center gap-3 border-b" style={{ borderColor: theme?.border ?? "#e5e7eb", backgroundColor: theme?.muted ?? "#f9fafb" }}>
            <MessagesSquare className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
            <span className="font-semibold text-sm">{heading}</span>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs text-white font-bold" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>A</div>
              <div className="rounded-lg rounded-tl-none px-3 py-2 text-sm" style={{ backgroundColor: theme?.muted ?? "#f3f4f6" }}>
                Hi there! How can I help you today?
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <div className="rounded-lg rounded-tr-none px-3 py-2 text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                I&apos;d like to learn about pricing
              </div>
            </div>
            <p className="text-xs opacity-40 text-center">{subheading}</p>
          </div>
          <div className="p-4 border-t" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
            <a href={buttonUrl} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
              <Send className="w-4 h-4" /> {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
