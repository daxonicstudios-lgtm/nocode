import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Discovery", description: "We learn about your business, goals, and audience." },
  { title: "Design", description: "Wireframes, mockups, and prototypes for your review." },
  { title: "Build", description: "Production-grade code, tested on real devices." },
  { title: "Launch", description: "Smooth handoff and post-launch support." },
];

export default function Steps003(props: BlockProps) {
  const { theme, heading = "Our process", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-14">{heading}</h2>
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {items.slice(0, 4).map((s, i) => (
            <div key={i} className="flex-1 flex items-center gap-3">
              <div className="flex-1 p-5 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <p className="text-xs font-semibold opacity-60">STEP 0{i + 1}</p>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm opacity-70">{s.description}</p>
              </div>
              {i < 3 && <ArrowRight className="hidden md:block w-5 h-5 opacity-30 flex-shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
