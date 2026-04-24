import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

export default function Features365(props: BlockProps) {
  const {
    theme,
    heading = "BIG",
    subheading = "FEATURES THAT SPEAK FOR THEMSELVES",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "AUTOMATE", description: "Set it and forget it. Your workflows run themselves." },
      { title: "INTEGRATE", description: "Connect every tool in your stack seamlessly." },
      { title: "DOMINATE", description: "Outperform the competition with superior tooling." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#000" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black uppercase leading-none mb-4">{heading}</h2>
        <p className="text-xs uppercase tracking-[0.3em] mb-12 border-b-2 pb-4" style={{ borderColor: theme?.foreground || "#000" }}>{subheading}</p>
        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={i} className="border-b-2 py-6 flex items-start justify-between gap-4" style={{ borderColor: theme?.foreground || "#000" }}>
              <div>
                <h3 className="text-3xl sm:text-5xl font-black uppercase">{item.title}</h3>
                <p className="text-sm mt-2 max-w-md">{item.description}</p>
              </div>
              <ArrowUpRight size={32} strokeWidth={3} className="flex-shrink-0 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
