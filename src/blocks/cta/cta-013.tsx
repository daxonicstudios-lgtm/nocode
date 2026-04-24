import type { BlockProps } from "@/blocks/types";
import { Bell } from "lucide-react";

export default function Cta013(props: BlockProps) {
  const {
    theme,
    heading = "Get notified when we launch",
    subheading = "Be the first to know. Early access members get 50% off.",
    buttonText = "Notify Me",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-md mx-auto rounded-2xl p-8 sm:p-12 text-center border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
        <Bell className="w-10 h-10 mx-auto" style={{ color: theme?.primary ?? "#f59e0b" }} />
        <h2 className="mt-5 text-2xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
        <form className="mt-6 space-y-3" action={buttonUrl} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg text-sm border focus:outline-none"
            style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background, color: theme?.foreground }}
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
