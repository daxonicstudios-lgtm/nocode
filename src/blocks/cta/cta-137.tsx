import type { BlockProps } from "@/blocks/types";
import { Send } from "lucide-react";

export default function Cta137(props: BlockProps) {
  const {
    theme,
    heading = "Join 25,000+ Subscribers",
    subheading = "No spam, unsubscribe anytime. We respect your inbox.",
    buttonText = "Sign Up",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.accent || "#f0f9ff", color: theme?.foreground }}>
      <div className="max-w-xl mx-auto rounded-2xl p-8 bg-white shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Send className="w-6 h-6" style={{ color: theme?.primary || "#2563eb" }} />
          <h2 className="text-xl md:text-2xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-60 mb-6">{subheading}</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border text-sm outline-none" />
          <button type="submit" className="px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
