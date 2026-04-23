import { MessageCircle, Code, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer167(props: BlockProps) {
  const { theme, heading = "Lumen", bodyText = "Open-source authentication you can self-host." } = props;
  const columns = [
    { title: "Docs", links: [{ label: "Quickstart", url: "#" }, { label: "Guides", url: "#" }, { label: "Reference", url: "#" }, { label: "Examples", url: "#" }] },
    { title: "Community", links: [{ label: "Discord", url: "#" }, { label: "GitHub", url: "#" }, { label: "Forums", url: "#" }, { label: "Stack Overflow", url: "#" }] },
    { title: "Company", links: [{ label: "Cloud", url: "#" }, { label: "Pricing", url: "#" }, { label: "Security", url: "#" }, { label: "Jobs", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-neutral-800 bg-neutral-950 py-12 font-mono text-neutral-400" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-base text-white">{"> "}{heading}</p>
            <p className="mt-2 text-xs leading-relaxed">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs uppercase text-emerald-400">~/{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-xs hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-xs text-neutral-600">// © 2026 {heading} — MIT License</div>
      </div>
    </footer>
  );
}
