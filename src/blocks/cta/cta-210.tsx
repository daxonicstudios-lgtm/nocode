import type { BlockProps } from "@/blocks/types";
import { FileCode, ChevronRight } from "lucide-react";

export default function Cta210(props: BlockProps) {
  const {
    theme,
    heading = "Integrate in under 10 lines",
    subheading = "Our SDK handles auth, caching, and retries out of the box.",
    buttonText = "Get API Key",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#fafafa" }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-5 gap-8 items-center">
          <div className="sm:col-span-3 rounded-lg border border-white/10 overflow-hidden">
            <div className="px-4 py-2 flex items-center gap-2 border-b border-white/10 text-xs" style={{ backgroundColor: "#171717" }}>
              <FileCode className="w-3.5 h-3.5 opacity-50" />
              <span className="opacity-50">app.ts</span>
            </div>
            <pre className="p-4 text-xs sm:text-sm font-mono leading-6 overflow-x-auto" style={{ backgroundColor: "#171717" }}>
              <span className="text-purple-400">import</span> {"{ Acme }"} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;acme-sdk&apos;</span>{"\n\n"}
              <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-300">Acme</span>{"()\n"}
              <span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> client.<span className="text-blue-300">fetch</span>(<span className="text-green-400">&apos;/users&apos;</span>)
            </pre>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="mt-3 text-sm opacity-60">{subheading}</p>
            <a href={buttonUrl} className="inline-flex items-center gap-1 mt-5 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}>
              {buttonText} <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
