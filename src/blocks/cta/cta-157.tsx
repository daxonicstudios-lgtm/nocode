import type { BlockProps } from "@/blocks/types";
import { Rocket } from "lucide-react";

export default function Cta157(props: BlockProps) {
  const {
    theme,
    heading = "Funding goal: 75% complete",
    subheading = "Back our project and unlock exclusive early-bird pricing.",
    buttonText = "Back This Project",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Rocket className="w-6 h-6" />
          <span className="text-sm font-medium opacity-80">Launch Campaign</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 text-lg opacity-70">{subheading}</p>
        <div className="mt-6 bg-white/10 rounded-full h-4 overflow-hidden">
          <div className="h-full rounded-full bg-green-400" style={{ width: "75%" }} />
        </div>
        <div className="mt-2 flex justify-between text-sm opacity-60">
          <span>$75,000 raised</span>
          <span>$100,000 target</span>
        </div>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-3 rounded-lg bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#0f172a" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
