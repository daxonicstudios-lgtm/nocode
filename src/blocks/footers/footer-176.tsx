import { MessageCircle, Code, Briefcase, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer176(props: BlockProps) {
  const { theme, heading = "Ferris", bodyText = "The Rust toolkit for web scale." } = props;
  const columns = [
    { title: "Framework", links: [{ label: "Core", url: "#" }, { label: "CLI", url: "#" }, { label: "Plugins", url: "#" }, { label: "Templates", url: "#" }] },
    { title: "Learn", links: [{ label: "Docs", url: "#" }, { label: "Examples", url: "#" }, { label: "Tutorials", url: "#" }, { label: "Book", url: "#" }] },
    { title: "Community", links: [{ label: "GitHub", url: "#" }, { label: "Discord", url: "#" }, { label: "RFC", url: "#" }, { label: "Sponsor", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-orange-200 bg-orange-50/50 py-12" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-lg font-bold text-orange-950">🦀 {heading}</p>
            <p className="mt-2 text-sm text-orange-900/70">{bodyText}</p>
            <div className="mt-4 flex gap-3 text-orange-700">
              <a href="#" className="hover:text-orange-950"><Code className="h-5 w-5" /></a>
              <a href="#" className="hover:text-orange-950"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-orange-950"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-orange-950"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-sm text-orange-950">{c.title.toLowerCase()}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="font-mono text-xs text-orange-800/70 hover:text-orange-950">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center font-mono text-xs text-orange-800/60">
          // © 2026 {heading} Project — Apache 2.0 / MIT
        </div>
      </div>
    </footer>
  );
}
