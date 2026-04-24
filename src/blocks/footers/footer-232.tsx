import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer232(props: BlockProps) {
  const { theme, heading = "Beacon", bodyText = "Marketing automation for growth-stage companies." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Email", url: "#" }, { label: "SMS", url: "#" }, { label: "Push", url: "#" }, { label: "In-App", url: "#" }, { label: "Journeys", url: "#" }, { label: "Segments", url: "#" }, { label: "A/B Testing", url: "#" }] },
    { title: "Solutions", links: [{ label: "E-commerce", url: "#" }, { label: "SaaS", url: "#" }, { label: "Media", url: "#" }, { label: "Fintech", url: "#" }, { label: "Travel", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Playbooks", url: "#" }, { label: "Benchmarks", url: "#" }, { label: "Blog", url: "#" }, { label: "Events", url: "#" }, { label: "Glossary", url: "#" }, { label: "Community", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Customers", url: "#" }, { label: "Careers", url: "#" }, { label: "Partners", url: "#" }, { label: "Press", url: "#" }, { label: "Contact Sales", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-fuchsia-950 py-16 text-fuchsia-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-fuchsia-200/80">{bodyText}</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-fuchsia-800 bg-fuchsia-900/50 p-3 text-center">
                <p className="text-xl font-bold text-white">4.9/5</p>
                <p className="text-[10px] text-fuchsia-300">G2 Rating</p>
              </div>
              <div className="rounded-lg border border-fuchsia-800 bg-fuchsia-900/50 p-3 text-center">
                <p className="text-xl font-bold text-white">10k+</p>
                <p className="text-[10px] text-fuchsia-300">Customers</p>
              </div>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-fuchsia-300">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-fuchsia-100 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-fuchsia-900 pt-6 text-xs text-fuchsia-300/70 sm:flex-row">
          <p>© 2026 {heading} Marketing Cloud</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
