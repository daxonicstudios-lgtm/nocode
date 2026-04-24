import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta014(props: BlockProps) {
  const {
    theme,
    heading = "Your weekly dose of design inspiration",
    subheading = "Curated resources, tutorials, and trends — straight to your inbox every Friday.",
    buttonText = "Subscribe Free",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">{heading}</h2>
          <p className="mt-3 text-sm opacity-60">{subheading}</p>
        </div>
        <form className="space-y-3" action={buttonUrl} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full px-4 py-3.5 rounded-lg text-sm border focus:outline-none focus:ring-2"
            style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background, color: theme?.foreground }}
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}
          >
            {buttonText} <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs opacity-40 text-center">We respect your privacy. Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
  );
}
