import { MessageCircle, Code, Briefcase, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer200(props: BlockProps) {
  const { theme, heading = "Signal", bodyText = "Product analytics that respect your users." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Analytics", url: "#" }, { label: "Funnels", url: "#" }, { label: "Retention", url: "#" }, { label: "Heatmaps", url: "#" }] },
    { title: "Use Cases", links: [{ label: "Marketing", url: "#" }, { label: "Product", url: "#" }, { label: "Engineering", url: "#" }, { label: "Leadership", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Academy", url: "#" }, { label: "Templates", url: "#" }, { label: "Changelog", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-gray-200 pb-12 md:flex-row md:items-end">
          <div>
            <p className="max-w-xl text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Understand what users actually do.</p>
          </div>
          <a href="#" className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700" style={{ backgroundColor: theme?.primary }}>Get started free</a>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-gray-900" />
              <p className="text-base font-semibold text-gray-900">{heading}</p>
            </div>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-gray-500">
              <a href="#" className="hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Code className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Camera className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-gray-900">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 text-xs text-gray-500">© 2026 {heading} Inc. Privacy-first by default.</div>
      </div>
    </footer>
  );
}
