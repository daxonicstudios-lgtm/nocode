import type { BlockProps } from "@/blocks/types";
import { Terminal, Eye, Lock, Flame, Crosshair, Wrench } from "lucide-react";

const icons = [Terminal, Eye, Lock, Flame, Crosshair, Wrench];

export default function Features043(props: BlockProps) {
  const {
    theme,
    heading = "NO FLUFF. JUST FEATURES.",
    subheading = "RAW TOOLS FOR SERIOUS BUILDERS",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "CLI FIRST", description: "Full control from your terminal. No GUI required." },
      { title: "TOTAL VISIBILITY", description: "See every request, every log, every byte in real time." },
      { title: "ZERO TRUST", description: "Every call authenticated. No exceptions. No shortcuts." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#fffbe6", color: theme?.foreground ?? "#111" }} className="py-16 px-4 sm:px-8 lg:py-24">
      <div className="max-w-5xl mx-auto mb-12">
        <p className="text-xs font-bold tracking-[0.3em] mb-2 uppercase" style={{ color: theme?.primary ?? "#e11d48" }}>{subheading}</p>
        <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight">{heading}</h2>
        {bodyText && <p className="mt-4 text-base max-w-xl font-mono">{bodyText}</p>}
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-0">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="border-4 border-current p-6 -mt-1 -ml-1">
              <Icon className="w-8 h-8 mb-4" style={{ color: theme?.primary ?? "#e11d48" }} />
              <h3 className="text-lg font-black uppercase tracking-wide mb-2">{item.title}</h3>
              <p className="text-sm font-mono leading-relaxed opacity-80">{item.description}</p>
            </div>
          );
        })}
      </div>
      {buttonText && (
        <div className="max-w-5xl mx-auto mt-8">
          <a href={buttonUrl} className="inline-block px-8 py-3 border-4 border-current font-black uppercase text-sm tracking-widest hover:invert transition-all">{buttonText}</a>
        </div>
      )}
    </section>
  );
}
