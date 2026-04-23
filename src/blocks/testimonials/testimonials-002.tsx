import type { BlockProps } from "@/blocks/types";
import { Quote } from "lucide-react";

export default function Testimonials002(props: BlockProps) {
  const { theme, heading = "We launched in 9 days.", bodyText = "Before this, I'd quoted a designer $4,000 and been told it would take 6 weeks. The AI built our entire website in a conversation. We edited it together for a week. We went live on a Monday.", subheading = "Kofi Asante", label = "CEO, Tema Coffee Roasters" } = props;

  return (
    <section style={{ backgroundColor: theme?.foreground ?? "#111", color: theme?.background ?? "#fff" }} className="px-5 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="w-10 h-10 mx-auto mb-8 opacity-30" />
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-snug">{heading}</h2>
        <p className="mt-8 text-lg opacity-80 leading-relaxed">{bodyText}</p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full" style={{ backgroundColor: theme?.primary ?? "#fff", opacity: 0.3 }} />
          <div className="text-left">
            <p className="font-semibold">{subheading}</p>
            <p className="text-sm opacity-60">{String(label)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
