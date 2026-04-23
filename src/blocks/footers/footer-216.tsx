import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer216(props: BlockProps) {
  const { theme, heading = "Quanta", bodyText = "Quantum computing, accessible to every developer." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Quantum Cloud", url: "#" }, { label: "Simulator", url: "#" }, { label: "Hardware", url: "#" }, { label: "Algorithms", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Research", links: [{ label: "Publications", url: "#" }, { label: "Preprints", url: "#" }, { label: "Labs", url: "#" }, { label: "Fellows", url: "#" }, { label: "Grants", url: "#" }] },
    { title: "Developers", links: [{ label: "Docs", url: "#" }, { label: "SDK", url: "#" }, { label: "Tutorials", url: "#" }, { label: "GitHub", url: "#" }, { label: "Community", url: "#" }, { label: "Events", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Team", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Contact", url: "#" }, { label: "Legal", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#050816] py-16 text-gray-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="h-px w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500" style={{ backgroundImage: theme?.primary ? `linear-gradient(to right, ${theme.primary}, ${theme.accent ?? theme.primary})` : undefined }} />
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Follow our research</p>
            <div className="mt-2 flex gap-3">
              <a href="#" className="rounded-lg border border-gray-800 p-2 text-gray-400 hover:border-gray-600 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="rounded-lg border border-gray-800 p-2 text-gray-400 hover:border-gray-600 hover:text-white"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="rounded-lg border border-gray-800 p-2 text-gray-400 hover:border-gray-600 hover:text-white"><Code className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-gray-900 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Systems. All rights reserved.</p>
          <p>Built with qubits · San Francisco & Zurich</p>
        </div>
      </div>
    </footer>
  );
}
