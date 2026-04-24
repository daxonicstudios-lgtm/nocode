import { MessageCircle, Users, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer179(props: BlockProps) {
  const { theme, heading = "Canvas & Co.", bodyText = "A creative studio for bold brands." } = props;
  const columns = [
    { title: "Work", links: [{ label: "Case Studies", url: "#" }, { label: "Clients", url: "#" }, { label: "Process", url: "#" }, { label: "Awards", url: "#" }] },
    { title: "Services", links: [{ label: "Branding", url: "#" }, { label: "Web Design", url: "#" }, { label: "Motion", url: "#" }, { label: "Strategy", url: "#" }] },
    { title: "Studio", links: [{ label: "About", url: "#" }, { label: "Team", url: "#" }, { label: "Careers", url: "#" }, { label: "Journal", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-black py-16 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-12 font-serif text-4xl italic md:text-6xl">Let&apos;s make something.</p>
        <div className="grid grid-cols-2 gap-10 border-t border-white/20 pt-10 md:grid-cols-4">
          <div>
            <p className="text-lg font-bold">{heading}</p>
            <p className="mt-2 text-sm text-white/60">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-white/60">
              <a href="#" className="hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Users className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Camera className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase tracking-wider">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-white/60 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>© 2026 {heading}</span>
          <a href="mailto:hi@canvas.co" className="hover:text-white">hi@canvas.co</a>
        </div>
      </div>
    </footer>
  );
}
