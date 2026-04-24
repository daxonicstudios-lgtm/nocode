import type { BlockProps } from "@/blocks/types";
import { MoveRight } from "lucide-react";

export default function Cta247(props: BlockProps) {
  const {
    theme,
    heading = "Transform how you work",
    subheading = "Experience the future of productivity. No credit card needed.",
    buttonText = "Try It Now",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#fafafa" }} className="px-5 py-20">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-50">{subheading}</p>
        <a href={buttonUrl} className="group relative inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full text-white font-medium overflow-hidden transition-all duration-500 hover:pr-12" style={{ backgroundColor: theme?.primary ?? "#ec4899" }}>
          <span className="relative z-10">{buttonText}</span>
          <MoveRight className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1" />
          <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ backgroundColor: theme?.accent ?? "#db2777" }} />
        </a>
      </div>
    </section>
  );
}
