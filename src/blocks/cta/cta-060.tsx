import type { BlockProps } from "@/blocks/types";
import { Clock, ArrowRight } from "lucide-react";

export default function Cta060(props: BlockProps) {
  const {
    theme,
    heading = "Limited time offer",
    subheading = "Get 50% off your first year when you sign up before the month ends.",
    buttonText = "Claim Discount",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-lg mx-auto rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: theme?.primary ?? "#dc2626" }}>
        <div className="px-8 py-2 text-center text-white text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: theme?.primary ?? "#dc2626" }}>
          <span className="flex items-center justify-center gap-2"><Clock className="w-3 h-3" /> Ends Soon</span>
        </div>
        <div className="p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold">{heading}</h2>
          <p className="mt-3 text-sm opacity-70">{subheading}</p>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 mt-7 px-8 py-3 rounded-lg text-white font-semibold text-sm"
            style={{ backgroundColor: theme?.primary ?? "#dc2626" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
