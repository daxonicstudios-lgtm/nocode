import { MessageCircle, Briefcase, Users, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer193(props: BlockProps) {
  const { theme, heading = "Civic Action", bodyText = "Mobilizing communities for change." } = props;
  const columns = [
    { title: "Take Action", links: [{ label: "Sign Petition", url: "#" }, { label: "Volunteer", url: "#" }, { label: "Find Event", url: "#" }, { label: "Donate", url: "#" }] },
    { title: "Issues", links: [{ label: "Climate", url: "#" }, { label: "Education", url: "#" }, { label: "Healthcare", url: "#" }, { label: "Housing", url: "#" }] },
    { title: "About", links: [{ label: "Our Work", url: "#" }, { label: "Team", url: "#" }, { label: "Impact Report", url: "#" }, { label: "Press", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-red-700 py-14 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-black uppercase tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-red-100">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              {[MessageCircle, Briefcase, Users, Camera].map((Icon, i) => (
                <a key={i} href="#" className="text-red-200 hover:text-white"><Icon className="h-5 w-5" /></a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase tracking-widest">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-red-100 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-red-500 pt-6 text-xs text-red-200">
          © 2026 {heading} Coalition. Paid for by supporters like you. Not authorized by any candidate.
        </div>
      </div>
    </footer>
  );
}
