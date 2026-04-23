import { MessageCircle, Briefcase, Code, Play, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer248(props: BlockProps) {
  const { theme, heading = "Olympus", bodyText = "Enterprise resource planning for the global enterprise." } = props;
  const columns = [
    { title: "Products", links: [{ label: "Financial Management", url: "#" }, { label: "Supply Chain", url: "#" }, { label: "Human Capital", url: "#" }, { label: "Manufacturing", url: "#" }, { label: "Projects", url: "#" }, { label: "Analytics", url: "#" }, { label: "AI Cloud", url: "#" }] },
    { title: "Industries", links: [{ label: "Banking", url: "#" }, { label: "Healthcare", url: "#" }, { label: "Retail", url: "#" }, { label: "Manufacturing", url: "#" }, { label: "Public Sector", url: "#" }, { label: "Telecommunications", url: "#" }, { label: "Energy", url: "#" }] },
    { title: "Resources", links: [{ label: "Customer Stories", url: "#" }, { label: "Events", url: "#" }, { label: "News", url: "#" }, { label: "Podcast", url: "#" }, { label: "White Papers", url: "#" }, { label: "Training", url: "#" }, { label: "Certification", url: "#" }] },
    { title: "Services", links: [{ label: "Consulting", url: "#" }, { label: "Implementation", url: "#" }, { label: "Support", url: "#" }, { label: "Cloud Managed", url: "#" }, { label: "Partners", url: "#" }, { label: "Marketplace", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="bg-red-700 py-10" style={{ backgroundColor: theme?.primary }}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="text-2xl font-bold text-white sm:text-3xl">{heading} World Summit 2026</p>
            <p className="mt-1 text-sm text-red-100">Las Vegas · October 12-16 · Early bird pricing ends soon</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-red-700 hover:bg-red-50">Register now <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
            <p className="mt-5 text-[11px] text-gray-500">Serving 430,000+ customers in 180 countries</p>
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
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Corporation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
            <span>·</span>
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
