import type { BlockProps } from "@/blocks/types";
import { Rocket } from "lucide-react";

export default function Cta048(props: BlockProps) {
  const {
    theme,
    heading = "Launch faster than ever",
    subheading = "From concept to live website in minutes, not months.",
    buttonText = "Start Building",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: "#1e1b4b", color: "#e0e7ff" }}>
      <div className="max-w-lg mx-auto text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: theme?.primary ?? "#818cf8" }}>
          <Rocket className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl font-black">{heading}</h2>
        <p className="mt-3 text-sm opacity-50">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-xl font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#818cf8", color: "#fff" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
