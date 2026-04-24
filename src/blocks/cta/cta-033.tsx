import type { BlockProps } from "@/blocks/types";
import { Timer } from "lucide-react";

export default function Cta033(props: BlockProps) {
  const {
    theme,
    heading = "Flash sale: 60% off everything",
    subheading = "This deal expires at midnight. Do not miss your chance.",
    buttonText = "Shop Now",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#7c3aed", color: "#fff" }}>
      <div className="max-w-xl mx-auto text-center">
        <Timer className="w-10 h-10 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl sm:text-4xl font-black">{heading}</h2>
        <p className="mt-3 opacity-80">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-full bg-white font-bold text-sm hover:bg-gray-100 transition-colors" style={{ color: theme?.primary ?? "#7c3aed" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
