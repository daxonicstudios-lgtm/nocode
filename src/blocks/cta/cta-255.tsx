import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta255(props: BlockProps) {
  const {
    theme,
    heading = "Ready to Transform?",
    subheading = "Join the revolution. No credit card required.",
    buttonText = "Sign Up Free",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.background ?? "#e4e9f0", color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-md mx-auto text-center">
        <div
          className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ boxShadow: "8px 8px 16px #c0c5cc, -8px -8px 16px #ffffff" }}
        >
          <Sparkles className="w-8 h-8" style={{ color: theme?.primary ?? "#8b5cf6" }} />
        </div>
        <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
        <div className="mt-8">
          <a
            href={buttonUrl}
            className="inline-block px-10 py-4 rounded-full text-white font-bold text-sm tracking-wide"
            style={{ backgroundColor: theme?.primary ?? "#8b5cf6", boxShadow: "6px 6px 12px #c0c5cc" }}
          >
            {buttonText}
          </a>
        </div>
        <p className="mt-4 text-xs opacity-40">Free forever. Upgrade anytime.</p>
      </div>
    </section>
  );
}
