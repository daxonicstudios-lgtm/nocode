import { MessageCircle, Camera, Play, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer155(props: BlockProps) {
  const { theme, heading = "Orbit FM", bodyText = "Podcasts that orbit the human condition." } = props;
  const columns = [
    { title: "Shows", links: [{ label: "All Podcasts", url: "#" }, { label: "Featured", url: "#" }, { label: "New Episodes", url: "#" }, { label: "Live", url: "#" }] },
    { title: "Listen", links: [{ label: "Apple", url: "#" }, { label: "Spotify", url: "#" }, { label: "Overcast", url: "#" }, { label: "RSS", url: "#" }] },
    { title: "Network", links: [{ label: "About", url: "#" }, { label: "Hosts", url: "#" }, { label: "Advertise", url: "#" }, { label: "Submit Show", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-black py-14 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" style={{ background: `linear-gradient(to right, transparent, ${theme?.primary || "#d946ef"}, transparent)` }} />
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-black tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-white/60">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="text-white/60 hover:text-fuchsia-400"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-white/60 hover:text-fuchsia-400"><Camera className="h-5 w-5" /></a>
              <a href="#" className="text-white/60 hover:text-fuchsia-400"><Play className="h-5 w-5" /></a>
              <a href="#" className="text-white/60 hover:text-fuchsia-400"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-white/80 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-xs text-white/40">© 2026 {heading} Network.</div>
      </div>
    </footer>
  );
}
