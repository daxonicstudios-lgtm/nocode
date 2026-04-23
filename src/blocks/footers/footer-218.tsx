import { MessageCircle, Briefcase, Code, Play, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer218(props: BlockProps) {
  const { theme, heading = "Rampart", bodyText = "Cybersecurity built for the AI era." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Endpoint", url: "#" }, { label: "Cloud Security", url: "#" }, { label: "XDR", url: "#" }, { label: "SIEM", url: "#" }, { label: "Threat Intel", url: "#" }, { label: "Zero Trust", url: "#" }] },
    { title: "Solutions", links: [{ label: "Small Business", url: "#" }, { label: "Mid-Market", url: "#" }, { label: "Enterprise", url: "#" }, { label: "Government", url: "#" }, { label: "MSSPs", url: "#" }] },
    { title: "Resources", links: [{ label: "Research", url: "#" }, { label: "Threat Reports", url: "#" }, { label: "Blog", url: "#" }, { label: "Webinars", url: "#" }, { label: "Podcast", url: "#" }, { label: "Glossary", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Newsroom", url: "#" }, { label: "Contact Sales", url: "#" }, { label: "Partner Portal", url: "#" }, { label: "Trust Center", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="w-full bg-gray-900 py-8" style={{ backgroundColor: theme?.primary }}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="text-xl font-bold text-white">See a live demo of {heading} in action</p>
            <p className="mt-1 text-sm text-gray-300">30-minute walkthrough with a security specialist.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100">Request demo <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-700 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Security Technologies, Inc.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
