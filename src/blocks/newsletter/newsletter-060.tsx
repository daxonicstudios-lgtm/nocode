import type { BlockProps } from "@/blocks/types";
import { Mail } from "lucide-react";
export default function Newsletter060(props: BlockProps) {
  const { theme, heading = "Card-style newsletter", subheading = "Join 10,000+ subscribers.", buttonText = "Join" } = props;
  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-lg mx-auto rounded-2xl p-10 text-center" style={{ backgroundColor: theme?.background ?? "#fff" }}>
        <Mail className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary }} />
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
        <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <button type="submit" className="w-full py-3 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
