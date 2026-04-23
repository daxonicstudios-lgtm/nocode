import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer172(props: BlockProps) {
  const { theme, heading = "Kairo", bodyText = "Ship faster with AI-native dev tools." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Editor", url: "#" }, { label: "Agents", url: "#" }, { label: "Terminal", url: "#" }, { label: "Enterprise", url: "#" }] },
    { title: "Solutions", links: [{ label: "Startups", url: "#" }, { label: "Teams", url: "#" }, { label: "Students", url: "#" }, { label: "Non-profits", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Changelog", url: "#" }, { label: "Discord", url: "#" }, { label: "Status", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-black py-16 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl font-bold tracking-tighter">{heading}.</p>
            <p className="mt-3 max-w-xs text-sm text-white/60">{bodyText}</p>
            <div className="mt-6 flex gap-2">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black"><Code className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-medium">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-white/60 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <span>© 2026 {heading} Labs</span>
          <span>SOC2 · GDPR · HIPAA</span>
        </div>
      </div>
    </footer>
  );
}
