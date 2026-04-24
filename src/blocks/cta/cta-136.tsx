import type { BlockProps } from "@/blocks/types";
import { Mail } from "lucide-react";

export default function Cta136(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the Loop",
    subheading = "Get weekly tips, product updates, and exclusive offers delivered to your inbox.",
    buttonText = "Subscribe",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-lg mx-auto text-center">
        <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary || "#2563eb" }} />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-70 mb-6">{subheading}</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder="you@example.com" className="flex-1 px-4 py-3 rounded-lg border text-sm outline-none focus:ring-2" style={{ borderColor: theme?.primary || "#2563eb" }} />
          <button type="submit" className="px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
