import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Cta035(props: BlockProps) {
  const {
    theme,
    heading = "Founding member access",
    subheading = "Only 100 founding memberships available at this price. 73 already claimed.",
    buttonText = "Become a Founder",
    buttonUrl = "#",
  } = props;

  const progress = 73;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-md mx-auto text-center">
        <Zap className="w-7 h-7 mx-auto mb-4" style={{ color: theme?.primary ?? "#eab308" }} />
        <h2 className="text-2xl sm:text-3xl font-black">{heading}</h2>
        <p className="mt-3 text-sm opacity-60">{subheading}</p>
        <div className="mt-6 w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: (theme?.primary ?? "#eab308") + "20" }}>
          <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, backgroundColor: theme?.primary ?? "#eab308" }} />
        </div>
        <p className="mt-2 text-xs opacity-40">{progress} of 100 claimed</p>
        <a href={buttonUrl} className="mt-6 inline-block px-8 py-3.5 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#eab308" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
