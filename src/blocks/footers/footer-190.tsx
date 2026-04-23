import { MessageCircle, Code, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer190(props: BlockProps) {
  const { theme, heading = "Pathway", bodyText = "Career tools for junior engineers." } = props;
  const columns = [
    { title: "Practice", links: [{ label: "Problems", url: "#" }, { label: "Mock Interviews", url: "#" }, { label: "System Design", url: "#" }, { label: "Behavioral", url: "#" }] },
    { title: "Jobs", links: [{ label: "Openings", url: "#" }, { label: "Companies", url: "#" }, { label: "Salaries", url: "#" }, { label: "Referrals", url: "#" }] },
    { title: "Community", links: [{ label: "Discord", url: "#" }, { label: "Study Groups", url: "#" }, { label: "Blog", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-indigo-50 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold text-indigo-950">{heading} →</p>
            <p className="mt-2 text-sm text-indigo-900/70">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-indigo-700">
              <a href="#" className="hover:text-indigo-950"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-950"><Code className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-950"><Briefcase className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-indigo-950">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-indigo-900/70 hover:text-indigo-950">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-indigo-200 pt-6 text-xs text-indigo-800/70 sm:flex-row sm:justify-between">
          <span>© 2026 {heading}, Inc.</span>
          <span>Built for every dev, everywhere.</span>
        </div>
      </div>
    </footer>
  );
}
