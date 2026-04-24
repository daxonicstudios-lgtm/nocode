import type { BlockProps } from "@/blocks/types";
import { BellRing, X } from "lucide-react";

export default function Cta202(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "Subscribe to instant alerts and never fall behind.",
    buttonText = "Subscribe Now",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-xl mx-auto">
        <div className="rounded-xl border p-6 sm:p-8 relative" style={{ borderColor: theme?.border ?? "#e5e7eb", backgroundColor: theme?.muted ?? "#f9fafb" }}>
          <button className="absolute top-4 right-4 opacity-40 hover:opacity-70"><X className="w-4 h-4" /></button>
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#f59e0b", color: "#fff" }}>
              <BellRing className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{heading}</h3>
              <p className="mt-1 text-sm opacity-70">{subheading}</p>
              <a href={buttonUrl} className="inline-block mt-4 px-5 py-2 rounded-md text-sm text-white font-medium" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
