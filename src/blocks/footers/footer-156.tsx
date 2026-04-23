import { Users, Camera, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer156(props: BlockProps) {
  const { theme, heading = "Harbor Legal", bodyText = "Trusted counsel since 1974." } = props;
  const columns = [
    { title: "Practice Areas", links: [{ label: "Corporate", url: "#" }, { label: "Litigation", url: "#" }, { label: "Real Estate", url: "#" }, { label: "Tax", url: "#" }, { label: "Family", url: "#" }] },
    { title: "Firm", links: [{ label: "Attorneys", url: "#" }, { label: "History", url: "#" }, { label: "Community", url: "#" }, { label: "Diversity", url: "#" }] },
    { title: "Clients", links: [{ label: "Client Portal", url: "#" }, { label: "Make a Payment", url: "#" }, { label: "Resources", url: "#" }, { label: "FAQ", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#0b1f3a] py-16 text-slate-200" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-white">{heading}</p>
            <p className="mt-2 text-sm text-slate-400">{bodyText}</p>
            <div className="mt-5 flex gap-4 text-slate-400">
              <a href="#" className="hover:text-white"><Users className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Camera className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Briefcase className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-base text-white">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-slate-400 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
          © 2026 {heading}, P.C. Attorney advertising. Prior results do not guarantee similar outcomes.
        </div>
      </div>
    </footer>
  );
}
