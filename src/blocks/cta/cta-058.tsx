import type { BlockProps } from "@/blocks/types";
import { Shield, ArrowRight } from "lucide-react";

export default function Cta058(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise-grade security",
    subheading = "Your data is protected with end-to-end encryption and SOC2 compliance.",
    buttonText = "Learn More",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-md mx-auto rounded-xl p-8 shadow-xl" style={{ backgroundColor: theme?.muted ?? "#f8fafc" }}>
        <Shield className="w-10 h-10" style={{ color: theme?.primary ?? "#0ea5e9" }} />
        <h2 className="mt-5 text-xl sm:text-2xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60 leading-relaxed">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold"
          style={{ color: theme?.primary ?? "#0ea5e9" }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
