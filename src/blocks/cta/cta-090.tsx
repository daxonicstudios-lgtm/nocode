import type { BlockProps } from "@/blocks/types";
import { Heart } from "lucide-react";

export default function Cta090(props: BlockProps) {
  const {
    theme,
    heading = "Made with care for makers",
    subheading = "Built by a small team that obsesses over every detail. Try us and feel the difference.",
    buttonText = "Start for Free",
    buttonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#f43f5e";

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0f0f0f", color: "#ffffff" }} className="px-5 py-24">
      <div className="max-w-md mx-auto text-center">
        <div
          className="rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6"
          style={{ boxShadow: `0 0 24px ${primary}50`, backgroundColor: `${primary}20` }}
        >
          <Heart className="w-6 h-6" style={{ color: primary }} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 text-sm opacity-50">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-block mt-8 px-8 py-3 rounded-full font-bold text-sm text-white transition-shadow"
          style={{ backgroundColor: primary, boxShadow: `0 0 20px ${primary}60` }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
