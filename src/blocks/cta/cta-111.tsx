import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta111(props: BlockProps) {
  const { theme, heading = "Scale without limits", subheading = "Join over 10,000 teams already using our platform.", buttonText = "Start Free Trial", buttonUrl = "#" } = props;

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 text-lg opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white" style={{ color: theme?.primary ?? "#0f172a" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
