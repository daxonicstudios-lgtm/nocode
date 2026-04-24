import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta077(props: BlockProps) {
  const {
    theme,
    heading = "AI-powered insights",
    subheading = "Let our intelligent assistant handle the heavy lifting while you focus on growth.",
    buttonText = "Try for Free",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#1a1a2e", color: "#ffffff" }}>
      <div
        className="max-w-lg mx-auto rounded-2xl p-8 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ background: "rgba(255,255,255,0.1)" }}>
          <Sparkles className="w-6 h-6" style={{ color: theme?.accent ?? "#a78bfa" }} />
        </div>
        <h2 className="mt-5 text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 text-sm opacity-60">{subheading}</p>
        <a href={buttonUrl} className="inline-block mt-7 px-8 py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#7c3aed", color: "#ffffff" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
