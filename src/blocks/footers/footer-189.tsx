import { MessageCircle, Camera, Briefcase, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer189(props: BlockProps) {
  const { theme, heading = "Momentum", bodyText = "Training programs for endurance athletes." } = props;
  const columns = [
    { title: "Train", links: [{ label: "Plans", url: "#" }, { label: "Coaches", url: "#" }, { label: "Camps", url: "#" }, { label: "Racing", url: "#" }] },
    { title: "Learn", links: [{ label: "Articles", url: "#" }, { label: "Videos", url: "#" }, { label: "Podcast", url: "#" }, { label: "Studies", url: "#" }] },
    { title: "Account", links: [{ label: "Login", url: "#" }, { label: "Membership", url: "#" }, { label: "App", url: "#" }, { label: "Help", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-zinc-900 py-14 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold uppercase tracking-wider">{heading}</p>
            <p className="mt-2 text-sm text-zinc-400">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-red-500"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-red-500"><Camera className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-red-500"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-red-500"><Play className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase tracking-widest text-red-500" style={{ color: theme?.primary }}>{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-zinc-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-6 text-xs text-zinc-500">© 2026 {heading} Performance Labs</div>
      </div>
    </footer>
  );
}
