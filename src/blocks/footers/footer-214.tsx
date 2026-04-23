import { MessageCircle, Briefcase, Code, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer214(props: BlockProps) {
  const { theme, heading = "Cobalt", bodyText = "Developer tools for the cloud-native era." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Runtime", url: "#" }, { label: "Deployments", url: "#" }, { label: "Edge Functions", url: "#" }, { label: "Preview Builds", url: "#" }, { label: "Analytics", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Developers", links: [{ label: "Docs", url: "#" }, { label: "CLI", url: "#" }, { label: "Templates", url: "#" }, { label: "Examples", url: "#" }, { label: "Guides", url: "#" }, { label: "Changelog", url: "#" }, { label: "Status", url: "#" }] },
    { title: "Community", links: [{ label: "Discord", url: "#" }, { label: "GitHub", url: "#" }, { label: "Forum", url: "#" }, { label: "Showcase", url: "#" }, { label: "Ambassadors", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Blog", url: "#" }, { label: "Customers", url: "#" }, { label: "Careers", url: "#" }, { label: "Legal", url: "#" }, { label: "Security", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#0a0a0a] py-16 text-gray-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-xl font-bold tracking-tight text-white">{heading}.dev</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
            <form className="mt-5">
              <label className="text-xs font-semibold text-gray-400">Get product updates</label>
              <div className="mt-2 flex gap-2">
                <input type="email" placeholder="you@company.com" className="min-w-0 flex-1 rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-gray-600" />
                <button type="submit" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"><Mail className="h-4 w-4" /></button>
              </div>
            </form>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-gray-900 pt-6 text-xs text-gray-500 sm:flex-row">
          <p className="font-mono">© 2026 {heading}.dev</p>
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
