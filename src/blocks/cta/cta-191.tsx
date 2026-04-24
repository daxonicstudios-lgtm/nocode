import type { BlockProps } from "@/blocks/types";
import { Crown } from "lucide-react";

export default function Cta191(props: BlockProps) {
  const {
    theme,
    heading = "Experience luxury, redefined",
    subheading = "Exclusive access to premium features crafted for discerning professionals.",
    buttonText = "Request Access",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: "#0a0a0a", color: "#f5f0e8" }}>
      <div className="max-w-2xl mx-auto text-center">
        <Crown className="w-8 h-8 mx-auto mb-4 text-amber-400" />
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-60">{subheading}</p>
        <a
          href={buttonUrl}
          className="mt-8 inline-block px-8 py-4 rounded-full font-semibold text-sm transition hover:opacity-90"
          style={{ backgroundColor: theme?.primary ?? "#b8860b", color: "#0a0a0a" }}
        >
          {buttonText}
        </a>
        <div className="mt-6 w-24 h-px bg-amber-400/30 mx-auto" />
      </div>
    </section>
  );
}
