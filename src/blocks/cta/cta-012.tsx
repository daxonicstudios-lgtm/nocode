import type { BlockProps } from "@/blocks/types";
import { Send } from "lucide-react";

export default function Cta012(props: BlockProps) {
  const {
    theme,
    heading = "Join 15,000+ subscribers",
    subheading = "No spam. Unsubscribe anytime. We respect your privacy.",
    buttonText = "Sign Up",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f1f5f9", color: theme?.foreground }} className="px-5 py-24">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 text-sm opacity-50">{subheading}</p>
        <form className="mt-8 relative max-w-md mx-auto" action={buttonUrl} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-4 pr-32 rounded-full text-sm border focus:outline-none focus:ring-2"
            style={{ borderColor: theme?.secondary ?? "#d1d5db", backgroundColor: theme?.background ?? "#fff", color: theme?.foreground }}
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-full text-white font-medium text-sm flex items-center gap-1.5 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
          >
            {buttonText} <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
