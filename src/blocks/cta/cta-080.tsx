import type { BlockProps } from "@/blocks/types";
import { Mail, ArrowRight } from "lucide-react";

export default function Cta080(props: BlockProps) {
  const {
    theme,
    heading = "Stay ahead of the curve",
    subheading = "Get weekly insights delivered straight to your inbox. No spam, unsubscribe anytime.",
    buttonText = "Subscribe",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#18181b", color: "#ffffff" }}>
      <div
        className="max-w-md mx-auto rounded-2xl p-8 text-center"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 40px rgba(0,0,0,0.3)",
        }}
      >
        <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.accent ?? "#34d399" }} />
        <h2 className="text-xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-6 w-full justify-center py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#059669", color: "#ffffff" }}>
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
