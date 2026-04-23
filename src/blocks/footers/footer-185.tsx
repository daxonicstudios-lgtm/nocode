import { MessageCircle, Camera, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer185(props: BlockProps) {
  const { theme, heading = "Neon Arcade", bodyText = "Retro games. Modern vibes." } = props;
  const columns = [
    { title: "Play", links: [{ label: "Browse", url: "#" }, { label: "Top Charts", url: "#" }, { label: "Tournaments", url: "#" }, { label: "Leaderboard", url: "#" }] },
    { title: "Create", links: [{ label: "Studio", url: "#" }, { label: "Docs", url: "#" }, { label: "Assets", url: "#" }, { label: "Monetize", url: "#" }] },
    { title: "Help", links: [{ label: "Support", url: "#" }, { label: "Community", url: "#" }, { label: "Bug Report", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#0a0014] py-14 text-fuchsia-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-2xl font-black uppercase text-transparent">{heading}</p>
            <p className="mt-2 text-sm text-fuchsia-300/70">{bodyText}</p>
            <div className="mt-5 flex gap-2">
              {[MessageCircle, Camera, Play].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded border border-fuchsia-500/40 text-fuchsia-400 hover:border-fuchsia-400 hover:text-white"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-fuchsia-200/80 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-fuchsia-900/50 pt-6 text-center text-xs font-mono text-fuchsia-400/60">
          INSERT COIN · © 2026 {heading}
        </div>
      </div>
    </footer>
  );
}
