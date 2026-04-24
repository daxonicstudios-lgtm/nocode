import type { BlockProps } from "@/blocks/types";
import { Bell } from "lucide-react";

export default function Cta138(props: BlockProps) {
  const {
    theme,
    heading = "Don't Miss Our Launch",
    bodyText = "Be the first to know when we go live. Early subscribers get 50% off.",
    buttonText = "Notify Me",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-md mx-auto text-center border-2 rounded-xl p-8" style={{ borderColor: theme?.primary || "#2563eb" }}>
        <Bell className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary || "#2563eb" }} />
        <h2 className="text-xl md:text-2xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-70 mb-6">{bodyText}</p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          <input type="email" placeholder="Your best email" className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:ring-2" />
          <button type="submit" className="w-full px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
