import { MessageCircle, Code, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer157(props: BlockProps) {
  const { theme, heading = "Quanta Labs", bodyText = "Research-grade AI for builders." } = props;
  const columns = [
    { title: "Products", links: [{ label: "Quanta API", url: "#" }, { label: "Studio", url: "#" }, { label: "Agents", url: "#" }, { label: "Enterprise", url: "#" }] },
    { title: "Research", links: [{ label: "Papers", url: "#" }, { label: "Benchmarks", url: "#" }, { label: "Open Models", url: "#" }, { label: "Datasets", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Policy", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-neutral-50 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-neutral-200 pb-8 sm:flex-row sm:items-center">
          <p className="max-w-md text-lg text-neutral-900">Building AI that makes people more capable.</p>
          <a href="#" className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700" style={{ backgroundColor: theme?.primary }}>Start building</a>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-base font-semibold text-neutral-900">{heading}</p>
            <p className="mt-2 text-sm text-neutral-600">{bodyText}</p>
            <div className="mt-4 flex gap-3 text-neutral-500">
              <a href="#" className="hover:text-neutral-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-neutral-900"><Code className="h-5 w-5" /></a>
              <a href="#" className="hover:text-neutral-900"><Briefcase className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-neutral-900">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-neutral-600 hover:text-neutral-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-xs text-neutral-500">© 2026 {heading}. All rights reserved.</div>
      </div>
    </footer>
  );
}
