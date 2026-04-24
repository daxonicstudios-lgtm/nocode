import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta056(props: BlockProps) {
  const {
    theme,
    heading = "Ready to grow your business?",
    subheading = "Join thousands of entrepreneurs using our platform to reach new customers.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto rounded-2xl border p-8 sm:p-12 text-center shadow-sm" style={{ borderColor: theme?.secondary ?? "#e2e8f0" }}>
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 text-sm opacity-70">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-lg text-white font-medium text-sm"
          style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
