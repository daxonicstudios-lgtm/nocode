import type { BlockProps } from "@/blocks/types";
import { Mail } from "lucide-react";

export default function Cta011(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "Get weekly tips, product updates, and exclusive offers delivered to your inbox.",
    buttonText = "Subscribe",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto text-center">
        <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary ?? "#2563eb" }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 text-sm opacity-60">{subheading}</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action={buttonUrl} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-2"
            style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff", color: theme?.foreground }}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg text-white font-semibold text-sm shrink-0 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
