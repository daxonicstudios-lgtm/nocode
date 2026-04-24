import type { BlockProps } from "@/blocks/types";
import { Terminal, Copy } from "lucide-react";

export default function Cta206(props: BlockProps) {
  const {
    theme,
    heading = "Get started in seconds",
    subheading = "One command is all it takes to install and start building.",
    buttonText = "Read the Docs",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Terminal className="w-10 h-10 mx-auto mb-4 opacity-60" />
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 rounded-lg p-4 font-mono text-sm flex items-center justify-between gap-3" style={{ backgroundColor: "#1e293b" }}>
          <code className="text-green-400">$ npx create-app@latest my-project</code>
          <button className="shrink-0 opacity-50 hover:opacity-100"><Copy className="w-4 h-4" /></button>
        </div>
        <a href={buttonUrl} className="inline-block mt-8 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
