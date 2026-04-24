import type { BlockProps } from "@/blocks/types";
import { BellDot, ArrowRight } from "lucide-react";

export default function Cta204(props: BlockProps) {
  const {
    theme,
    heading = "3 unread notifications",
    subheading = "Your team has been busy. Catch up on the latest activity now.",
    buttonText = "View Activity",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-lg mx-auto text-center">
        <div className="relative inline-block mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${theme?.primary ?? "#ec4899"}15` }}>
            <BellDot className="w-8 h-8" style={{ color: theme?.primary ?? "#ec4899" }} />
          </div>
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs text-white flex items-center justify-center font-bold" style={{ backgroundColor: theme?.primary ?? "#ec4899" }}>3</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70">{subheading}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#ec4899" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
