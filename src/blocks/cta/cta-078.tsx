import type { BlockProps } from "@/blocks/types";
import { Lock, ArrowRight } from "lucide-react";

export default function Cta078(props: BlockProps) {
  const {
    theme,
    heading = "Your privacy, our priority",
    subheading = "Zero-knowledge encryption ensures only you can access your data.",
    buttonText = "Learn About Security",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: "#ffffff" }}>
      <div
        className="max-w-xl mx-auto rounded-3xl p-10 flex flex-col md:flex-row items-center gap-6"
        style={{
          background: "linear-gradient(to bottom right, rgba(255,255,255,0.07), rgba(255,255,255,0.01))",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
          <Lock className="w-7 h-7 opacity-80" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
          <a href={buttonUrl} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold" style={{ color: theme?.accent ?? "#38bdf8" }}>
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
