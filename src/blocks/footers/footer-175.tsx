import { MessageCircle, Camera, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer175(props: BlockProps) {
  const { theme, heading = "Tidepool", bodyText = "Collaborative planning for remote teams." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Tour", url: "#" }, { label: "Pricing", url: "#" }, { label: "Download", url: "#" }, { label: "Changelog", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Team", url: "#" }, { label: "Jobs", url: "#" }, { label: "Press Kit", url: "#" }] },
    { title: "Help", links: [{ label: "Support", url: "#" }, { label: "Community", url: "#" }, { label: "Contact", url: "#" }, { label: "Status", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-sky-50 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-sky-400 to-blue-600" />
              <p className="text-lg font-semibold text-sky-950">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-sky-900/70">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-sky-700">
              <a href="#" className="hover:text-sky-950"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-sky-950"><Camera className="h-5 w-5" /></a>
              <a href="#" className="hover:text-sky-950"><Briefcase className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-sky-950">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-sky-900/70 hover:text-sky-950">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-sky-200 pt-6 text-xs text-sky-800/70 sm:flex-row sm:justify-between">
          <span>© 2026 {heading}, Inc.</span>
          <span>Made remotely from 14 countries.</span>
        </div>
      </div>
    </footer>
  );
}
