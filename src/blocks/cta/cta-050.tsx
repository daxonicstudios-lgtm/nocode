import type { BlockProps } from "@/blocks/types";
import { Flame } from "lucide-react";

export default function Cta050(props: BlockProps) {
  const {
    theme,
    heading = "Stop dreaming, start shipping",
    subheading = "Your next big idea deserves a platform that moves as fast as you do.",
    buttonText = "Launch Now",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-28" style={{ backgroundColor: "#020617", color: "#f1f5f9" }}>
      <div className="max-w-xl mx-auto text-center">
        <Flame className="w-10 h-10 mx-auto mb-5" style={{ color: theme?.primary ?? "#ef4444" }} />
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight">{heading}</h2>
        <p className="mt-4 opacity-40">{subheading}</p>
        <a
          href={buttonUrl}
          className="mt-10 inline-block px-10 py-4 rounded-full font-black text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
          style={{ backgroundColor: theme?.primary ?? "#ef4444", color: "#fff" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
