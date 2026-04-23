import { MessageCircle, Briefcase, Code, Play, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer242(props: BlockProps) {
  const { theme, heading = "Tidal", bodyText = "Music discovery for the independent ear." } = props;
  const columns = [
    { title: "Listen", links: [{ label: "Browse", url: "#" }, { label: "New Releases", url: "#" }, { label: "Playlists", url: "#" }, { label: "Charts", url: "#" }, { label: "Genres", url: "#" }, { label: "Moods", url: "#" }, { label: "Podcasts", url: "#" }] },
    { title: "Artists", links: [{ label: "For Artists", url: "#" }, { label: "Analytics", url: "#" }, { label: "Royalties", url: "#" }, { label: "Submit Music", url: "#" }, { label: "Promo Tools", url: "#" }, { label: "Resources", url: "#" }] },
    { title: "Community", links: [{ label: "Blog", url: "#" }, { label: "Events", url: "#" }, { label: "Interviews", url: "#" }, { label: "Artist Stories", url: "#" }, { label: "Submissions", url: "#" }, { label: "Newsletter", url: "#" }] },
    { title: "About", links: [{ label: "Mission", url: "#" }, { label: "Team", url: "#" }, { label: "Jobs", url: "#" }, { label: "Press", url: "#" }, { label: "Legal", url: "#" }, { label: "Contact", url: "#" }, { label: "Gift Cards", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#1a0b2e] py-16 text-violet-200" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-violet-700 to-fuchsia-700 p-8" style={{ backgroundColor: theme?.primary }}>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-2xl font-bold text-white">Premium · 3 months free</p>
              <p className="mt-1 text-sm text-violet-100">Ad-free music · Offline listening · Hi-Fi audio</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-violet-900 hover:bg-violet-50">Try Premium <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-violet-300">{bodyText}</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-violet-200 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-violet-900 pt-6 text-xs text-violet-400 sm:flex-row">
          <p>© 2026 {heading} Music, Inc.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
