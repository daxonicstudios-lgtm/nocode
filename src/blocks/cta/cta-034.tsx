import type { BlockProps } from "@/blocks/types";
import { Flame } from "lucide-react";

export default function Cta034(props: BlockProps) {
  const {
    theme,
    heading = "Early bird pricing ends soon",
    subheading = "Lock in the lowest price we will ever offer. Only 48 hours remaining.",
    buttonText = "Get Early Bird Price",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto rounded-2xl p-8 sm:p-12 border-2 text-center" style={{ borderColor: theme?.primary ?? "#f97316" }}>
        <Flame className="w-8 h-8 mx-auto" style={{ color: theme?.primary ?? "#f97316" }} />
        <h2 className="mt-4 text-2xl sm:text-3xl font-black">{heading}</h2>
        <p className="mt-3 text-sm opacity-60">{subheading}</p>
        <div className="mt-6 inline-block px-4 py-2 rounded-full text-xs font-bold" style={{ backgroundColor: (theme?.primary ?? "#f97316") + "15", color: theme?.primary ?? "#f97316" }}>
          48:00:00 remaining
        </div>
        <div className="mt-6">
          <a href={buttonUrl} className="inline-block w-full sm:w-auto px-8 py-3.5 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#f97316" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
