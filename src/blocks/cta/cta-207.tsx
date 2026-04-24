import type { BlockProps } from "@/blocks/types";
import { Code2, ArrowRight } from "lucide-react";

export default function Cta207(props: BlockProps) {
  const {
    theme,
    heading = "Built for developers",
    subheading = "A type-safe API with autocomplete, error handling, and zero config.",
    buttonText = "View API Reference",
    buttonUrl = "#",
    secondaryButtonText = "Try Playground",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#fafafa" }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${theme?.primary ?? "#22c55e"}20`, color: theme?.primary ?? "#22c55e" }}>
              <Code2 className="w-3 h-3" /> developer-first
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
            <p className="mt-3 opacity-60 text-sm leading-relaxed">{subheading}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={buttonUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#22c55e" }}>
                {buttonText} <ArrowRight className="w-4 h-4" />
              </a>
              <a href={secondaryButtonUrl} className="px-5 py-2.5 rounded-lg text-sm font-medium border border-white/20 hover:border-white/40">
                {secondaryButtonText}
              </a>
            </div>
          </div>
          <div className="rounded-lg p-4 font-mono text-xs leading-6" style={{ backgroundColor: "#27272a" }}>
            <span className="text-purple-400">const</span> <span className="text-blue-300">res</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">api</span>.<span className="text-green-300">query</span>{"({"}<br />
            &nbsp;&nbsp;model: <span className="text-orange-300">&quot;gpt-4&quot;</span>,<br />
            &nbsp;&nbsp;prompt: <span className="text-orange-300">&quot;Hello&quot;</span><br />
            {"});"}<br />
            <span className="text-gray-500">// =&gt; {"{"}text: &quot;Hi!&quot;{"}"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
