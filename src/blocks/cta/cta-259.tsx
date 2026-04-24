import type { BlockProps } from "@/blocks/types";
import { Rocket } from "lucide-react";

export default function Cta259(props: BlockProps) {
  const {
    theme,
    heading = "Launch Something Great",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: theme?.primary ?? "#059669" }}>
      <div className="absolute top-0 left-0 w-full h-16" style={{ backgroundColor: theme?.background ?? "#ffffff", clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
      <div className="relative px-4 pt-24 pb-16 text-center text-white">
        <Rocket className="w-10 h-10 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <a href={buttonUrl} className="mt-8 inline-block px-10 py-4 bg-white rounded-full font-bold text-sm" style={{ color: theme?.primary ?? "#059669" }}>
          {buttonText}
        </a>
      </div>
      <div className="w-full h-16" style={{ backgroundColor: theme?.background ?? "#ffffff", clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }} />
    </section>
  );
}
