import { MessageCircle, Briefcase, Code, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer239(props: BlockProps) {
  const { theme, heading = "Arcadia", bodyText = "Game engine and tools used by studios worldwide." } = props;
  const columns = [
    { title: "Engine", links: [{ label: "Download", url: "#" }, { label: "Features", url: "#" }, { label: "Roadmap", url: "#" }, { label: "Learn", url: "#" }, { label: "Beta Program", url: "#" }, { label: "Source Code", url: "#" }] },
    { title: "Marketplace", links: [{ label: "Assets", url: "#" }, { label: "Plugins", url: "#" }, { label: "Templates", url: "#" }, { label: "Sounds", url: "#" }, { label: "3D Models", url: "#" }, { label: "Sell on Marketplace", url: "#" }] },
    { title: "Community", links: [{ label: "Forums", url: "#" }, { label: "Discord", url: "#" }, { label: "Showcase", url: "#" }, { label: "Events", url: "#" }, { label: "Game Jams", url: "#" }, { label: "Student Program", url: "#" }, { label: "Ambassadors", url: "#" }] },
    { title: "Studio", links: [{ label: "About", url: "#" }, { label: "Blog", url: "#" }, { label: "Careers", url: "#" }, { label: "Press Kit", url: "#" }, { label: "Partners", url: "#" }, { label: "Contact", url: "#" }, { label: "Legal", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-black py-16 text-gray-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl font-black uppercase tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
            <div className="mt-5 rounded-xl border border-gray-800 bg-gray-900 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Version 12.4</p>
              <p className="mt-1 text-sm font-semibold text-white">Available now</p>
              <a href="#" className="mt-2 inline-block rounded-md bg-white px-3 py-1 text-xs font-bold text-black hover:bg-gray-100">Download</a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-gray-900 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Interactive · Powering the next generation of games</p>
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
