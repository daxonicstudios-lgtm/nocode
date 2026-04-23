import type { BlockProps } from "@/blocks/types";
import { Mail } from "lucide-react";

export default function Hero003(props: BlockProps) {
  const {
    theme,
    heading = "Stay ahead of the curve",
    subheading = "Join 25,000+ professionals who get weekly insights on design, technology, and business growth delivered to their inbox.",
    buttonText = "Subscribe",
    buttonUrl = "#",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
          style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#f3f0ff" }}
        >
          <Mail
            className="w-7 h-7"
            style={{ color: theme?.primary }}
            color={theme?.primary || "#7c3aed"}
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl opacity-60 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>
        <form
          action={buttonUrl}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-5 py-3.5 rounded-full border border-gray-300 text-base outline-none focus:ring-2 focus:ring-offset-1 bg-white text-gray-900"
            style={theme?.primary ? { outlineColor: theme.primary } : undefined}
          />
          <button
            type="submit"
            style={{ backgroundColor: theme?.primary }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-medium text-base bg-violet-600 hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {buttonText}
          </button>
        </form>
        <p className="mt-4 text-sm opacity-40">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
