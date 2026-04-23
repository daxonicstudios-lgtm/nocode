import { MessageCircle, Code, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer163(props: BlockProps) {
  const { theme, heading = "Meridian", bodyText = "Design systems for modern teams." } = props;
  const columns = [
    { title: "Library", links: [{ label: "Components", url: "#" }, { label: "Tokens", url: "#" }, { label: "Icons", url: "#" }, { label: "Templates", url: "#" }] },
    { title: "Docs", links: [{ label: "Getting Started", url: "#" }, { label: "Principles", url: "#" }, { label: "Accessibility", url: "#" }, { label: "Releases", url: "#" }] },
    { title: "Community", links: [{ label: "Figma", url: "#" }, { label: "GitHub", url: "#" }, { label: "Discord", url: "#" }, { label: "Discussions", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-zinc-50 py-12" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium lowercase">{heading}/</p>
            <p className="mt-2 max-w-xs text-xs text-zinc-500">{bodyText}</p>
            <div className="mt-4 flex gap-3 text-zinc-400">
              <a href="#" className="hover:text-zinc-900"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-zinc-900"><Code className="h-4 w-4" /></a>
              <a href="#" className="hover:text-zinc-900"><Briefcase className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-medium lowercase text-zinc-900">{c.title.toLowerCase()}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-xs text-zinc-500 hover:text-zinc-900">{l.label.toLowerCase()}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-xs lowercase text-zinc-400">© 2026 {heading} — v4.2.1</div>
      </div>
    </footer>
  );
}
