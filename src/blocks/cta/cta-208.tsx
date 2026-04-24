import type { BlockProps } from "@/blocks/types";
import { TerminalSquare, Zap } from "lucide-react";

export default function Cta208(props: BlockProps) {
  const {
    theme,
    heading = "Ship faster with our CLI",
    subheading = "Deploy, test, and manage your projects from the terminal.",
    buttonText = "Install CLI",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#020617", color: theme?.foreground ?? "#f8fafc" }} className="px-5 py-20">
      <div className="max-w-xl mx-auto">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ backgroundColor: "#0f172a" }}>
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs font-mono opacity-50">terminal</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-2" style={{ backgroundColor: "#0f172a" }}>
            <p className="text-green-400">$ acme deploy --prod</p>
            <p className="text-gray-400">✓ Build complete in 4.2s</p>
            <p className="text-gray-400">✓ Deployed to production</p>
            <p className="text-cyan-400">→ https://myapp.acme.dev</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
          <a href={buttonUrl} className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            <TerminalSquare className="w-4 h-4" /> {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
