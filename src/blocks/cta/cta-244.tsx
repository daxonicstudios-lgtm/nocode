import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Play, FileDown } from "lucide-react";

export default function Cta244(props: BlockProps) {
  const {
    theme,
    heading = "Multiple ways to get started",
    subheading = "Pick the option that works best for you.",
    buttonText = "Sign Up Free",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 space-y-3">
          <a href={buttonUrl} className="flex items-center justify-between w-full px-6 py-4 rounded-xl text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            <span className="flex items-center gap-2">{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="flex items-center justify-between w-full px-6 py-4 rounded-xl font-medium text-sm border border-white/20">
            <span className="flex items-center gap-2"><Play className="w-4 h-4" /> {secondaryButtonText}</span>
            <ArrowRight className="w-4 h-4 opacity-50" />
          </a>
          <a href="#" className="flex items-center justify-between w-full px-6 py-4 rounded-xl font-medium text-sm border border-white/10 opacity-70 hover:opacity-100">
            <span className="flex items-center gap-2"><FileDown className="w-4 h-4" /> Download Whitepaper</span>
            <ArrowRight className="w-4 h-4 opacity-50" />
          </a>
        </div>
      </div>
    </section>
  );
}
