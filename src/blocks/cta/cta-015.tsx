import type { BlockProps } from "@/blocks/types";
import { Rocket } from "lucide-react";

export default function Cta015(props: BlockProps) {
  const {
    theme,
    heading = "Ready for early access?",
    subheading = "Drop your email and we will send you an invite within 24 hours.",
    buttonText = "Request Access",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#4f46e5", color: "#fff" }}>
      <div className="max-w-xl mx-auto text-center">
        <Rocket className="w-8 h-8 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl sm:text-4xl font-black">{heading}</h2>
        <p className="mt-3 text-sm opacity-70">{subheading}</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action={buttonUrl} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 px-4 py-3.5 rounded-lg text-sm text-gray-900 bg-white focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3.5 rounded-lg bg-white font-bold text-sm shrink-0 hover:bg-gray-100 transition-colors"
            style={{ color: theme?.primary ?? "#4f46e5" }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
